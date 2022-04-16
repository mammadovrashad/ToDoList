var arrlist = [];
var addBtn = document.querySelector('.add-btn');
var inputValue = document.getElementById('addText');
var getUlList = document.querySelector('.list-block');
function isNullOrWhiteSpace(str) {
    return (!str || str.length === 0 || /^\s*$/.test(str))
}
addBtn.addEventListener('click', () => {
    if (!isNullOrWhiteSpace(inputValue.value)) {
        arrlist.push(inputValue.value);
        inputValue.value = ' ';
        getUlList.style.display = 'block'
        Get();

    }

});
let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    inputValue.value = '';
})
function Get() {
    if (arrlist.length > 1) {
        let getAllLi = document.querySelectorAll('li');
        getAllLi.forEach(element => {
            element.remove();
        });
        for (let i = 0; i < arrlist.length; i++) {
            let createLi = document.createElement('li');
            createLi.classList.add('collection');
            getUlList.append(createLi);
            createLi.innerText = arrlist[i];

        }
    }
    else {

        for (let i = 0; i < arrlist.length; i++) {
            let createLi = document.createElement('li');
            createLi.classList.add('inputlist');
            // let createClearBtn = document.createElement('button');
            getUlList.append(createLi);
            // createLi.append(createClearBtn);
            // createClearBtn.classList.add('clear');
            createLi.innerText = arrlist[i];

        }
    }




}


