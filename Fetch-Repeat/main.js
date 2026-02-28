// Ex 1
async function getTodoTitle(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP Error: ${res.status}`);
  }
  const data = await res.json();
  return data.title;

}

// getTodoTitle(1).then(console.log).catch(console.log);

// Ex 2

async function getUserNameByTodoId(todoId){

    const todoRes = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    if(!todoRes.ok){
        throw new Error(`HTTP Error: ${todoRes.status}`);
    }

    const todo = await todoRes.json();

      const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);

    if(!userRes.ok){
        throw new Error(`HTTP Error: ${userRes.status}`);
    }

    const data = await userRes.json();
    return data.name;

}

// getUserNameByTodoId(1).then(console.log).catch(console.log);

// Ex 2

// async function requestJson(url) {
//     const res = await fetch(url);
    
//     try{

    
        // if(!res.ok){
        //     throw new Error(`HTTP error: ${res.status}`);
        // }

//         return await res.json();
//     }catch(err){
//         console.log("Error with HTTP or Networking:", err.message);
//         return null;   
//     }


// }

// async function requestJson(url){
//     const res = await fetch(url);

    // if(!res.ok){
    //     throw new Error(`HTTP error: ${res.status}`);
    // }
//     return await res.json();
// }


// async function requestJson(url) { 
//     const res = await fetch(url);

//     try{
//     if(!res.ok){
//         throw new Error(`HTTP error: ${res.status}`);
//     }
//     return await res.json();
//     }catch(err){
//         console.log("Error with HTTP or Networking:", err.message);
//         return null;
        
//     }

// }

// requestJson("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => console.log("OK:", data))
//   .catch((err) => console.log("ERR:", err.message));

// requestJson("https://jsonplaceholder.typicode.com/todos/9999999")
//   .then((data) => console.log("OK:", data))
//   .catch((err) => console.log("ERR:", err.message));


// async function requestText(url){
//     const res = await fetch(url);

//     if(!res.ok){
//         throw new Error("HTTP error: " + res.status);
        
//     }

//     return res.text();

// }

// requestText("https://jsonplaceholder.typicode.com/posts/1")
//   .then((text) => console.log("TEXT:", text))
//   .catch((err) => console.log("ERR:", err.message));



async function requestJsonWithTimeout(url, ms) {
  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(), ms);

  try {
    const res = await fetch(url, { signal: controller.signal });

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error(`Timeout after ${ms}ms`);
    }
    throw err; 
  } finally {
    clearTimeout(timerId); 
  }
}

// requestJsonWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 5000)
//   .then((data) => console.log("OK:", data))
//   .catch((err) => console.log("ERR:", err.message));

//   requestJsonWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 5)
//   .then((data) => console.log("OK:", data))
//   .catch((err) => console.log("ERR:", err.message));


// async function requestTextWithTimeout(url, ms){
//     const controller = new AbortController();
//     const timerId = setTimeout(() => controller.abort(),ms);



//     try{
//         const res = await fetch(url, { signal: controller.signal });
//         if (!res.ok) {
//         throw new Error(`HTTP error: ${res.status}`);
//         }
//         return await res.text();
//     }catch(err){
//         if(err.name === "AbortError"){
//             throw new Error(`Timeout after ${ms}ms`);
//         }
//     throw err; 
//     } finally {
//     clearTimeout(timerId); 
//   }
// }



// requestTextWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 5)
//   .then((data) => console.log("OK:", data))
//   .catch((err) => console.log("ERR:", err.message));


// Fetch + DOM




// const loadBTN = document.querySelector("#load-btn");
// console.log(loadBTN);
// // const url = "https://jsonplaceholder.typicode.com/todos/1";
// const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";
// const list = document.querySelector("#list");



// loadBTN.addEventListener("click", async () => {
//   try {
//     console.log("Loading...");


//     const res = await fetch(url);

//     if (!res.ok) {
//       throw new Error(`HTTP error: ${res.status}`);
//     }

//     const data = await res.json();
//     console.log(data);
    
    

//     list.innerHTML = "";

//     data.forEach((todo) => {
//     const li = document.createElement("li");

    // if (todo.completed) {
    //     li.textContent = "✅ " + todo.title;
    // } else {
    //     li.textContent = "❌ " + todo.title;
    // }

//     list.appendChild(li);
//     });
//     console.log("Rendered:", data.length);
//     console.log(data);

//     console.log("Done!");


//   } catch (err) {
//     console.log("Error:", err.message);
//   }
// });



// Exersice 1

const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";

const loadBTN = document.querySelector("#load-btn");
console.log(loadBTN);
const list = document.querySelector("#list");
console.log(list);



loadBTN.addEventListener("click" , async () => {
    try {
        console.log("Loading...");
        const res = await fetch(url);
        console.log(res);

        if(!res.ok){
            throw new Error(`HTTP error: ${res.status}`);
            
        }
        const data = await res.json();

        data.forEach(element => {
            const li = document.createElement("li");
            li.textContent = element.title;
            list.appendChild(li);
        });
    } catch (error) {
         console.log("Error:", error.message);
    }
});


// Ex 2

const userBTN  = document.querySelector("#load-user");
// console.log(userBTN);
const userList = document.querySelector("#user-list");
// console.log(userList);

const urlUser = "https://jsonplaceholder.typicode.com/users";
// console.log(urlUser);



userBTN.addEventListener("click", async () => {
    try {
        const res = await fetch(urlUser);
        if(!res.ok){
            throw new Error(`HTTP error: ${res.status}`);
        }

        const data = await res.json();
        data.forEach(el => {
            const li = document.createElement("li");
            li.textContent = `${el.name} — ${el.email} — ${el.company.name}`;
            userList.appendChild(li);
            
        });
    } catch (error) {
        console.log("Error: ", error.message);
        
    }
});


const todoURL = "https://jsonplaceholder.typicode.com/todos?_limit=20";
const inputCompleted = document.querySelector("#only-completed");
const todoList = document.querySelector("#todo-list");
console.log(inputCompleted);
const todosBTN = document.querySelector("#load-todos");
let allTodo = [];
const prevBTN = document.querySelector("#prev-btn");
const nextBTN  = document.querySelector("#next-btn");
const pageURL = "https://jsonplaceholder.typicode.com/todos?_limit=10&_page=1"



todosBTN.addEventListener("click", async () => {
    try {
        const res = await fetch(todoURL);
        if(!res.ok) throw new Error (`HTTP error: ${res.status}`);
        allTodo = await res.json();
        renderTodos(allTodo);
        
    } catch (error) {
        console.log("Error: ", error.message);
    }
});



function renderTodos(todos){
    todoList.innerHTML = "";
    todos.forEach((todo) => {
        const li = document.createElement("li");
        if(todo.completed){
            li.textContent = todo.title;
        }else{
            li.textContent = todo.title;
        }
        todoList.appendChild(li);
    });
}

inputCompleted.addEventListener("change", () => {

  if (allTodo.length === 0) return;

  if (inputCompleted.checked) {
    const filtered = allTodo.filter((t) => t.completed);
    renderTodos(filtered);
  } else {
    renderTodos(allTodo);
  }
});

// Ex 4
let page = 1;
const limit = 10;


async function loadPage(page) {
  const pageURL = `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`;

  const res = await fetch(pageURL);
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

  const data = await res.json();

  // render
  todoList.innerHTML = "";
  data.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = (todo.completed ? "✅ " : "❌ ") + todo.title;
    todoList.appendChild(li);
  });
}

prevBTN.addEventListener("click", async () => {
  try {
    if (page === 1) return;   
    page--;
    await loadPage(page);
  } catch (error) {
    console.log("Error:", error.message);
  }
});

nextBTN.addEventListener("click", async () => {
  try {
    page++;
    await loadPage(page);
  } catch (error) {
    console.log("Error:", error.message);
  }
});