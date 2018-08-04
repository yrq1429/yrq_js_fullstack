1. jsx( react-jsx-plugin )->vnode( createElement )->DOM( render )

2. Component(render 的第三种方式，react-jsx-plugin vnode.tag => function Counter) -> 标签化组件 ->Counter(extends) -> Component类 -> render(jsx)

3. 响应式编程setState() 为了达到DOM 的更新，将整个DOM 片段都替换掉了

4. 新生成整个的组件DOM树，重新挂载，假如：100行的DOM HTML，只将setState关联的那一小段DOM,在原来的DOM 的基础上做一下修改，将修改的反映到DOM 上
HTML树，重绘 DOM 的开销是一般计算的100-1000倍  replaceChild
重排！！

React DOM diff   算法
需求是：减少DOM 操作
setState 对应的DOM部分
setState 返回一个新的vnode -> 跟旧的DOM对比，将新的内存 （虚拟）DOM 跟旧的DOM对比
都是一棵树，采用算法，就可以比较出差异点，在相差的地方，进行新的DOM操作