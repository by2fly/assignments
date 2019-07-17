getTotal = function() {
    const numFirstNum = Number(document.getElementById('firstNum').value)
    const numSecondNum = Number(document.getElementById('secondNum').value)
    const totalValue = numFirstNum + numSecondNum
    document.getElementById('addTotal').value = totalValue
}
getSubTotal = function() {
    const numFirstNum = Number(document.getElementById('firstSubNum').value)
    const numSecondNum = Number(document.getElementById('secondSubNum').value)
    const totalSubValue = numFirstNum - numSecondNum
    document.getElementById('addSubTotal').value = totalSubValue
}


getMultiTotal = function() {
    const numFirstNum = Number(document.getElementById('firstMultiNum').value)
    const numSecondNum = Number(document.getElementById('secondMultiNum').value)
    const totalMultiValue = numFirstNum * numSecondNum
    document.getElementById('addMultiTotal').value = totalMultiValue
}

function changeDivBackground(){
    document.getElementById('add').style.backgroundColor = 'yellow'
    document.getElementById('subtract').style.backgroundColor = 'lightblue'
    document.getElementById('multiply').style.backgroundColor = 'white'
    document.body.style.backgroundColor = 'grey'
}
changeDivBackground()
