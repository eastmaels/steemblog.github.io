
---
title: '[Translate/翻译]A quick introduction to BLE (BLE简介)'
permlink: translate-a-quick-introduction-to-ble-ble
catalog: true
toc_nav_num: true
toc: true
date: 2016-09-04 01:17:51
categories:
- cn
tags:
- cn
- iot
- arduino
- ble
- buetooth
thumbnail: https://www.arduino.cc/en/uploads/Reference/ble-bulletin-board-model.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


It's my first time to play with BLE when I begin to study Arduino/Genuion 101.
I am still confused about what's BLE and how it works.

 接触Arduino/Genuion 101, 也是我第一次接触BLE
做完官网上的所有可做的例子后，还是有些云山雾罩的

Eventually， I found a useful article about it.
https://www.arduino.cc/en/Reference/CurieBLE

幸好一篇文章及时的解答了我的各种疑惑
https://www.arduino.cc/en/Reference/CurieBLE


I Translated it into Chinese,  and shared it with you.

好东西不敢独享，英语渣渣费了九牛二虎之力翻译了这篇文章。
翻译之后，觉得虽然自己大致理解文中的内容，但是对于一些术语如何翻译，还是无法叫准。
鼓足勇气贴出来，欢迎各位专家批评指正。

****

# A quick introduction to BLE （BLE简介）


Bluetooth 4.0 includes both traditional Bluetooth, now labeled "Bluetooth Classic", and the new Bluetooth Low Energy (Bluetooth LE, or BLE). BLE is optimized for low power use at low data rates, and was designed to operate from simple lithium coin cell batteries.

蓝牙4.0包含传统的蓝牙（现在叫做"Bluetooth Classic"）以及新的蓝牙低功耗(Bluetooth LE, or BLE). BLE针对低功耗优化，使用。。。

Unlike standard bluetooth communication basically based on an asynchronous serial connection (UART) a Bluetooth LE radio acts like a community bulletin board. The computers that connect to it are like community members that read the bulletin board. Each radio acts as either the bulletin board or the reader. If your radio is a bulletin board (called a peripheral device in Bluetooth LE parlance) it posts data for all radios in the community to read. If your radio is a reader (called a central device in Blueooth LE terms) it reads from any of the bulletin boards (peripheral devices) that have information about which it cares. You can also think of peripheral devices as the servers in a client-server transaction, because they contain the information that reader radios ask for. Similarly, central devices are the clients of the Bluetooth LE world because they read information available from the peripherals.

不像标准蓝牙通信主要基于异步串行连接 (UART) ，BLE radio 像社区公告板那样工作。连接其上的计算机设备像社区成员阅读公告板。每一个 无线设备或作为公告板或作为读者。如果你的无线设备作为公告板（按Bluetooth LE的说法叫做外围设备），那么它张贴数据供社区内其它无线设备阅读。如果你的无线设备作为一名读者（按Blueooth LE 的术语叫做中心装置），那么它从公告板（外围设备）读取内容并获取它关心的信息。你可以认为外围设备好比客户端-服务器传输（client-server transaction）中的服务器，因为它包含读者设备需要的信息。同样，在Bluetooth LE的世界，中心装置就是客户端，因为它们从外围设备那读取可用的信息。


