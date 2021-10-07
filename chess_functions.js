function alphabet(lettre) {
    if (lettre == "1") return "a"
    if (lettre == "2") return "b"
    if (lettre == "3") return "c"
    if (lettre == "4") return "d"
    if (lettre == "5") return "e"
    if (lettre == "6") return "f"
    if (lettre == "7") return "g"
    if (lettre == "8") return "h"
}

function replace(index, string, newCharacter) {
    return string.slice(0, index) + newCharacter + string.slice(index + 1)
}

module.exports.replace2 = (index, string, newCharacter) => {
    return string.slice(0, index) + newCharacter + string.slice(index + 1)
}

module.exports.alphabet3 = (lettre) => {
    if (lettre == "1") return "a"
    if (lettre == "2") return "b"
    if (lettre == "3") return "c"
    if (lettre == "4") return "d"
    if (lettre == "5") return "e"
    if (lettre == "6") return "f"
    if (lettre == "7") return "g"
    if (lettre == "8") return "h"
}

module.exports.tourBlanche = (position, P) => {
    let coupsValides = []
    if (position.length == 0) return console.log("Aucune tour blanche sur l'échiquier")
    const colonne = position[0]
    const ligne = position[1]
    const index = 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1
    for (let i = 1; parseInt(colonne) + i < 9; i++) {
        const a = 8*(8 - parseInt(ligne)) + parseInt(colonne) + i - 1
        if ((P[a] == 1)) {
            coupsValides.push("T" + alphabet(parseInt(colonne) + i) + ligne)
            coupsValides.push(alphabet(parseInt(colonne) + i) + ligne)
        }            
        if (P[a] == "t" || P[a] =="c" || P[a] =="d" || P[a] =="p" || P[a] =="f") {
            coupsValides.push("Tx" + alphabet(parseInt(colonne) + i) + ligne)
            coupsValides.push("T" + alphabet(parseInt(colonne) + i) + ligne)
            coupsValides.push(alphabet(parseInt(colonne) + i) + ligne)
            break                
        }            
        if (P[a] == "T" || P[a] =="C" || P[a] =="D" || P[a] =="P" || P[a] =="F" || P[a] =="R") {
            break        
        }
        if (P[a] == "r") {
            coupsValides.push("echecs")
        }           
    }
    for (let i = 1; parseInt(colonne) - i > 0; i++) {
        const b = 8*(8 - parseInt(ligne)) + parseInt(colonne) - i - 1
        if (P[b] == 1) {
            coupsValides.push("T" + alphabet(parseInt(colonne) - i) + ligne)
            coupsValides.push(alphabet(parseInt(colonne) - i) + ligne)
        }            
        if (P[b] == "t" || P[b] =="c" || P[b] =="d" || P[b] =="p" || P[b] =="f") {
            coupsValides.push("Tx" + alphabet(parseInt(colonne) - i) + ligne)
            coupsValides.push("T" + alphabet(parseInt(colonne) - i) + ligne)
            coupsValides.push(alphabet(parseInt(colonne) - i) + ligne)
            break                
        }            
        if (P[b] == "T" || P[b] =="C" || P[b] =="D" || P[b] =="P" || P[b] =="F" || P[b] =="R") {
            break        
        }
        if (P[b] == "r") {
            coupsValides.push("echecs")
        }           
    }
    for (let i = 1; parseInt(ligne) + i < 9; i++) {
        const c = 8*(8 - parseInt(ligne) - i) + parseInt(colonne) - 1
        if (P[c] == 1) {
            coupsValides.push("T" + alphabet(parseInt(colonne)) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne)) + (parseInt(ligne) + i))
        }            
        if (P[c] == "t" || P[c] =="c" || P[c] =="d" || P[c] =="p" || P[c] =="f") {
            coupsValides.push("Tx" + alphabet(parseInt(colonne)) + (parseInt(ligne) + i))
            coupsValides.push("T" + alphabet(parseInt(colonne)) + (parseInt(ligne) + i))
            coupsValides.push(lphabet(parseInt(colonne)) + (parseInt(ligne) + i))
            break                
        }            
        if (P[c] == "T" || P[c] =="C" || P[c] =="D" || P[c] =="P" || P[c] =="F" || P[c] =="R") {
            break        
        }
        if (P[c] == "r") {
            coupsValides.push("echecs")
        }          
    }
    for (let i = 1; parseInt(ligne) - i > 0; i++) {
        const d = 8*(8 - parseInt(ligne) + i) + parseInt(colonne) - 1
        if (P[d] == 1) {
            coupsValides.push("T" + alphabet(parseInt(colonne)) + (parseInt(ligne) - i))
            coupsValides.push(alphabet(parseInt(colonne)) + (parseInt(ligne) - i))
        }            
        if (P[d] == "t" || P[d] =="c" || P[d] =="d" || P[d] =="p" || P[d] =="f") {
            coupsValides.push("Tx" + alphabet(parseInt(colonne)) + (parseInt(ligne) - i))
            coupsValides.push("T" + alphabet(parseInt(colonne)) + (parseInt(ligne) - i))
            coupsValides.push(alphabet(parseInt(colonne)) + (parseInt(ligne) - i))
            break                
        }            
        if (P[d] == "T" || P[d] =="C" || P[d] =="D" || P[d] =="P" || P[d] =="F" || P[d] =="R") {
            break        
        }
        if (P[d] == "r") {
            coupsValides.push("echecs")
        }           
    }
    return coupsValides
}

