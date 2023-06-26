const readmorebtn=document.querySelector('.read-more-btn');
const text=document.querySelector('.text');

readmorebtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');

    if(readmorebtn.innerText=='Read More'){
        readmorebtn.innerText='Read Less';
    }
    else{
        readmorebtn.innerText='Read More';
    }
}
)