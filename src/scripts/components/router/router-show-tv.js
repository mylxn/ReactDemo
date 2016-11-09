'use strict';

import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        电视剧 {this.props.params.id}详情
      </div>
    )
  }
})
