const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPassword = 'th1s1smyp@ssw0rd';
const otherPassword = 'th1s1swr0ngp@ssw0rd';

bcrypt.hash(myPassword, saltRounds).then(hashed => {
    console.log('----- Hashing Using Bcrypt -----')
    console.log('Plaintext: ', myPassword)
    console.log('Hashed: ', hashed)

    console.log('\nPerforming: bcrypt.compareSync(myPassword, hashed)')
    const result1 = bcrypt.compareSync(myPassword, hashed)
    console.log(`Comparing ${myPassword} against ${hashed}: ${result1}`)
    
    console.log('\nPerforming: bcrypt.compareSync(otherPassword, hashed)')
    const result2 = bcrypt.compareSync(otherPassword, hashed)
    console.log(`Comparing ${otherPassword} against ${hashed}: ${result2}`)

    console.log('\nTrue matched, False means doesnt match')
});

