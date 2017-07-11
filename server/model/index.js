var autoIncrement = require('mongoose-auto-increment');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.createConnection('127.0.0.1','record');

var record_schema = new Schema({
    id: { type: Schema.Types.ObjectId, ref: 'id' },
    date: String,
    search_date: String,
    mbg: String,
    remark: String,
    is_eat: String
})
autoIncrement.initialize(db);

record_schema.plugin(autoIncrement.plugin, {model: 'Record', field: 'record_id'});

exports.Record = db.model('Record', record_schema);
