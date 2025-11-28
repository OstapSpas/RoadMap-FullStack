// ============================ Basic Methods JS ============================= //


// Task 1

// let cart = ['apple', 'banana','orange'];
// cart =  cart.push('pear');
// console.log(cart); 

// let lastCart = cart.pop();
// console.log("Removed in trash: ",lastCart); // 3

// Task 2

// const queue = ["Олег", "Марія", "Світлана"];

// queue.unshift("Ігор");
// console.log("Edit: ",queue);

// let firstremoved = queue.shift(); 

// console.log(queue);
// console.log("First removed:", firstremoved);


// // Task 3'

// const nums = [10, 20, 30, 40, 50, 60];

// const copy = nums.slice(2,4);
// console.log("Copy: ",copy); // [30, 40]


// // Task 4

// // const tasks = ["помити посуд", "зробити ДЗ", "почитати книгу"];

// // const editor  = tasks.splice(1, 1, "зробити ДЗ з JS");
// // console.log("Edited tasks: ",tasks);
// // console.log("Removed task: ",editor);



// // Task 5

// let queue1 = ["Олег", "Марина", "Світлана"];

// queue1.push("Ігор");
// // console.log(queue1);

// let firstremoved1 = queue1.shift();

// console.log("хто зайшов до каси",queue1);
// console.log("хто пішов з каси",firstremoved1);


// // Task 6


// const cart = ["хліб", "молоко"];


// cart.push("банани");
// cart.push("яблука");

// let removedItem = cart.pop();

// console.log("Removed item: ",removedItem);
// console.log("Final cart: ",cart);


// // Task 7

// let sleepHours = [6, 5, 7, 4, 8];

// let firstElm = sleepHours.shift();
// console.log("Removed first element: ",firstElm);
// sleepHours.unshift(7);
// console.log("Updated sleep hours: ",sleepHours);

// // Task 8

// let playlist = ["track1", "track2", "track3", "track4", "track5"];

// let firtstThree = playlist.slice(0,3);
// console.log("First three tracks: ",firtstThree);
// console.log("Original playlist: ",playlist);


// // Task 9


// // let marks = [10, 8, 9, 7, 12, 11];
// // let middleMarks = marks.slice(1,5);
// // console.log("Middle marks: ",middleMarks);
// // console.log("Original marks: ",marks);


// // Task 10

// let tasks = ["помити посуд", "зробити ДЗ", "погуляти з собакою"];

// console.log("Original tasks: ", tasks);


// let editedTask = tasks.splice(1,1,"зробити ДЗ з JavaScript");
// console.log("Removed task: ", editedTask);

// tasks.push("подивитись лекцію")
// tasks.shift(1);


// console.log("Edited task: ", tasks);


// // Task 11

// let numbers = [1, 2, 7, 8, 9];

// let midNum = numbers.splice(2,0,3,4,5,6);
// console.log("Removed numbers: ", midNum);
// console.log("Updated numbers: ", numbers);


// // Task 12

// let messages = ["hi", "hello", "what's up", "bye"];

// messages.pop('bye');
// messages.unshift("system: chat started");

// console.log(messages);

// // Task 13

// let products = ["apple", "banana", "orange", "kiwi", "mango"];

// products.splice(2,2, "grape", "peach");
// console.log("Prod: ", products);


// // Task 14

// let logs = ["login", "click", "scroll", "click", "logout", "close"];


// let lasthThree = logs.splice(-3);
// console.log("Last three logs: ", lasthThree);
// console.log("Remaining logs: ", logs);

// // Task 15


// let stack = [];

// stack.push(10);
// stack.push(20);
// stack.push(30);

// let last = stack.pop();
// console.log("Last removed from stack: ", last);
// stack.push(40);

// console.log("Final stack: ", stack);


// // Task 16

// let weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// workDays = weekDays.slice(0,5);
// let weekend = weekDays.slice(5);

// console.log("Work days: ", workDays);
// console.log("Weekend: ", weekend);

// // Task 17


// let players = ["Player1", "Player2", "Player3", "Player4", "Player5"];
// let remodevPlayer = players.splice(2,1,"NewPlayer");

// console.log("Removed player:  ", remodevPlayer);
// console.log("Updated players: ", players);

// // Task 18

// let nums1 = [100, 200, 300, 400, 500, 600, 700];
// // Треба залишити тільки середні три значення в цьому ж масиві nums, тобто щоб фінальний nums став [300, 400, 500].
// nums1.splice(0,2);
// console.log("Ed: ", nums1);

