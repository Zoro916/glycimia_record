import React, {Component} from 'react';
import {post} from 'utils/fetch';
import moment from 'moment';
import {hashHistory, push} from 'react-router';
export default class Card extends Component{
    render(){
        return(
            <ul style={{
                    listStyle: 'none',
                    border:'1px solid #ddd',
                    borderRadius: '4px',
                    margin: '10px',
                    padding: '10px',
                    background: '#fff',
                    color: '#666',
                }}>
                <li>
                    <span style={{color: '#b58827',marginRight: '200px'}}>{this.props.date}</span>
                <span style={{fontSize: '26px',color: 'gray'}}>
                    {this.props.is_eat == '' ? '' : (this.props.is_eat == 1 ? '餐前' : '餐后')}
                </span>
                </li>
                <li>血糖：{this.props.mbg}</li>
                <li>备注：{this.props.remark}</li>
            </ul>
        )
    }
}
