function calcular() {
    const f = Number(document.querySelector("#inputfrequencia").value); // Velocidade
    const l = Number(document.querySelector("#inputcomprimento").value); // Ângulo
    
    const v = f * l

    document.querySelector("#resultado").textContent = "Velocidade:" + v.toFixed(2) + "m/s";
   
}

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#calcular");
    calcularButton.addEventListener("click", calcular);
});