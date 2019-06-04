
---
title: 'The source code of the automatic watering device with Intel Edison/自动浇花系统源码'
permlink: the-source-code-of-the-automatic-watering-device-with-intel-edison
catalog: true
toc_nav_num: true
toc: true
date: 2016-12-21 07:42:12
categories:
- diy
tags:
- diy
- cn
- iot
- edison
thumbnail: http://www.intel.com/content/dam/www/public/us/en/images/photography-consumer/rwd/edison-board-front-focus-rwd.jpg/jcr:content/renditions/intel.web.368.207.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](http://www.intel.com/content/dam/www/public/us/en/images/photography-consumer/rwd/edison-board-front-focus-rwd.jpg/jcr:content/renditions/intel.web.368.207.jpg)

Hi All,
I would like share the source code of the automatic watering device.

将之前弄的自动浇花系统源码分享给大家。
代码写的很乱，见笑啦。
为了方便大家阅读，我加上了一些简单的注释，仅供参考。

# water.ino
```
#include <Wire.h>

#include <SPI.h>
#include <WiFi.h>

#include <TimerOne.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

const int colorR = 0x00; //0xff;
const int colorG = 0x00;
const int colorB = 0xff;

const int relayPin =  8;

volatile int timer_count = 0;   // 定时器中断次数，每次0.1秒

#define humidity_sensor A0      // 湿度传感器接口
#define temperature_sensor A1   // 温度传感器接口
#define pin_buzzer      7       // 蜂鸣器接口
#define use_buzzer          true    // 是否启动蜂鸣器

#define interval 20             // 定时间隔，以秒为单位
#define water_pump_switch 8     // 控制水泵开关的接口，接继电器 (继电器高电平连通，低电平断开）
#define humidity_threshold 200  // 土壤湿度阈值，低于此值，则土壤偏干，需要灌溉
#define water_pump_duration 6   // 控制水泵灌溉时间，根据水泵水量确定（时间不宜过长，以免水溢出）

// Wifi 设置
char ssid[] = "xxxxx";           // SSID
char pass[] = "xxxxx";       // 无线密码 (use for WPA, or use as key for WEP)
int keyIndex = 0;                 // your network key Index number (needed only for WEP)

int status = WL_IDLE_STATUS;         
//IPAddress server(74,125,232,128);  // numeric IP for Google (no DNS)
char server[] = "iot.xxxxxx.com";    // name address for Google (using DNS)

// Initialize the Ethernet client library
// with the IP address and port of the server 
// that you want to connect to (port 80 is default for HTTP):
WiFiClient client;

// 枚举 COLOR 类型定义
enum COLOR {COLOR_BLACK, COLOR_BLUE, COLOR_GREEN, COLOR_CYAN, COLOR_RED, COLOR_PINK, COLOR_YELLOW, COLOR_WHITE};


///////////////////////////////////////////////////////
//  名称：setup()
//  作用：程序设置
//  参数：无
//  返回：无
///////////////////////////////////////////////////////
void setup()
{
  // 设置串口，用于调试
  Serial.begin(9600);

  // 设置水泵开关接口，默认关闭
  pinMode(water_pump_switch, OUTPUT);
  digitalWrite(water_pump_switch, LOW);

  pinMode(pin_buzzer, OUTPUT);

  // 初始化LCD，设置背光颜色
  lcd.begin(16, 2);
  //lcd.setRGB(colorR, colorG, colorB);
  LCD_SET_COLOR(COLOR_GREEN);

  connect_wifi();

  // 设置定时器中断触发间隔，以及定时器中断处理函数 （定时器不支持超长时间间隔，所以设置为0.1秒，通过累计触发，实现长时间间隔定时）
  Timer1.initialize(100000);  // set a timer of length 100000 microseconds (or 0.1 sec - or 10Hz => the led will blink 5 times, 5 cycles of on-and-off, per second)
  Timer1.attachInterrupt(timerIsr); // attach the service routine here

  // 显示系统名称
  lcd.print("  Auto Watering");

  // 第一次强制检查，以便更新屏幕显示
  check_sensor(true);
}

///////////////////////////////////////////////////////
//  名称：loop()
//  作用：程序主循环
//  参数：无
//  返回：无
///////////////////////////////////////////////////////
void loop()
{
  // 进入空闲状态，等待定时事件发生
  idle();

  // 更新Title显示
  title();

  // 检查传感器
  check_sensor(false);

  //get_respond();
}


//*****************************************************
//             以下为子函数
//*****************************************************


///////////////////////////////////////////////////////
//  名称：timerIsr()
//  作用：定时器中断处理函数
//  参数：无
//  返回：无
///////////////////////////////////////////////////////
void timerIsr() {
  // 更新定时器中断计数
  timer_count++;
}

void timer_rst_counter()
{
  timer_count = 0;
}

///////////////////////////////////////////////////////
//  名称：timer_check_delay
//  作用：检查延时功能
//  参数：
//        long seconds 延时时间间隔（秒）
//  返回：
//        true  大于延时时间间隔
//        false 小于延时时间间隔
//  说明：无
///////////////////////////////////////////////////////
bool timer_check_delay(long seconds)
{
  if (timer_count >= seconds * 10)
    return true;

  return false;
}

///////////////////////////////////////////////////////
//  名称：buzzer
//  作用：蜂鸣器功能
//  参数：
//        bool on_off （开关：true 开启，false 关闭）
//  返回：无
//  说明：可以通过use_buzzer 控制是否启用蜂鸣器功能
///////////////////////////////////////////////////////
void buzzer(bool on_off)
{
  if(!use_buzzer)
      return;
  digitalWrite(pin_buzzer, on_off?HIGH:LOW);
}

///////////////////////////////////////////////////////
//  名称：LCD_SET_COLOR
//  作用：设置背光颜色
//  参数：
//        COLOR color 背光颜色
//  返回：无
///////////////////////////////////////////////////////
void LCD_SET_COLOR(COLOR color) {

  byte r, g, b;
  r = bitRead(color, 2);
  g = bitRead(color, 1);
  b = bitRead(color, 0);

  r = r * 0xFF;
  g = g * 0xFF;
  b = b * 0xFF;

  lcd.setRGB(r, g, b);
}


///////////////////////////////////////////////////////
//  名称：idle()
//  作用：在LCD右下角显示IDLE...信息，每秒显示一个点
//  参数：无
//  返回：无
///////////////////////////////////////////////////////
void idle()
{
  lcd.setCursor(9, 1);
  lcd.print("IDLE");

  int dot = millis() / 1000 % 4;

  lcd.setCursor(13, 1);
  switch (dot)
  {
    case 0:
      lcd.print("   ");   break;
    case 1:
      lcd.print(".  ");   break;
    case 2:
      lcd.print(".. ");   break;
    case 3:
      lcd.print("...");   break;
  }
}


///////////////////////////////////////////////////////
//  名称：working()
//  作用：在LCD右下角显示WORK...信息，每秒显示一个点
//  参数：无
//  返回：无
///////////////////////////////////////////////////////
void working()
{
  lcd.setCursor(9, 1);
  lcd.print("WORK");

  int dot = millis() / 1000 % 4;

  lcd.setCursor(13, 1);
  switch (dot)
  {
    case 0:
      lcd.print("   ");  break;
    case 1:
      lcd.print(".  ");  break;
    case 2:
      lcd.print(".. ");  break;
    case 3:
      lcd.print("...");  break;
  }

}

///////////////////////////////////////////////////////
//  名称：title()
//  作用：在LCD右下角显示WORK...信息，每秒显示一个点
//  参数：无
//  返回：无
///////////////////////////////////////////////////////
long s = 0;
void title()
{
  char buf[16];
  sprintf(buf, "TEMP:%.1f", get_temperature());
  long s1 = millis() / 1000;
  if (s1 != s) {
    s = s1;

    if (s%2 == 0){
        show_title("Auto Watering", 2);
    }
    else{
      show_title(buf, 2);
    }    
      
  }
}

///////////////////////////////////////////////////////
//  名称：show_title
//  作用：在1602第一行显示标题
//  参数：
//        char *str   标题文本内容 
//        int space   标题前空格数
//  返回：无
///////////////////////////////////////////////////////
void show_title(char *str, int space)
{
   // 清空第一行
   lcd.setCursor(0, 0);
   lcd.print("                ");

   // 显示内容（越过之前空格）
   lcd.setCursor(space, 0);
   lcd.print(str);
}


///////////////////////////////////////////////////////
//  名称：get_temperature
//  作用：获取温度
//  参数：无
//  返回：
//        温度值 float 类型
///////////////////////////////////////////////////////
float get_temperature()
{
  // Define the B-value of the thermistor.
  // This value is a property of the thermistor used in the Grove - Temperature Sensor,
  // and used to convert from the analog value it measures and a temperature value.
  const int B = 3975;

  int val = analogRead(temperature_sensor);

  // Determine the current resistance of the thermistor based on the sensor value.
  float resistance = (float)(1023 - val) * 10000 / val;

  // Calculate the temperature based on the resistance value.
  float temperature = 1 / (log(resistance / 10000) / B + 1 / 298.15) - 273.15;

  return temperature;
}

///////////////////////////////////////////////////////
//  名称：blink_delay
//  作用：延时指定的时间间隔，同时闪烁屏幕，并显示工作信息
//  参数：
//        int s 延时时间间隔，单位秒
//  返回：无
///////////////////////////////////////////////////////
void blink_delay(int s)
{
  long start = millis();

  // 加>= start 防止millis()溢出
  while ( ((millis() - start) < 1000 * s ) && millis() >= start) {

    // 显示工作信息
    working();

    // 延时0.1秒
    delay(100);

    // 交替更新LCD背光
    LCD_SET_COLOR(COLOR(millis() / 1000 % 7 + 1));
  }
}


///////////////////////////////////////////////////////
//  名称：check_sensor
//  作用：在指定的时间间隔内读取湿度传感器信息
//        判断土壤干燥程度，如果干燥，执行灌溉
//  参数：
//        boolean b_force 是否强制检查
//  返回：无
///////////////////////////////////////////////////////
void check_sensor(boolean b_force) {

  // Serial.print(timer_count);

  // 达到定时时间间隔，读取传感器 0.1秒/count
  // if (timer_count >= interval * 10 || b_force)  {
  if (timer_check_delay(interval) || b_force)  {

    // 重置定时器计数
    // timer_count = 0;
    timer_rst_counter();

    // 读取土壤湿度传感器
    int humidity = analogRead(humidity_sensor);

    // 更新湿度显示
    update_humidity(humidity);
    //Serial.println("AAAA");

    // 更新温湿度以及状态信息至网络
    char info[256]; //="/water.php?h=0.2&t=28.2&s=1";
    sprintf(info, "/water.php?h=%d&t=%f&s=%d", humidity, get_temperature(), (humidity <= humidity_threshold)?1:0);
    Serial.println(info);
    
    update_info(server, info);
    get_respond();
    
    // 土壤干燥，开始灌溉
    if (humidity <= humidity_threshold) {
      //Serial.println("BBBB");

      // 开启蜂鸣器
      buzzer(true);

      show_title("Watering...", 4);
      LCD_SET_COLOR(COLOR_RED);
      water(water_pump_duration);

      // 强制调用，更新湿度信息，如果土壤干燥，则继续浇灌
      check_sensor(true);
    }

    // 关闭蜂鸣器
    buzzer(false);
    LCD_SET_COLOR(COLOR_GREEN);
    //water_pump_off();
  }

  // 显示一些其它信息？
}


///////////////////////////////////////////////////////
//  名称：water
//  作用：灌溉（浇水）指定时长后关闭
//  参数：
//        int duration 灌溉时长，单位秒
//  返回：无
///////////////////////////////////////////////////////
void water(int duration) {

  // 开启水泵
  water_pump_on();

  // 持续浇水(已秒为单位），并闪烁屏幕提示用户，显示Work...
  //delay(1000* duration);
  blink_delay(duration);

  // 关闭水泵
  water_pump_off();

  // To do: 更新操作显示
}


///////////////////////////////////////////////////////
//  名称：water_pump_on
//  作用：开启水泵
//  参数：无
//  返回：无
///////////////////////////////////////////////////////
void water_pump_on() {
  digitalWrite(water_pump_switch, HIGH);
}



///////////////////////////////////////////////////////
//  名称：water_pump_off
//  作用：关闭水泵
//  参数：无
//  返回：无
///////////////////////////////////////////////////////
void water_pump_off() {
  digitalWrite(water_pump_switch, LOW);
}




///////////////////////////////////////////////////////
//  名称：update_humidity
//  作用：更新湿度显示
//  参数：
//        int humidity 湿度
//  返回：无
///////////////////////////////////////////////////////
void update_humidity(int humidity) {
  char buf[20];
  sprintf(buf, "Val:%04d", humidity);

  lcd.setCursor(0, 1);
  lcd.print(buf);
}



int num_len(int num) {
  if (num == 0)
    return 1;

  int len = 0;
  while (num > 0) {
    num = num / 10;
    len++;
  }
  return len;
}

void printWifiStatus() {
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your WiFi shield's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
}

void connect_wifi() {

  // check for the presence of the shield:
  if (WiFi.status() == WL_NO_SHIELD) {
    Serial.println("WiFi shield not present"); 
    // don't continue:
    while(true);
  } 

  String fv = WiFi.firmwareVersion();
  if( fv != "1.1.0" )
    Serial.println("Please upgrade the firmware");
  
  // attempt to connect to Wifi network:
  while (status != WL_CONNECTED) { 
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network. Change this line if using open or WEP network:    
    status = WiFi.begin(ssid, pass);
    
    // wait 10 seconds for connection:
    delay(1000);
  } 
  Serial.println("Connected to wifi");
  printWifiStatus();
}

void update_info(char * server, char * msg) {
  Serial.println("\nStarting connection to server...");
  // if you get a connection, report back via serial:
  if (client.connect(server, 80)) {
    Serial.println("connected to server");
    // Make a HTTP request:
    char buf[200];
    sprintf(buf, "GET %s HTTP/1.1", msg);
    //client.println("GET / HTTP/1.1");
    client.println(buf);
    client.println("Host: iot.godpub.com");
    client.println("Connection: close");
    client.println();
  }
}

void get_respond() {
  // if there are incoming bytes available 
  // from the server, read them and print them:
  while (client.available()) {
    char c = client.read();
    Serial.write(c);
  }

  client.stop();
  
  return;
  
  // if the server's disconnected, stop the client:
  if (!client.connected()) {
    Serial.println();
    Serial.println("disconnecting from server.");
    client.stop();

    // do nothing forevermore:
    while(true);
  }
}
```

之前的相关文章：
* [What will you make? 秀一下Intel Edison套件，计划做一个自动浇花装置](https://steemit.com/cn/@oflyhigh/what-will-you-make-intel-edison)
* [Say Hello to steemians from my Intel Edison device, and the progress of my automatic watering device.](https://steemit.com/life/@oflyhigh/say-hello-to-steemians-from-my-intel-edison-device-and-the-progress-of-my-automatic-watering-device)
* [用Intel Edison向大家打招呼, 以及介绍我自动浇花系统的进展](https://steemit.com/cn/@oflyhigh/intel-edison)
* [LM358不是LM35](https://steemit.com/cn/@oflyhigh/lm358-lm35)

- - -

This page is synchronized from the post: [The source code of the automatic watering device with Intel Edison/自动浇花系统源码](https://steemit.com/@oflyhigh/the-source-code-of-the-automatic-watering-device-with-intel-edison)
