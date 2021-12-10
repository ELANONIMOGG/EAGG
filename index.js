///////////////////////BOT CONST////////////////////////
const Discord = require("discord.js");
const client = new Discord.Client();
const mySecret = process.env['TOKEN']

///////////////////////BOT ESTADO////////////////////////

function presence() {
  client.user.setPresence({
    status: "dnd",
    game: {
      name: " EL_ANONIMO_GG DEVELOPER | -help ",
      type: "WATCHING"
    }
  });
}

client.on("ready", () => {
  console.log("EL BOT ESTA LISTO!");
  presence();  
});
///////////////////////BOT BIENVENIDA////////////////////////

client.on("message", (message) => {
  if (message.content.startsWith("hola")) {
    message.channel.send("señor locutor!");
  }

  client.on("guildMemberAdd", miembro => {
    var Canal = client.channels.find(channel => channel.id === ("885773997671854091"));
    Canal.send("Bienvenido <@" + miembro.id + "> al servidor, recuerda hablar con respeto.\n\nEsperemos que la pases bien :). :stuck_out_tongue_winking_eye: ");

  });

});

///////////////////////BOT MUSICA////////////////////////

const Distube = require("distube") 
client.distube = new Distube(client, {
emitNewSongonly: false, 
searchsong: false,
leaveonstop: true,
leaveonEmpty: true,
leaveonfinish: true,
})

client.on.distube.on("addlist", (playlist) => {
mesasge.channel.send('Playlist añadida: **${playlist.name}** - **${Playlisy.songs.lenght})
})

client.on.distube.on("addsong",{})

client.on.distube.on("playsong",{})

client.on.distube.on("playlist",{})

client.on.distube.on("error",{})

/////////////////////////////////////////////////////


client.login(mySecret);