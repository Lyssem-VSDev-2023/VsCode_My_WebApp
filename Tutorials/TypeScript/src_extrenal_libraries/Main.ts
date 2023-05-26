import dotenv from 'dotenv';

const result = dotenv.config();

if (result.error) {
    throw result.error;
}

// Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
console.log(result.parsed);  

console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
