const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePw = document.getElementById("generate-pw")
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let passwordLength = 15
let includeNumbers = true
let includeSpecial = true


const toggleNumbers = () => {
  includeNumbers = !includeNumbers;
  if (includeNumbers === true){
    document.getElementById("toggle-numbers-btn").textContent = "Numbers ON"
} else {
  document.getElementById("toggle-numbers-btn").textContent = "Numbers OFF"
}
}

const toggleSpecial = () => {
  includeSpecial = !includeSpecial;
  if (includeSpecial === true){
    document.getElementById("toggle-special-btn").textContent = "Special ON"
} else {
  document.getElementById("toggle-special-btn").textContent = "Special OFF"
}
}


function randomCharacter() {
  let randomChar;
  if (includeNumbers === true && includeSpecial === true) {
      randomChar = Math.floor(Math.random() * characters.length);
  } else if (includeNumbers === false && includeSpecial === false) {
      randomChar = Math.floor(Math.random() * 52);
  } else if (includeNumbers === true && includeSpecial === false) {
      randomChar = Math.floor(Math.random() * 62);
  } else if (includeNumbers === false && includeSpecial === true) {
      randomChar = Math.floor(Math.random() * characters.length);
      while (randomChar > 51 && randomChar < 61) {
          randomChar = Math.floor(Math.random() * characters.length);
      }
  }
  return characters[randomChar];
}



function generatePassword() {
    randomPasswordOne = ""
    randomPasswordTwo = ""
    for (let i = 0; i < passwordLength; i++){
        randomPasswordOne += randomCharacter()        
    }
     for (let i = 0; i < passwordLength; i++){
        randomPasswordTwo += randomCharacter()        
    }
    passwordOne.textContent = randomPasswordOne
    passwordTwo.textContent = randomPasswordTwo
}



  const copy = async () => {
    try {
      await navigator.clipboard.writeText(randomPasswordOne);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
    window.alert("password copied!");
  }

  const copyTwo = async () => {
    try {
      await navigator.clipboard.writeText(randomPasswordTwo);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
    window.alert("password copied!");
  }

 