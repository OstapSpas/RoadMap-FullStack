
// ======================================================== Fetch ========================================================

// Task  1

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => {
//         console.log(res.status);
//         console.log(res.ok);
        
//         return res.json();
//     })

//     .then((data) => {
//         console.log("Data: ", data);
        
//     })

//     .catch((err) => {
//         console.log("Erro network: ", err.message);
        
//     });


// // Task 2

// fetch("https://jsonplaceholder.typicode.com/todos/9999999999")
//     .then((res) => {
//         if(!res.ok){
//             throw new Error("Error is neok");
//         }
//     })

//     .catch((err) => {
//         console.log("Error! Problem with Internet,", err.message);
        
//     })


// // Task 3

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => {
//         console.log(res.status);
//         return res.json();
//     })

//     .then((data) => {
//         console.log("data: ", data.length);
//         console.log("Data first element: ", data[0]);
//         console.log("Title first element: ", data[0].title);
        
        
//     })

// ======================================================== проміси vs async/await, try/catch ========================================================
// Task 1
// async function getTodo(){

//     try{

//         const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         console.log(res.status);
//         console.log(res.ok);
    
    
//         const data = await res.json();
//         console.log(data);
//     }
//     catch (error) {
//     console.log("Error with Internet:", error.message);
//     }
    
    
    
// }



// getTodo();


// Task 2

// async function loadsTodos(){

//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     try{
//     if (!res.ok) {
//       throw new Error("HTTP error! Status: " + res.status);
//     }
        
//     const data = await res.json();
//     console.log("Data: ", data);

//     return data;
    
        

//     }catch(error){
//         console.log("Error (network of HTTP): ", error.message);
        
        
//     }

// }

// loadsTodos()
//     .then((todos) => {
//         console.log("Length elements: ", todos.length);
//         console.log("First element: ", todos[0]);
//         console.log("Title first: ", todos[0].title);
//     })
//     .catch((err) => {
//         console.log("Ooop's error: ", err.message);
        
//     });




// Task 3


// async function getTodo(id){
    
    
//     try{
//         const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

//         console.log(res.ok);


//         if(!res.ok){
//             throw new Error("HTTP error: " + res.status)
//         }  
//         else{
            
//             const data =  await res.json();
//             console.log("Todo: ",data);
//         }

        




//     }
//     catch(err){
//         console.log("Error with HTTP or Networking: ", err.message);
        
//     }


// }

// getTodo(1);
// getTodo(200);      
// getTodo(9999999);  


// async function createTodo(title){



// }
