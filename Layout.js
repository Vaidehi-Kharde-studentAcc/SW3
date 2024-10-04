function navigateToNews() {
    window.location.href = "https://www.unep.org/news-and-stories/story/looking-back-top-moments-environment-2023";
}

const menuIcon = document.querySelector('.menu-icon');
const navUl = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutImage = document.getElementById('aboutImage');

    aboutImage.addEventListener('click', function() {
        aboutImage.src = 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5M-xxcFJAt8ZFzpzxpQA_w.jpeg'; // Replace with the new image URL
    });
});

const alertButton = document.querySelector('#new');
alertButton.addEventListener('click', () => {
    alert("want to learn more?");
    console.log("its good to learn");
});

