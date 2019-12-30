let btn = document.getElementsByClassName('header__nav-btn')[0];
console.log(btn);
btn.addEventListener('click',clickBtn);
let menu = document.getElementsByClassName('header__nav-menu')[0];
console.log(menu);
let span = btn.firstElementChild;

function clickBtn(event){    
    this.classList.toggle('header__nav-btn-active');    
    this.firstElementChild.classList.toggle('header__nav-btn-active');    
    // span.classList.contains('header__nav-btn-active') ? span.style.background = "transparent": span.style.background = "white";
    for(let i = 0; i < menu.children.length; i++){
             
    menu.children[i].classList.toggle('header__nav-menu-active');
        
    }
    
}
   

