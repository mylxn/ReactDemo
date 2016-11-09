import React from 'react';

import MyButton from './MyButton.js';
import ButtonActions from '../actions/ButtonActions.js';
import ListStore from '../stores/ListStore.js';
export default React.createClass({
  getInitialState(){
    return {
      items:ListStore.getAll()
    }
  },

  createNewItem() {
    ButtonActions.addNewItem('刘晓楠');
  },

  componentDidMount() {
    ListStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    ListStore.removeListener(this._onChange);
  },

  _onChange() {
    this.setState({
      items:ListStore.getAll()
    })
  },


  render() {
    return (
      <MyButton onClick={this.createNewItem} items={this.state.items} />
    )
  }
})
