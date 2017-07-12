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
export default class TabNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab: props.selected,
            hidden: false,
        }
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
                    hashHistory.push('/')
                }}>
                    {this.props.record}
                </TabBar.Item>
                <TabBar.Item
                title="添加记录"
                icon={new_record_img}
                selectedIcon={new_record_active_img}
                key="1"
                data-seed="logId1"
                selected={this.state.selectedTab === 'new_record'}
                onPress={() => {
                    hashHistory.push('/add')
                }}>
                    {this.props.mark}
                </TabBar.Item>
            </TabBar>
        )
    }
}
