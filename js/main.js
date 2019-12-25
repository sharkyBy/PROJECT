let btn = document.getElementsByClassName('header__nav-btn')[0];
console.log(btn);
btn.addEventListener('click',clickBtn);
let menu = document.getElementsByClassName('header__nav-menu')[0];
console.log(menu)

function clickBtn(event){    
    this.classList.toggle('header__nav-btn_active');    
    this.firstElementChild.classList.toggle('header__nav-btn_active')
    
    for(let i = 0; i < menu.children.length; i++){        
    menu.children[i].classList.toggle('header__nav-menu-active');    
    }
    
}
   

