const bodee = document.querySelector('#body')
const control = document.querySelector('#sideBar-control')
control.onclick = () =>{
    bodee.classList.toggle("sideBar-close")
    control.classList.toggle("active")
}