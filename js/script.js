// função de mudar a cor do celular
function imgSlider(e) {
    document.querySelector("#phone").src = e;
}

// função de mudar a cor do circulo
function circleChange(color) {
    const circle = document.querySelector(".circle");
    circle.style.background = color;
}
