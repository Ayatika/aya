function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "0px" || sidenav.style.width === "") {
        sidenav.style.width = "300px";
        document.getElementById("main").style.marginLeft = "300px";
    } else {
        sidenav.style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
    }
}
