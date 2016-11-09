'use strict';

import React from 'react';
import {Link} from 'react-router';
//方法  里  对象
export default React.createClass({
  render() {
    return (
      <div>
        <div>
          <Link to="/">首页</Link>
          <Link to="/tv">电视剧</Link>
          <Link to="/movie">电影</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
})
