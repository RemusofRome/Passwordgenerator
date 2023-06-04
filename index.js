const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

passNum1 = document.getElementById("passNumber1")
passNum2 = document.getElementById("passNumber2")
passwordLength = 10
passwordGotten = false

function getRandomIndex() {
        passwordGotten = true
    for (let i = 0; i < passwordLength; i++) {
        let random1 = characters[Math.floor( (Math.random() * characters.length) )]
        let random2 = characters[Math.floor( (Math.random() * characters.length) )]
        passNum1.textContent += random1
        passNum2.textContent += random2
    }
}

function buttonClick() {
    if (passwordGotten === false) {
       return getRandomIndex()
    }
}

function differentPassword() {
    if (passwordGotten === true) {
    passNum1.textContent = ""
    passNum2.textContent = ""
    getRandomIndex()
    console.log("clear")
    }
}




