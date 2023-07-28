# Quick Start

1. 打开adspower,选择需要操作的adspower序号

![image.png](https://github.com/zz-big/web_tool/blob/master/doc/assets/image.png?raw=true)

2. 将序号填入ids.txt

```
3
2
```

3. 打开workflow.xlsx，配置任务
   以百度搜索为例


| xpath                  | option   | text | notes        |
| ------------------------ | ---------- | ------ | -------------- |
| https://www.baidu.com/ | new_page |      | 打开页面     |
| //*[@id="kw"]          | text     | tool | 填入搜索内容 |
| //*[@id="su"]          | click    |      | 点击搜索     |

*xpath复制，在浏览器按F12,在元素上邮件copy -> copy xpath*

![image.png](https://github.com/zz-big/web_tool/blob/master/doc/assets/1690532714904-image.png?raw=true)

4. 点击start

![image.png](https://github.com/zz-big/web_tool/blob/master/doc/assets/1690531997335-image.png?raw=true)
             
