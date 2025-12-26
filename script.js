window.onload = function() {
    setTimeout(showBio, 2000); // показываем биографию автоматически спустя 2 секунды
};

function showBio() {
    var bioElement = document.getElementById("bio");
    bioElement.style.opacity = '1';
}