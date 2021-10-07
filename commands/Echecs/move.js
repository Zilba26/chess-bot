const { tourBlanche, fouBlanc, pionBlanc, cavalierBlanc, roiBlanc, echecsNoirs, echecsBlancs, tourNoire, fouNoir, pionNoir, cavalierNoir, roiNoir, alphabet3, replace2, move, echecsNoirs2, echecsBlancs2 } = require('../../chess_functions');
const { MessageAttachment } = require("discord.js");
const { createCanvas , loadImage } = require("canvas");

module.exports.run = async (client, message, args, settings, dbUser) => {
    if (dbUser.game.length == 0) return message.reply(`Tu n'as pas commencé de game, pour en faire une, taper \`${settings.prefix}game <user>\``)

    if (dbUser.game[2] != dbUser.game[1][1]) return message.reply("Ce n'est pas à toi de jouer")

    const player1 = message.member
    const player2 = message.guild.member(dbUser.game[0]);
    const dbUser2 = await client.getUser(player2)
    let P = dbUser.game[1][0].replace("/", "").replace("/", "").replace("/", "").replace("/", "").replace("/", "").replace("/", "").replace("/", "").replace("/", "")
    let newP = ""
    let test = true
    let roc = dbUser.game[1][2]
    let priseEnPassant = "-"
    
    function alphabet2(lettre) {
        if (lettre == "a") return "1"
        if (lettre == "b") return "2"
        if (lettre == "c") return "3"
        if (lettre == "d") return "4"
        if (lettre == "e") return "5"
        if (lettre == "f") return "6"
        if (lettre == "g") return "7"
        if (lettre == "h") return "8"
    }

    if (args.length == 1) return message.channel.send("error")

    if (args.length != 1) {
        const positionPiece = alphabet2(args[0].charAt(args[0].length - 2)) + args[0].charAt(args[0].length - 1)
        //console.log("positionPiece", positionPiece)
        const colonne = positionPiece[0]
        const ligne = positionPiece[1]
        const colonne2 = alphabet2(args[1].charAt(args[1].length - 2))
        const ligne2 = args[1].charAt(args[1].length - 1)
        const piece = P[8*(8 - parseInt(ligne)) + parseInt(colonne) - 1]

        if ((piece.toLowerCase() == piece) && (dbUser.game[2] == "b")) return message.channel.send("Coup invalide")
        if ((piece.toUpperCase() == piece) && (dbUser.game[2] == "n")) return message.channel.send("Coup invalide")

        if (piece == "T") {
            if (!tourBlanche(positionPiece, P).includes(args[1])) {
                return message.reply("Coup invalide")
            }
            else {
                //P = P.replace2(8*(8 - parseInt(ligne)) + parseInt(colonne) - 1, P, "1").replace2(8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1, P, "T")
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "T" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                //console.log(echecsBlancs(P))
                if (echecsBlancs(P).includes("echecs")) {
                    return message.channel.send("Coup invalide (echecs)")
                }
                message.channel.send("Coup valide")
                if ((colonne == "1") && (ligne == "1")) roc = roc.replace("D", "")
                if ((colonne == "8") && (ligne == "1")) roc = roc.replace("R", "")
            }
        }
        else if (piece == "F") {
            if (!fouBlanc(positionPiece, P).includes(args[1])) {
                return message.channel.send("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "F" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (echecsBlancs(P).includes("echecs")) {
                    return message.channel.send("Coup invalide")
                }
                message.channel.send("Coup valide")
            }
        }
        else if (piece == "D") {
            if (!(tourBlanche(positionPiece, P).includes(args[1]) || fouBlanc(positionPiece, P).includes(args[1]))) {
                return message.channel.send("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "D" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (echecsBlancs(P).includes("echecs")) {
                    return message.channel.send("Coup invalide")
                }
                message.channel.send("Coup valide")
            }
        }
        else if (piece == "P") {
            console.log("pionBlanc()", pionBlanc(positionPiece, P, dbUser.game[1][3]))
            if (!(pionBlanc(positionPiece, P, dbUser.game[1][3]).includes(args[1]))) {
                return message.channel.send("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                if (ligne != "7") {
                    P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "P" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                    if (ligne == 5 && dbUser.game[1][3] == args[1]) {
                        P = P.slice(0, 8*(8 - parseInt(ligne2) + 1) + parseInt(colonne2) - 1) + "1" + P.slice(8*(8 - parseInt(ligne2) + 1) + parseInt(colonne2))
                        if (echecsBlancs(P).includes("echecs")) {
                            return message.channel.send("Coup invalide")
                        }
                        message.channel.send("Coup valide")
                    }
                    else {
                        if (echecsBlancs(P).includes("echecs")) {
                            return message.channel.send("Coup invalide")
                        }
                        message.channel.send("Coup valide")
                        if (parseInt(ligne2) - parseInt(ligne) == 2) priseEnPassant = alphabet3(parseInt(colonne)) + (parseInt(ligne) + 1)
                    }
                    //console.log("priseEnPassant", priseEnPassant)
                    
                }
                else {
                    test = false
                    message.channel.send("Ton pion va être promu. Choisis la pièce de promotion").then( () => {
                        const filter = msg => msg.author == message.author
                        message.channel.awaitMessages(filter, { max: 1, time: 30000}).then( collected => {
                            const msg = collected.first()
                            if (msg == undefined) return message.channel.send("Promotion expiré, refais la commande move puis choisis ta promotion plus vite")
                            if (msg.content == "d" || msg.content == "D" || msg.content == "dame" || msg.content == "Dame") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "D" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (echecsBlancs(P).includes("echecs")) {
                                    return message.channel.send("Coup invalide")
                                }
                                message.channel.send("Coup valide")
                            }
                            if (msg.content == "c" || msg.content == "C" || msg.content == "cavalier" || msg.content == "Cavalier") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "C" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (echecsBlancs(P).includes("echecs")) {
                                    return message.channel.send("Coup invalide")
                                }
                                message.channel.send("Coup valide")
                            }
                            if (msg.content == "t" || msg.content == "T" || msg.content == "tour" || msg.content == "Tour") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "T" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (echecsBlancs(P).includes("echecs")) {
                                    return message.channel.send("Coup invalide")
                                }
                                message.channel.send("Coup valide")
                            }
                            if (msg.content == "f" || msg.content == "F" || msg.content == "fou" || msg.content == "Fou") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "F" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (echecsBlancs(P).includes("echecs")) {
                                    return message.channel.send("Coup invalide")
                                }
                                message.channel.send("Coup valide")
                            }

                            newP = P.slice(0, 8) + "/" + P.slice(8, 16) + "/" + P.slice(16, 24) + "/" + P.slice(24, 32) + "/" + P.slice(32, 40) + "/" + P.slice(40, 48) + "/" + P.slice(48, 56) + "/" + P.slice(56)
                        })
                    })
                }
            }
        }
        else if (piece == "C") {
            if (!cavalierBlanc(positionPiece, P).includes(args[1])) {
                return message.reply("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "C" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (echecsBlancs(P).includes("echecs")) {
                    return message.channel.send("Coup invalide")
                }
                message.channel.send("Coup valide")
            }
        }
        else if (piece == "R") {
            if (!roiBlanc(positionPiece, P, dbUser).includes(args[1])) {
                return message.reply("Coup invalide")
            }
            else if ((colonne == "5") && (ligne == "1") && (ligne2 == "1") && (colonne2 == "7")) {
                //message.channel.send("petit roc")
                P = P.slice(0, 60) + "1" + "T" + "R" + "1"
                if ((echecsBlancs(P).includes("echecs")) || (echecsBlancs(P.slice(0, 60) + "R" + "1" + "1" + "T").includes("echecs")) || echecsBlancs((P.slice(0, 60) + "1" + "R" + "1" + "T"))) {
                    return message.channel.send("Coup invalide")
                }
                message.channel.send("Coup valide")
                roc = roc.replace("R", "").replace("D", "")
            }
            else if ((colonne == "5") && (ligne == "1") && (ligne2 == "1") && (colonne2 == "3")) {
                //message.channel.send("grand roc")
                P = P.slice(0, 56) + "1" + "1" + "R" + "T" + "1" + P.slice(-3)
                if ((echecsBlancs(P).includes("echecs")) || (echecsBlancs(P.slice(0, 56) + "T" + "1" + "1" + "1" + "R" + P.slice(-3))) || (echecsBlancs(P.slice(0, 56) + "T" + "1" + "1" + "R" + "1" + P.slice(-3)))) {
                    return message.channel.send("Coup invalide")
                }
                message.channel.send("Coup valide")
                roc = roc.replace("R", "").replace("D", "")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "R" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (echecsBlancs(P).includes("echecs")) {
                    return message.channel.send("Coup invalide")
                }
                message.channel.send("Coup valide")
                roc = roc.replace("R", "").replace("D", "")
            }
        }
        else if (piece == "t") {
            if (!tourNoire(positionPiece, P).includes(args[1])) {
                return message.reply("Coup invalide")
            }
            else {                
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "t" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (echecsNoirs(P).includes("echecs")) {
                    return message.channel.send("Coup invalide")
                }
                message.channel.send("Coup valide")
                if ((colonne == "1") && (ligne == "8")) roc = roc.replace("d", "")
                if ((colonne == "8") && (ligne == "8")) roc = roc.replace("r", "")
            }
        }
        else if (piece == "f") {
            if (!fouNoir(positionPiece, P).includes(args[1])) {
                return message.channel.send("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "f" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (echecsNoirs(P).includes("echecs")) {
                    return message.channel.send("Coup invalide")
                }
                message.channel.send("Coup valide")
            }
        }
        else if (piece == "d") {
            if (!(tourNoire(positionPiece, P).includes(args[1]) || fouNoir(positionPiece, P).includes(args[1]))) {
                return message.channel.send("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "d" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (echecsNoirs(P).includes("echecs")) {
                    return message.channel.send("Coup invalide")
                }
                message.channel.send("Coup valide")
            }
        }
        else if (piece == "p") {
            if (!(pionNoir(positionPiece, P).includes(args[1]))) {
                return message.channel.send("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                if (ligne != "2") {
                    P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "p" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                    if (ligne == 4 && dbUser.game[1][3] == args[1]) {
                        P = P.slice(0, 8*(8 - parseInt(ligne2) - 1) + parseInt(colonne2) - 1) + "1" + P.slice(8*(8 - parseInt(ligne2) - 1) + parseInt(colonne2))
                         if (echecsNoirs(P).includes("echecs")) {
                             return message.channel.send("Coup invalide")
                        }
                        message.channel.send("Coup valide")
                    }
                    else {
                        if (echecsNoirs(P).includes("echecs")) {
                            return message.channel.send("Coup invalide")
                        }
                        message.channel.send("Coup valide")
                        if (parseInt(ligne2) - parseInt(ligne) == -2) priseEnPassant = alphabet3(parseInt(colonne)) + (parseInt(ligne) - 1)
                    }
                    
                }
                else {
                    test = false
                    message.channel.send("Ton pion va être promu. Choisis la pièce de promotion").then( () => {
                        const filter = msg => msg.author == message.author
                        message.channel.awaitMessages(filter, { max: 1, time: 30000}).then( collected => {
                            const msg = collected.first()
                            if (msg == undefined) return message.channel.send("Promotion expiré, refais la commande move puis choisis ta promotion plus vite")
                            if (msg.content == "d" || msg.content == "D" || msg.content == "dame" || msg.content == "Dame") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "d" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (echecsNoirs(P).includes("echecs")) {
                                    return message.channel.send("Coup invalide")
                                }
                                message.channel.send("Coup valide")
                            }
                            if (msg.content == "c" || msg.content == "C" || msg.content == "cavalier" || msg.content == "Cavalier") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "c" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (echecsNoirs(P).includes("echecs")) {
                                    return message.channel.send("Coup invalide")
                                }
                                message.channel.send("Coup valide")
                            }
                            if (msg.content == "t" || msg.content == "T" || msg.content == "tour" || msg.content == "Tour") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "t" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (echecsNoirs(P).includes("echecs")) {
                                    return message.channel.send("Coup invalide")
                                }
                                message.channel.send("Coup valide")
                            }
                            if (msg.content == "f" || msg.content == "F" || msg.content == "fou" || msg.content == "Fou") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "f" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (echecsNoirs(P).includes("echecs")) {
                                    return message.channel.send("Coup invalide")
                                }
                                message.channel.send("Coup valide")
                            }

                            newP = P.slice(0, 8) + "/" + P.slice(8, 16) + "/" + P.slice(16, 24) + "/" + P.slice(24, 32) + "/" + P.slice(32, 40) + "/" + P.slice(40, 48) + "/" + P.slice(48, 56) + "/" + P.slice(56)
                        })
                    })
                }
            }
        }
        else if (piece == "c") {
            if (!cavalierNoir(positionPiece, P).includes(args[1])) {
                return message.reply("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "c" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (echecsNoirs(P).includes("echecs")) {
                    return message.channel.send("Coup invalide")
                }
                message.channel.send("Coup valide")
            }
        }
        else if (piece == "r") {
            if (!roiNoir(positionPiece, P, dbUser).includes(args[1])) {
                return message.reply("Coup invalide")
            }
            else if ((colonne == "5") && (ligne == "8") && (ligne2 == "8") && (colonne2 == "7")) {
                //message.channel.send("petit roc")
                P = P.slice(0, 4) + "1" + "t" + "r" + "1" + P.slice(-56)
                if ((echecsNoirs(P).includes("echecs")) || (echecsNoirs(P.slice(0, 4) + "r" + "1" + "1" + "t" + P.slice(-56)).includes("echecs")) || echecsNoirs((P.slice(0, 4) + "1" + "r" + "1" + "t" + P.slice(-56)))) {
                    return message.channel.send("Coup invalide")
                }
                message.channel.send("Coup valide")
                roc = roc.replace("r", "").replace("d", "")
            }
            else if ((colonne == "5") && (ligne == "8") && (ligne2 == "8") && (colonne2 == "3")) {
                //message.channel.send("grand roc")
                P = "1" + "1" + "r" + "t" + "1" + P.slice(-59)
                if ((echecsNoirs(P).includes("echecs")) || (echecsNoirs("t" + "1" + "1" + "1" + "r" + P.slice(-59))) || (echecsNoirs("t" + "1" + "1" + "r" + "1" + P.slice(-59)))) {
                    return message.channel.send("Coup invalide")
                }
                message.channel.send("Coup valide")
                roc = roc.replace("r", "").replace("d", "")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "r" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (echecsNoirs(P).includes("echecs")) {
                    return message.channel.send("Coup invalide")
                }
                message.channel.send("Coup valide")
                roc = roc.replace("r", "").replace("d", "")
            }
        }
        else return message.channel.send("Coup invalide")
    }


    if (test) {
        newP = P.slice(0, 8) + "/" + P.slice(8, 16) + "/" + P.slice(16, 24) + "/" + P.slice(24, 32) + "/" + P.slice(32, 40) + "/" + P.slice(40, 48) + "/" + P.slice(48, 56) + "/" + P.slice(56)
    }

    let matBlanc = true
    let matNoir = true

    let coupsValides2 = []
    let coupsValides3 = []

    for (let i of echecsBlancs2(P)) {
        let k = (i[0] % 8 + 1).toString() + (8 - Math.floor(i[0] / 8)).toString()
        for (let j  of i) {
            if ( ["a", "b", "c", "d", "e", "f", "g", "h"].includes(j[0]) ) {
                let arg = [k, j]
                //console.log("arg", arg)
                //console.log(move(P, arg, dbUser))
                if (move(P, arg, dbUser) != "Coup invalide") {
                    matBlanc = false
                    coupsValides2.push(arg)
                    //console.log("coupsValidesBlancs", coupsValides2)
                }
            }
        }
    }

    for (let i of echecsNoirs2(P)) {
        let k = (i[0] % 8 + 1).toString() + (8 - Math.floor(i[0] / 8)).toString()
        for (let j  of i) {
            if ( ["a", "b", "c", "d", "e", "f", "g", "h"].includes(j[0]) ) {
                let arg = [k, j]
                //console.log("arg", arg)
                //console.log(move(P, arg, dbUser))
                if (move(P, arg, dbUser) != "Coup invalide") {
                    matNoir = false
                    coupsValides3.push(arg)
                    //console.log("coupsValidesNoirs", coupsValides3)
                }
            }
        }
    }

    //console.log("echecsBlancs2", echecsBlancs2(P))
    //console.log("noirmat", echecsNoirs(P))

    if (matBlanc) {
        message.channel.send("Les blancs ont gagnés")
        client.updateUser(message.guild.member(dbUser.game[0]), { game: []});
        client.updateUser(message.member, { game: []});
    }

    if (matNoir) {
        message.channel.send("Les noirs ont gagnés")   
        client.updateUser(message.guild.member(dbUser.game[0]), { game: []});
        client.updateUser(message.member, { game: []});     
    }

    let couleur = ""
    if (dbUser.game[1][1] == "b") couleur = "n"
    else couleur = "b"

    client.updateUser(player1, { game: [player2, [newP, couleur, roc, priseEnPassant, "0", "1"], dbUser.game[2]]});
    client.updateUser(player2, { game: [player1, [newP, couleur, roc, priseEnPassant, "0", "1"], dbUser2.game[2]]});

    //CANVAS // FEN

    const canvas = createCanvas(800, 800);
    const ctx = canvas.getContext("2d");
    let background = await loadImage("https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/ColinStapczynski/phprnyp9x.png");
    if (dbUser.game[2] == "b") background = await loadImage("./images/tapis_echecs.png")
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const PionNoir = await loadImage("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png");
    const TourNoire = await loadImage("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png");
    const CavalierNoir = await loadImage("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png");
    const FouNoir = await loadImage("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png");
    const DameNoire = await loadImage("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png");
    const RoiNoir = await loadImage("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png");
    const PionBlanc = await loadImage("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png");
    const TourBlanche = await loadImage("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png");
    const CavalierBlanc = await loadImage("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png");
    const FouBlanc = await loadImage("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png");
    const DameBlanche = await loadImage("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png");
    const RoiBlanc = await loadImage("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png");

    L = [];
    let ligne = "";
    for (var i of newP) {
        if ( i == "/") {
            L.push(ligne)
            ligne = ""
        }
        else {
            ligne += i
        }
    }
    L.push(ligne)
    
    if (dbUser.game[2] == "b") {
        for (var fen in L) { //fen = indice d'une ligne comme "pppppppp"
            for (var i in L[fen]) { //i = indice de l'élément de la ligne fen comme "p"
                if (L[fen][i] != 1) {
                    switch(L[fen][i]) {
                        case"p": {
                            ctx.drawImage(PionNoir, 700-(100*i), 700-(100*(fen)), 100, 100)
                            break
                        }
                        case"t": {
                            ctx.drawImage(TourNoire, 700-(100*i), 700-(100*(fen)), 100, 100)
                            break
                        }
                        case"c": {                        
                            ctx.drawImage(CavalierNoir, 700-(100*i), 700-(100*(fen)), 100, 100)
                            break
                        }
                        case"f": {                        
                            ctx.drawImage(FouNoir, 700-(100*i), 700-(100*(fen)), 100, 100)
                            break
                        }
                        case"d": {                        
                            ctx.drawImage(DameNoire, 700-(100*i), 700-(100*(fen)), 100, 100)
                            break
                        }
                        case"r": {                        
                            ctx.drawImage(RoiNoir, 700-(100*i), 700-(100*(fen)), 100, 100)
                            break
                        }
                        case"P": {                        
                            ctx.drawImage(PionBlanc, 700-(100*i), 700-(100*(fen)), 100, 100)
                            break
                        }
                        case"T": {                        
                            ctx.drawImage(TourBlanche, 700-(100*i), 700-(100*(fen)), 100, 100)
                            break
                        }
                        case"C": {                        
                            ctx.drawImage(CavalierBlanc, 700-(100*i), 700-(100*(fen)), 100, 100)
                            break
                        }
                        case"F": {                        
                            ctx.drawImage(FouBlanc, 700-(100*i), 700-(100*(fen)), 100, 100)
                            break
                        }
                        case"D": {                        
                            ctx.drawImage(DameBlanche, 700-(100*i), 700-(100*(fen)), 100, 100)
                            break
                        }
                        case"R": {                        
                            ctx.drawImage(RoiBlanc, 700-(100*i), 700-(100*(fen)), 100, 100)
                            break
                        }
                    }
                }
            }
        }
    }

    if (dbUser.game[2] == "n") {
        for (var fen in L) { //fen = indice d'une ligne comme "pppppppp"
            for (var i in L[fen]) { //i = indice de l'élément de la ligne fen comme "p"
                if (L[fen][i] != 1) {
                    switch(L[fen][i]) {
                        case"p": {
                            ctx.drawImage(PionNoir, 100*i, 100*(fen), 100, 100)
                            break
                        }
                        case"t": {
                            ctx.drawImage(TourNoire, 100*i, 100*(fen), 100, 100)
                            break
                        }
                        case"c": {                        
                            ctx.drawImage(CavalierNoir, 100*i, 100*(fen), 100, 100)
                            break
                        }
                        case"f": {                        
                            ctx.drawImage(FouNoir, 100*i, 100*(fen), 100, 100)
                            break
                        }
                        case"d": {                        
                            ctx.drawImage(DameNoire, 100*i, 100*(fen), 100, 100)
                            break
                        }
                        case"r": {                        
                            ctx.drawImage(RoiNoir, 100*i, 100*(fen), 100, 100)
                            break
                        }
                        case"P": {                        
                            ctx.drawImage(PionBlanc, 100*i, 100*(fen), 100, 100)
                            break
                        }
                        case"T": {                        
                            ctx.drawImage(TourBlanche, 100*i, 100*(fen), 100, 100)
                            break
                        }
                        case"C": {                        
                            ctx.drawImage(CavalierBlanc, 100*i, 100*(fen), 100, 100)
                            break
                        }
                        case"F": {                        
                            ctx.drawImage(FouBlanc, 100*i, 100*(fen), 100, 100)
                            break
                        }
                        case"D": {                        
                            ctx.drawImage(DameBlanche, 100*i, 100*(fen), 100, 100)
                            break
                        }
                        case"R": {                        
                            ctx.drawImage(RoiBlanc, 100*i, 100*(fen), 100, 100)
                            break
                        }
                    }
                }
            }
        }
    }

    const attachment = new MessageAttachment(canvas.toBuffer(), "fen.png");
    message.channel.send(attachment);
    //message.channel.send(`Trait aux ${tour}`, attachment);
    
};

module.exports.help = {
    name: 'move',
    description: 'fait un coup à une partie d\'échec',
    category: 'echecs',
    cooldown: 2,
    usage:'<move>',
    args: true,
    isUserAdmin: false,
    permissions: false,
    channel: false
    };