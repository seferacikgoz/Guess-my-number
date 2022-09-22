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

    //! eğer rasgele sayı != input.value
} else {
    score --
    if(score > 0){
guessInput > randomNumber 
    ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down"></i> DECREASE`) 
    : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> INCREASE`)
}else {
    msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>` ;
    body.className = "bg-danger"
    document.querySelector(".check-btn").disabled = true
}
document.querySelector(".score").textContent = score
}
})


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
