const db = require('../common/mysql');
const constant = require('../utils/constants');

module.exports = {
    updateIntroduce: (entity) => {
        return db.update(constant.TUTOR_TABLE, enitty);
    }
}