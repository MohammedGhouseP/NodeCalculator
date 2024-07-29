// const {randomInt} = require('node:crypto');
// randomInt(1,10,(err,buf)=>{
//     if(err) throw err;
//     // console.log(`buf: ${buf.length}  bytes of random data: ${buf.toString('hex')}` ) // for hex value
//     console.log(`buf: ${buf.length}  bytes of random value: ${buf}` )
// })

const {randomBytes} = require('node:crypto');
randomBytes(109,(err,buf)=>{
    if(err) throw err;
    console.log(`buf: ${buf.length}  bytes of random data: ${buf.toString('hex')}` ) // for hex va;ue
})