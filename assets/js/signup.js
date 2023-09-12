import {user_detail} from "../js/signin.js";
const user_detail = require("../js/signin.js")
user_detail.forEach(user => {

    console.log(`email ${user.email}, password${user.password}`);
});