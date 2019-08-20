
---
title: 'What is ros-control'
permlink: 1268-what-is-ros-control
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-17 11:01:51
categories:
- dev
tags:
- dev
- ros
- busy
- jjangjjangman
- robot
thumbnail: 'http://wiki.ros.org/ros_control?action=AttachFile&do=get&target=gazebo_ros_control.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I wrote summary about ros control.
What is ros-control?
How to use ros-control?
Thank you.

<h1>ros-control</h1>
<blockquote><p>http://wiki.ros.org/ros_control</p></blockquote>
<p> </p>
<blockquote>
<ul>
<li>A set of packages that include controller interfaces, controller managers, transmissions and hardware_interfaces.</li>
<li>The ros_control packages are a rewrite of the <a href="http://wiki.ros.org/pr2_mechanism">pr2_mechanism</a> packages to make controllers generic to all robots beyond just the PR2.</li>
<li>The ros_control packages takes as <strong>input the joint state data</strong> from your robot’s actuator’s encoders and an input set point. It uses a generic control loop feedback mechanism, typically a PID controller, to control the output, typically effort, sent to your actuators. ros_control gets more complicated for physical mechanisms that do not have one-to-one mappings of joint positions, efforts, etc but these scenarios are accounted for using transmissions.</li>
</ul>
</blockquote>
<p> </p>
<p>There are some modules.</p>
<ul>
<li>Controller manager</li>
<li>Controller</li>
<li>Hardware interface</li>
</ul>
<p><img src="http://wiki.ros.org/ros_control?action=AttachFile&do=get&target=gazebo_ros_control.png" alt="ros control" /></p>

