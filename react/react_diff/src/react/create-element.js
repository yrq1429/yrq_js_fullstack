function createElement (tag, attrs, ...children) {
  // console.log(tag, attrs, children);
  // 目的是返回一个虚拟DOM
  attrs = attrs || {};
  return {
    tag,
    attrs,
    children,
    key: attrs.key || null  //标注唯一性
  }
}


export default createElement;