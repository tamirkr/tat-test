/**
 * Created by Tamir on 09/01/2017.
 */
var data = require('../model/books.json');

exports.getBooks = function (req, res) {
    res.send(data);
}