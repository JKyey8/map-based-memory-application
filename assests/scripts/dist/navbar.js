window.addEventListener("resize", function (e) {
    if (document.getElementById("nav-searchbar") === document.activeElement) {
        document.getElementById("mobile-nav").style.display = "none";
    }
    else if (document.getElementById("nav-searchbar") != document.activeElement) {
        document.getElementById("mobile-nav").style.display = "flex";
    }
});
