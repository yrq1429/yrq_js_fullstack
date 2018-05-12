// es6 模块化语法 module
// JS 里面变量或者常量，他的类型由值决定
const testDrive = () => {
    // 内置的来自微信的API
    // 原生的API 大部分的小程序员是HTML5 
    // webview 区分于nativeview
    // 性能上比原生的慢一些
    wx.showToast({
        title: '暂不支持'
    })
}
export default testDrive