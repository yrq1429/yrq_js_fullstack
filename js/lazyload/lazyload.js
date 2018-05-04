/**
 * author yrq
 * date 2018-05-04
 */


//  服务于任何图片元素，image 幕后，再将origin_src 设置过去
// 这个LazyLoadImage 其实就是这个立即执行函数的返回值
 var LazyLoadImage = (function () {
    //  变量的冒泡查找
    // const a=1;
     return {
        setSrc:function (ele) {
            // console.log(a);
            // console.log('开始下载图片吧');
            const url = ele.getAttribute('origin_src') ? ele.getAttribute('origin_src'):'';
            if (!url) return;
            const oImg = document.createElement('img');
            // 不会影响页面，none 会离开文档流 opacity:0  这个会撑长页面
            oImg.style.display='none';
            document.body.appendChild(oImg);
            // 当设置了图片的src后，就会启动http请求，图片下载完了后，onload 注册的事件回调函数就会被执行
            // 异步  同步
            oImg.onload = function () {
                // 不会立即执行
                // 后执行
                // console.log('图片下载完成');
                ele.src = url;
                // 洋葱
                // document.body  父节点
                // 找到父节点   删除子节点
                document.body.removeChild(this);//this 就是oImg    指向事件发生的元素
            }
            // 先执行
            // console.log('设置src');
            
            oImg.src=url;  //下载这个图片
        }
     }
 })();

