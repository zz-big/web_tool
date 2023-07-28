# Excel配置

## 配置说明

xpah： 元素

option： 操作方式

text： 填入的文本

notes： 备注，方便记录，与任务无关


| xpath                  | option   | text | notes        |
| ------------------------ | ---------- | ------ | -------------- |
| https://www.baidu.com/ | new_page |      | 打开新页面   |
| //*[@id="kw"]          | text     | tool | 填入搜索内容 |
| //*[@id="su"]          | click    |      | 点击搜索     |

## 详细功能



| xpath                  | option       | text                        | notes                                                                                                                 |
| ------------------------ | -------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| https://www.baidu.com/ | new_page     |                             | 新打开页面，并前往baidu                                                                                               |
| https://www.baidu.com/ | goto         |                             | 在当前页面前往baidu                                                                                                   |
| //*[@id="kw"]          | text         | tool                        | 填入搜索内容（每个adspower输入内容都一样）                                                                            |
| //*[@id="kw"]          | text         | tool\001test                | 填入搜索内容（每个adspower输入内容不一样，与ids.txt一一对应），用\001分隔                                             |
| //*[@id="kw"]          | text_random  | 10,20,3                     | 随机数，在[20,30]间的随机数，3位小数                                                                                  |
| //*[@id="su"]          | text_content |                             | 获取当前xpath的文本                                                                                                   |
| //*[@id="kw"]          | text_fill    |                             | 填入上一步text_content中获取的内容                                                                                    |
| //*[@id="su"]          | click        |                             | 点击搜索                                                                                                              |
| //*[@id="su"]          | click        | force                       | 强制点击，例如可以忽略弹窗点击按钮                                                                                    |
| //*[@id="su"]          | click        | Alt                         | 键盘Alt+点击                                                                                                          |
| //*[@id="su"]          | click        | Control                     | 键盘Control+点击                                                                                                      |
| //*[@id="su"]          | click        | Meta                        | 键盘Meta+点击                                                                                                         |
| //*[@id="su"]          | click        | Shift                       | 键盘Shift+点击                                                                                                        |
| //*[@id="su"]          | click        | exist                       | 页面存在这个xpath就一直点击                                                                                           |
|                        | reload       |                             | 重载当前页面                                                                                                          |
| //*[@id="su"]          | visible      |                             | 期望元素存在，若不存在即退出                                                                                          |
| //*[@id="su"]          | not_visible  |                             | 期望元素不存在，若存在即退出                                                                                          |
| //*[@id="kw"]          | press        | Control+v                   | 键盘操作，例如Control+v实现粘贴                                                                                       |
|                        | bring_page   | -2                          | 跳到倒数第二个页面，正序: 0, 1, 2, 3, 4... 倒序：-1，-2，-3... 页面按被操作先后排序，最后一个被操作就是倒数第一个页面 |
| //*[@id="kw"]          | evaluate     | node => node.value = "test" | 执行JavaScript脚本，若xpath不为空，则对该xpath执行脚本，若为空对页面执行脚本                                          |
|                        | sleep        | 5                           | 等待5s                                                                                                                |
|                        | mouse        | 100,100                     | 鼠标点击页面100,100点位置                                                                                             |
| //*[@id="kw"]          | not_greater  | 10                          | xpath值不大于10，大于即退出，仅支持数字                                                                               |
|                        | close_page   | all                         | 关闭其它所以页面，也可指定关闭第几个，例-2关闭倒数第二个                                                              |
