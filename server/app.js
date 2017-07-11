var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var body_parser = require('body-parser');
var multipart = require('connect-multiparty');
var model = require('./model');
var Record = model.Record;
var moment = require('moment');
var app = express();

mongoose.Promise = global.Promise;

app.set('port', process.env.PORT || 5001);
//引入跨域请求中间件cors
app.use(cors());
//引入获取request payload数据的multipart中间件
app.use(multipart());
//引入body-parser中间件
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
app.get('/', function(req, res) {
    res.send('API服务器已启动,可以提供接口支持。');
})
app.post('/add', function(req, res) {
    var {date, mbg, is_eat, remark} = req.body;
    var search_date = moment().format('YYYY-MM-DD');
    var new_record = new Record({date: date, mbg: mbg, is_eat: is_eat, remark: remark, search_date: search_date});
    new_record.save(function(err, data) {
        if (data) {
            res.send({status: 1})
        } else {
            res.send({status: 0, err_info: '数据库异常'})
        }
    })
});
app.post('/list', function(req, res) {
    var {search_date} = req.body;
    if (search_date == '') {
        Record.find().sort({date: -1}).exec(function(err, data) {
            res.send({status: 1, data: data});
        })
    } else {
        Record.find({search_date: search_date}).sort({date: -1}).exec(function(err, data) {
            if (data) {
                res.send({status: 1, data: data});
            } else {
                res.send({status: 0, err_info: '数据库异常'})
            }
        })
    }
})

//启动服务，开始监听端口
app.listen(app.get('port'), function() {
    console.log('服务已启动，请通过 http://localhost:' + app.get('port') + '访问。')
});
