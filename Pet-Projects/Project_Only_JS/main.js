// First Pet Project


// let shoppingList = [
//   { id: 1, name: "Milk", quantity: 2, bought: false },
//   { id: 2, name: "Bread", quantity: 1, bought: true },
//   { id: 3, name: "Eggs", quantity: 10, bought: false }
// ];

// function getNextId(list){
//     if(list.length == 0){
//         return 1;
//     }

//     const lastItem = list[list.length - 1];
//     return lastItem.id + 1;
// }


// function addItem(list, name, quantity) {
//     const newItem = {
//         id:getNextId(list),
//         name:name,
//         quantity:quantity,
//         bought:false
//     };


//     list.push(newItem);


//     return list;

// }


// function removeItem(list, id){
//  return list.filter(e => e.id !== id);  



// }


// function markAsBought(list, id) {
    
//     const mark = list.find(el => el.id === id);

//     if(mark){
//         mark.bought = true;

//     }
    
    
//     return list;


//     // for(let i =0; i < list.length; i++){
//     //     const item = list[i]
//     //     if(list.id == id ){
//     //         item.bought = true;
//     //         break;
//     //     }
//     // }
//     // return list;
// }



// function getItemsToBuy(shoppingList){
//     const item = shoppingList.filter(el => el.bought === false);
//     return item;
// }


// function getBoughtItems(shoppingList){
//     const butItem =  shoppingList.filter(e => e.bought === true);
//     return butItem;
// }

// function findItemByName(shoppingList, name){
//     const findName = shoppingList.find(el => el.name === name);
//     return findName;
// }


// function getTotalQuantity(shoppingList){
    
//     const countPrice = shoppingList.reduce((acc,curr) => {
//         return acc +=  curr.quantity;
        
//     },0);

//     return countPrice;

// }

// // Test

// console.log("Started list: ", shoppingList);


// console.log("Added Element: ", addItem(shoppingList, "Chees", 10) );

// console.log("Removed Element: ", removeItem(shoppingList,1));

// console.log("Marks Element: ", markAsBought(shoppingList,2));

// console.log("Ще треба купити:",  getItemsToBuy(shoppingList));

// console.log("Who product is bought: ", getBoughtItems(shoppingList));

// console.log("Find Name: ", findItemByName(shoppingList,"Milk"));

// console.log("Загальна кількість одиниць товарів:", getTotalQuantity(shoppingList));


// Second Pet Project


let subscriptions = [
  { id: 1, name: "Netflix",    monthlyPrice: 10, category: "entertainment", isActive: true },
  { id: 2, name: "Spotify",    monthlyPrice: 5,  category: "music",         isActive: true },
  { id: 3, name: "Google One", monthlyPrice: 3,  category: "cloud",         isActive: false }
];


function getNextId(list){
    if(list.length == 0){
        return 1;
    }

    const lastItem = list[list.length - 1];
    return lastItem.id + 1;
}


function addItem(list, name, monthlyPrice, category){
    const newItem = {
        id:getNextId(list),
        name: name,
        monthlyPrice: monthlyPrice,
        category: category,
         isActive: true
    }

    list.push(newItem);

    return list;
}


function cancelSubscription(list,id){

    for(let i =0; i < list.length; i++){
        const tmp = list[i];
        if(tmp.id === id ){
            tmp.isActive === false;
            break;
        }
    }
    return list;
    // return list.filter(el => el.id !== id);
}

function activateSubscription(list, id){
    // return list.filter(el => el.id === id);

    for(let i =0;i < list.length; i++){
        const l = list[i];
        if(l.id === id){
            l.isActive === true;
            break;
        }
    }

    return list;

}

function getActiveSubscriptions(list) {
    return list.filter(e => e.isActive === true);
}

function getInactiveSubscriptions(list) {
    return list.filter(e => e.isActive === false);
}


function getTotalMonthlyCost(list) {
    const active = getActiveSubscriptions(list);


    const count = active.reduce((acc, item) =>{
         return acc +=  item.monthlyPrice;
    },0);
    return count;
}


function hasExpensiveSubscription(list, limit) {
    const limitCount = list.some(e => e.monthlyPrice > limit);
    return limitCount;
}

function areAllSubscriptionsCheap(list, limit) {
    return list.every(e => e.monthlyPrice <= limit);
}

function sortByPriceAsc(list){
     const copy = list.slice(); 
    // console.log(copy);
    // return copy;
    return copy.sort((a,b) => a.monthlyPrice - b.monthlyPrice);
}

function sortByName(list){
    const copyName = list.slice();
    
    return copyName.sort((a,b) => a.name.localeCompare(b.name));


}

// Test
console.log("Started list: ", subscriptions);

console.log("Added Element: ", addItem(subscriptions, "SounCloud", 15) );

console.log("Removed Element: ", cancelSubscription(subscriptions,2));

console.log("Acivee Element: ", activateSubscription(subscriptions,3));

console.log("Active Subscriptions Element: ", getActiveSubscriptions(subscriptions));

console.log("Inactive Subscriptions Element: ", getInactiveSubscriptions(subscriptions));


console.log("Загальна кількість одиниць товарів:", getTotalMonthlyCost(subscriptions));




console.log(hasExpensiveSubscription(subscriptions, 8)); 

console.log(areAllSubscriptionsCheap(subscriptions, 15) );

console.log(sortByPriceAsc(subscriptions));

console.log(sortByName(subscriptions));

