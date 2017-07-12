import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {TabBar} from 'antd-mobile';

import new_record_img from 'img/new_record.png';
import new_record_active_img from 'img/new_record_active.png';
import record_img from 'img/record.png';
import record_active_img from 'img/record_active.png';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
//跳转组件
import Home from 'pages/home';
import Add from 'pages/add';
class App extends Component{
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/add" component={Add} />
  </Router>
), document.getElementById("root"));
