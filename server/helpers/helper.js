var bcrypt = require('bcrypt');
var config = require('config');
var moment = require("moment");

function generateKey(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function GetTimeNow() {
    return moment().format("YYYY/MM/DD hh:mm:ss")
}
function UpdatePostDate(value) {
    return moment(value).format("YYYY/MM/DD hh:mm:ss")
}
function ConvertToMilliSecond(value) {
    return moment.utc(value).valueOf();
}
function hash_password(password) {
    var saltRounds = config.get('salt');
    var hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}

module.exports = {
    generateKey,
    hash_password: hash_password,
    GetTimeNow: GetTimeNow,
    UpdatePostDate: UpdatePostDate,
    ConvertToMilliSecond: ConvertToMilliSecond
}