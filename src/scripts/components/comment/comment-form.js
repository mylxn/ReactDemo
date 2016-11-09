'use strict';

import React from 'react';

class CommentForm extends React.Component {
  handleClick(){
    let author = this.refs.author.value,
      content = this.refs.content.value;
    this.refs.author.value = "";
    this.refs.content.value = "";
    this.props.oncomsub({author,content,date:new Date().getTime()});
  }
  render () {
    return (
      <div className="yo-list">
        <label className="item item-input">
          <input type="text" className="yo-input flex" ref="author" placeholder="发布者"/>
        </label>
        <label className="item item-input">
          <textarea className="yo-input flex" ref="content" placeholder="留言内容"></textarea>
        </label>
        <label>
          <button onClick={this.handleClick.bind(this)} className="yo-btn yo-btn-l">发表评论</button>
        </label>
      </div>
    )
  }
}
export default CommentForm;
