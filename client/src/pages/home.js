import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TabNav from 'components/tabnav';
import Record from 'components/record';

//跳转组件
export default class Home extends Component{
    render(){
        return (
            <TabNav record={<Record />} selected='record'/>
        )
    }
}
