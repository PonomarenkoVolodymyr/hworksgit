/*Task 1. Створити HTML-сторінку для відображення/редагування тексту При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.*/

function el (id){
    return document.getElementById(id)
}

document.addEventListener('keydown', (e)=>{
    
    if (e.ctrlKey && e.code === 'KeyE'){        
        e.preventDefault()
        const divText =  el("text")
        const textArea = document.createElement('textarea')
        textArea.id = "text-area"
        textArea.textContent = "Enter new text"      
        // divText.replaceWith(textArea)
        divText.remove()
        el("card-body").prepend(textArea)
        textArea.focus()
        textArea.select()
    }

    if(e.ctrlKey && e.code === 'KeyS'){
        e.preventDefault()
        const textArea = el('text-area')
        const newText = textArea.value
        const newDiv = document.createElement('div')
        newDiv.textContent = newText
        newDiv.id = "text"
        // textArea.replaceWith(newDiv) 
        textArea.remove()
        el('card-body').prepend(newDiv)
    }
})

/*Task2. Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.*/

const users = [
    {
      firstName: "John",
      lastName: "Smith",
      age: 28
    },
    {
      firstName: "Emily",
      lastName: "Johnson",
      age: 34
    },
    {
      firstName: "Michael",
      lastName: "Williams",
      age: 45
    },
    {
      firstName: "Sarah",
      lastName: "Brown",
      age: 22
    },
    {
      firstName: "David",
      lastName: "Jones",
      age: 31
    },
    {
      firstName: "Jennifer",
      lastName: "Miller",
      age: 29
    },
    {
      firstName: "Christopher",
      lastName: "Davis",
      age: 38
    },
    {
      firstName: "Amanda",
      lastName: "Wilson",
      age: 26
    },
    {
      firstName: "Robert",
      lastName: "Taylor",
      age: 41
    },
    {
      firstName: "Jessica",
      lastName: "Anderson",
      age: 33
    }
]; 

const tBody = el("t-body")

function showTable(){
  let html = ''
  users.forEach((user, index)=>{
      html +=`
      <tr>
          <th scope="row">${index+1}</th>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.age}</td>
      </tr>
      ` 
    })
    tBody.innerHTML = html
}

showTable()


const tHead = el("t-head")

tHead.addEventListener('click', (e)=>{
  e.preventDefault()
  //перемикаємо значення asc desc
  const clickedCol = e.target.closest('th[data-sort]') 
  if(!clickedCol){return}
  toggleDirection = clickedCol.dataset.sort === "asc" ? "desc" : "asc"
  clickedCol.setAttribute('data-sort', toggleDirection)

  //видалення та додавання стрілки сортування до потрібної колонки:
  const icon = `<i class="fa-solid fa-arrow-down asc"></i>`
  document.querySelectorAll("#t-head i").forEach((icon)=>{
    icon.remove()
  })

  clickedCol.insertAdjacentHTML('beforeend', icon)

 //поворот стрілки вказівника сортування
  if(toggleDirection === "desc"){
    clickedCol.querySelector("i").classList.add("rotated")
  } else {
    clickedCol.querySelector("i").classList.remove("rotated")  }  

 // записуємо ключ для сортування 
  let key = ""
  switch (true){
    case clickedCol.id === "t-first":
      key = "firstName";
      break;
    case clickedCol.id === "t-last":
      key = "lastName";
      break;
    case clickedCol.id === "t-age":
      key = "age";
      break;  
  }
 
//викликаємо сортування та оновлюємо таблицю
  sortTable(users, key, toggleDirection)
  showTable()
})

function sortTable(users, key, toggleDirection){
  users.sort((a, b)=>{

    if(isNaN(a[key]) && isNaN(b[key])){
      return toggleDirection === "asc"
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key])
    }

    return toggleDirection === "asc" ? a[key] - b[key] : b[key] - a[key]

  })
}




