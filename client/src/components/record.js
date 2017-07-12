import React, {Component} from 'react';
import {post} from 'utils/fetch';
import moment from 'moment';
import {hashHistory, push} from 'react-router';
import Card from './card';
import {
    NavBar,
    Button,
    List,
    WhiteSpace,
    WingBlank,
    InputItem,
    DatePicker,
    Toast
} from 'antd-mobile';
const Item = List.Item;
export default class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            record: [],
            search_date: ''
        };
    }
    componentWillMount() {
        this.search('')
    }
    search(date) {
        post('list', {search_date: date}).then((data) => {
            this.setState({record: data.data})
        })
    }
    render(){
        return (
            <div>
                <NavBar mode="dark">血糖监测记录</NavBar>
                <DatePicker
                extra=""
                onChange={(v)=>{this.setState({search_date: v.format('YYYY-MM-DD')})}}
                mode="date"
                >
                    <InputItem
                    value={this.state.search_date}
                    style={{marginRight: '140px'}}
                    editable={false}
                    placeholder="选择日期搜索"
                    />
                </DatePicker>
                <Button
                size="small"
                type="primary"
                style={{float: 'right',margin:'-70px 10px 0 0'}}
                onClick={this.search.bind(this, this.state.search_date)}
                >搜索</Button>
                <div>
                    {
                        this.state.record.map((data, index) => {
                            return (
                                <Card {...data} key={index}/>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}
