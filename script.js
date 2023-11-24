const icon = document.querySelector(".icon-hover");
console.log(icon.children);

icon.addEventListener("mouseenter", () => {
    console.log("onmouseover");
    icon.classList.add("active");
    const myVivus = new Vivus("mku", { duration: 50, type: "sync" }, myCallback);
    myVivus.stop().reset().play(2);
});
icon.addEventListener("mouseleave", () => {
    console.log("onmouseover");
    icon.classList.remove("active");
});

function myCallback() {
    console.log("finished");
}