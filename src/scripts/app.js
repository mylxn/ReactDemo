'use strict';
import '../styles/usage/page/app.scss';
import React from 'react';
import ReactDom from 'react-dom';
import MyButtonController from './flux/components/MyButtonController.js';

let app = document.getElementById('app');

ReactDom.render(
  <MyButtonController />
,app)

//解决有些模块不能热替换的问题  只在入口文件配置这句话即可
if (module.hot) {
  module.hot.accept();
}
