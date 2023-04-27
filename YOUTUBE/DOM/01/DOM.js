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