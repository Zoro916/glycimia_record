import React, {Component} from 'react';
import {post} from 'utils/fetch';
import moment from 'moment';
import {hashHistory, push} from 'react-router';

import {
    NavBar,
    Icon,
    TabBar,
    TextareaItem,
    Button,
    List,
    WhiteSpace,
    WingBlank,
    InputItem,
    Picker,
    DatePicker,
    Toast
} from 'antd-mobile';
const minDate = moment('1900-12-31 +0800', 'YYYY-MM-DD HH:mm Z').utcOffset(8);
const Item = List.Item;
export default class Mark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mbg: '',
            is_eat: '',
            remark: '',
            date: '',
            hidden: false
        }
    }
    submit() {
        const {mbg, is_eat, remark, date} = this.state;
        if (mbg == '' || is_eat == '' || date == '') {
            Toast.info('请填写完整监测信息', 3)
        } else {
            post('add', {mbg, is_eat, remark, date}).then((data) => {
                if (data.status == 1) {
                    Toast.info('添加成功', 2);
                    hashHistory.push('/');
                } else {
                    Toast.info(data.err_info, 2);
                }
            })
        }
    }
    render(){
        return (
            <div>
                <NavBar mode="dark">血糖监测记录</NavBar>
                <div>
                    <List>
                        <Item style={{position: 'relative',height: '10px'}}>
                            <Label label="血糖"/>
                            <InputItem
                            onChange={(v)=>{this.setState({mbg: v})}}
                            type="money"
                            value={this.state.mbg}
                            style={{marginLeft: '180px'}}
                            placeholder="请输入血糖值"
                            />
                        </Item>
                        <Picker
                        extra=""
                        onChange={(v)=>{this.setState({is_eat: v})}}
                        data={[{label: '餐前',value: 1},{label: '餐后', value: 2}]}
                        cols={1}
                        >
                            <Item style={{position: 'relative',height: '10px'}} arrow="horizontal">
                                <Label label="餐前/餐后"/>
                                <InputItem
                                value={this.state.is_eat == '' ? '' : (this.state.is_eat == 1 ? '餐前' : '餐后')}
                                editable={false}
                                style={{marginLeft: '180px'}}
                                placeholder="点击选择"
                                />
                            </Item>
                        </Picker>
                        <DatePicker
                        extra=""
                        mode="datetime"
                        onChange={(v)=>{this.setState({date: v.format('YYYY-MM-DD HH:mm')})}}
                        >
                            <Item style={{position: 'relative',height: '10px'}} arrow="horizontal">
                                <Label label="检测时间"/>
                                <InputItem
                                value={this.state.date}
                                editable={false}
                                style={{marginLeft: '180px'}}
                                placeholder="点击选择"
                                />
                            </Item>
                        </DatePicker>
                        <Item style={{position: 'relative'}}>
                            <Label label="&nbsp;&nbsp;备注" star="true"/>
                            <TextareaItem
                                onChange={(v)=>{this.setState({remark: v})}}
                                value={this.state.remark}
                                rows={4}
                                style={{marginLeft: '140px'}}
                                placeholder="例：用药剂量变更、食用含糖食物等"/>
                        </Item>
                    </List>
                </div>
                <WingBlank size="sm" style={{marginTop: '60px'}}>
                    <Button type="primary" onClick={this.submit.bind(this)}>提交</Button>
                </WingBlank>
            </div>
        )
    }
}
class Label extends Component {
    render(){
        return (
            <p style={{width: '140x', position: 'absolute',top:'20px',left: '10px', color: '#666', zIndex: '111',fontSize: '30px'}}>
                {
                    this.props.star
                    ?null
                    :<span style={{color: 'red'}}>*</span>
                }
                {this.props.label}：
            </p>
        )
    }
}
