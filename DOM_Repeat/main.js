// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);


// const title = document.querySelector("h1");
// title.textContent = "New";


// Search Selector


// const title = document.querySelector("#main-title");
// console.log(title);
// const intro = document.querySelector(".intro");
// console.log(intro);
// const btn = document.querySelector("#click-me-btn");
// console.log(btn);

// Ex 1


// const title  = document.querySelector("#main-title");
// console.log(title);
// const firstIntro = document.querySelectorAll(".intro")[1];
// console.log(firstIntro);
// const btn = document.querySelector("#click-me-btn");
// console.log(btn);




// // Ex 2

// title.textContent = "Я повернувся до DOM 😎";
// firstIntro.textContent = "lorem lorem"


// const list = document.querySelectorAll(".skill");
// console.log(list);


// list.forEach((e) => {
//     // e.textContent("✅");
//     // console.log("list: + ✅", e.textContent);
//     e.textContent = e.textContent + "✅";
    
// });

// // Ex 4

// const firstElement = document.querySelector("#skills-list .skill");
// console.log(firstElement);


// Ex 5  Додай в HTML один абзац, наприклад:

// const txt = document.querySelector("#txt");
// txt.textContent = "Тут буде тільки текст <em>без тегів</em>";
// txt.innerHTML = "Тут вже можна <em>виділити курсивом</em>";
// console.log(txt.textContent);
// console.log(txt.innerHTML);


// // Ex 6

// const intro = document.querySelector(".intro");
// // console.log(intro);

// intro.style.color = "red";
// intro.style.border = "2px solid black"
// intro.style.width = "300px";
// intro.style.borderRadius = "8px";

// const btn = document.querySelector("#click-me-btn");
// btn.classList.add("highlight");
// btn.style.width = "300px"
// btn.style.border = "none";


// const btn = document.querySelector("#click-me-btn");
// const title = document.querySelector("#main-title");

// btn.addEventListener("click", (e) => {
//     // title.textContent = "Clicked";
//     title.classList.toggle("highlight");
//     console.log(e);
    
// });


// const liveInput = document.querySelector("#live-input");
// const liveOutput = document.querySelector("#live-output");

// liveInput.addEventListener("input", () => {
//     const text = liveInput.value;
//     liveOutput.textContent = "Ти написав: " + text;
// });


// // EX 1

// const btn = document.querySelector("#click-me-btn");
// const title = document.querySelector("#main-title");

// btn.addEventListener("click", () => {
//     title.textContent = "Я вчу події в JS!";
//     title.classList.toggle("highlight");
// });


// const liveInput = document.querySelector("#live-input");
// const liveOutput = document.querySelector("#live-output");

// liveInput.addEventListener("input", () => {

//     const text = liveInput.value.trim();
//     if (text === "") {
//     liveOutput.textContent = "Тут буде зʼявлятись твій текст";
//     } else {
//     liveOutput.textContent = "Ти щойно написав: " + text;
//     }
// });


// const form  = document.querySelector("#greet-form");
// const input = document.querySelector("#greet-input");
// const pOutput = document.querySelector("#greet-output");


// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const txt =  input.value.trim();
//     if(txt === ""){
//         pOutput.textContent = "Введи ім'я";
//     }else{
//         pOutput.textContent = "Привіт! " + txt;
//     }


// });


// let count = 0;
// const incBTN = document.querySelector("#increment-btn");
// const decBTN = document.querySelector("#decrement-btn");
// const countValue = document.querySelector("#count-value");
// // console.log(incBTN);
// const resetBTN = document.querySelector("#reset");

// incBTN.addEventListener("click", () => {
//    count++;
//    countValue.textContent = count;
//     // console.log(incBTN);
    
// });


// decBTN.addEventListener("click", () => {
//     count--;
//     countValue.textContent = count;
// })

// resetBTN.addEventListener("click", () => {
//     count =0;
//     countValue.textContent= count;
// })



// const liveInput = document.querySelector("#filter-input");
// // console.log(liveInput);
// const list = document.querySelectorAll(".item");
// // console.log(list);

// liveInput.addEventListener("input", () =>{
//     const searchText = liveInput.value.toLowerCase().trim();


//     list.forEach((item) => {
//         const itemText = item.textContent.toLowerCase();
        
//         if(itemText.includes(searchText)){
//             item.classList.remove("hidden");
//         }else{
//             item.classList.add("hidden");
//         }
//     });
// });
