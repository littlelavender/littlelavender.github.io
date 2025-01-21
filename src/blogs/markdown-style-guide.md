---
title: "Markdown样式指南"
description: "以下是在Astro中编写Markdown内容时可以使用的一些基本Markdown语法示例。"
heroImage: "/images/cover/cover_2.jpg"
author: "Astro"
avatar: "/theme-sakura/assets/images/default/avatar.webp"
category: "默认分类"
tags: ["指南"]
pubDate: "2024-06-01"
updateDate: "2024-06-01"
---

以下是在Astro中编写Markdown内容时可以使用的一些基本Markdown语法示例。

## 标题

下面的HTML`<h1>`—`<h6>`元素表示六个级别的节标题。`<h1>`是最高的区段级别，而`<h6>`是最低的区段级别。

# 标题一

## 标题二

### 标题三

#### 标题四

##### 标题五

###### 标题六

## 段落

主题已经发布有半年之久才开始写使用手册，实在是抱歉各位！！！但相较于写使用文档，果然我还是更喜欢摸鱼~

本主题较复杂，因此上手略难一些，本次特意在珍贵的元旦假期内写出此篇文档，以便于帮助大家更好的上手此主题。

## 图片

![blog placeholder](/images/cover/cover_2.jpg)

## 块引用

blockquote元素表示从另一个来源引用的内容，可以选择在`footer`或`cite`元素中添加引用，也可以选择使用注释和缩写等内联更改。

### 不带署名的块引用

> 本主题提供了较多的自定义选项，建议在使用主题之前，仔细阅读本教程，可以帮助你更好的使用它。
> **Note** that you can use _Markdown syntax_ within a blockquote.

### 带署名的块引用

> 不要通过共享内存来交流，要通过交流来共享内存。<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 以上引文摘自 Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## 表格

| 斜体      | 粗体      | 代码   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## 代码块

我们可以在新行中使用3个反引号```，在新行中使用3个反引号来写代码片段和结束，为了突出语言特定的语法，在前3个反引号后写一个语言名称单词，例如：html, javascript, css, markdown, typescript, txt, bash

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## 列表类型

### 有序列表

1. 第一项
2. 第二项
3. 第三项

### 无序列表

- 列表项
- 另一项
- 和另一项

### 内嵌列表

- 水果
  - 苹果
  - 欧润及
  - 不拉啦
- 奶制品
  - 牛奶
  - 起司

## 其他元素 — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr>是位图图像格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按 <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> 去结束会话。

大多数<mark>蝾螈</mark>是夜行动物，捕食昆虫、蠕虫和其他小生物。
