# Python编程

## 示例

```python
import time


def run(context, index, page_slow_mo):
    page = context.new_page()
    # ---------your code start---------
    try:
        page.goto("https://www.baidu.com/")
        page.locator('//*[@id="kw"]').fill("test")
        page.locator('//*[@id="su"]').click()
    except Exception as e:
        raise e

    # ---------your code end---------


def get_text(index):
    texts = 'a\001b\001c'
    return texts.split("\001")[index]


def slow_mo_handler(value: float):
    time.sleep(value)

```

程序会加载python文件，run方法中传入context, index, page_slow_mo三个参数

context: 浏览器的控制对象，可以实现浏览器的各种操作

index: 当前浏览器的编号，与config.ini中对应，从0开始

page_slow_mo: run中的page_slow_mo参数

## 录制功能

codegen可以录制操作，并生成python代码，可节省大部分工作

`点击codegen -> start -> 点击Record开始录制 -> 操作完成后将代码复制到run方法中`

model： adspower/hubstudio/本地浏览器

ids_file； ids.txt, 默认取第一个

container_id: adspower序号，如此项为空，取ids_file中第一个

![image.png](https://github.com/zz-big/web_tool/blob/master/doc/assets/1690538244970-image.png?raw=true)


![image.png](https://github.com/zz-big/web_tool/blob/master/doc/assets/1690538590101-image.png?raw=true)
