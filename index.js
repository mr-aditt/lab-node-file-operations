const fs=require("fs");
const os =require("os");
const crypto =require("crypto");
const {data}=require('./data')

const password = userData=>crypto.createHmac('sha256', 'secret').update(userData).digest('hex');

const userData = data({
    password: password("prograd123"),
    userid: 201,
    name: "ProGrad",
    username: "Developer",
    year: 2020,
    qualification: "PhD"
})
console.log(userData);
fs.writeFileSync(`message.txt`, `ProGrad Details
${Object.keys(userData).map(ele => `${ele} -> ${userData[ele]}`).join("\n")}`)
