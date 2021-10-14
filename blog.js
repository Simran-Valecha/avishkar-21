let para = document.getElementById('para');
para.addEventListener('mouseover', function run() {
    console.log('Mouse Inside')
});

para.addEventListener('mouseout', function run() {
    console.log('Mouse now went outside')
});


function toggleHide() {
    // let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    if (para.style.display != 'none') {
        para.style.display = 'none';
    }
    else {
        para.style.display = 'block';
    }
}

var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // ChangeS image every 3 seconds
}
