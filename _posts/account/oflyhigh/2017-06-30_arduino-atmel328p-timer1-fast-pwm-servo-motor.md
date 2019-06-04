
---
title: 'Arduino 开发不传之秘： 使用ATMEL328P Timer1 FAST PWM 直接控制伺服电机(Servo motor)'
permlink: arduino-atmel328p-timer1-fast-pwm-servo-motor
catalog: true
toc_nav_num: true
toc: true
date: 2017-06-30 11:54:48
categories:
- arduino
tags:
- arduino
- cn
- diy
- iot
- pwm
thumbnail: https://steemitimages.com/DQmP171U7HyLg3eHFvf4NmDDMYuAAMLS23baWvHxg3vRcF4/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmP171U7HyLg3eHFvf4NmDDMYuAAMLS23baWvHxg3vRcF4/image.png)


# 需求

想必接触过物联网(IOT)的兄弟姐妹们对Arduino不会陌生，没错，在ESP8266横空出世之前，Arduino Uno R3是当之无愧的最流行的物联网原型搭建平台，也是被使用最广的教学平台。回想起去年7月份的时候，我还写过两篇和Arduino有关的文章，大致是用Arduino计算我的个人资产何时能够超过DAN，现在看来，这想法真好笑；）

这篇文章介绍Arduino的高级技巧，其实呢，Arduino最大的便利就在于模块化以及对底层库的封装，用户无需了解过多的技术细节就能迅速的搭建出好玩的或者实用的应用。但是总有一些复杂的情况，这时候你若对底层一点不了解，就会比较抓瞎了。

