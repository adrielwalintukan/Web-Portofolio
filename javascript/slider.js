document.addEventListener('DOMContentLoaded', function () {
    // Slider kiri
    const leftSlider = document.querySelector('.left-slider .slides');
    const leftArrowLeft = document.querySelector('.left-slider .left-arrow');
    const leftArrowRight = document.querySelector('.left-slider .right-arrow');
    let leftIndex = 0;

    function showLeftSlide(index) {
        const slides = leftSlider.children.length;
        if (index >= slides) leftIndex = 0;
        else if (index < 0) leftIndex = slides - 1;
        else leftIndex = index;
        leftSlider.style.transform = `translateX(-${leftIndex * 100}%)`;
    }

    leftArrowLeft.addEventListener('click', () => showLeftSlide(leftIndex - 1));
    leftArrowRight.addEventListener('click', () => showLeftSlide(leftIndex + 1));

    // Slider kanan
    const rightSlider = document.querySelector('.right-slider .slides');
    const rightArrowLeft = document.querySelector('.right-slider .left-arrow');
    const rightArrowRight = document.querySelector('.right-slider .right-arrow');
    let rightIndex = 0;

    function showRightSlide(index) {
        const slides = rightSlider.children.length;
        if (index >= slides) rightIndex = 0;
        else if (index < 0) rightIndex = slides - 1;
        else rightIndex = index;
        rightSlider.style.transform = `translateX(-${rightIndex * 100}%)`;
    }

    rightArrowLeft.addEventListener('click', () => showRightSlide(rightIndex - 1));
    rightArrowRight.addEventListener('click', () => showRightSlide(rightIndex + 1));
});