// nums1.splice(3);

// console.log("Final nums: ", nums1);

// // Task 19

// let history = ["open", "scroll", "click", "click", "type", "submit", "close"];
// let n = 4;


// let lastN = history.slice(-n);
// console.log("Last n actions: ", lastN);
// console.log("Remaining history: ", history);

// ===========================  Methods Map, Filter... JS ============================= //

// array.map( callback );
// array.filter( callback );
// array.find( callback );
// array.some( callback );
// array.every( callback );

// callback => (element, index, array)
// =======================     Міні шпаргалка   =====================================
                
                // map — «Зроби з кожної людини щось інше»
                // → people.map(p => p.name) → масив імен

                // filter — «Залиш тільки тих, хто…»
                // → people.filter(p => p.age >= 18) → тільки дорослі

                // find — «Дай мені ОДНУ людину, яка…»
                // → people.find(p => p.name === "Petro")

                // some — «Чи є хоч одна людина, яка…?»
                // → people.some(p => p.age < 18) → true/false

                // every — «Чи ВСІ люди…?»
                // → people.every(p => p.age >= 18) → true/false


// Task 1


// const nums = [1, 2, 3, 4, 5];

// const newnums = nums.map((el) => Math.pow(el,2));
// console.log("Squered nums: ", newnums);


// // Task 2 

// // const products = [
// //   { name: "Apple", price: 10 },
// //   { name: "Banana", price: 5 },
// //   { name: "Orange", price: 8 },
// //   { name: "Mango", price: 20 }
// // ];


// // const cheapProducts = products.filter(el => el.price <= 10);


// // const OrangeProduct = products.find(e => e.name === 'Orange');



// // console.log(cheapProducts);
// // console.log(OrangeProduct);




// const ages = [18, 22, 19, 30, 17];



// const age = ages.some(el => el < 18);

// console.log(age);

// const hasKids = ages.every(e => e <= 18);

// console.log(hasKids);


// // Task 3 

// const prices = [100, 250, 50, 400, 90];

// const discountedPrices = prices.map(p => p * 0.8);
// console.log(discountedPrices);

// const words = ["hello", "JS", "Ostap", "map", "filter"];

// const length = words.map(el => el.length);
// console.log(length);




// const users = [
//   { firstName: "ostap", lastName: "petrenko" },
//   { firstName: "ivan", lastName: "ivanchuk" },
//   { firstName: "anna", lastName: "melnyk" }
// ];




// const fullNames = users.map(user => {


// const firstName =  user.firstName[0].toUpperCase() + user.firstName.slice(1);

// const lastName = user.lastName[0].toUpperCase() + user.lastName.slice(1);


// return firstName + ' ' + lastName;
// })

// console.log(fullNames);



// const numbers = [1, 4, 7, 10, 13, 16];

// const even = numbers.filter(el => el % 2 === 0);
// console.log(even);


// const products = [
//   { name: "Apple", inStock: true },
//   { name: "Banana", inStock: true },
//   { name: "Orange", inStock: true },
//   { name: "Mango", inStock: false }
// ];



// const availableProducts = products.filter(prod => prod.inStock === true);

// console.log("TRUE ",availableProducts);


// const orders = [
//   { id: 1, total: 10 },
//   { id: 2, total: 200 },
//   { id: 3, total: 120 },
//   { id: 4, total: 30 }
// ];

// const bioOrders = orders.filter(total => total.total >= 10);
// console.log(bioOrders);



// const users = [
//   { id: 1, name: "Ostap", email: "ostap@example.com" },
//   { id: 2, name: "Ivan", email: "ivan@example.com" },
//   { id: 3, name: "Anna", email: "anna@example.com" }
// ];



// const foundUsers = users.find(el => el.email === "ivan@example.com")
// console.log(foundUsers);


// const products = [
//   { id: 10, name: "Laptop" },
//   { id: 20, name: "Phone" },
//   { id: 30, name: "Tablet" }
// ];


// const productID = products.find(el => {
//     if(el.id === 20){
//         console.log(`Product with id ${el.id} in register `);
//         return true;
        
//     }else{
//         console.log("Product not found");
//         return false;
        
//     }
    
// });


// const comments = [
//   "Nice!",
//   "I totally agree with you, this is a very important topic.",
//   "Cool",
//   "Interesting post"
// ];

// const commentsLenght = comments.find(el => el.length < 5);

// console.log(commentsLenght);




// const ratings = [5, 4, 3, 5, 2, 5];

// const hasBadRating = ratings.some(el => el < 3);
// console.log(hasBadRating);