module.exports.tourNoire = (position, P) => {
    let coupsValides = []
    if (position.length == 0) return console.log("Aucune tour noire sur l'échiquier")
    const colonne = position[0]
    const ligne = position[1]
    for (let i = 1; parseInt(colonne) + i < 9; i++) {
        const a = 8*(8 - parseInt(ligne)) + parseInt(colonne) + i - 1
        if (P[a] == 1) {
            coupsValides.push("T" + alphabet(parseInt(colonne) + i) + ligne)
            coupsValides.push(alphabet(parseInt(colonne) + i) + ligne)
        }            
        if (P[a] == "T" || P[a] =="C" || P[a] =="D" || P[a] =="P" || P[a] =="F") {
            coupsValides.push("Tx" + alphabet(parseInt(colonne) + i) + ligne)
            coupsValides.push("T" + alphabet(parseInt(colonne) + i) + ligne)
            coupsValides.push(alphabet(parseInt(colonne) + i) + ligne)
            break                
        }            
        if (P[a] == "t" || P[a] =="c" || P[a] =="d" || P[a] =="p" || P[a] =="f" || P[a] =="r") {
            break        
        }
        if (P[a] == "R") {
            coupsValides.push("echecs")
        }           
    }
    for (let i = 1; parseInt(colonne) - i > 0; i++) {
        const b = 8*(8 - parseInt(ligne)) + parseInt(colonne) - i - 1
        if (P[b] == 1) {
            coupsValides.push("T" + alphabet(parseInt(colonne) - i) + ligne)
            coupsValides.push(alphabet(parseInt(colonne) - i) + ligne)
        }            
        if (P[b] == "T" || P[b] =="C" || P[b] =="D" || P[b] =="P" || P[b] =="F") {
            coupsValides.push("Tx" + alphabet(parseInt(colonne) - i) + ligne)
            coupsValides.push("T" + alphabet(parseInt(colonne) - i) + ligne)
            coupsValides.push(alphabet(parseInt(colonne) - i) + ligne)
            break                
        }            
        if (P[b] == "t" || P[b] =="c" || P[b] =="d" || P[b] =="p" || P[b] =="f" || P[b] =="r") {
            break        
        }
        if (P[b] == "R") {
            coupsValides.push("echecs")
        }           
    }
    for (let i = 1; parseInt(ligne) + i < 9; i++) {
        const c = 8*(8 - parseInt(ligne) - i) + parseInt(colonne) - 1
        if (P[c] == 1) {
            coupsValides.push("T" + alphabet(parseInt(colonne)) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne)) + (parseInt(ligne) + i))
        }            
        if (P[c] == "T" || P[c] =="C" || P[c] =="D" || P[c] =="P" || P[c] =="F") {
            coupsValides.push("Tx" + alphabet(parseInt(colonne)) + (parseInt(ligne) + i))
            coupsValides.push("T" + alphabet(parseInt(colonne)) + (parseInt(ligne) + i))
            coupsValides.push(lphabet(parseInt(colonne)) + (parseInt(ligne) + i))
            break                
        }            
        if (P[c] == "t" || P[c] =="c" || P[c] =="d" || P[c] =="p" || P[c] =="f" || P[c] =="r") {
            break        
        }
        if (P[c] == "R") {
            coupsValides.push("echecs")
        }          
    }
    for (let i = 1; parseInt(ligne) - i > 0; i++) {
        const d = 8*(8 - parseInt(ligne) + i) + parseInt(colonne) - 1
        if (P[d] == 1) {
            coupsValides.push("T" + alphabet(parseInt(colonne)) + (parseInt(ligne) - i))
            coupsValides.push(alphabet(parseInt(colonne)) + (parseInt(ligne) - i))
        }            
        if (P[d] == "T" || P[d] =="C" || P[d] =="D" || P[d] =="P" || P[d] =="F") {
            coupsValides.push("Tx" + alphabet(parseInt(colonne)) + (parseInt(ligne) - i))
            coupsValides.push("T" + alphabet(parseInt(colonne)) + (parseInt(ligne) - i))
            coupsValides.push(alphabet(parseInt(colonne)) + (parseInt(ligne) - i))
            break                
        }            
        if (P[d] == "t" || P[d] =="c" || P[d] =="d" || P[d] =="p" || P[d] =="f" || P[d] =="r") {
            break        
        }
        if (P[d] == "R") {
            coupsValides.push("echecs")
        }           
    }
    return coupsValides
}

