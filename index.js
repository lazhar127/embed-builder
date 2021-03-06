const Discord = require('discord.js'), // By Mirror
    { bot, ReactionCollector, MessageEmbed } = require('discord.js'),
    utilisateur = new Discord.Client(), // By Mirror
    { token, id, prefix } = require('./config.json') // By Mirror
// By Mirror
    console.log('[By Mirror]') // By Mirror
// By Mirror
utilisateur.login(token) // By Mirror
utilisateur.on('ready', () => { // By Mirror
    console.log("[Notif] ConnectÃ©") // By Mirror
}) // By Mirror
// By Mirror
utilisateur.on('message', async (message) => { // By Mirror
    if (message.type !== 'DEFAULT' || message.author.bot) { // By Mirror
        return // By Mirror
    } // By Mirror
// By Mirror
    const args = message.content.trim().split(/ +/g) // By Mirror
    const commandName = args.shift().toLowerCase() // By Mirror
    if (!commandName.startsWith(prefix)) return // By Mirror
    const command = commandName.slice(prefix.length) // By Mirror
    if (!command) return // By Mirror
// By Mirror
// By Mirror
    if (command == "embedbuilder" || command == "embedbuild" || command == "eb") { // By Mirror
        if (!message.guild) { // By Mirror
            return message.reply(`\`Tu n'as pas le droit d'executer des commandes en DM.\``) // By Mirror
        } // By Mirror
        if (!message.member.hasPermission(`MANAGE_MESSAGES`)) { // By Mirror
            return message.reply(`\`Tu n'as pas la permission de faire cette commande.\``) // By Mirror
        } // By Mirror
    let embedBeforeEdit = new MessageEmbed() // By Mirror
    .setFooter(`embed-builder by mirror`) // By Mirror
     // By Mirror
    let msgEmbedForEditing = await message.channel.send(embedBeforeEdit) // By Mirror
    const msgwait = await message.channel.send('Un instant...'); // By Mirror
    await Promise.all(['âï¸','ð¬','ðµï¸','ð»','ð³','ð','ð¼ï¸','ð','ð¨','â©ï¸','â', 'â'].map(r => msgwait.react(r))); // By Mirror
    await msgwait.edit(`Que voulez-vous ajouter Ã  votre embed ?`) // By Mirror
    await msgwait.edit(new MessageEmbed() // By Mirror
    .setDescription([ // By Mirror
        `
        âï¸ **Ajouter**/**Modifier** le titre
        ð¬ **Ajouter**/**Modifier** la description
        ðµï¸ **Ajouter**/**Modifier** l'auteur
        ð» **Ajouter**/**Modifier** le footer
        ð³ **Ajouter**/**Modifier** le thumbnail
        ð _**Ajouter**_ un timestamp
        ð¼ï¸ **Ajouter**/**Modifier** l'image
        ð **Ajouter**/**Modifier** l'url
        ð¨ **Ajouter**/**Modifier** la couleur
        â©ï¸ _**Ajouter**_ un field
        â _**Envoyer**_ l'embed
        â _**Annuler**_
        `
    ])) // By Mirror
// By Mirror
    const filterReaction = (reaction, user) => user.id === message.author.id && !user.bot; // By Mirror
    const filterMessage = (m) => m.author.id === message.author.id && !m.author.bot; // By Mirror
    const collectorReaction = await new ReactionCollector(msgwait, filterReaction); // By Mirror
    collectorReaction.on('collect', async reaction => { // By Mirror
        switch(reaction._emoji.name) { // By Mirror
            case 'âï¸': // By Mirror
                const messageTitle = await message.channel.send('Veuillez mentionner votre titre ð'); // By Mirror
                const title = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
// By Mirror
                messageTitle.delete(); // By Mirror
                embedBeforeEdit.setTitle(title); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case 'ð¬': // By Mirror
                const messageDescription = await message.channel.send('Veuillez mentionner votre description ð'); // By Mirror
                const description = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
// By Mirror
                messageDescription.delete(); // By Mirror
                embedBeforeEdit.setDescription(description); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case 'ðµï¸': // By Mirror
                const messageAuteur = await message.channel.send('Veuillez mentionner votre autheur ð'); // By Mirror
                const auteur = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
// By Mirror
                messageAuteur.delete(); // By Mirror
                embedBeforeEdit.setAuthor(auteur); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case 'ð»': // By Mirror
                const messageFooter = await message.channel.send('Veuillez mentionner votre footer ð'); // By Mirror
                const footer = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
// By Mirror
                messageFooter.delete(); // By Mirror
                embedBeforeEdit.setFooter(footer); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case 'ð³': // By Mirror
                const messageThumbnail = await message.channel.send('Veuillez mentionner votre thumbnail ð'); // By Mirror
                const thumbnail = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
                if (!thumbnail.includes('http') || !thumbnail.includes('https')) { // By Mirror
                    message.channel.send('\`Tu n\'as pas envoyer un lien d\'image correct\`') // By Mirror
                    return  // By Mirror
                } // By Mirror
// By Mirror
                messageThumbnail.delete(); // By Mirror
                embedBeforeEdit.setThumbnail(thumbnail); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case 'ð': // By Mirror
                embedBeforeEdit.setTimestamp(); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case 'ð¼ï¸': // By Mirror
                const messageImage = await message.channel.send('Veuillez mentionner votre image ð'); // By Mirror
                const image = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
                if (!image.includes('http') || !image.includes('https')) { // By Mirror
                    message.channel.send('\`Tu n\'as pas envoyer un lien d\'image correct\`') // By Mirror
                    return  // By Mirror
                } // By Mirror
// By Mirror
                messageImage.delete(); // By Mirror
                embedBeforeEdit.setImage(image); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case 'ð': // By Mirror
                const messageUrl = await message.channel.send('Veuillez mentionner votre URL ð'); // By Mirror
                const url = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
                if (!url.includes('http') || !url.includes('https')) { // By Mirror
                    message.channel.send('\`Tu n\'as pas envoyer un lien correct\`') // By Mirror
                    return  // By Mirror
                } // By Mirror
                messageUrl.delete(); // By Mirror
                embedBeforeEdit.setURL(url); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case 'ð¨': // By Mirror
                const messageColor = await message.channel.send('Veuillez mentionner votre couleur ð'); // By Mirror
                const color = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
// By Mirror
                messageColor.delete(); // By Mirror
                embedBeforeEdit.setColor(color); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case 'â©ï¸': // By Mirror
                const messageField = await message.channel.send('Veuillez mentionner votre field ð'); // By Mirror
                const titlefield = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
// By Mirror
                messageField.delete(); // By Mirror
                const messageDescField = await message.channel.send('Veuillez mentionner la description de votre field ð'); // By Mirror
                const descfield = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content;
// By Mirror
                messageDescField.delete(); // By Mirror
                embedBeforeEdit.addField(titlefield, descfield); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case 'â': // By Mirror
                const messageChannel = await message.channel.send('Veuillez mentionner l\'id du channel dans lequel vous voulez envoyer le message ð (fait "here" si tu veux l\'envoyer ici)'); // By Mirror
                const channel = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
                if (channel == "here") { // By Mirror
                    message.guild.channels.cache.get(message.channel.id).send(embedBeforeEdit); // By Mirror
                } // By Mirror
// By Mirror
                messageChannel.delete(); // By Mirror
                msgEmbedForEditing.delete() // By Mirror
                msgwait.delete() // By Mirror
                if (channel == "here") { // By Mirror
                    return; // By Mirror
                } else if (!message.guild.channels.cache.get(channel)) return message.channel.send('Channel invalide'); // By Mirror
                else message.guild.channels.cache.get(channel).send(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case 'â': // By Mirror
                message.channel.send('Embed-Build AnnulÃ©') // By Mirror
                msgEmbedForEditing.delete() // By Mirror
                msgwait.delete() // By Mirror
            break; // By Mirror
        } // By Mirror
    }) // By Mirror
    } // By Mirror
}) // By Mirror