// const prod = [
//   { name: "Laptop", price: 1000 },
//   { name: "Mouse", price: 20 },
//   { name: "Keyboard", price: 50 }
// ];



// const hasCheapProd = prod.some(el => el.price < 30);


// const regUsers = [
//   { name: "Ostap", isRegistered: true },
//   { name: "Ivan", isRegistered: true },
//   { name: "Petro", isRegistered: false }
// ];



// const hasUnregiser = regUsers.some(el => el.isRegistered === true);
// console.log(hasUnregiser);



// const hasAges = [18, 22, 19, 30, 25];


// const allAdults = hasAges.some(el => el >= 18);
// console.log(allAdults);




// const Unusers = [
//   { name: "Ostap", isActive: true },
//   { name: "Ivan", isActive: true },
//   { name: "Anna", isActive: true },
//   { name: "Petro", isActive: false }
// ];


// const activeUsers = Unusers.filter(el => el.isActive === true);
// const activeNames = activeUsers.map(el => el.name );

// console.log(activeNames);


// const allProd = [
//   { id: 1, name: "Apple", price: 10 },
//   { id: 2, name: "Banana", price: 5 },
//   { id: 3, name: "Orange", price: 8 }
// ];



// const orange = allProd.find(el => el.id === 3);
// console.log(orange);

// const everyOrange = allProd.every(e => e.price > 0 );
// console.log(everyOrange);
// // 
// const someOrange = allProd.some(el => el.price < 6);

// console.log(someOrange);




// const todos = [
//   { title: "Помити посуд", completed: true },
//   { title: "Зробити ДЗ", completed: false },
//   { title: "Погуляти", completed: true },
//   { title: "Почитати книгу", completed: false }
// ];


// const completedTodos = todos.filter(el => el.completed === true);
// const titles = todos.map(el => el.title);
// const someCompleted = todos.some(el => el.completed === true);
// const everyCompleted = todos.every(e => e.completed == true);



// ====================================== Reduce =============================================

// array.reduce((accumulator, current, index, array) => {
//   // ...щось робимо
//   return newAccumulator;
// }, initialValue);



// Task 1


// const nums = [1,2,4,6,15,20];


// const sum = nums.reduce((acc,curr) => {

//     return acc + curr;


// },0);


// console.log(sum);

// // Task 2

// const products = [
//   { name: "Apple", price: 10 },
//   { name: "Banana", price: 5 },
//   { name: "Orange", price: 8 }
// ];



// const totalPrice = products.reduce((acc,curr) =>{
//     return acc + curr.price;
// },0);

// console.log(totalPrice);


// // Task 3
// const words = ["hello", "JS", "reduce"];


// const totalLength = words.reduce((acc, len)=> {
//     return acc + len.length;
// },0);   

// console.log(totalLength);


// const todos = [
//   { title: "Помити посуд", completed: true },
//   { title: "Зробити ДЗ", completed: false },
//   { title: "Погуляти", completed: true },
//   { title: "Почитати книгу", completed: true }
// ];


// const completedCount = todos.reduce((acc,curr)=>{
    // if(curr.completed === true){
    //     return acc + 1;
    // }else{
    //     return acc;
    // }
// },0);



// console.log(completedCount);



// const letters = ["a", "b", "a", "c", "b", "a"];

// const letterCount = letters.reduce((acc,curr)=>{

//     if(!acc[curr]){
//         acc[curr] = 1;
//     }else{
//         acc[curr]++;
//     }
//     return acc;

// },{});

// console.log(letterCount);




// const todos = [
//   { title: "Помити посуд", completed: true },
//   { title: "Зробити ДЗ", completed: false },
//   { title: "Погуляти", completed: true },
//   { title: "Почитати книгу", completed: false },
//   { title: "Поспати", completed: true }
// ];


// const stats = todos.reduce((acc,curr)=>{
//     if (curr.completed) {
//         acc.completed += 1;
//     } else {
//         acc.notCompleted += 1;
//     }
//     return acc;


// },{ completed: 0, notCompleted: 0 });

// console.log(stats);



// const products = [
//   { name: "Apple", category: "fruit" },
//   { name: "Banana", category: "fruit" },
//   { name: "Tomato", category: "vegetable" },
//   { name: "Cucumber", category: "vegetable" },
//   { name: "Orange", category: "fruit" }
// ];


// const groupedProducts = products.reduce((acc, curr) => {
//   if (curr.category === "fruit") {
//     acc.fruit.push(curr);
//   } else if (curr.category === "vegetable") {
//     acc.vegetable.push(curr);
//   }

