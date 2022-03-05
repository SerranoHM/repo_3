const btnToggle = document.querySelector('.toggle-btn');

console.log(btnToggle)

btnToggle.addEventListener("click", function () {
    console.log("clicked")
    document.getElementById("Sidebar").classList.toggle("active");
    console.log(    document.getElementById("Sidebar"))
})