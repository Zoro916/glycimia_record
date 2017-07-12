import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TabNav from 'components/tabnav';
import Mark from 'components/mark';

//跳转组件
export default class Home extends Component{
    render(){
        return (
            <TabNav mark={<Mark />} selected='new_record'/>
        )
    }
}
