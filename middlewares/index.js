const fs = require("fs");

function logReqRes(filename){
  return (req, res, next) =>{
    const log = `\n${new Date().toLocaleString()} : ${req.ip} : ${req.method} : ${req.url}`;
    fs.appendFile(filename, log, (err, data) => {
    if (err) {
      console.log("Logging Failed");
    }
    next();
  });
  }
}

module.exports = {
  logReqRes
}