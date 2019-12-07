var db = require("../common/mysql");

module.exports = {
    singleByUserName: userName => {
        return db.load(`select * from ub_users where username = '${userName}'`);
    },
    
    singleByEmail: email => {
        return db.load(`select * from ub_users where email = '${email}'`);
    },

    findById: id => {
        return db.findById('ub_users', id);
    },

    findByUsername: userName => {
        return db.findOne('ub_users', 'username', userName);
    },

    findByFacebookId: id => {
        return db.findOne('ub_users', 'facebook_id', id)
    },

    getAllUser: () => {
        return db.findAll("ub_users");
    },

    deleteUser: id => {
        return db.deleteById("ub_users", id);
    },

    deleteUserById: (id) => {
        return db.deleteById('ub_users', id);
    },
    
    addNewUser: (entity) => {
        return db.add("ub_users", entity);
    },

    findOneByEmail: (email) => {
        return db.findOne('ub_users', 'email', email);
    },

    update: (entity) => {
        return db.update('ub_users', entity)
    },

    findOneByToken: (entity) => {
        return db.findOne('ub_users', 'reset_token', entity);
    },

    updateUser: (entity) => {
        return db.update('ub_users', entity);
    }
}