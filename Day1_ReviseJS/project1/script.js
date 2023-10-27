const x = document.getElementsByClassName("text")
const handle = document.getElementsByClassName(".btn").addEventListener("click", () => {
    if(x.classList.contains("show_hidden"))
    {
        x.classList.remove("show_hidden")
    }
    else{
        x.classList.add("show_hidden")
    }
})