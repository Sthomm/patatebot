const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/")

bot.on ('ready', function() {
    bot.user.setPresence({game:{ name: 'Faire des frites'}});
    console.log("bot ready !");
});

bot.login('NDA3NTc4OTUwMzQ1MTYyNzYy.Dh0sUA.d3oArN2Cp9PXnCYsLjh13A6UtVs');

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var help_rmbed = new Discord.RichEmbed()
        .setColor('#FA4141')
        .addField("Commandes de la Patate", "  -Les commandes arrivent")
         message.channel.sendEmbed(help_rmbed);
        //message.channel.sendMessage("Commandes de la Patate :\n -/help pour afficher les commandes");
        console.log("Commande Help demandée !");
    }   

    if (message.content === "Salut"){
        message.reply("Hey");
        console.log("commande Salut effectué");
    }
});