module.exports.fouBlanc = (position, P) => {
    if (position.length == 0) return ("Aucun fou blanc sur l'échiquier")
    const colonne = position[0]
    const ligne = position[1]
    const max = Math.max(parseInt(colonne), parseInt(ligne))
    const min = Math.min(parseInt(colonne), parseInt(ligne))
    let coupsValides = []
    for (let i = 1; max + i < 9; i++) {
        const e = 8*(8 - parseInt(ligne) - i) + parseInt(colonne) + i - 1
        if (P[e] == 1) {
            coupsValides.push("F" + alphabet(parseInt(colonne) + i) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) + i) + (parseInt(ligne) + i))
        }
        if (P[e] == "t" || P[e] =="c" || P[e] =="d" || P[e] =="p" || P[e] =="f") {
            coupsValides.push("Fx" + alphabet(parseInt(colonne) + i) + (parseInt(ligne) + i))
            coupsValides.push("F" + alphabet(parseInt(colonne) + i) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) + i) + (parseInt(ligne) + i))
            break
        }
        if (P[e] == "T" || P[e] =="C" || P[e] =="D" || P[e] =="P" || P[e] =="F" || P[e] =="R") {
            break        
        }
        if (P[e] == "r") {
            coupsValides.push("echecs")
        }       
    }
    for (let i = 1; i < 9; i++) {
        const f = 8*(8 - parseInt(ligne) + i) + parseInt(colonne) + i - 1
        if (P[f] == 1) {
            coupsValides.push("F" + alphabet(parseInt(colonne) + i) + (parseInt(ligne) - i))
            coupsValides.push(alphabet(parseInt(colonne) + i) + (parseInt(ligne) - i))
        }
        if (P[f] == "t" || P[f] =="c" || P[f] =="d" || P[f] =="p" || P[f] =="f") {
            coupsValides.push("Fx" + alphabet(parseInt(colonne) + i) + (parseInt(ligne) - i))
            coupsValides.push("F" + alphabet(parseInt(colonne) + i) + (parseInt(ligne) - i))
            coupsValides.push(alphabet(parseInt(colonne) + i) + (parseInt(ligne) - i))
            break
        }
        if (P[f] == "T" || P[f] =="C" || P[f] =="D" || P[f] =="P" || P[f] =="F" || P[f] =="R") {
            break        
        }
        if (P[f] == "r") {
            coupsValides.push("echecs")
        }         
    }
    for (let i = 1; i < 9; i++) {
        const g = 8*(8 - parseInt(ligne) - i) + parseInt(colonne) - i - 1
        if (P[g] == 1) {
            coupsValides.push("F" + alphabet(parseInt(colonne) - i) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) - i) + (parseInt(ligne) + i))
        }
        if (P[g] == "t" || P[g] =="c" || P[g] =="d" || P[g] =="p" || P[g] =="f") {
            coupsValides.push("Fx" + alphabet(parseInt(colonne) - i) + (parseInt(ligne) + i))
            coupsValides.push("F" + alphabet(parseInt(colonne) - i) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) - i) + (parseInt(ligne) + i))
            break
        }
        if (P[g] == "T" || P[g] =="C" || P[g] =="D" || P[g] =="P" || P[g] =="F" || P[g] =="R") {
            break        
        }
        if (P[g] == "r") {
            coupsValides.push("echecs")
        }     
    }
    for (let i = 1; min - i > 0; i++) {
        const h = 8*(8 - parseInt(ligne) + i) + parseInt(colonne) - i - 1
        if (P[h] == 1) {
            coupsValides.push("F" + alphabet(parseInt(colonne) - i) + (parseInt(ligne) - i))
            coupsValides.push(alphabet(parseInt(colonne) - i) + (parseInt(ligne) - i))
        }
        if (P[h] == "t" || P[h] =="c" || P[h] =="d" || P[h] =="p" || P[h] =="f") {
            coupsValides.push("Fx" + alphabet(parseInt(colonne) - i) + (parseInt(ligne) - i))
            coupsValides.push("F" + alphabet(parseInt(colonne) - i) + (parseInt(ligne) - i))
            coupsValides.push(alphabet(parseInt(colonne) - i) + (parseInt(ligne) - i))
            break
        }
        if (P[h] == "T" || P[h] =="C" || P[h] =="D" || P[h] =="P" || P[h] =="F" || P[h] =="R") {
            break        
        }   
        if (P[h] == "r") {
            coupsValides.push("echecs")
        }      
    }
    return coupsValides
}

module.exports.fouNoir = (position, P) => {
    if (position.length == 0) return ("Aucun fou noir sur l'échiquier")
    const colonne = position[0]
    const ligne = position[1]
    const max = Math.max(parseInt(colonne), parseInt(ligne))
    const min = Math.min(parseInt(colonne), parseInt(ligne))
    let coupsValides = []
    for (let i = 1; max + i < 9; i++) {
        const e = 8*(8 - parseInt(ligne) - i) + parseInt(colonne) + i - 1
        if (P[e] == 1) {
            coupsValides.push("F" + alphabet(parseInt(colonne) + i) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) + i) + (parseInt(ligne) + i))
        }
        if (P[e] == "T" || P[e] =="C" || P[e] =="D" || P[e] =="P" || P[e] =="F") {
            coupsValides.push("Fx" + alphabet(parseInt(colonne) + i) + (parseInt(ligne) + i))
            coupsValides.push("F" + alphabet(parseInt(colonne) + i) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) + i) + (parseInt(ligne) + i))
            break
        }
        if (P[e] == "t" || P[e] =="c" || P[e] =="d" || P[e] =="p" || P[e] =="f" || P[e] =="r") {
            break        
        }
        if (P[e] == "R") {
            coupsValides.push("echecs")
        }       
    }
    for (let i = 1; i < 9; i++) {
        const f = 8*(8 - parseInt(ligne) + i) + parseInt(colonne) + i - 1
        if (P[f] == 1) {
            coupsValides.push("F" + alphabet(parseInt(colonne) + i) + (parseInt(ligne) - i))
            coupsValides.push(alphabet(parseInt(colonne) + i) + (parseInt(ligne) - i))
        }
        if (P[f] == "T" || P[f] =="C" || P[f] =="D" || P[f] =="P" || P[f] =="F") {
            coupsValides.push("Fx" + alphabet(parseInt(colonne) + i) + (parseInt(ligne) - i))
            coupsValides.push("F" + alphabet(parseInt(colonne) + i) + (parseInt(ligne) - i))
            coupsValides.push(alphabet(parseInt(colonne) + i) + (parseInt(ligne) - i))
            break
        }
        if (P[f] == "t" || P[f] =="c" || P[f] =="d" || P[f] =="p" || P[f] =="f" || P[f] =="r") {
            break        
        }
        if (P[f] == "R") {
            coupsValides.push("echecs")
        }         
    }
    for (let i = 1; i < 9; i++) {
        const g = 8*(8 - parseInt(ligne) - i) + parseInt(colonne) - i - 1
        if (P[g] == 1) {
            coupsValides.push("F" + alphabet(parseInt(colonne) - i) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) - i) + (parseInt(ligne) + i))
        }
        if (P[g] == "T" || P[g] =="C" || P[g] =="D" || P[g] =="P" || P[g] =="F") {
            coupsValides.push("Fx" + alphabet(parseInt(colonne) - i) + (parseInt(ligne) + i))
            coupsValides.push("F" + alphabet(parseInt(colonne) - i) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) - i) + (parseInt(ligne) + i))
            break
        }
        if (P[g] == "t" || P[g] =="c" || P[g] =="d" || P[g] =="p" || P[g] =="f" || P[g] =="r") {
            break        
        }
        if (P[g] == "R") {
            coupsValides.push("echecs")
        }     
    }
    for (let i = 1; min - i > 0; i++) {
        const h = 8*(8 - parseInt(ligne) + i) + parseInt(colonne) - i - 1
        if (P[h] == 1) {
            coupsValides.push("F" + alphabet(parseInt(colonne) - i) + (parseInt(ligne) - i))
            coupsValides.push(alphabet(parseInt(colonne) - i) + (parseInt(ligne) - i))
        }
        if (P[h] == "T" || P[h] =="C" || P[h] =="D" || P[h] =="P" || P[h] =="F") {
            coupsValides.push("Fx" + alphabet(parseInt(colonne) - i) + (parseInt(ligne) - i))
            coupsValides.push("F" + alphabet(parseInt(colonne) - i) + (parseInt(ligne) - i))
            coupsValides.push(alphabet(parseInt(colonne) - i) + (parseInt(ligne) - i))
            break
        }
        if (P[h] == "t" || P[h] =="c" || P[h] =="d" || P[h] =="p" || P[h] =="f" || P[h] =="r") {
            break        
        }   
        if (P[h] == "R") {
            coupsValides.push("echecs")
        }      
    }
    return coupsValides
}

