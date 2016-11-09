'use strict';

import React from 'react';
import CommentItem from './comment-item';



class CommentList extends React.Component {
  render() {
    let CommentNodes = this.props.data.map((comment,index) => {
      return (
        <CommentItem key={index} author={comment.author} date={comment.date}>
          {comment.content}
        </CommentItem>
      )
    });

    return (
      <div>
        {CommentNodes}
      </div>
    )
  }
}

export {CommentList as default};
