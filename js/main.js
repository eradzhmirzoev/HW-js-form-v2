let elemInput = document.querySelector('input');
let elemUl = document.querySelector('ul');
let addList = document.querySelector('.addList');
let error = document.querySelector('.block-error');
const regexp = /^[a-zA-Z\d]{3,25}$/;

elemInput.addEventListener('input', function(event){
    if (!regexp.test(elemInput.value) && elemInput.value !== '') {
        elemInput.classList.add('stateInvalid');
        error.innerText = 'Ошибка ввода';
        return;
    }
    elemInput.classList.remove('stateInvalid');
    error.innerText = '';

});

document.querySelector('.wrapper').addEventListener('click', (event) => {
    let elemLi = document.createElement('li');

    if (event.target.className === 'addList' && elemInput.value !== '' &&   regexp.test(elemInput.value)) {
        elemLi.innerHTML =`${elemInput.value} <button class="delete">DELETE</button>`;
        elemInput.style.borderColor = '';
        elemInput.value = '';
        elemUl.append(elemLi);
    } 

    if (event.target.className === 'delete') {
        event.target.closest('li').remove();
    }
    
    if (event.target.closest('li')) {
        event.target.closest('li').classList.toggle('changeBackgroundLi');
    }

});


