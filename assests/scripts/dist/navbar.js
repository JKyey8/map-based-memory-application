var deviceHeight = window.innerHeight;
window.addEventListener("resize", function (e) {
    if (document.getElementById("nav-searchbar") === document.activeElement) {
        document.getElementById("mobile-nav").style.display = "none";
    }
    else if (window.innerHeight == deviceHeight) {
        document.getElementById("mobile-nav").style.display = "flex";
        document.getElementById("searchbar-dropdown").style.backgroundColor = "red";
    }
});
window.addEventListener("click", function () {
    document.getElementById("mobile-nav").style.display = "flex";
});
