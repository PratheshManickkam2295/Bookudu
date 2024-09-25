const bcrypt = require('bcrypt');
const saltRounds = 10; 


async function generateHashedPassword(plainTextPassword = "") {
    const myPlaintextPassword = 's0/\/\P4$$w0rD';
    let hashedPassword;
    
    
    await bcrypt.hash(PlaintextPassword, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        if (err) {
            console.log("ERROR", err)
        } else {
            hashedPassword = hash;
        }
    }); 
    return hashedPassword;
}

module.exports = {
    generateHashedPassword, 
}