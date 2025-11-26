// ============================ Basic Methods JS ============================= //


// Task 1

// let cart = ['apple', 'banana','orange'];
// cart =  cart.push('pear');
// console.log(cart); 

// let lastCart = cart.pop();
// console.log("Removed in trash: ",lastCart); // 3

// Task 2

const queue = ["Олег", "Марія", "Світлана"];

queue.unshift("Ігор");
console.log("Edit: ",queue);

let firstremoved = queue.shift(); 

console.log(queue);
console.log("First removed:", firstremoved);


// Task 3'

const nums = [10, 20, 30, 40, 50, 60];

const copy = nums.slice(2,4);
console.log("Copy: ",copy); // [30, 40]


// Task 4

// const tasks = ["помити посуд", "зробити ДЗ", "почитати книгу"];

// const editor  = tasks.splice(1, 1, "зробити ДЗ з JS");
// console.log("Edited tasks: ",tasks);
// console.log("Removed task: ",editor);



// Task 5

let queue1 = ["Олег", "Марина", "Світлана"];

queue1.push("Ігор");
// console.log(queue1);

let firstremoved1 = queue1.shift();

console.log("хто зайшов до каси",queue1);
console.log("хто пішов з каси",firstremoved1);


// Task 6


const cart = ["хліб", "молоко"];


cart.push("банани");
cart.push("яблука");

let removedItem = cart.pop();

console.log("Removed item: ",removedItem);
console.log("Final cart: ",cart);


// Task 7

let sleepHours = [6, 5, 7, 4, 8];

let firstElm = sleepHours.shift();
console.log("Removed first element: ",firstElm);
sleepHours.unshift(7);
console.log("Updated sleep hours: ",sleepHours);

// Task 8

let playlist = ["track1", "track2", "track3", "track4", "track5"];

let firtstThree = playlist.slice(0,3);
console.log("First three tracks: ",firtstThree);
console.log("Original playlist: ",playlist);


// Task 9


// let marks = [10, 8, 9, 7, 12, 11];
// let middleMarks = marks.slice(1,5);
// console.log("Middle marks: ",middleMarks);
// console.log("Original marks: ",marks);


// Task 10

let tasks = ["помити посуд", "зробити ДЗ", "погуляти з собакою"];

console.log("Original tasks: ", tasks);


let editedTask = tasks.splice(1,1,"зробити ДЗ з JavaScript");
console.log("Removed task: ", editedTask);

tasks.push("подивитись лекцію")
tasks.shift(1);


console.log("Edited task: ", tasks);


// Task 11

let numbers = [1, 2, 7, 8, 9];

let midNum = numbers.splice(2,0,3,4,5,6);
console.log("Removed numbers: ", midNum);
console.log("Updated numbers: ", numbers);


// Task 12

let messages = ["hi", "hello", "what's up", "bye"];

messages.pop('bye');
messages.unshift("system: chat started");

console.log(messages);

// Task 13

let products = ["apple", "banana", "orange", "kiwi", "mango"];

products.splice(2,2, "grape", "peach");
console.log("Prod: ", products);


// Task 14

let logs = ["login", "click", "scroll", "click", "logout", "close"];


let lasthThree = logs.splice(-3);
console.log("Last three logs: ", lasthThree);
console.log("Remaining logs: ", logs);

// Task 15


let stack = [];

stack.push(10);
stack.push(20);
stack.push(30);

let last = stack.pop();
console.log("Last removed from stack: ", last);
stack.push(40);

console.log("Final stack: ", stack);


// Task 16

let weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

workDays = weekDays.slice(0,5);
let weekend = weekDays.slice(5);

console.log("Work days: ", workDays);
console.log("Weekend: ", weekend);

// Task 17


let players = ["Player1", "Player2", "Player3", "Player4", "Player5"];
let remodevPlayer = players.splice(2,1,"NewPlayer");

console.log("Removed player:  ", remodevPlayer);
console.log("Updated players: ", players);

// Task 18

let nums1 = [100, 200, 300, 400, 500, 600, 700];
// Треба залишити тільки середні три значення в цьому ж масиві nums, тобто щоб фінальний nums став [300, 400, 500].
nums1.splice(0,2);
console.log("Ed: ", nums1);

nums1.splice(3);

console.log("Final nums: ", nums1);

// Task 19

let history = ["open", "scroll", "click", "click", "type", "submit", "close"];
let n = 4;


let lastN = history.slice(-n);
console.log("Last n actions: ", lastN);
console.log("Remaining history: ", history);