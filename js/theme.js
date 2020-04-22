let Droot = document.querySelector(":root")
let themeCheck = document.getElementsByClassName("themeCheck")
let checkLabel = document.getElementsByClassName("checkLabel")
let theme = localStorage.getItem('theme')

function colorSet(myid) {
    let hue, sat, light;
    switch (myid) {
        case "red":
            hue = "348";
            sat = "65%";
            light = "35%";
            break;
        case "orange":
            hue = "25";
            sat = "68%";
            light = "38%";
            break;
        case "cyan":
            hue = "147";
            sat = "70%";
            light = "20%";
            break;
        case "purple":
            hue = "300";
            sat = "60%";
            light = "20%";
            break;
        case "blue":
            hue = "204";
            sat = "70%";
            light = "20%";
            break;
        case "dark":
            hue = "0";
            sat = "0%";
            light = "13%";
            break;
        default:
            break;
    }
    Droot.style.setProperty('--hue', hue)
    Droot.style.setProperty('--light', light)
    Droot.style.setProperty('--sat', sat)

    localStorage.setItem('theme', myid)
}

function checkStuff(myid) {
    let check = document.querySelector(`label#${myid}>[type="radio"]`)
    check.checked = true
}
if (theme) {
    colorSet(theme)
    checkStuff(theme)
    setLabel()
}

function setLabel() {
    for (let x = 0; x < themeCheck.length; x++) {
        const el = themeCheck[x];
        if (el.checked == true) {
            el.parentElement.classList.add("active")
        } else{
            el.parentElement.classList.remove("active")
        }
    }
}

for (let x = 0; x < themeCheck.length; x++) {
    const el = themeCheck[x];
    el.onclick = () => {
        setLabel()
        colorSet(el.parentElement.id)
        console.log(localStorage)
    }
}


console.log(localStorage)