let aboutArticle = document.querySelector("article#aboutTexito")
let aboutClose = document.querySelector("article#aboutTexito>button")
let aboutOpen = document.querySelector("label>button#aboutOpen")
let bodyCover = document.querySelector("span.bodyCover")

function coverBody(arg) {
    if (arg == true) {
        bodyCover.style.display ="block"
    } else{
        bodyCover.style.display ="none"
    }
}
function openAbout() {
    aboutArticle.classList.add("active")
    aboutOpen.classList.add("active")
    coverBody(true)
    
}

function closeAbout() {
    aboutArticle.classList.remove("active")
    aboutOpen.classList.remove("active")
    coverBody(false)
}

aboutOpen.onclick = () => {
    openAbout()
}

aboutClose.onclick = () => {
    closeAbout()
}