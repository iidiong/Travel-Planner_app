import "./styles/style.css";
// import  "./media/icons.png";
const img = require("./media/icons/c03n.png")


const rTemp = require("./js/app.js")
const searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", rTemp.requestTemp, false);


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js')
        .then(function () { console.log("Service Worker Registered"); });
    });
}
