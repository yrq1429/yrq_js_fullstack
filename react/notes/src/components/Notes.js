import React, { Component } from 'react'
import Note from './Note';
import { db, loadCollection } from '../database'
class Notes extends Component {
  constructor (props) {
    super(props)
    this.getInitialData()
  }
  getInitialData () {
    loadCollection('notes')
    .then(collection => {
      // console.log(collection)
      // collection.insert([
      //   {
      //     text: 'hello ~'
      //   },
      //   {
      //     text: 'hola ~'
      //   }
      // ]);
      // db.saveDatabase();
      const entities = collection.chain()
        .find()
        .simplesort('$loki', 'isdesc')
        .data()
      this.setState({
        entities
      })
    })
  }
  // state 相当于Vue 的data 
  state = {
    entities: []
  }
  destoryEntity (entity) {
    const _entities = this.state.entities.filter((_entity) => {
      return _entity.$loki !== entity.$loki
    })
    this.setState({
      entities: _entities
    })
  }
  createEntry () {
    loadCollection('notes')
    .then((collection) => {
      const entity = collection.insert({
        text: ''
      })
      db.saveDatabase();
      this.setState((prevState) => {
      const _entities = prevState.entities;
      _entities.unshift(entity)
      return {
        entities: _entities
      }
    })
    })
    
  }
  render() {
    // react 独有的JSX 模板引擎  在js 里面写HTML  className？
    // HTML是会被编译成为js class是一个关键字 所以不能使用class
    const entities = this.state.entities;
    const noteItems = entities.map((entity, index) => 
      <Note
        key={ entity.$loki }
        entity = { entity }
        destoryEntity = {this.destoryEntity.bind(this)}
      />
    )
    console.log(noteItems)
    return (
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon"></i>
          Notes App _ React.js
        </h4>
        <button className="ui right floated basic violet button" onClick={ this.createEntry.bind(this) }>
          添加笔记
        </button>
        <div className="ui divided items">
          { noteItems }
          {!this.state.entities.length && <span className="ui small disabled header">还没有笔记请添加</span>}
        </div>
        
      </div>
    )
  }
}

export default Notes