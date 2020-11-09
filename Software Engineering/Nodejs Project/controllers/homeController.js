
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.render('index', {title: "Users"})
})

router.showUsers = (req, res) => {
    res.render('users', {
        allUsers: users, title: "Users"
    });
};
console.log('in homeController pass 2');
router.addUsers = (req, res) => {
    console.log('in homeController addUsers');
    var newName = req.body.name;
    console.log("user " + newName);
    var new141 = req.body.csc141;
    console.log("141 " + new141)
    var new142 = req.body.csc142;
    console.log("142 " + new142)
    var new240 = req.body.csc240;
    console.log("240 " + new240)
    var new241 = req.body.csc241;
    console.log("241 " + new241)
    users.push({name: newName, csc141: new142, csc142: new141, csc240: new240, csc241: new241});
    allUsers = users;
    res.render('users', {
        allUsers: users
    });
};
console.log('in homeController pass 3');
router.getNewUser = (req, res) => {
    console.log("in homeController getNewUser");
    res.render('newUsers', {title: "New User"});
};
module.exports = router;