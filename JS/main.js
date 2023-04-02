var button = document.getElementById("need-help-button")
var collapse = document.getElementById("need-help-collapsible")

var collapsed = true


button.addEventListener("click", () => {
    if (collapsed){
        collapse.style.display = "block"
        button.textContent = "\u25BE Need Help?"
        collapsed = false
    } else {
        collapse.style.display = "none"
        button.textContent = "\u25B8 Need Help?"
        collapsed = true
    }
})