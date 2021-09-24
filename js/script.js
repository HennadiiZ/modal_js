// show modal in 9 sec 
// show modal when reach footer
// show modal when press buttons

// hide modal when press 'X'
// hide modal when press outside the modal
// hide modal when press esc button

const btns = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');

function modalOpen(){
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalShowUp)
}

function modalClose(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}


btns.forEach((btn, i)=>{
    btn.addEventListener('click',()=>{
        modalOpen()
    })
});

modalCloseBtn.addEventListener('click',()=>{
    modalClose()
})

modal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal')){
        modalClose()
    }
})
document.addEventListener('keydown',(e)=>{
    if(e.code === 'Escape'){
        modalClose()
    }
});


const modalShowUp = setTimeout(modalOpen, 9000);

window.addEventListener('scroll', endScrollShowUp);

function endScrollShowUp(){
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        modalOpen();
        window.removeEventListener('scroll', endScrollShowUp);
    }
}