module.exports.pionBlanc = (position, P, priseEnPassant) => {
    if (position.length == 0) return message.channel.send("Aucun pion blanc sur l'échiquier")
    const colonne = position[0]
    const ligne = position[1]
    let coupsValides = []
    if (ligne != "7" || ligne == "7") {
        if (P[8*(8 - parseInt(ligne) - 1) + parseInt(colonne) - 1] == "1") {
            coupsValides.push(alphabet(parseInt(colonne)) + (parseInt(ligne) + 1))
            if ((P[8*(8 - parseInt(ligne) - 2) + parseInt(colonne) - 1] == "1") && (ligne == "2")) {
                coupsValides.push(alphabet(parseInt(colonne)) + (parseInt(ligne) + 2))
            }
        }
        const a = 8*(8 - parseInt(ligne) - 1) + parseInt(colonne) - 2
        const b = 8*(8 - parseInt(ligne) - 1) + parseInt(colonne)
        if (P[a] == "p" || P[a] == "c" || P[a] == "d" || P[a] == "f" || P[a] == "t") {
            coupsValides.push(alphabet(parseInt(colonne) - 1) + (parseInt(ligne) + 1))
            coupsValides.push(alphabet(parseInt(colonne)) + "x" + alphabet(parseInt(colonne) - 1) + (parseInt(ligne) + 1))
        }
        if (P[b] == "p" || P[b] == "c" || P[b] == "d" || P[b] == "f" || P[b] == "t") {
            coupsValides.push(alphabet(parseInt(colonne) + 1) + (parseInt(ligne) + 1))
            coupsValides.push(alphabet(parseInt(colonne)) + "x" + alphabet(parseInt(colonne) + 1) + (parseInt(ligne) + 1))
        }
        if (P[a] == "r" || P[b] == "r") {
            coupsValides.push("echecs")
        }
    }
    if (ligne == 5) {
        if (priseEnPassant == alphabet(colonne - 1) + (parseInt(ligne) + 1)) {
            coupsValides.push(alphabet(parseInt(colonne) - 1) + (parseInt(ligne) + 1))
            coupsValides.push(alphabet(parseInt(colonne)) + "x" + alphabet(parseInt(colonne) - 1) + (parseInt(ligne) + 1))
        }
        if (priseEnPassant == (colonne + 1).toString() + ligne) {
            coupsValides.push(alphabet(parseInt(colonne) + 1) + (parseInt(ligne) + 1))
            coupsValides.push(alphabet(parseInt(colonne)) + "x" + alphabet(parseInt(colonne) + 1) + (parseInt(ligne) + 1))
        }
    }
    return coupsValides
}

module.exports.pionNoir = (position, P, priseEnPassant) => {
    if (position.length == 0) return message.channel.send("Aucun pion noir sur l'échiquier")
    const colonne = position[0]
    const ligne = position[1]
    let coupsValides = []
    if (ligne != "2" || ligne == "2") {
        if (P[8*(8 - parseInt(ligne) + 1) + parseInt(colonne) - 1] == "1") {
            coupsValides.push(alphabet(parseInt(colonne)) + (parseInt(ligne) - 1))
            if ((P[8*(8 - parseInt(ligne) + 2) + parseInt(colonne) - 1] == "1") && (ligne == "7")) {
                coupsValides.push(alphabet(parseInt(colonne)) + (parseInt(ligne) - 2))
            }
        }
        const a = 8*(8 - parseInt(ligne) + 1) + parseInt(colonne) - 2
        const b = 8*(8 - parseInt(ligne) + 1) + parseInt(colonne)
        if (P[a] == "P" || P[a] == "C" || P[a] == "D" || P[a] == "F" || P[a] == "T") {
            coupsValides.push(alphabet(parseInt(colonne) - 1) + (parseInt(ligne) - 1))
            coupsValides.push(alphabet(parseInt(colonne)) + "x" + alphabet(parseInt(colonne) - 1) + (parseInt(ligne) - 1))
        }
        if (P[b] == "P" || P[b] == "C" || P[b] == "D" || P[b] == "F" || P[b] == "T") {
            coupsValides.push(alphabet(parseInt(colonne) + 1) + (parseInt(ligne) - 1))
            coupsValides.push(alphabet(parseInt(colonne)) + "x" + alphabet(parseInt(colonne) + 1) + (parseInt(ligne) - 1))
        }
        if (P[a] == "R" || P[b] == "R") {
            coupsValides.push("echecs")
        }
    }
    return coupsValides
}

