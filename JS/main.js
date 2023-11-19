'use strict';
const modal= document.querySelector('.modal');
const overlay =document.querySelector('.overlay');
let btnCloseModal =document.querySelector('.close-modal');
let btnOpenModel=document.querySelectorAll('.show-modal');
//close Model When Press in close-modal
const CloseModel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden'); 
}
btnCloseModal.addEventListener('click',CloseModel);
//Open Model When Press in show-modal
const OpenModel = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for(let i =0; i<btnOpenModel.length;i++){
    btnOpenModel[i].addEventListener('click',OpenModel);   
}



