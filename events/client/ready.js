const {prefix}= require('../../config.json')
module.exports=client=>{
    client.user.setActivity(`${prefix}help | SF Graphics`)
    console.log(`Hoi! ${client.user.username} is beschikbaar voor commands!`)
}