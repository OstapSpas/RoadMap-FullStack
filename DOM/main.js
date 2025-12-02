// const li = document.querySelector("li");
// li.textContent = "List";
// li.classList.add('todo-item');


// const list  = document.querySelector("#todo-list");

// const newItem = document.createElement("li");
// newItem.textContent = "Study DOM";
// newItem.classList.add("todo-item");

// list.append(newItem);


// const fElement = list.firstElementChild;
// fElement.style.border = "1px solid black";

// const items = document.querySelectorAll("#todo-list li");

// items.forEach((e) => {
//     e.style.color = "green";
// });


// // newItem.remove();


// const lastItem = list.lastElementChild;
// // lastItem.remove();


// list.innerHTML = '';

// ============================== EVENTS ============================= 


// елемент.addEventListener("назва-події", функція);
// 

// const btn = document.querySelector("#main-button");
// const res = document.querySelector("#click-result");

// let coutn = 0;


// btn.addEventListener("click", () =>{
//     coutn++;
//     res.textContent = `Onclicked ${coutn}`;
// });

// btn.addEventListener("click", () => {
//   btn.style.backgroundColor = "black";
//   btn.style.color = "white";
// });

// const input = document.querySelector("#name-input");
// const preview = document.querySelector("#preview");


// input.addEventListener("input", () => {
//     preview.textContent = "You write: " + input.value
// });


// const form = document.querySelector("#todo-form");
// const input = document.querySelector("#todo-input");
// const list = document.querySelector("#todo-list");


// form.addEventListener("click", (e) => {
//     e.preventDefault();

//     const text = input.value.trim();
//     if(text === "") return;


//     const li = document.querySelector("li");
//     list.textContent = text;
//     list.append(li);
//     input.value = "";
// });


// ===================== Filter List =====================




//   const filterInput = document.querySelector("#filter-input");
//   const items = document.querySelectorAll("#items-list li");

//   filterInput.addEventListener("input", () => {
//     const searchText = filterInput.value.toLowerCase().trim();

//     items.forEach((item) => {
//       const itemText = item.textContent.toLowerCase();

//       if (itemText.includes(searchText)) {
//         item.classList.remove("hidden");
//       } else {
//         item.classList.add("hidden");
//       }
//     });
//   });



// ====================== Modal Window ======================

// const openBtn = document.querySelector("#open-modal-btn");

// const modalWindow = document.querySelector(".modal-overlay");

// const closeBtn = document.querySelector(".modal-close-btn");

// function openModal() {
//   modalWindow.classList.remove("hidden");
// }

// function closeModal() {
//   modalWindow.classList.add("hidden");
// }

// openBtn.addEventListener("click", (e) => {
//   e.preventDefault(); // можна забрати, якщо не у формі
//   openModal();
// });

// closeBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   closeModal();
// });

// ====================== To Do List ======================


const inputText = document.querySelector("#write-exercise");
const btnEx = document.querySelector("#add-exercise-btn");
const todoList = document.querySelector(".todo-list");




btnEx.addEventListener("click", (e) => {
  e.preventDefault();

  const text = inputText.value.trim();
  if (text === "") return; 

  const item = document.createElement("li");
  item.classList.add("todo-item");

  const textSpan = document.createElement("span");
  textSpan.textContent = text;
  textSpan.classList.add("todo-text");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");

  item.append(textSpan, deleteBtn);
  todoList.append(item);

  inputText.value = "";


    todoList.addEventListener("click", (e) => {
        const target = e.target;
    
        if(target.matches("button")){
            const li =  target.closest("li");
            if(li) li.remove();
            return;
        }
    
    
      if (target.matches(".todo-item") || target.closest(".todo-item")) {
        const li = target.closest(".todo-item");
        li.classList.toggle("done");
      }
    });
});


