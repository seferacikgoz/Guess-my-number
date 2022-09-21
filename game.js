//* ==========================================
//*     GUESS MY NUMBER
//*     Game Logic
//* ==========================================

//? 1-100 arasında rastgele bir sayı tut

const randomNumber = Math.round(Math.random() *100)
console.log(randomNumber);




//* CheckBtn basıldığında kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
    const guessInput = Number(document.querySelector(".guess-input").value)
    const msg = document.querySelector(".msg")

//? eğer input girilmediyse kullanıcıya uyarı ver
if(!guessInput){
    msg.innerText = "Please enter a number"
}else if (randomNumber === guessInput){
    msg.innerHTML = "Congrats You Win"
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
