网站由网页构成， 超链接
web APP mobile native app(iOS 安卓android)



多页应用   很多页面   会跳转   重新刷新页面


缺点：
    用户体验极差
    每次点链接都需要等待http请求及响应
    整个页面的刷新 页面白一下 如果传输时间大于0.5秒会看到明显的白屏
    相同的HTML片段重复下载


1. preventDeafult a
2. href attribute
3. jquery ajax 动态得到HTML内容 
4. p content img src


SPA  Single Page Application   >   单页应用


- 页面状态可以对应路由吗?
SPA 解决了用户体验的问题， 但却带来另一个极其严重的问题。
浏览记录没有了，
history 
如何为每个状态改变   （路由状态）   产生一个URL（路由）
并且生成一次浏览历史记录 
让SPA 的访问更加像传统的请求  location 浏览器地址栏上的操作可以使用

如何主动去设置 history 


- 一个页面对应多个页面状态  每个页面状态都会有一个route 路由（地址， state， 数据）， 又会对应一个组件

vue单页应用开发， 有route 响应 匹配相应的组件显示， 再一直组件化的过程