![](https://www.arduino.cc/en/uploads/Reference/ble-bulletin-board-model.png)

Think of a Bluetooth LE peripheral device as a bulletin board and central devices as viewers of the board. Central devices view the services, get the data, then move on. Each transaction is quick (a few milliseconds), so multiple central devices can get data from one peripheral.

想象Bluetooth LE 外围设备作为公告板，中心装置作为公告板的浏览者。中心装置查看服务，获取数据，然后离开。每一次传输都很快（几毫秒），所以多个中心装置可以从一个外围设备获取数据。

The information presented by a peripheral is structured as services, each of which is subdivided into characteristics. You can think of services as the notices on a bulletin board, and characteristics as the individual paragraphs of those notices. If you're a peripheral device, you just update each service characteristic when it needs updating and don't worry about whether the central devices read them or not. If you're a central device, you connect to the peripheral then read the boxes you want. If a given characteristic is readable and writable, then the peripheral and central can both change it.

由外围设备呈现的信息构成服务(s)，每个服务被拆分成特性(s)。你可以把服务 想象成公告板上的通知(s)，把特性想象成这些通知的各个段落(s)。如果你是一个外围设备，你只需在需要更新的时候更新每个服务特性，而不必关心是否有 中心装置读取它们。如果你是一个中心装置，连接到外围设备然后读取你需要的信息（boxes）。如果一个给定的特性可读并且可写，那么外围设备和中心装置 都可以修改它。

# Notify （通知）

The Bluetooth LE specification includes a mechanism known as notify that lets you know when data's changed. When notify on a characteristic is enabled and the sender writes to it, the new value is automatically sent to the receiver, without the receiver explicitly issuing a read command. This is commonly used for streaming data such as accelerometer or other sensor readings. There's a variation on this specification called indicate which works similarly, but in the indicate specification, the reader sends an acknowledgement of the pushed data.

Bluetooth LE 规范包含一种机制叫做通知，就是当数据改变时让你知道。当一项特性使能了通知机制，发送者向它写数据，新值会自动发送给接收者，而不用接收者显式地发起一个读取命令。这通常被用于流数据比如加速度计或其它传感器的读取。规范中有一个叫做指示的变体，有相似的工作方式，区别是在指示规范中阅读者对推送数据发送一个确认。

The client-server structure of Bluetooth LE, combined with the notify characteristic, is generally called a publish-and-subscribe model.
Bluetooth LE的客户端-服务器结构，连同通知特性在一起，通常被叫做发布和订阅模型。


# Update a characteristic （更新特性）

Your peripheral should update characteristics when there's a significant change to them. For example, when a switch changes from off to on, update its characteristic. When an analog sensor changes by a significant amount, update its characteristic.

当特性有显著变化发生时，外围设备应该更新它。例如，当开关从关闭到打开，更新其特性。当模拟传感器发生明显变化，更新其特性。

Just as with writing to a characteristic, you could update your characteristics on a regular interval, but this wastes processing power and energy if the characteristic has not changed.



# Central and Peripheral Devices （中心装置和外围设备）

Central devices are clients. They read and write data from peripheral devices. Peripheral devices are servers. They provide data from sensors as readable characteristics, and provide read/writable characteristics to control actuators like motors, lights, and so forth.

中心装置作为客户端，从外围设备读写数据。外围设备作为服务器，将传感器数据作为可读特性提供，同时提供读/写特性用于控制执行器，比如电机、灯、等等。

# Services, characteristics, and UUIDs （服务s、特性s、UUIDs)

A BLE peripheral will provide services, which in turn provide characteristics. You can define your own services, or use standard services.
Services are identified by unique numbers known as UUIDs. You know about UUIDs from other contexts. Standard services have a 16-bit UUID and custom services have a 128-bit UUID. The ability to define services and characteristics depends on the radio you're using and its firmware.

外围设备提供服务(s)，服务提供特性(s)。你可以定义自己的服务，或者使用标准服务。 服务由唯一的编号标识，叫做UUIDs。You know about UUIDs from other contexts. (你从其它语境知道UUID，你知道其它背景的UUID?）标准服务有16位UUID，自定义服务有128位UUID。定义服务和特性的能力取决于你使用 的无线设备以及它的固件。

# Service design patterns （服务设计模式）

A characteristic value can be up to 20 bytes long. This is a key constraint in designing services. Given this limit, you should consider how best to store data about your sensors and actuators most effectively for your application.The simplest design pattern is to store one sensor or actuator value per characteristic, in ASCII encoded values.

每个特性值最多可以有20个字节长，这是设计服务的关键约束。鉴于此限制，你应该考虑如何更好地存储你的传感器以及执行器数据，以便于最有效的服务于你的应用。最简单的设计模式是每个特性存储传感器或者执行器的一个值，使用ASCII编码保存。

Characteristic|Value
----|----
Accelerometer X 	|200
Accelerometer Y 	|134
Accelerometer Z 	|150

This is also the most expensive in memory terms, and would take the longest to read. But it's the simplest for development and debugging.
You could also combine readings into a single characteristic, when a given sensor or actuator has multiple values associated with it.

从内存的角度来看，这也是最耗费内存的方式，将会占用更长的时间来读取。但是对于开发和调试，这是最简单的。
当一个指定的传感器或者执行器关联有多个值，你也可以把所有的读取放到单个的特性里。

Characteristic|Value
----|----
Motor Speed, Direction|150,1
Accelerometer X, Y, Z|200,133,150

This is more efficient, but you need to be careful not to exceed the 20-byte limit. The accelerometer characteristic above, for example, takes 11 bytes as a ASCII-encoded string.

这样更高效，但是你需要注意别超出20字节限制。以上述加速度计为例，占用了11字节的ASCII编码字符串。

# Read/write/notify/indicate （读/写/通知/指示）

There are 4 things a central device can do with a characteristic:

* Read: ask the peripheral to send back the current value of the characteristic. Often used for characteristics that don't change very often, for example characteristics used for configuration, version numbers, etc.
* Write: modify the value of the characteristic. Often used for things that are like commands, for example telling the peripheral to turn a motor on or off.
* Indicate and Notify: ask the peripheral to continuously send updated values of the characteristic, without the central having to constantly ask for it.


对于一项特性，中心装置可以做四件事：

* 读: 请求外围设备发送回特性的当前值。通常用于不经常改变的特性，例如用于配置的特性、版本号等等。
* 写: 修改特性值。 通常用于那些像命令的东西，例如告诉外围设备打开或者关闭电机。
* 指示或通知: 要求外围设备持续发送更新的特性值, 无需中央装置不断的请求它.

# Advertising and GAP (通告以及GAP)

BLE devices let other devices know that they exist by advertising using the General Advertising Profile (GAP). Advertising packets can contain a device name, some other information, and also a list of the services it provides.

BLE设备使用通用通告配置 (GAP)通过通告来让其他设备知道。通告包包含设备名，一些其他信息，以及它所提供的服务列表。

Advertising packets have a limited size. You will only be able to fit a single 128-bit service UUID in the packet. Make sure the device name is not too long, or you won't even be able to fit that.

通告包有长度限制。你将只能在其中包含单个的128位UUID。确保设备名称不要太长，否则你将无法包含它。

You can provide additional services that are not advertised. Central devices will learn about these through the connection/bonding process. Non-advertised services cannot be used to discover devices, though. Sometimes this is not an issue. For example, you may have a custom peripheral device with a custom service, but in your central device app you may know that it also provides the Battery Service and other services.
你可以提供不被通告的附加服务。中心装置将通过连接/绑定过程来了解这些服务。非通告服务不能用于发现设备，然而很多时候这不是问题。例如，你有一个自定义外围设备带一项自定义服务，但是在你的中心装置应用中，你知道它同时提供电量服务以及其他服务。

# GATT (GATT)

The Bluetooth LE protocol operates on multiple layers. General Attribute Profile (GATT) is the layer that defines services and characteristics and enables read/write/notify/indicate operations on them.When reading more about GATT, you may encounter GATT concepts of a "server" and "client". These don't always correspond to central and peripherals. In most cases, though, the peripheral is the GATT server (since it provides the services and characteristics), while the central is the GATT client.

蓝牙LE协议在多个层上操作。通用属性配置(GATT)是定义服务和特性并允许读/写/通知/指示在其上操作的层。当阅读更多关于GATT的内容，你可能 遇到“服务器”和“客户端”的GATT概念。它们并不总是对应中心装置和外围设备，大多数情况下，外围设备是GATT服务器（因为它提供服务和特性），而 中心装置作为GATT客户端。

- - -

This page is synchronized from the post: [[Translate/翻译]A quick introduction to BLE (BLE简介)](https://steemit.com/@oflyhigh/translate-a-quick-introduction-to-ble-ble)
