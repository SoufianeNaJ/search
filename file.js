let sec = document.querySelector('section')
let art = document.querySelectorAll('article')
function search(){
    let input = document.getElementById('searching')
    let arrP = document.getElementsByTagName('h3')
    for (let i = 0;i < arrP.length;i++){
        if(arrP[i].innerHTML.toLowerCase().indexOf(input.value) != -1){
            art[i].style.display = "block"
        }else{
            art[i].style.display = "none"
        }
    }
}
let ul = document.querySelector('ul')
let icon = document.querySelector('.fa-solid')
icon.addEventListener('click',function(){
    ul.classList.toggle('active')
})