"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var result = dotenv_1.default.config();
if (result.error) {
    throw result.error;
}
// Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
console.log(result.parsed);
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
