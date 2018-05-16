# WEUI 微信统一Web界面 

## 表单 cells 

> 在小程序中,使用weui做快速开发，让小程序更快
- MVVM
    用户登录模块
    username  password
    Model？  user是一个Object
    value="{{user.username}}"
    value="{{user.password}}"

    V wxml weui 写Form

    VM？  两者的结合体   View 模板，等待被编译compile  跟随model自动编译

    model  数据绑定 bindinput bindtap  值改变  状态改变 

    VM 代表那一刻的状态。