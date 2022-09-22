//* ==========================================
//*     GUESS MY NUMBER
//*     Game Logic
//* ==========================================

//? 1-100 arasında rastgele bir sayı tut

let randomNumber = Math.round(Math.random() *100)
console.log(randomNumber);

//? variables
let score = 10
/* let topScore = 0 */

//? localStorage de topScore adıyla bir değişken oluştur.
let topScore = localStorage.getItem("topScore") || 0;
//?DOM'daki top-score değerini localStorage değerini localStorage'den okuyarak güncelle
document.querySelector(".top-score").textContent = topScore

//* CheckBtn basıldığında kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
    const guessInput = Number(document.querySelector(".guess-input").value)
    const msg = document.querySelector(".msg")
    const body = document.querySelector("body")

//? eğer input girilmediyse kullanıcıya uyarı ver
if(!guessInput){
    msg.innerText = "Please enter a number"

     //! eğer rasgele sayı == input.value
}else if (randomNumber === guessInput){
    msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts"></i>`
    /* document.querySelector("body").style.background = "green" */
    body.className = "bg-success"
    document.querySelector(".check-btn").disabled = true
    if(score >= topScore) {
       /*  topScore = score */

       //?localeStorage deki topScore değişkenini güncelle
       localStorage.setItem("topScore", score)
        document.querySelector(".top-score").textContent = score
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
    document.querySelector(".secret-number").textContent = randomNumber
    body.className = "bg-danger"
    document.querySelector(".check-btn").disabled = true
}
document.querySelector(".score").textContent = score
}
})

//* again basıldığında oyunun baslangıç değerlerini kur
document.querySelector(".again-btn").addEventListener('click', () =>{
    score = 10
    document.querySelector(".score").textContent = score
    randomNumber = Math.round(Math.random() *100)
    document.querySelector(".secret-number").textContent = "?"
    console.log(randomNumber);
    document.querySelector(".check-btn").disabled = false
    document.querySelector("body").classList.remove("bg-success", "bg-danger")
    document.querySelector(".guess-input").value = ""
    document.querySelector(".msg").innerText = "Strarting.."

})


document.querySelector(".guess-input").addEventListener("keydown", (e) => {
    if(e.code ==="Enter"){
        document.querySelector(".check-btn").click()
    }
})



/* myObj = {a:1, b:2, c:3}
localStorage.setItem("OBJ", JSON.stringify(myObj)) */

//* PSEDUO
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
