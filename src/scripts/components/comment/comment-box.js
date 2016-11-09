'use strict';

import React from 'react';
import CommentList from './comment-list';
import CommentForm from './comment-form';
//定义组件
class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {data: []};

    this.getComments(this);

  };
  getComments() {
    fetch('/mock/comments.json').then(response => response.json()).then(data => {
      this.setState({data:data});//setState改变值
    }).catch(e => {
      console.log("Oops,error");
    })
  }
  handleCommentSubmit(comment) {
    console.log(comment);
    let comments = this.state.data;
    comments.push(comment);
    this.setState({data:comments});
  }

  render() {
    return (
      <div className="m-index">
        <div>
          <h1>评论..</h1>
        </div>
        <CommentList data={this.state.data}/>
        <CommentForm oncomsub={this.handleCommentSubmit.bind(this)} />
      </div>
    )
  }
}

export { CommentBox as default };
