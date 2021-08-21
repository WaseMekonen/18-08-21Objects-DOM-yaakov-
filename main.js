// Exercise 1:///

// function getHelloToWin(){
//     document.write("hello there");
// }

// getHelloToWin();

// Exercise 2:///

// function getMessageToWin(){
//     document.write("hello there David")
// }

// getMessageToWin();

// Exercise 3:///

// var userName = prompt("insert your name:");

// function getNamePrintToWindow(name){
//     document.write(`hello there ${name}`);
// }

// getNamePrintToWindow(userName);

// Exercise 4:///

// var userName = prompt("insert your name:");
// var userLastname = prompt("insert your last name::");
// var userAge = Number(prompt("insert your age:"));


// function getUserInfoPrintToWindow(name,lastName,age){
//     document.write(`name: ${name}, last name: ${lastName} age: ${age}`)
// }

// getUserInfoPrintToWindow(userName,userLastname,userAge);

// Exercise 5:///

// var userName = prompt("insert your name:");
// var userAge = Number(prompt("insert your age:"));



// function getUserInfoToDiv(name,age){
//     document.getElementById("exercise5").innerHTML=`name: ${name} age: ${age}`;
// }

// getUserInfoToDiv(userName,userAge);

// Exercise 6:///

// var userName = prompt("insert your name:");
// var userLastname = prompt("insert your last name:");
// var userAge = Number(prompt("insert your age:"));

// function getUserInfoPrintToEachDiv(name,lastname,age){
//     document.getElementById("ex6a").innerHTML=`name:${name}`;
//     document.getElementById("ex6b").innerHTML=`lastName: ${lastname}`;
//     document.getElementById("ex6c").innerHTML=`age: ${age}`;

// }

// getUserInfoPrintToEachDiv(userName,userLastname,userAge);

// Exercise 7:///

// var userName = prompt("insert your name:");
// var userAge = Number(prompt("insert your age:"));

// function getInfoLogToWinByDiv(name,age){
//     document.write(`<div> name:${name} age:${age}</div>`);
// }

// getInfoLogToWinByDiv(userName,userAge);

// Exercise 8:///

// var userName = prompt("insert your name:");
// var userLastname = prompt("insert your last name:");
// var userAge = Number(prompt("insert your age:"));

// function getInfoWriteToParagraphAndDiv(name,lastname,age){
//     document.write(`<div><p> name:${name} lastName:${lastname} age:${age} </p></div>`)
// }

// getInfoWriteToParagraphAndDiv(userName,userLastname,userAge);


// Exercise 9:///


// var userName = prompt("insert your name:");
// var userLastname = prompt("insert your last name:");
// var userAge = Number(prompt("insert your age:"));

// function getUserInfoWriteToParagraph(name,lastname,age){
//     document.write(`<p id="fParagraph"> name:${name} lastName:${lastname} age:${age}</p>`);

// }

// getUserInfoWriteToParagraph(userName,userLastname,userAge);



// Exercise 10:///

// var userName = prompt("insert your name:");
// var userLastname = prompt("insert your last name:");
// var userAge = Number(prompt("insert your age:"));

// function getInfoWriteOnDIv(name,lastName,age){
//     document.write(`<div><p id="secondParagraph">name:${name} lastname:${lastName} age:${age} </p></div>`)
// }

// getInfoWriteOnDIv(userName,userLastname,userAge);


// Exercise 11:///

// // A://
// var userName = prompt("insert your name:");

// function getUserNamelogToWinInParagraph(name){
//     document.write(`<p id="firstParagraph">Name:${name}</p>`);
// }
// getUserNamelogToWinInParagraph(userName);

// // B://
// var userLastname = prompt("insert your last name:");

// function getLastNameByParagraphId(lastName){
//     document.getElementById("firstParagraph").innerText+=`lastName:${lastName}`;
// }

// getLastNameByParagraphId(userLastname);

// Exercise 12:///
// // A://

// var userName = prompt("insert your name:");
// function getUserNameInputWriteToWin(username){
//     document.write(`<p id="exercise12"> name:${username}</p>`);
// }

// getUserNameInputWriteToWin(userName);

// // B://
// var userLastname = prompt("insert your last name:");

// function getUserLastNameInputWriteAddToElement(lastName){
//     document.getElementById("exercise12").innerHTML+=`lastName: ${lastName}`
// }

// getUserLastNameInputWriteAddToElement(userLastname);

// Exercise 13:///

// // A://

// var car_color=prompt("enter your car color");
// var car_brand=prompt("enter your car brand");
// var car_capacity=Number(prompt("enter your car engine Capacity"));

// function getCarObject(color,brand,capacity){
//     var car={}
//     car.color=color;
//     car.brand=brand;
//     car.engineCapacity=capacity;
//     document.write(`color:${car.color},brand:${car.brand}, engineCapacity:${car.engineCapacity}`);
// }

// getCarObject(car_color,car_brand,car_capacity);

// Exercise 14:///

// var car_color=prompt("enter your car color");
// var car_brand=prompt("enter your car brand");
// var car_capacity=Number(prompt("enter your car engine Capacity"));

// function getCarAddToObject(color,brand,capacity){
//     var car={};
//     car.color=color;
//     car.brand=brand;
//     car.engineCapacity=capacity;
//     car.year=new Date().getFullYear();
//     document.write(`color:${car.color},brand:${car.brand},EngineCapacity:${car.engineCapacity},year:${car.year}`);
// }

// getCarAddToObject(car_color,car_brand,car_capacity);

// Exercise 15:///

// var car_color=prompt("enter your car color");
// var car_brand=prompt("enter your car brand");
// var car_capacity=Number(prompt("enter your car engine Capacity"));

// function getCarObjectToDiv(color,brand,capacity){
//     var car={}
//     car.color=color;
//     car.brand=brand;
//     car.engineCapacity=capacity;
//     document.write(`<div>color:${car.color},brand:${car.brand},EngineCapacity:${car.engineCapacity}</div>`);
// }

// getCarObjectToDiv(car_color,car_brand,car_capacity);

// Exercise 16:///

// var car_color=prompt("enter your car color");
// var car_brand=prompt("enter your car brand");
// var car_capacity=Number(prompt("enter your car engine Capacity"));

// function getCarAddToDivWriteToWin(color,brand,capacity){
//     var car={}
//     car.color=color;
//     car.brand=brand;
//     car.engineCapacity=capacity;
//     car.modelYear = new Date().getFullYear();
//     document.write(`<div>${car.color}</div>`);
//     document.write(`<div>${car.brand}</div>`);
//     document.write(`<div>${car.engineCapacity}</div>`);
// }

// getCarAddToDivWriteToWin(car_color,car_brand,car_capacity);

// Exercise 17:///

// var car_color=prompt("enter your car color");
// var car_brand=prompt("enter your car brand");
// var car_capacity=Number(prompt("enter your car engine Capacity"));

// function getCarAddToDivWriteToWinById(color,brand,capacity){
//     var car={}
//     car.color=color;
//     car.brand=brand;
//     car.engineCapacity=capacity;
//     car.modelYear = new Date().getFullYear();
//     document.write(`<div id="first">${car.color}</div>`);
//     document.write(`<div id="second">${car.brand}</div>`);
//     document.write(`<div id="third">${car.engineCapacity}</div>`);
// }

// getCarAddToDivWriteToWinById(car_color,car_brand,car_capacity);


