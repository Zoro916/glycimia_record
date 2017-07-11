import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {TabBar} from 'antd-mobile';

import new_record_img from 'img/new_record.png';
import new_record_active_img from 'img/new_record_active.png';
import record_img from 'img/record.png';
import record_active_img from 'img/record_active.png';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
//跳转组件
import Mark from 'components/mark';
import Record from 'components/record';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'record',
            hidden: false,
        }
    }
    handleTab(state){
        this.setState({
            selectedTab: state
        })
    }
    render(){
        return (
            <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            >
                <TabBar.Item
                title="我的记录"
                icon={record_img}
                selectedIcon={record_active_img}
                key="2"
                data-seed="logId1"
                selected={this.state.selectedTab === 'record'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'record',
                    });
                }}>
                    <Record handleTab={this.handleTab.bind(this)}/>
                </TabBar.Item>
                <TabBar.Item
                title="添加记录"
                icon={new_record_img}
                selectedIcon={new_record_active_img}
                key="1"
                data-seed="logId1"
                selected={this.state.selectedTab === 'new_record'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'new_record',
                    });
                }}>
                    <Mark handleTab={this.handleTab.bind(this)}/>
                </TabBar.Item>
            </TabBar>
        )
    }
}
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
), document.getElementById("root"));
