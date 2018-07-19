import React, { Component } from 'react';



class NoteList extends Component {
  render() {
    return (
      <ul>
      {
        this.props.children.map((child, index) => 
          <li key={index}>{ child }</li>
        )
      }
      </ul>
    );
  }
}

export default NoteList;
