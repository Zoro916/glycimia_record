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
            start_date: '',
            end_date: '',
            arrow: false,
            show: false
        };
    }
    componentWillMount() {
        this.search(this.state.start_date, this.state.end_date)
    }
    search(start, end) {
        post('list', {
            start_date: start,
            end_date: end
        }).then((data) => {
            if(data.status == 1){
                this.setState({
                    record: data.data,
                    arrow: false,
                    show: false
                })
            }
        })
    }
    render(){
        return (
            <div>
                <NavBar mode="dark">血糖监测记录</NavBar>
                <Item
                onClick={()=>{this.setState({arrow: !this.state.arrow,show: !this.state.show})}}
                arrow={this.state.arrow ? 'up' : 'down'}>
                    按时间搜索
                </Item>
                {
                    this.state.show
                    ?
                    <div style={{position: 'relative',background: '#fff'}}>
                        <DatePicker
                        extra=""
                        onChange={(v)=>{this.setState({start_date: v.format('YYYY-MM-DD')})}}
                        mode="date"
                        >
                            <Item style={{marginRight: '100px'}}>
                                <InputItem editable={false} value={this.state.start_date} placeholder="开始时间"/>
                            </Item>

                        </DatePicker>
                        <DatePicker
                        extra=""
                        onChange={(v)=>{this.setState({end_date: v.format('YYYY-MM-DD')})}}
                        mode="date"
                        >
                            <Item style={{marginRight: '100px'}}>
                                <InputItem editable={false} value={this.state.end_date} placeholder="结束时间"/>
                            </Item>

                        </DatePicker>
                        <span style={{
                            display: 'block',
                            position: 'absolute',
                            bottom: '20px',
                            right: '20px',
                            color: '#6fa8dc'
                        }}
                        onClick={this.search.bind(this, this.state.start_date, this.state.end_date)}
                        >搜索</span>
                    </div>
                    :
                    null
                }

                <div>
                    {
                        this.state.record.map((data, index) => {
                            return (
                                <Card {...data}
                                key={index}
                                refresh={this.search.bind(this)}
                                start={this.state.start_date}
                                end={this.state.end_date}
                                />
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}
