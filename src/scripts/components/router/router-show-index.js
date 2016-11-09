'use strict';

import React from 'react';

import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <p>默认列表</p>
        <Link to="tv/shows/2">电视剧2号</Link>
      </div>
    )
  }
})
