const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name:{type:String,default:''},
	email:{type:String,default:''},
	last_login:{type:Date,default:Date.now}
});
	
module.exports = mongoose.model('User',UserSchema);