比如说：前阶段一个朋友丢给我一个需求，截图如下：
![homework.jpg](https://steemitimages.com/DQmW6PHA2YbYxYUH5BvaC5BWQAH6w4CfEH5KEHtsG9GJXcu/homework.jpg)

大致就是让用AVR Clib的方式实现用ATMEL328P Timer1 的FAST PWM 直接控制伺服电机。简单的说，就是不允许使用库，而是要了解相关的技术细节，直接实现。

# 需求的细化

对上述需求进行了一下细化：
* 1：实现Timer/counter 1 生成 fast PWM 信号
* 2：实现用PWM信号去控制Servo motor
* 3：实现用两个按键分别控制Servo motor正转反转，每次旋转30度
* 4：实现EEPROM的读写
* 5：存储当前Servo motor位置，实现Arduino重启等自动复位

分别对其进行详细的分析

###  1：Timer/counter 1 生成 fast PWM 信号

为了实现Timer1生成 fast PWM信号，我们查找了Atmel的芯片手册（328P）.
Timer1是16位定时器，有很多种工作方式，我们选取的fast PWM方式
工作方式的选择是通过：Waveform Generation Mode 进行选择的

Waveform Generation Mode
我们选择模式14：1 1 1 0
(Page 134 of atmel-8271-8-bit-avr-microcontroller-atmega48a-48pa-88a-88pa-168a-168pa-328-328p_datasheet.pdf)

Compare Output Mode, Fast PWM
Set OC1A/OC1B on Compare Match, clear OC1A/OC1B at BOTTOM (inverting mode)

ICR1作为比较的最大值，我们令其为40000 - 1
OCR1A 控制脉宽（占空比等）

分频选择 8分频， CS11

按如上设置，我们生成50HZ的PWM信号
频率公式：频率 = 时钟周期/分频/（最大值+1）

（* 关于数值的选取：分频，以及最大值等，是由电机脉宽计算出来的）

###  2：实现用PWM信号去控制Servo motor

查找一些技术文档后，发现控制Servo motor的不是PWM的占空比，而是脉冲信号中高电平持续的时间。
http://en.wikipedia.org/wiki/Servo_control

这个时间对应不同的电机，一般对应0.5毫秒-2.5毫秒，与0-180度对应。
为了实现更高精度的控制，我们将其扩大1000倍，亦即我们可以操作的最小时间是0.5/1000 = 0.0005

而对应到计数值，则为1000（0.5/ 0.0005） 与 5000 （2.5/ 0.0005）
通过最小时间，我们可以反推出分频的选择（8分频）
通过计数值以及占空比（2.5%，12.5%）以及频率，我们选择40000作为最大值。

所以，我们讲0-180，映射至1000-5000，通过修改OCR1A的值，就可以控制高电平持续的时间，进而控制电机。

由于以上两部分是紧密关联的，所以我们实现了一个函数：
void PWM_Servo_Move(int angle), 输入角度，实现对应旋转（0-180度）

### 3：实现用两个按键分别控制Servo motor正转反转，每次旋转30度
我们设计了一个函数：
boolean bButtonPressed(int nButton, int & pre_sta)
输入按键针脚，以及之前的状态，来判断是否被按下（我们判断KEYDOWN）

(这个函数可以进一步把pre_sta做到里边)

我们用一个全局变量计数器CUR_POS（0-6）来记录按键
进行对应的操作
舵机旋转CUR_POS * 30

### 4：实现EEPROM的读写
对于EEPROM，Arduino以及Avr都有完善的库支持
（Arduino库封装了Avr的库）

为了实现脱离库函数对EEPROM读写
我们查找了ATMEL的手册，doc8161.pdf
从中找到对寄存器直接操作的代码，实现了特定型号MPU EEPROM的读写

### 5：存储当前Servo motor位置，实现Arduino重启等自动复位
为此我们定义了
```
struct MY_SETTING
{
   byte header[6];
   unsigned int W_CNT;
   unsigned int R_CNT;     
   byte CUR_POS;
};
```
并实现
`void Load_Setting()` // 在程序启动时，加载设置
`void Save_Setting()` //在用户按键时，保存设置


# 问题解答

* 1：测量并汇报EEPROM读写次数（读写时间）？是否满足需求?
因为叫不准要的是读写次数，还是时间，Times, 原谅我的烂外语，我就都加了
读写次数也记录并汇报，操作时间也汇报
（Load Setting 20微秒，Save Setting 34448 微秒，34毫秒，对程序没有影响）

* 2：首次加载程序时，EEPROM内容未知，处理这种情况
我们定义了一串字符头，作为EEPROM已经初始化的标志。
如果与标志不符，我们就初始化EEPROM

* 3：如果每天用户按键100次，那么程序（EEPROM处理）能按预期运行多久？
手册上说：
An EEPROM write takes 3.3 ms to complete. The EEPROM memory has a specified life of 100,000 write/erase cycles, so you may need to be careful about how often you write to it.
那么每天100，可以工作1000天。

# 代码
```
#define BUTTON_ADD     2
#define BUTTON_SUB     4
// Can’t be changed, because we use OCR1A
#define SERVO_PIN      9

// Function declaration
void PWM_Servo_Move(int angle);
void EEPROM_write(unsigned int uiAddress, unsigned char ucData);
unsigned char EEPROM_read(unsigned int uiAddress);
boolean bButtonPressed(int nButton, int & pre_sta);

// Globe variables 
int BA_PRE = LOW;     //previous status for BUTTON_ADD
int BS_PRE = LOW;     //previous status for BUTTON_SUB
int CUR_POS = 0;      // Save the current Position (Angle = CUR_POS * 30)

void setup() 
{
  pinMode(SERVO_PIN , OUTPUT);
  pinMode(BUTTON_ADD, INPUT);
  pinMode(BUTTON_SUB, INPUT);
  
  Serial.begin(9600);
  
  // Load setting since last start and Move servo
  Load_Setting();
  PWM_Servo_Move(CUR_POS*30);
}

void loop() 
{
  if (bButtonPressed(BUTTON_ADD, BA_PRE))
  {
    CUR_POS = (CUR_POS == 6) ? 6: ++CUR_POS;
    Serial.print("BUTION_ADD Pressed! Position is: "); Serial.println(CUR_POS);
    Save_Setting();
  }
  
  if (bButtonPressed(BUTTON_SUB, BS_PRE))
  {
    CUR_POS = (CUR_POS == 0) ? 0: --CUR_POS;
    Serial.print("BUTION_SUB Pressed! Position is: "); Serial.println(CUR_POS);
    Save_Setting();
  }
  
  PWM_Servo_Move(CUR_POS*30);
}



/**********************************************************************************/
/************************      Functions for Button        ************************/
/************************      Return true when Key down   ************************/
/**********************************************************************************/
boolean bButtonPressed(int nButton, int & pre_sta)
{
   
   int btn_sta = digitalRead(nButton);
   
   // Keydown
  if (btn_sta != pre_sta && btn_sta == HIGH ) {
    delay(20);
    pre_sta = btn_sta;
    return true;
  } 
  // KeyUP
  else if (btn_sta != pre_sta && btn_sta  == LOW ) 
  {
    delay(20);
    pre_sta = btn_sta;
  }    
  
  return false;
}

/**********************************************************************************/
/************************      Function for Settings       ************************/
/************************ Read or Write Setting via EEPROM ************************/
/**********************************************************************************/
struct MY_SETTING
{
   byte header[6];
   unsigned int W_CNT;
   unsigned int R_CNT;     
   byte CUR_POS;
};
struct MY_SETTING G_Setting;   
const char EP_HEADER[6] = {'I', 'N', 'I', 'T', 0, 0};

// Load Setting from EEPROM
void Load_Setting()
{ 
  boolean bInit = true;
  
  // Read setting from EEPROM
  byte * p = (byte *)&G_Setting;
  unsigned long time = micros();
  for(int i =0; i<sizeof(struct MY_SETTING); i++)
  {
     p[i] = EEPROM_read(i);
  }
  time = micros() - time;
  
  // Check if EEPROM was initialized
  for(int i=0; i< sizeof(G_Setting.header); i++)
  {
     if(G_Setting.header[i]!= EP_HEADER[i])
     {
        bInit = false;
     }
  }

   // Initialize it if necessary  
   if(!bInit)
   {
      Serial.print("Not initialized, Initialing.....");
      
      // Write the initial setting to EEPROM
      for(int i=0 ; i<sizeof(EP_HEADER); i++)
      {
         G_Setting.header[i] = EP_HEADER[i];
      }
      G_Setting.W_CNT = 0;
      G_Setting.R_CNT = 0; //0xabcd for test
      G_Setting.CUR_POS = 0;
      for(int i =0; i<sizeof(struct MY_SETTING); i++)
      {
         EEPROM_write(i, p[i]);
         //delay(10);
         //Serial.print(i); Serial.print("= ");  Serial.println( p[i]);
      }
      Serial.println("Done!");
    }
    
    // Increase the read counter
     G_Setting.R_CNT++;
     
    // Report setting info
    Serial.print("Write counter: "); Serial.println( G_Setting.W_CNT);
    Serial.print("Read counter: "); Serial.println( G_Setting.R_CNT);
    Serial.print("Current Positon: "); Serial.print( G_Setting.CUR_POS); Serial.print("\tAngle: ");  Serial.println(G_Setting.CUR_POS * 30); 
    Serial.print("Seting Loaded: Time cost: "); Serial.print(time);   Serial.println(" microseconds");     
    
    // update position
    CUR_POS = G_Setting.CUR_POS;
}

void Save_Setting()
{ 
   byte * p = (byte *)&G_Setting;
   
   // Increase the write counter and update the current position
   G_Setting.W_CNT++;
   G_Setting.CUR_POS = CUR_POS;
   
   // Write setting to EEPROM
   unsigned long time = micros();
   for(int i =0; i<sizeof(struct MY_SETTING); i++)
   {
       EEPROM_write(i, p[i]);
       //delay(10);
       //Serial.print(i); Serial.print("= ");  Serial.println( p[i]);
    } 
    time = micros() - time;
    
    // Report setting info
    Serial.print("Write counter: "); Serial.println( G_Setting.W_CNT);
    Serial.print("Read counter: "); Serial.println( G_Setting.R_CNT);
    Serial.print("Current Positon: "); Serial.print( G_Setting.CUR_POS); Serial.print("\tAngle: ");  Serial.println(G_Setting.CUR_POS * 30); 
    Serial.print("Seting Saved: Time cost: "); Serial.print(time);   Serial.println(" microseconds");   
}


/**********************************************************************************/
/************************      Function for Servo          ************************/
/************************      Use timer/counter1          ************************/
/**********************************************************************************/
#define MIN_PULSE_WIDTH      0.544     // the shortest pulse sent to a servo  
#define MAX_PULSE_WIDTH      2.4       // the longest pulse sent to a servo 
#define STEP_WIDTH           0.0005    // (*) Calculated Value, can't be changed

void PWM_Servo_Move(int angle)
{
  if (angle > 180)
    angle = 180;

  if (angle < 0)
    angle  = 0;

  // Disable interrupts
  cli();

  // 
  // 16.11.1 TCCR1A – Timer/Counter1 Control Register A
  // COM1A1 COM1A0 COM1B1 COM1B0 – – WGM11 WGM10 
  // WGM = 1110 : Fast PWM, TOP = ICR1 (page134)
  // Clock Select Bit Description = B010: clkI/O/8 (From prescaler) (page135)
  TCCR1A = _BV(COM1A1) |  _BV(COM1B1) |  _BV(WGM11);
  TCCR1B = _BV(WGM13) | _BV(WGM12) | _BV(CS11) ; 
  //TCNT1 = 0;  // clear the timer count 

  // Set the value of TOP, which generate 50HZ frequency (20ms per cycle) 
  ICR1 =  40000 - 1;

  // Map the angle value to counter, then set counter, begin count
  unsigned int counter = map(angle, 0, 180, MIN_PULSE_WIDTH/0.0005, MAX_PULSE_WIDTH/0.0005);
  OCR1A = counter;  

  // Re-enable interrupts
  sei() ;
}

/**********************************************************************************/
/************************      Function for EEPROM         ************************/
/************************      Copy from Atmel             ************************/
/**********************************************************************************/
void EEPROM_write(unsigned int uiAddress, unsigned char ucData)
{
  /* Wait for completion of previous write */
  while(EECR & (1<<EEPE));
  /* Set up address and Data Registers */
  EEAR = uiAddress;
  EEDR = ucData;
  /* Write logical one to EEMPE */
  EECR |= (1<<EEMPE);
  /* Start eeprom write by setting EEPE */
  EECR |= (1<<EEPE);
}

unsigned char EEPROM_read(unsigned int uiAddress)
{
  /* Wait for completion of previous write */
  while(EECR & (1<<EEPE));
  /* Set up address register */
  EEAR = uiAddress;
  /* Start eeprom read by writing EERE */
  EECR |= (1<<EERE);
  /* Return data from Data Register */
  return EEDR;
}
```

# 连线图

![IMG_4024.JPG](https://steemitimages.com/DQmWoBuhVp6qqiKPa9TULgyTwZShodHeUtmrRyxujkM1TxH/IMG_4024.JPG)


就这样啦，不传之秘哦！

- - -

This page is synchronized from the post: [Arduino 开发不传之秘： 使用ATMEL328P Timer1 FAST PWM 直接控制伺服电机(Servo motor)](https://steemit.com/@oflyhigh/arduino-atmel328p-timer1-fast-pwm-servo-motor)
