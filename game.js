//* ==========================================
//*     GUESS MY NUMBER
//*     Game Logic
//* ==========================================

//? 1-100 arasında rastgele bir sayı tut

const randomNumber = Math.round(Math.random() *100)
console.log(randomNumber);

//? variables
let score = 10
let topScore = 0



//* CheckBtn basıldığında kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
    const guessInput = Number(document.querySelector(".guess-input").value)
    const msg = document.querySelector(".msg")
    const body = document.querySelector("body")

//? eğer input girilmediyse kullanıcıya uyarı ver
if(!guessInput){
    msg.innerText = "Please enter a number"
}else if (randomNumber === guessInput){
    msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts"></i>`
    /* document.querySelector("body").style.background = "green" */
    body.className = "bg-success"

    if(score > topScore) {
        topScore = score
        document.querySelector(".top-score").textContent = topScore
    }

    document.querySelector(".secret-number").textContent = randomNumber
} else {
    score -= 1

    guessInput > randomNumber ? (msg.innerText = "DECREASE") : (msg.innerText = "INCREASE")
}
})

//! eğer rasgele sayı == input.value
//? tebrikler bildiniz
//? background = green
//? eğer score > topScore
//?     topScore = score
//? secret number görünür

//! değilse 
//! eğer score > 0 
//! score = score -1
//? eğer rasgele sayı < input.value 
//? AZALT
//? değilse 
//? ARTTIR
//! değilse
//? üzgünüz kaybettiniz

//* againBtn basıldığında kontrolleri yap
