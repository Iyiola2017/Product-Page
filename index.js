let slide = document.querySelectorAll(".slide");
let slides = document.querySelector(".slides");
let index = 0;

function showImage(index) {
    document.getElementById('slides').style.transform = `translateX(${-index * 100}%)`;
}
function nextSlide() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    if (index < slide.length - 1) {
        index++;
        slide[index].style.display = "flex";
    } else if (index == slide.length - 1) {
        index = 0;
        // index = slide.length -1;
        slide[index].style.display = "flex"
    }
}

window.onload = function () {
    setInterval(function () {
        nextSlide();
    }, 5000);
};