//   return acc;
// }, { fruit: [], vegetable: [] });


// console.log(groupedProducts);


// const transactions = [
//   { id: 1, currency: "USD", amount: 50 },
//   { id: 2, currency: "EUR", amount: 70 },
//   { id: 3, currency: "USD", amount: 20 },
//   { id: 4, currency: "UAH", amount: 1000 },
//   { id: 5, currency: "EUR", amount: 30 }
// ];


// const totalsByCurrency = transactions.reduce((acc,item) => {
//     if(!acc[item.currency]){
//         acc[item.currency] = 0;
//     }

//     acc[item.currency] += item.amount;


//     return acc;

// }, {});

// console.log(totalsByCurrency);


// const totalsByCurrency = transactions.reduce((acc,item) => {
//     if(item.currency === "USD"){
//         acc.USD += item.amount;
//     }

//     if(item.currency === "EUR"){
//         acc.EUR += item.amount;
//     }

//     if(item.currency === "UAH"){
//         acc.UAH += item.amount;
//     }

//     return acc;
// },{USD: 0, EUR: 0, UAH: 0});

// console.log(totalsByCurrency);



// const users = [
//   { id: 1, name: "Ostap", age: 20 },
//   { id: 2, name: "Ivan", age: 25 },
//   { id: 3, name: "Anna", age: 22 }
// ];



// const usersById = users.reduce((acc, user) => {
//   acc[user.id] = user; // додаємо нову властивість в об'єкт
//   return acc;          // обов'язково повертаємо acc
// }, {}); 

// console.log(usersById);

// const posts = [
//   { id: 1, title: "JS Basics", tags: ["js", "beginner"] },
//   { id: 2, title: "Advanced JS", tags: ["js", "advanced"] },
//   { id: 3, title: "HTML for beginners", tags: ["html", "beginner"] },
//   { id: 4, title: "CSS Tricks", tags: ["css", "advanced"] }
// ];

// const postsByTag = posts.reduce((acc,item) => {

//     item.tags.forEach(tag => {
//         if(!acc[tag]){
//             acc[tag] = [];

//         }

//         acc[tag].push(item.title);
//     })

//     return acc;
// },{});

// console.log(postsByTag);




// ==============================  масив об’єктів (users/products) — фільтрація, сортування, пошук ===============================================
// Task 1 
// const users = [
//   { id: 1, name: "Ostap", age: 20, isActive: true },
//   { id: 2, name: "Ivan", age: 17, isActive: false },
//   { id: 3, name: "Anna", age: 25, isActive: true },
//   { id: 4, name: "Petro", age: 30, isActive: false }
// ];



// const adultUsers = users.filter(users => users.age >= 18);
// console.log(adultUsers);

// const activeUsers = users.filter(user => user.isActive === true);
// console.log(activeUsers);


// const user3 = users.find(key=> key.id === 3);
// console.log(user3);



// Task 2

// const products = [
//   { id: 1, name: "Apple", price: 10, inStock: true },
//   { id: 2, name: "Banana", price: 5, inStock: false },
//   { id: 3, name: "Orange", price: 8, inStock: true },
//   { id: 4, name: "Mango", price: 20, inStock: true }
// ];


// const availableProducts = products.filter(el => el.inStock === true);
// console.log(availableProducts);

// const cheapProducts = products.filter(item => item.price <= 10 );
// console.log(cheapProducts);

// const someProducts = products.some(el => el.inStock === false);
// console.log(someProducts);


// const sortedByPriceASC = [...products].sort((a,b) => {
//     return a.price - b.price;
// });


// console.log(sortedByPriceASC);


// const sortByName = [...products].sort((a,b) => {
//     return a.name.localeCompare(b.name);
// });

// console.log(sortByName);



const todos = [
  { id: 1, title: "Помити посуд", completed: true },
  { id: 2, title: "Зробити ДЗ", completed: false },
  { id: 3, title: "Погуляти", completed: true },
  { id: 4, title: "Почитати книгу", completed: false }
];




const completedTodos = todos.filter(c => c.completed === true);

console.log(completedTodos);


const notCompletedTodos = todos.filter(nc => nc.completed === false);
console.log(notCompletedTodos);


const evrTodos = todos.every(e => e.completed === true);

console.log(evrTodos);


const someTodos = todos.some(el => el.completed === false);

console.log(someTodos);

const findHW = todos.find(e => e.title === "Зробити ДЗ");

console.log(findHW);






