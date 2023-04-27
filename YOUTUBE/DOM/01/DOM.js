//Создать div
const div = document.createElement('div');
//Добавить класс wrapper
div.classList.add('wrapper');
//Поместить его внутрь тега body
const body = document.body;
body.appendChild(div);
//Создать заголовок H1 'DOM (Doccument Object Model)'
const header = document.createElement('h1');
header.textContent = 'DOM (Doccument Object Model)';
console.log(header);
//Добавить H1 перед DIV с классом wrapper
div.insertAdjacentElement('beforebegin', header);
//Создать список ul и добавить в него три элемента с текстом 'один, два, три'
const ul = `
    <ul>
        <li>один</li>
        <li>два</li>
        <li>три</li>
    </ul>   
`
//Поместить список внутрь элемента wrapper
div.innerHTML = ul;
/****************************************************************************************
 ***************************************************************************************
 ****************************************************************************************/
//Создать изобрапжение
const img = document.createElement('img');
//Добавить атрибут source
img.src = 'https://picsum.photos/240';
//Добавить атрибут width=240
img.width = 240;
//добавить класс super
img.classList.add('super');

img.alt = 'Super Man'