<p><img src="https://bitbucket.org/osrf/gazebo_tutorials/raw/default/ros_control/Gazebo_ros_transmission.png" /></p>
<p><http://gazebosim.org/tutorials/?tut=ros_control></p>
<p>Controller don’t care which module (simulation or hardware) provide data.</p>
<p>Controller needs <strong>joint state info</strong> and <strong>joint command info</strong>.</p>
<p> </p>
<hr />
<h2>Controller</h2>
<p><img class="alignnone wp-image-1269 size-large" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-10-44-13-1024x631.png" alt="" width="640" height="394" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-10-44-13-1024x631.png 1024w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-10-44-13-300x185.png 300w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-10-44-13-768x473.png 768w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-10-44-13.png 1241w" sizes="(max-width: 640px) 100vw, 640px" /></p>
<p>There are many controller on ros-control.</p>
<p>I used <strong>joint state_controller</strong> and<strong> joint_trajectory_controller</strong> for head control.</p>
<p>You need to set control parameter (PID gain, velocity_ff, etc.)</p>
<p>In control.yaml, head_controller has two joint (pan_joint and tilt_joint) and make trajectories.</p>
<blockquote><p>Trajectories are specified as a set of waypoints to be reached at specific time instants, which the controller attempts to execute as well as the mechanism allows. Waypoints consist of positions, and optionally velocities and accelerations.</p></blockquote>
<p> </p>
<p><img class="alignnone wp-image-1271 size-full" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-13-44-07.png" alt="" width="835" height="546" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-13-44-07.png 835w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-13-44-07-300x196.png 300w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-13-44-07-768x502.png 768w" sizes="(max-width: 835px) 100vw, 835px" /></p>
<hr />
<h2>Controller_manager</h2>
<p>controller_manager manages some controllers</p>
<p>controller_manager needs to load controllers.</p>
<blockquote><p><!– Load joint controller configurations from YAML file to parameter server –><br />
<rosparam file=”$(find cam_pan_tilt)/config/control.yaml” command=”load”/></p>
<p><node name=”controller_spawner” pkg=”controller_manager” type=”spawner” respawn=”false”<br />
output=”screen” ns=”/gretchen” args=”joint_state_controller<br />
head_controller”/></p></blockquote>
<hr />
<h2>RQT_GRAPH</h2>
<p><img class="alignnone wp-image-1274 size-large" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-13-47-06-1024x385.png" alt="" width="640" height="241" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-13-47-06-1024x385.png 1024w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-13-47-06-300x113.png 300w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-13-47-06-768x289.png 768w" sizes="(max-width: 640px) 100vw, 640px" /></p>
<p><img class="alignnone wp-image-1281 " src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-14-25-26-e1542346016674.png" alt="" width="631" height="529" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-14-25-26-e1542346016674.png 812w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-14-25-26-e1542346016674-300x252.png 300w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-14-25-26-e1542346016674-768x644.png 768w" sizes="(max-width: 631px) 100vw, 631px" /></p>
<p> </p>
<p> </p>
<hr />
<h2>How to connect real robot</h2>
<p>need to costruct hardware_inferface</p>
<p>It is hardware_interface example.</p>
<ul>
<li>https://github.com/ros-controls/ros_control/wiki/hardware_interface</li>
</ul>
<p>ROBOTICS made hardware_interface of dynamixel motor for ros-control.</p>
<hr />
<h2>Example</h2>
<h3>1) Head Controller</h3>
<p>Head controller control pan and tilt. input of the controller is tf, joint_states, head_controller/state</p>
<ul>
<li>tf
<ul>
<li>tf is relationship between frames</li>
<li>
<blockquote><p>tf is a package that lets the user keep track of multiple coordinate frames over time. tf maintains the relationship between coordinate frames in a tree structure buffered in time, and lets the user transform points, vectors, etc between any two coordinate frames at any desired point in time.</p></blockquote>
</li>
</ul>
</li>
</ul>
<p><img class="alignnone size-medium wp-image-1280" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-14-07-47-300x212.png" alt="" width="300" height="212" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-14-07-47-300x212.png 300w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-14-07-47-768x544.png 768w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-14-07-47-1024x725.png 1024w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-14-07-47.png 1100w" sizes="(max-width: 300px) 100vw, 300px" /></p>
<ul>
<li>joint_states
<ul>
<li>it is raw data from motor controller</li>
</ul>
</li>
</ul>
<p><img class="alignnone size-full wp-image-1278" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-14-04-40.png" alt="" width="542" height="174" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-14-04-40.png 542w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-14-04-40-300x96.png 300w" sizes="(max-width: 542px) 100vw, 542px" /></p>
<ul>
<li>head_controller/state
<ul>
<li>desired, actual, error check for control</li>
<li>it is calculated by controller.</li>
</ul>
</li>
</ul>
<p><img class="alignnone size-full wp-image-1277" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-13-59-44.png" alt="" width="584" height="554" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-13-59-44.png 584w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-13-59-44-300x285.png 300w" sizes="(max-width: 584px) 100vw, 584px" /></p>
<p>output</p>
<ul>
<li>head_controller/command
<ul>
<li>set radian postion at each joint</li>
</ul>
</li>
</ul>
<p><img class="alignnone wp-image-1276 size-full" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-13-54-31-e1542344179497.png" alt="" width="651" height="328" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-13-54-31-e1542344179497.png 651w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-16-13-54-31-e1542344179497-300x151.png 300w" sizes="(max-width: 651px) 100vw, 651px" /></p>
<h2>2) Other robot</h2>
<p>You can easily control the robot manipulator using ros-control and moveit.</p>
<p><span class="embed-youtube" style="text-align:center; display: block;"><iframe class='youtube-player' type='text/html' width='640' height='360' src='https://www.youtube.com/embed/NTrmUOY083Y?version=3&rel=1&fs=1&autohide=2&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent' allowfullscreen='true' style='border:0;'></iframe></span></p>
<h2>3) Simple pan title model</h2>
<p><span class="embed-youtube" style="text-align:center; display: block;"><iframe class='youtube-player' type='text/html' width='640' height='360' src='https://www.youtube.com/embed/J3A2fBVVQjI?version=3&rel=1&fs=1&autohide=2&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent' allowfullscreen='true' style='border:0;'></iframe></span></p>
<p>1. User click a point</p>
<p>2. make target_line using the point</p>
<p>Target_line consist of those</p>
<ul>
<li>geometry_msgs/PointStamped target</li>
<li>geometry_msgs/Vector3 pointing_axis</li>
<li>string pointing_frame</li>
<li>duration min_duration</li>
<li>float64 max_velocity</li>
</ul>
<p>3. calculate inverse kinematics for getting joint angles</p>
<p>4. publish angle on each joint</p>
<p>5. move</p>
<hr />
<h2>Why it is need?</h2>
<p>Once control part constructed using ros-package.</p>
<p>Perception part focus recognition and just publish u,v.</p>
<h2>Reference</h2>
<ul>
<li>http://wiki.ros.org/ros_control</li>
<li>http://gazebosim.org/tutorials/?tut=ros_control</li>
<li>http://wiki.ros.org/joint_trajectory_controller</li>
<li>https://pinkwink.kr/1013</li>
<li>https://github.com/ros-controls/ros_control/wiki/hardware_interface</li>
</ul>
<p> </p>


- - -

This page is synchronized from the post: ['What is ros-control'](https://steemit.com/@jacobyu/1268-what-is-ros-control)
