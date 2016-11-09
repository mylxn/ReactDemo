'use strict';
import '../styles/usage/page/app.scss';
import React from 'react';
import ReactDom from 'react-dom';
import CommentBox from './components/comment/comment-box.js';
路由
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './components/router/router-app.js';
import Tv from './components/router/router-tv.js';
import Movie from './components/router/router-movie.js';
import Shows from './components/router/router-show-tv.js';
import ShowIndex from './components/router/router-show-index.js';

let handleEnter = () => {
  console.log('Enter');
}

let handleLeave = () => {
  console.log('Leave');
}


let Comments = [

]

let app = document.getElementById('app');
ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="tv" component={Tv}>
        <IndexRoute component={ShowIndex}></IndexRoute>
        <Route path="/shows/:id" onEnter={handleEnter} onLeave={handleLeave} component={Shows} />
        <Redirect from="shows/:id" to ="/shows/:id" />
      </Route>
      <Route path="movie" component={Movie}></Route>
    </Route>
  </Router>
),app);

ReactDom.render(

,app)

//解决有些模块不能热替换的问题  只在入口文件配置这句话即可
if (module.hot) {
  module.hot.accept();
}
