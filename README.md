# hexo-theme-myscape

个人在官方主题的基础上进行修改，目前仅用于自用。(~~考虑到banner图像我也没版权~~

效果参见目前本人博客：http://home.ustc.edu.cn/~liuly0322/blog

修改见：http://home.ustc.edu.cn/~liuly0322/blog/changelog/

本主题对于mathjax的实现参考了mathjax官方文档，因此使用前需要禁用hexo的mathjax等插件

渲染有问题可以考虑检查下markdown渲染器的正则规则

主题的配置文件有leancloud的配置id和key，看的上这个主题的话记得自己修改（？

## 使用说明

### Valine

如果不使用评论功能，config里关闭即可。

(文章访问计数依赖 Valine ，旧版需要额外关闭 config 中 valine 的 visitor，最新版本已经只需要关闭 Valine 全局的 enable 即可)

否则可以参照[官网](https://valine.js.org/)配置：

### 文章总字数统计

需要安装 hexo-wordcount : `npm i --save hexo-wordcount`

### “关于”等界面

需要在网站文件夹中，通过`hexo new` 在 `source` 目录下创建 `tags`,`about`,  `microblog`，`friends` 等页面。

例如: `hexo new page about`

之后，进入文件夹，点开 `index.md`，在正文前的页面设置中增加： `type: tags or about or ...`

例如，microblog 对应的 md 文件头至少要为：
```
---
title: 微博
type: microblog
---
```

#### 友情链接

为了正确显示友情链接中的信息，还需要在网站目录下的 `source` 文件夹新建 `_data/friends.json`

json 文件格式如下：

```json
[{
    "avatar": "头像url",
    "name": "1号",
    "introduction": "介绍",
    "url": "网站"
}, {
    "avatar": "头像url",
    "name": "2号",
    "introduction": "介绍",
    "url": "网站"
}, {
    "avatar": "头像url",
    "name": "3号",
    "introduction": "介绍",
    "url": "网站"
}]
```

旧版会出现至少全站需要有一个 tag 才能显示友情链接的 bug 。新版已经修复。