const Discord = require('discord.js'), // By Mirror
    { bot, ReactionCollector, MessageEmbed } = require('discord.js'),
    utilisateur = new Discord.Client(), // By Mirror
    { token, id, prefix } = require('./config.json') // By Mirror
// By Mirror
    console.log('[By Mirror]') // By Mirror
// By Mirror
utilisateur.login(token) // By Mirror
utilisateur.on('ready', () => { // By Mirror
    console.log("[Notif] Connecté") // By Mirror
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
    await Promise.all(['✏️','💬','🕵️','🔻','🔳','🕙','🖼️','🌐','🎨','↩️','✅', '❌'].map(r => msgwait.react(r))); // By Mirror
    await msgwait.edit(`Que voulez-vous ajouter à votre embed ?`) // By Mirror
    await msgwait.edit(new MessageEmbed() // By Mirror
    .setDescription([ // By Mirror
        `
        ✏️ **Ajouter**/**Modifier** le titre
        💬 **Ajouter**/**Modifier** la description
        🕵️ **Ajouter**/**Modifier** l'auteur
        🔻 **Ajouter**/**Modifier** le footer
        🔳 **Ajouter**/**Modifier** le thumbnail
        🕙 _**Ajouter**_ un timestamp
        🖼️ **Ajouter**/**Modifier** l'image
        🌐 **Ajouter**/**Modifier** l'url
        🎨 **Ajouter**/**Modifier** la couleur
        ↩️ _**Ajouter**_ un field
        ✅ _**Envoyer**_ l'embed
        ❌ _**Annuler**_
        `
    ])) // By Mirror
// By Mirror
    const filterReaction = (reaction, user) => user.id === message.author.id && !user.bot; // By Mirror
    const filterMessage = (m) => m.author.id === message.author.id && !m.author.bot; // By Mirror
    const collectorReaction = await new ReactionCollector(msgwait, filterReaction); // By Mirror
    collectorReaction.on('collect', async reaction => { // By Mirror
        switch(reaction._emoji.name) { // By Mirror
            case '✏️': // By Mirror
                const messageTitle = await message.channel.send('Veuillez mentionner votre titre 👇'); // By Mirror
                const title = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
// By Mirror
                messageTitle.delete(); // By Mirror
                embedBeforeEdit.setTitle(title); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case '💬': // By Mirror
                const messageDescription = await message.channel.send('Veuillez mentionner votre description 👇'); // By Mirror
                const description = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
// By Mirror
                messageDescription.delete(); // By Mirror
                embedBeforeEdit.setDescription(description); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case '🕵️': // By Mirror
                const messageAuteur = await message.channel.send('Veuillez mentionner votre autheur 👇'); // By Mirror
                const auteur = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
// By Mirror
                messageAuteur.delete(); // By Mirror
                embedBeforeEdit.setAuthor(auteur); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case '🔻': // By Mirror
                const messageFooter = await message.channel.send('Veuillez mentionner votre footer 👇'); // By Mirror
                const footer = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
// By Mirror
                messageFooter.delete(); // By Mirror
                embedBeforeEdit.setFooter(footer); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case '🔳': // By Mirror
                const messageThumbnail = await message.channel.send('Veuillez mentionner votre thumbnail 👇'); // By Mirror
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
            case '🕙': // By Mirror
                embedBeforeEdit.setTimestamp(); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case '🖼️': // By Mirror
                const messageImage = await message.channel.send('Veuillez mentionner votre image 👇'); // By Mirror
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
            case '🌐': // By Mirror
                const messageUrl = await message.channel.send('Veuillez mentionner votre URL 👇'); // By Mirror
                const url = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
                if (!url.includes('http') || !url.includes('https')) { // By Mirror
                    message.channel.send('\`Tu n\'as pas envoyer un lien correct\`') // By Mirror
                    return  // By Mirror
                } // By Mirror
                messageUrl.delete(); // By Mirror
                embedBeforeEdit.setURL(url); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case '🎨': // By Mirror
                const messageColor = await message.channel.send('Veuillez mentionner votre couleur 👇'); // By Mirror
                const color = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
// By Mirror
                messageColor.delete(); // By Mirror
                embedBeforeEdit.setColor(color); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case '↩️': // By Mirror
                const messageField = await message.channel.send('Veuillez mentionner votre field 👇'); // By Mirror
                const titlefield = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content; // By Mirror
// By Mirror
                messageField.delete(); // By Mirror
                const messageDescField = await message.channel.send('Veuillez mentionner la description de votre field 👇'); // By Mirror
                const descfield = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content;
// By Mirror
                messageDescField.delete(); // By Mirror
                embedBeforeEdit.addField(titlefield, descfield); // By Mirror
                msgEmbedForEditing.edit(embedBeforeEdit); // By Mirror
            break; // By Mirror
            case '✅': // By Mirror
                const messageChannel = await message.channel.send('Veuillez mentionner l\'id du channel dans lequel vous voulez envoyer le message 👇 (fait "here" si tu veux l\'envoyer ici)'); // By Mirror
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
            case '❌': // By Mirror
                message.channel.send('Embed-Build Annulé') // By Mirror
                msgEmbedForEditing.delete() // By Mirror
                msgwait.delete() // By Mirror
            break; // By Mirror
        } // By Mirror
    }) // By Mirror
    } // By Mirror
}) // By Mirror