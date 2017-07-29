import React, {Component} from 'react';
import {post} from 'utils/fetch';
import moment from 'moment';
import {Button,Modal} from 'antd-mobile';
import {hashHistory, push} from 'react-router';
import dele_img from 'img/dele.png';
export default class Card extends Component{
    dele_record(id){
        post('dele', {record_id: id}).then((data) => {
            if(data.status == 1){
                this.props.refresh(this.props.start,this.props.end);
            }
        })
    }
    render(){
        const alert = Modal.alert;
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
                <li style={{position: 'relative',margin: '0 10px 20px 10px',padding: '20px 10px',borderBottom: '1px solid #ccc'}}>
                    <span style={{
                            display: 'block',
                            position: 'absolute',
                            top: '20px',
                            right: '10px',
                        }}>
                        <img src={dele_img} onClick={
                            () => alert('删除', '您确定删除么?', [
                              { text: '取消', onPress: () => console.log('cancel') },
                              { text: '确定', onPress: this.dele_record.bind(this, this.props.record_id), style: { fontWeight: 'bold' } },
                            ])
                        }/>
                    </span>
                    <span style={{color: '#b58827',marginRight: '200px'}}>{this.props.date}</span>
                    <span style={{fontSize: '28px',color: '#fff',padding:'8px',display: 'inline-block',borderRadius:'10px',background: '#6fa8dc'}}>
                        {this.props.is_eat == '' ? '' : (this.props.is_eat == 1 ? '餐前' : '餐后')}
                    </span>
                </li>
                <li style={{padding: '10px 20px'}}>血糖：{this.props.mbg}</li>
                <li style={{padding: '10px 20px'}}>备注：{this.props.remark}</li>
            </ul>
        )
    }
}
