const header = document.querySelector("header")
window.onscroll = () => {
    
     let scroll = document.documentElement.scrollTop

     let altura = document.documentElement.clientHeight

     let res = (scroll / altura) * 20

     header.style.clipPath = `polygon(0% 0%, 50% 0%, 100% 0%, 100% ${res + 80}%, 50% 100%, 0% ${res + 80}%)`



}