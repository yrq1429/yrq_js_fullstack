import { setAttribute } from './dom.js'
import Component from '../react/component.js';

export function render (vnode, container) {
  // console.log(vnode, container)
  return container.appendChild(_render(vnode));
}
/**
 * 将虚拟DOM 变为真是DOM
 * @param  vnode 虚拟DOM
 * @return 返回DOM 
 */
function _render(vnode) {
  // 1. 递归来做，将结点转化为DOM，子结点递归，出口就是文本结点（递归结束）
  // 2. 节点类型：3种{ 文本结点 return createTextNode()结束、标签结点：createElement attr children 设置（递归_render()）、Component组件 render(return jsx) 再去调用render方法  }
  // return document.createTextNode('render')
  // console.log(vnode)
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') {
    vnode = ''
  }
  if (typeof vnode === 'number') {
    console.log(vnode)
    vnode = String(vnode)
  }
  if(typeof vnode === 'string') {
    let textNode = document.createTextNode(vnode);
    return textNode;
  }
  if (typeof vnode.tag === 'function') {
    const component = createComponent(vnode.tag, vnode.attrs);
    setComponentProps(component, vnode.attrs);
    return component.base
  }
  const dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      setAttribute(dom, key, value)
    })
  }

  if (vnode.children) {
    vnode.children.forEach(child => {
      render(child, dom)
    })
  }
  
  return dom
}
function createComponent (component, props) {
  let inst;
  if (component.prototype && component.prototype.render) {
    inst = new component();
  } else {
    inst = new Component(props);
    inst.constructor = component;
    inst.render = function () {
      return this.constructor(props)
    }
  }
  return inst
}
function setComponentProps (component, props) {
  component.props = props;
  renderComponent(component);
}
// 将component 里面的jsx转化为真实的DOM 还会在setState的时候调用
export function renderComponent (component) {
  let base; //jsx对应的DOM 
  const renderer = component.render();
  base = _render(renderer);
  if (component.base && component.base.parentNode) {
    component.base.parentNode.replaceChild(base, component.base)
  }
  component.base = base;
  base._component = component;
}