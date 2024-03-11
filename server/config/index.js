const {pingEP : pingEndPoint } = require("./endpoints")

const PORT = process.env.PORT;

module.exports = {pingEndPoint , PORT}