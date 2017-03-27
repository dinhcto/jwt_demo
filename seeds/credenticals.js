const ROLE = require('./../constant/user-role');

exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('tbl_credenticals').del()
        .then(function () {
            // Inserts seed entries
            return knex('tbl_credenticals').insert([
                {id : 1, colName : 'rowValue1'},
                {id : 2, colName : 'rowValue2'},
                {id : 3, colName : 'rowValue3'}
            ]);
        });
};