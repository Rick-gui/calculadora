const btnDeletarDigito = document.getElementById("deletarDigito");
let display = document.getElementById("screen")

function show(value) {
    const screen = document.getElementById('screen');
    if (screen.value === "0") {
        screen.value = value; 
    } else {
        screen.value += value; 
    }
}

function wipe() {
    document.getElementById('screen').value = ''; 
}

btnDeletarDigito.onclick = function () {
    btnDeletarUltimoDigito()
}

function btnDeletarUltimoDigito() {
    const screen = document.getElementById("screen")
    screen.value = screen.value.slice(0, -1);
  }
  

function calc() {
    display.value = eval(display.value)
}