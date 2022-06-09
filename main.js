function animationFunction(x) {
    x.classList.toggle("change");

}
document.querySelector("#btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode")
})

function showPage() {
    document.getElementById("box").style.opacity = 0;
    //document.getElementById("preLoader").style.width = "0%";//
    document.getElementById("preLoader").style.height = "0%";
}
window.addEventListener('scroll', () => {
    console.log('Scrolled!');
    var value = -10 + window.scrollY / 40;
    if (value >= 10) {
        value = 10;
    }
})
