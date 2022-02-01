var deviceHeight = window.innerHeight;
window.addEventListener("resize", function (e) {
    if (document.getElementById("nav-searchbar") === document.activeElement) {
        document.getElementById("mobile-nav").style.display = "none";
    }
    else if (window.innerHeight == deviceHeight) {
        document.getElementById("mobile-nav").style.display = "flex";
    }
});
window.addEventListener("click", function () {
    document.getElementById("mobile-nav").style.display = "flex";
});
