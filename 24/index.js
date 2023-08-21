// 24.	Разработайте страницу, отображающую таблицу с данными. Данные необходимо подгружать из источника.
// Требования:
// ●	данные должны загружаться при загрузке страницы
// ●	необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
// ●	необходимо реализовать клиентскую пагинацию (50 элементов на странице)



// Задаем значения для источника, числа элементов на странице и объявляем переменные для индекса поля 
// которое будет сортироваться и порядка сортировки
const dataUrl = "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true";
const itemsPerPage = 50;
let currentPage = 1;
let sortIndex; 
let sortOrder;

const sortButtonsRow = document.querySelector('.sort-row')
const sortButtons = document.querySelectorAll('.sort-row button')

//Логика кнопок отвечающих за сортировки:
// Если клик по кнопке первый подряд то сортировка по возрастанию,
// если два раза подряд сортировка по убыванию. Отправляем запрос с новым индексом поля 
// для сортировки и порядка сортировки
sortButtonsRow.addEventListener('click', (e) => {
    for (let button of sortButtons) {
        if (button !==  e.target)
        button.className = ''
    }
    sortOrder = e.target.className = (e.target.className === 'asc') ? 'desc' : 'asc'
    currentPage = 1;
    sortIndex = e.target.id 
    
    fetchData(sortIndex, sortOrder)
})

//Асинхронный запрос получая данные, формирует для них страницы и пагинацию
// если передан индекс поля для сортировки то полученные данные сортируются по этому полю в 
// переданном порядке
async function fetchData(index, order) {
try {
    const response = await fetch(dataUrl);
    let data = await response.json();
    if(index) {
         data = data.slice().sort(sortByIndex(index - 1, order))
    }
    populateTable(data);
    generatePagination(data.length);

} catch (error) {
    console.error("Error fetching data:", error);
}
}

//Функция сортировки массива объектов по конкретному ключу для метода .sort()
const  sortByIndex = (index, order) => {
    return (a, b) => {
        const keys = Object.keys(a);
        
        if (index < 0 || index >= keys.length) {
            return 0;
        }
        //Индекс кнопки равен индексу ключа в объекте
        const key = keys[index];
        //Приводим к одному регистру строки
        const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
        //Производим сравнение
        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        //Порядок сортировки функции зависит от переданного параметра
        return (order === 'desc') ? (comparison * -1) : comparison;
    };
}

//Функция формирует страницу таблицы, наполняет ее данными
const populateTable = data => {
    const tableContainer = document.querySelector("#data-table");
    tableContainer.innerHTML = "";
    //Индексы начала и конца страницы
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < data.length; i++) {
        const row = data[i];
        const newRow = document.createElement("div");
        newRow.classList.add("table-row");

        newRow.innerHTML = `
            <div class="table-cell">${row.fname}</div>
            <div class="table-cell">${row.lname}</div>
            <div class="table-cell">${row.tel}</div>
            <div class="table-cell">${row.address}</div>
            <div class="table-cell">${row.city}</div>
            <div class="table-cell">${row.state}</div>
            <div class="table-cell">${row.zip}</div>
        `;

        tableContainer.appendChild(newRow);
    }
}

//Функция создает кнопки пагинации по страницам
const generatePagination = totalItems => {
    //Вычисляем общее количество страниц
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.querySelector("#pagination");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        //Для каждой страницы добавляется кнопка пагинации
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        if (i === currentPage) {
            pageButton.classList.add("active");
        }
        //При нажатии на кнопку запрашиваются данные для отображения
        //на выбранной странице
        pageButton.addEventListener("click", function () {
            currentPage = i;
            fetchData(sortIndex, sortOrder);
            scrollToTop();
        });
        paginationContainer.appendChild(pageButton);
    }
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

fetchData();