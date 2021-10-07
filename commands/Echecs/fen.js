const { createCanvas , loadImage } = require("canvas");
const { MessageAttachment } = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (args[0].length != 71) return message.channel.send("La fen ne comporte pas le bon nombre de caractère")

    const canvas = createCanvas(800, 800);
    const ctx = canvas.getContext("2d");
    const background = await loadImage("https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/ColinStapczynski/phprnyp9x.png");
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

    const coordonnees = args[0];
    let tour = args[1];
    if (tour == "b") tour = "Blancs"
    if (tour == "n") tour = "Noirs"
    const roques = args[3];
    const PriseEnPassant = args[4];
    const Horloge = args[5];

    L = [];
    let ligne = "";
    for (var i of coordonnees) {
        if ( i == "/") {
            L.push(ligne)
            ligne = ""
        }
        else {
            ligne += i
        }
    }
    L.push(ligne)

    if (tour == "Noirs") {
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

    if (tour == "Blancs") {
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
    message.channel.send(`Trait aux ${tour}`, attachment);
};

module.exports.help = {
    name: 'fen',
    description: 'Renvoies l\'échiquier de la fen mis en argument',
    category: 'echecs',
    cooldown: 2,
    usage:'<fen>',
    args: true,
    isUserAdmin: false,
    permissions: false,
    channel: false
    };