function outcome(e) {


    let numOne = Number(document.getElementById('numOne').value)
    let numTwo = Number(document.getElementById('numTwo').value)
    let total = 0;

    if (document.getElementById('box1').checked) {
        total = numOne + numTwo

    } else if (document.getElementById('box2').checked) {
        total = numOne - numTwo
    } else if (document.getElementById('box3').checked) {
        total = numOne * numTwo
    } else {
        total = numOne / numTwo
    }
    document.getElementById('resultArea').innerHTML = `Resultado = ${total}`


}

function clearInput() {
    let numOne = document.getElementById('numOne').value = ''
    let numTwo = document.getElementById('numTwo').value = ''
    document.getElementById('resultArea').innerHTML = ''
}
