const prepSpan = document.querySelector('#prepSpan')
function hidePrep() {
    var x = document.getElementById('prepToHide');
    if (x.style.display === "none") {
        x.style.display = "block";
        prepSpan.textContent = "ESCONDER";
    } else {
        x.style.display = "none";
        prepSpan.textContent = "MOSTRAR";
    }
}
prepSpan.addEventListener("click", hidePrep)

const infoSpan = document.querySelector('#infoSpan')
function hideinfo() {
    var x = document.getElementById('infoToHide');
    if (x.style.display === "none") {
        x.style.display = "block";
        infoSpan.textContent = "ESCONDER";
    } else {
        x.style.display = "none";
        infoSpan.textContent = "MOSTRAR";
    }
}
infoSpan.addEventListener("click", hideinfo)

const ingredientsSpan = document.querySelector('#ingredientsSpan')
function hideingredients() {
    var x = document.getElementById('ingredientsToHide');
    if (x.style.display === "none") {
        x.style.display = "block";
        ingredientsSpan.textContent = "ESCONDER";
    } else {
        x.style.display = "none";
        ingredientsSpan.textContent = "MOSTRAR";
    }
}
ingredientsSpan.addEventListener("click", hideingredients)