module.exports.cavalierBlanc = (position, P) => {
    if (position.length == 0) return message.channel.send("Aucun cavalier blanc sur l'échiquier")
    const colonne = position[0]
    const ligne = position[1]
    let coupsValides = []
    function valides (i, j) {
        const e = 8*(8 - parseInt(ligne) - i) + parseInt(colonne) + j - 1
        if (P[e] == 1) {
            coupsValides.push("C" + alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
        }
        if (P[e] == "t" || P[e] =="c" || P[e] =="d" || P[e] =="p" || P[e] =="f") {
            coupsValides.push("Cx" + alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
            coupsValides.push("C" + alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
        }
        if (P[e] == "r") {
            coupsValides.push("echecs")
        }
    }
    valides(1,2)
    valides(1, -2)
    valides(-1, 2)
    valides(-1, -2)
    valides(2, 1)
    valides(2, -1)
    valides(-2, 1)
    valides(-2, -1)    
    return coupsValides
}

module.exports.cavalierNoir = (position, P) => {
    if (position.length == 0) return message.channel.send("Aucun cavalier noir sur l'échiquier")
    const colonne = position[0]
    const ligne = position[1]
    let coupsValides = []
    function valides (i, j) {
        const e = 8*(8 - parseInt(ligne) - i) + parseInt(colonne) + j - 1
        if (P[e] == 1) {
            coupsValides.push("C" + alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
        }
        if (P[e] == "T" || P[e] =="C" || P[e] =="D" || P[e] =="P" || P[e] =="F") {
            coupsValides.push("Cx" + alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
            coupsValides.push("C" + alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
        }
        if (P[e] == "R") {
            coupsValides.push("echecs")
        }
    }
    valides(1,2)
    valides(1, -2)
    valides(-1, 2)
    valides(-1, -2)
    valides(2, 1)
    valides(2, -1)
    valides(-2, 1)
    valides(-2, -1)    
    return coupsValides
}

module.exports.roiBlanc = (position, P, dbUser) => {
    if (position.length == 0) return message.channel.send("Aucun roi blanc sur l'échiquier")
    const colonne = position[0]
    const ligne = position[1]
    let coupsValides = []
    // if (dbUser.game[1][2].includes("R")) {
    //     if ((P[61] == "1") || (P[62] == "1")) {
    //         coupsValides.push("Rg1")
    //         coupsValides.push("g1")
    //         coupsValides.push("O-O")
    //     }
    // }
    // if (dbUser.game[1][2].includes("D")) {
    //     if ((P[57] == "1") || (P[58] == "1") || (P[59] == "1")) {
    //         coupsValides.push("Rc1")
    //         coupsValides.push("c1")
    //         coupsValides.push("O-O-O")
    //     }
    // }
    function valides (i, j) {
        const e = 8*(8 - parseInt(ligne) - i) + parseInt(colonne) + j - 1
        if ((e < 0) || (e > 63) || (!["a", "b", "c", "d", "e", "f", "g", "h"].includes(alphabet(parseInt(colonne) + j))) ||(![1,2,3,4,5,6,7,8].includes(parseInt(ligne) + i))) return
        if (P[e] == 1) {
            coupsValides.push("R" + alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
        }
        if (P[e] == "t" || P[e] =="c" || P[e] =="d" || P[e] =="p" || P[e] =="f") {
            coupsValides.push("Rx" + alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
            coupsValides.push("R" + alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
        }
        if (P[e] == "r") {
            coupsValides.push("echecs")
        }
    }
    valides(1,0)
    valides(-1,0)
    valides(0,1)
    valides(0,-1)
    valides(1,1)
    valides(1,-1)
    valides(-1,1)
    valides(-1,-1) 
    return coupsValides
}

module.exports.roiNoir = (position, P, dbUser) => {
    if (position.length == 0) return message.channel.send("Aucun roi noir sur l'échiquier")
    const colonne = position[0]
    const ligne = position[1]
    let coupsValides = []
    // if (dbUser.game[1][2].includes("r")) {
    //     if ((P[5] == "1") || (P[6] == "1")) {
    //         coupsValides.push("Rg8")
    //         coupsValides.push("g8")
    //         coupsValides.push("O-O")
    //     }
    // }
    // if (dbUser.game[1][2].includes("d")) {
    //     if ((P[1] == "1") || (P[2] == "1") || (P[3] == "1")) {
    //         coupsValides.push("Rc8")
    //         coupsValides.push("c8")
    //         coupsValides.push("O-O-O")
    //     }
    // }
    function valides (i, j) {
        const e = 8*(8 - parseInt(ligne) - i) + parseInt(colonne) + j - 1
        if ((e < 0) || (e > 63) || (!["a", "b", "c", "d", "e", "f", "g", "h"].includes(alphabet(parseInt(colonne) + j))) ||(![1,2,3,4,5,6,7,8].includes(parseInt(ligne) + i))) return
        if (P[e] == 1) {
            coupsValides.push("R" + alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
        }
        if (P[e] == "T" || P[e] =="C" || P[e] =="D" || P[e] =="P" || P[e] =="F") {
            coupsValides.push("Rx" + alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
            coupsValides.push("R" + alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
            coupsValides.push(alphabet(parseInt(colonne) + j) + (parseInt(ligne) + i))
        }
        if (P[e] == "R") {
            coupsValides.push("echecs")
        }
    }
    valides(1,0)
    valides(-1,0)
    valides(0,1)
    valides(0,-1)
    valides(1,1)
    valides(1,-1)
    valides(-1,1)
    valides(-1,-1) 
    return coupsValides
}

module.exports.echecsNoirs2 = (P) => {
    const roi = P.indexOf("r")
    const ligne = 8 - parseInt( roi / 8)
    const colonne = roi - (8 * (8 - ligne)) + 1
    function positionPiece (n) {
        const l = 8 - parseInt( n / 8)
        const c = n - ( 8 * (8 - l)) + 1
        return c.toString() + l.toString()
    }
    let coupsValides = []
    for (i in P) {
        if ( P[i] == "T" ) {
            coupsValides.push( [i].concat(this.tourBlanche(positionPiece(i), P)))
        }
        if ( P[i] == "F" ) {
            coupsValides.push( [i].concat(this.fouBlanc(positionPiece(i), P)))
        }
        if ( P[i] == "P" ) {
            coupsValides.push( [i].concat(this.pionBlanc(positionPiece(i), P)))
        }
        if ( P[i] == "C" ) {
            coupsValides.push( [i].concat(this.cavalierBlanc(positionPiece(i), P)))
        }
        if ( P[i] == "D" ) {
            coupsValides.push( [i].concat(this.tourBlanche(positionPiece(i), P)))
            coupsValides.push( [i].concat(this.fouBlanc(positionPiece(i), P)))
        }
        if ( P[i] == "R") {
            coupsValides.push( [i].concat(this.roiBlanc(positionPiece(i), P)))
        }
    }
    return coupsValides
}

module.exports.echecsBlancs2 = (P) => {
    const roi = P.indexOf("R")
    const ligne = 8 - parseInt( roi / 8)
    const colonne = roi - (8 * (8 - ligne)) + 1
    function positionPiece (n) {
        const l = 8 - parseInt( n / 8)
        const c = n - ( 8 * (8 - l)) + 1
        return c.toString() + l.toString()
    }

    let coupsValides = []
    // for (i in P) {
    //     if ( P[i] == "t" ) {
    //         coupsValides = coupsValides.concat(this.tourNoire(positionPiece(i), P))
    //     }
    //     if ( P[i] == "f" ) {
    //         coupsValides = coupsValides.concat(this.fouNoir(positionPiece(i), P))
    //     }
    //     if ( P[i] == "p" ) {
    //         coupsValides = coupsValides.concat(this.pionNoir(positionPiece(i), P))
    //     }
    //     if ( P[i] == "c" ) {
    //         coupsValides = coupsValides.concat(this.cavalierNoir(positionPiece(i), P))
    //     }
    //     if ( P[i] == "d" ) {
    //         coupsValides = coupsValides.concat(this.tourNoire(positionPiece(i), P))
    //         coupsValides = coupsValides.concat(this.fouNoir(positionPiece(i), P))
    //     }
    //     if ( P[i] == "r") {
    //         coupsValides = coupsValides.concat(this.roiNoir(positionPiece(i), P))
    //     }
    // }
    for (i in P) {
        if ( P[i] == "t" ) {
            coupsValides.push([i].concat(this.tourNoire(positionPiece(i), P)))
        }
        if ( P[i] == "f" ) {
            coupsValides.push([i].concat(this.fouNoir(positionPiece(i), P)))
        }
        if ( P[i] == "p" ) {
            coupsValides.push([i].concat(this.pionNoir(positionPiece(i), P)))
        }
        if ( P[i] == "c" ) {
            coupsValides.push([i].concat(this.cavalierNoir(positionPiece(i), P)))
        }
        if ( P[i] == "d" ) {
            coupsValides.push([i].concat(this.tourNoire(positionPiece(i), P)))
            coupsValides.push([i].concat(this.fouNoir(positionPiece(i), P)))
        }
        if ( P[i] == "r") {
            coupsValides.push([i].concat(this.roiNoir(positionPiece(i), P)))
        }
    }
    return coupsValides
}

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

module.exports.move = (P, args, dbUser) => {
    //const positionPiece = alphabet2(args[0].charAt(args[0].length - 2)) + args[0].charAt(args[0].length - 1)
    const positionPiece = args[0]
        const colonne = positionPiece[0]
        const ligne = positionPiece[1]
        const colonne2 = alphabet2(args[1].charAt(args[1].length - 2))
        const ligne2 = args[1].charAt(args[1].length - 1)
        const piece = P[8*(8 - parseInt(ligne)) + parseInt(colonne) - 1]

        if (piece == "T") {
            if (!this.tourBlanche(positionPiece, P).includes(args[1])) {
                return ("Coup invalide")
            }
            else {
                //P = P.replace2(8*(8 - parseInt(ligne)) + parseInt(colonne) - 1, P, "1").replace2(8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1, P, "T")
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "T" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                //console.log(echecsBlancs(P))
                if (this.echecsBlancs(P).includes("echecs")) {
                    return ("Coup invalide")
                }
                
                if ((colonne == "1") && (ligne == "1")) roc = roc.replace("D", "")
                if ((colonne == "8") && (ligne == "1")) roc = roc.replace("R", "")
            }
        }
        else if (piece == "F") {
            if (!this.fouBlanc(positionPiece, P).includes(args[1])) {
                return ("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "F" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (this.echecsBlancs(P).includes("echecs")) {
                    return ("Coup invalide")
                }
                
            }
        }
        else if (piece == "D") {
            if (!(this.tourBlanche(positionPiece, P).includes(args[1]) || this.fouBlanc(positionPiece, P).includes(args[1]))) {
                return ("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "D" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (this.echecsBlancs(P).includes("echecs")) {
                    return ("Coup invalide")
                }
                
            }
        }
        else if (piece == "P") {
            if (!(this.pionBlanc(positionPiece, P).includes(args[1]))) {
                return ("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                if (ligne != "7") {
                    P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "P" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                    if (this.echecsBlancs(P).includes("echecs")) {
                        return ("Coup invalide")
                    }
                    
                    if (parseInt(ligne2) - parseInt(ligne) == 2) priseEnPassant = alphabet3(parseInt(colonne)) + (parseInt(ligne) + 1)
                }
                else {
                    test = false
                    ("Ton pion va être promu. Choisis la pièce de promotion").then( () => {
                        const filter = msg => msg.author == message.author
                        message.channel.awaitMessages(filter, { max: 1, time: 30000}).then( collected => {
                            const msg = collected.first()
                            if (msg == undefined) return ("Promotion expiré, refais la commande move puis choisis ta promotion plus vite")
                            if (msg.content == "d" || msg.content == "D" || msg.content == "dame" || msg.content == "Dame") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "D" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (this.echecsBlancs(P).includes("echecs")) {
                                    return ("Coup invalide")
                                }
                                
                            }
                            if (msg.content == "c" || msg.content == "C" || msg.content == "cavalier" || msg.content == "Cavalier") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "C" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (this.echecsBlancs(P).includes("echecs")) {
                                    return ("Coup invalide")
                                }
                                
                            }
                            if (msg.content == "t" || msg.content == "T" || msg.content == "tour" || msg.content == "Tour") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "T" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (this.echecsBlancs(P).includes("echecs")) {
                                    return ("Coup invalide")
                                }
                                
                            }
                            if (msg.content == "f" || msg.content == "F" || msg.content == "fou" || msg.content == "Fou") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "F" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (this.echecsBlancs(P).includes("echecs")) {
                                    return ("Coup invalide")
                                }
                                
                            }

                            newP = P.slice(0, 8) + "/" + P.slice(8, 16) + "/" + P.slice(16, 24) + "/" + P.slice(24, 32) + "/" + P.slice(32, 40) + "/" + P.slice(40, 48) + "/" + P.slice(48, 56) + "/" + P.slice(56)
                        })
                    })
                }
            }
        }
        else if (piece == "C") {
            if (!this.cavalierBlanc(positionPiece, P).includes(args[1])) {
                return ("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "C" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (this.echecsBlancs(P).includes("echecs")) {
                    return ("Coup invalide")
                }
                
            }
        }
        else if (piece == "R") {
            if (!this.roiBlanc(positionPiece, P, dbUser).includes(args[1])) {
                return ("Coup invalide")
            }
            else if ((colonne == "5") && (ligne == "1") && (ligne2 == "1") && (colonne2 == "7")) {
                //("petit roc")
                P = P.slice(0, 60) + "1" + "T" + "R" + "1"
                if ((this.echecsBlancs(P).includes("echecs")) || (this.echecsBlancs(P.slice(0, 60) + "R" + "1" + "1" + "T").includes("echecs")) || this.echecsBlancs((P.slice(0, 60) + "1" + "R" + "1" + "T"))) {
                    return ("Coup invalide")
                }
                
                // roc = roc.replace("R", "").replace("D", "")
            }
            else if ((colonne == "5") && (ligne == "1") && (ligne2 == "1") && (colonne2 == "3")) {
                //("grand roc")
                P = P.slice(0, 56) + "1" + "1" + "R" + "T" + "1" + P.slice(-3)
                if ((this.echecsBlancs(P).includes("echecs")) || (this.echecsBlancs(P.slice(0, 56) + "T" + "1" + "1" + "1" + "R" + P.slice(-3))) || (this.echecsBlancs(P.slice(0, 56) + "T" + "1" + "1" + "R" + "1" + P.slice(-3)))) {
                    return ("Coup invalide")
                }
                
                // roc = roc.replace("R", "").replace("D", "")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "R" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (this.echecsBlancs(P).includes("echecs")) {
                    return ("Coup invalide")
                }
                
                // roc = roc.replace("R", "").replace("D", "")
            }
        }
        else if (piece == "t") {
            if (!this.tourNoire(positionPiece, P).includes(args[1])) {
                return ("Coup invalide")
            }
            else {                
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "t" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (this.echecsNoirs(P).includes("echecs")) {
                    return ("Coup invalide")
                }
                
                if ((colonne == "1") && (ligne == "8")) roc = roc.replace("d", "")
                if ((colonne == "8") && (ligne == "8")) roc = roc.replace("r", "")
            }
        }
        else if (piece == "f") {
            if (!this.fouNoir(positionPiece, P).includes(args[1])) {
                return ("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "f" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (this.echecsNoirs(P).includes("echecs")) {
                    return ("Coup invalide")
                }
                
            }
        }
        else if (piece == "d") {
            if (!(this.tourNoire(positionPiece, P).includes(args[1]) || this.fouNoir(positionPiece, P).includes(args[1]))) {
                return ("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "d" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (this.echecsNoirs(P).includes("echecs")) {
                    return ("Coup invalide")
                }
                
            }
        }
        else if (piece == "p") {
            if (!(this.pionNoir(positionPiece, P).includes(args[1]))) {
                return ("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                if (ligne != "2") {
                    P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "p" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                    if (this.echecsNoirs(P).includes("echecs")) {
                        return ("Coup invalide")
                    }
                    
                    if (parseInt(ligne2) - parseInt(ligne) == 2) priseEnPassant = alphabet3(parseInt(colonne)) + (parseInt(ligne) - 1)
                }
                else {
                    test = false
                    ("Ton pion va être promu. Choisis la pièce de promotion").then( () => {
                        const filter = msg => msg.author == message.author
                        message.channel.awaitMessages(filter, { max: 1, time: 30000}).then( collected => {
                            const msg = collected.first()
                            if (msg == undefined) return ("Promotion expiré, refais la commande move puis choisis ta promotion plus vite")
                            if (msg.content == "d" || msg.content == "D" || msg.content == "dame" || msg.content == "Dame") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "d" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (this.echecsNoirs(P).includes("echecs")) {
                                    return ("Coup invalide")
                                }
                                
                            }
                            if (msg.content == "c" || msg.content == "C" || msg.content == "cavalier" || msg.content == "Cavalier") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "c" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (this.echecsNoirs(P).includes("echecs")) {
                                    return ("Coup invalide")
                                }
                                
                            }
                            if (msg.content == "t" || msg.content == "T" || msg.content == "tour" || msg.content == "Tour") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "t" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (this.echecsNoirs(P).includes("echecs")) {
                                    return ("Coup invalide")
                                }
                                
                            }
                            if (msg.content == "f" || msg.content == "F" || msg.content == "fou" || msg.content == "Fou") {
                                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "f" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                                if (this.echecsNoirs(P).includes("echecs")) {
                                    return ("Coup invalide")
                                }
                                
                            }

                            newP = P.slice(0, 8) + "/" + P.slice(8, 16) + "/" + P.slice(16, 24) + "/" + P.slice(24, 32) + "/" + P.slice(32, 40) + "/" + P.slice(40, 48) + "/" + P.slice(48, 56) + "/" + P.slice(56)
                        })
                    })
                }
            }
        }
        else if (piece == "c") {
            if (!this.cavalierNoir(positionPiece, P).includes(args[1])) {
                return ("Coup invalide")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "c" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (this.echecsNoirs(P).includes("echecs")) {
                    return ("Coup invalide")
                }
                
            }
        }
        else if (piece == "r") {
            if (!this.roiNoir(positionPiece, P, dbUser).includes(args[1])) {
                return ("Coup invalide")
            }
            else if ((colonne == "5") && (ligne == "8") && (ligne2 == "8") && (colonne2 == "7")) {
                //("petit roc")
                P = P.slice(0, 4) + "1" + "t" + "r" + "1" + P.slice(-56)
                if ((this.echecsNoirs(P).includes("echecs")) || (this.echecsNoirs(P.slice(0, 4) + "r" + "1" + "1" + "t" + P.slice(-56)).includes("echecs")) || this.echecsNoirs((P.slice(0, 4) + "1" + "r" + "1" + "t" + P.slice(-56)))) {
                    return ("Coup invalide")
                }
                return ("Coup valide")
                
                // roc = roc.replace("r", "").replace("d", "")
            }
            else if ((colonne == "5") && (ligne == "8") && (ligne2 == "8") && (colonne2 == "3")) {
                //("grand roc")
                P = "1" + "1" + "r" + "t" + "1" + P.slice(-59)
                if ((this.echecsNoirs(P).includes("echecs")) || (this.echecsNoirs("t" + "1" + "1" + "1" + "r" + P.slice(-59))) || (this.echecsNoirs("t" + "1" + "1" + "r" + "1" + P.slice(-59)))) {
                    return ("Coup invalide")
                }
                return ("Coup valide")
                
                // roc = roc.replace("r", "").replace("d", "")
            }
            else {
                P = P.slice(0, 8*(8 - parseInt(ligne)) + parseInt(colonne) - 1) + "1" + P.slice(8*(8 - parseInt(ligne)) + parseInt(colonne))
                P = P.slice(0, 8*(8 - parseInt(ligne2)) + parseInt(colonne2) - 1) + "r" + P.slice(8*(8 - parseInt(ligne2)) + parseInt(colonne2))
                if (this.echecsNoirs(P).includes("echecs")) {
                    return ("Coup invalide")
                }
                return ("Coup valide")
                
                // roc = roc.replace("r", "").replace("d", "")
            }
        }
        else return ("Coup invalide")
}


module.exports.echecsBlancs = (P) => {
    const roi = P.indexOf("R")
    const ligne = 8 - parseInt( roi / 8)
    const colonne = roi - (8 * (8 - ligne)) + 1
    function positionPiece (n) {
        const l = 8 - parseInt( n / 8)
        const c = n - ( 8 * (8 - l)) + 1
        return c.toString() + l.toString()
    }

    let coupsValides = []
    for (i in P) {
        if ( P[i] == "t" ) {
            coupsValides = coupsValides.concat(this.tourNoire(positionPiece(i), P))
        }
        if ( P[i] == "f" ) {
            coupsValides = coupsValides.concat(this.fouNoir(positionPiece(i), P))
        }
        if ( P[i] == "p" ) {
            coupsValides = coupsValides.concat(this.pionNoir(positionPiece(i), P))
        }
        if ( P[i] == "c" ) {
            coupsValides = coupsValides.concat(this.cavalierNoir(positionPiece(i), P))
        }
        if ( P[i] == "d" ) {
            coupsValides = coupsValides.concat(this.tourNoire(positionPiece(i), P))
            coupsValides = coupsValides.concat(this.fouNoir(positionPiece(i), P))
        }
        if ( P[i] == "r") {
            coupsValides = coupsValides.concat(this.roiNoir(positionPiece(i), P))
        }
    }
    return coupsValides
}

module.exports.echecsNoirs = (P) => {
    const roi = P.indexOf("r")
    const ligne = 8 - parseInt( roi / 8)
    const colonne = roi - (8 * (8 - ligne)) + 1
    function positionPiece (n) {
        const l = 8 - parseInt( n / 8)
        const c = n - ( 8 * (8 - l)) + 1
        return c.toString() + l.toString()
    }
    let coupsValides = []
    for (i in P) {
        if ( P[i] == "T" ) {
            coupsValides = coupsValides.concat(this.tourBlanche(positionPiece(i), P))
        }
        if ( P[i] == "F" ) {
            coupsValides = coupsValides.concat(this.fouBlanc(positionPiece(i), P))
        }
        if ( P[i] == "P" ) {
            coupsValides = coupsValides.concat(this.pionBlanc(positionPiece(i), P))
        }
        if ( P[i] == "C" ) {
            coupsValides = coupsValides.concat(this.cavalierBlanc(positionPiece(i), P))
        }
        if ( P[i] == "D" ) {
            coupsValides = coupsValides.concat(this.tourBlanche(positionPiece(i), P))
            coupsValides = coupsValides.concat(this.fouBlanc(positionPiece(i), P))
        }
        if ( P[i] == "R") {
            coupsValides = coupsValides.concat(this.roiBlanc(positionPiece(i), P))
        }
    }
    return coupsValides
}