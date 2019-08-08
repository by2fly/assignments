

const form = document.calcCoins
form.addEventListener('submit',function(e){
    e.preventDefault()

    let bCoins=form.boBombCaught.value ;
    let gCoins=form.gombaCaught.value ;
    let cCoins=form.cheepCaught.value ;

    let coinsEarned = bCoins*5  + gCoins*7 + cCoins*11
    document.getElementsByClassName('result')[0].innerHTML = `<h3>${coinsEarned}</h3>`
})