//Создать div
const div = document.createElement('div');
//Добавить к нему класс wrapper
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
//I Создать изобрапжение
const img = document.createElement('img');
//I.1. Добавить атрибут source
img.src = 'https://picsum.photos/240';
//I.2. Добавить атрибут width=240
img.width = 240;
//I.3. добавить класс super
img.classList.add('super');
//I.4. Добавить свойство alt со значением 'Super Man'
img.alt = 'Super Man'

//Поместить изоюражение внутрь элемента с классом wrapper
div.appendChild(img);
//Используя Html строку, создать DIV с классом 'pDiv' + с 2мя параграфами
const elemHTML = `
<div class = 'pDiv'>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
</div>`

//Поместить этот DIV до элемента <ul></ul>
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML);//добавляем разметку до списка ul

//Добавить для второго пораграфа класс text
const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');

//Удалить первый параграф
pDiv.firstElementChild.remove();

//Создать функцию generateAutoCard, которая будет принимать три аргумента: brand, color, year
//Функция должна возвращать разметку HTML вида:
/*
    <div class="autoCard">
        <h2> BRAND YEAR </h2>
        <p> Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
    </div>
*/
const generateAutoCard = (brand, color, year) =>
{
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return`
        <div class="autoCard">
            <h2> ${brand.toUpperCase()} ${year} </h2>   
            <p> Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${currentYear - year} лет.</p>
            <p>Цвет: ${color}</p>
            <button type='button' class='btn'>Удалить</button>
        </div>
    `;
}

//Создать новый div с классом autos
const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');//добавляем класс autos

//Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
    {brand: 'Tesla', color: 'Красный', year: 2015 },
    {brand: 'Lexus', color: 'Серебристый', year: 2016 },
    {brand: 'Nissan', color: 'Черный', year: 2012 },
];

const carsHTML = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year );
}).join('');


//Поместить 3 карточки внутрь DIV с классом autos
carsDiv.innerHTML = carsHTML;

//Поместить div с классом autos на страницу DOM - до DIV с классом wrapper
div.insertAdjacentElement('beforebegin', carsDiv);

//Добавить кнопку удалить на каждую кнопку авто


console.log(carsDiv);