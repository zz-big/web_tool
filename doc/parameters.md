# 参数介绍
![image.png](https://github.com/zz-big/web_tool/blob/master/doc/assets/1690531997335-image.png?raw=true)

* **workflow_file**

`任务配置文件，默认为当前目录下workflow.xlsx，可选：workflow.xlsx 或 workflow.py`

* **ids_file**

`操作的浏览器编号`

* **model**

`ads/hub/local 分别为操作adspower/hubstudio/本地浏览器，启动参数见config.ini`

* **threads**

`多线程执行，默认同时并行10个`

* **sleep**

`多线程间启动的间隔时间,默认3s`

* **page_slow_mo**

`workflow.xlsx中每一行任务操作后的等待时间，默认0.1s`

* **page_timeout**

`元素未加载出来的等待时间，默认等待15s`

* **retry**

`每个操作失败的重试次数，默认重试2次`

* **exit**

`操作失败后，是否退出当前线程不再继续执行后续任务（不影响其他线程），默认不退出`

* **close**

`执行完成后是否关闭当前操作adspower/hubstudio浏览器，默认不关闭`

* **close_windows**

`任务开始前是否关闭其它浏览器页面，默认不关闭`

* **ding**

`任务结束后是否发送钉钉告警，默认否`

* **max_window**

`打开浏览器时是否将窗口最大化，默认否`

* **enable_loop**

`是否循环执行任务，默认否`

* **delay**

`若打开循环任务，任务启动距目前时间，默认1s`

* **loop**

`任务循环次数，默认20次`
