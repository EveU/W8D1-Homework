//Section 1

//what types are these? Write your answer in a comment beside it.

1; //number
"cat"; //string
true; //boolean
[]; //object(array)
{}; //object(hash)
1.1; //number
undefined; //undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; //true
true; //true
NaN; //false
[]; //true
{}; //true
undefined; //false
""; //false
0; //false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var aNumber = 3
//3.2 Assign a variable that is a string
var aString = "words etc"
//3.3 Assign a variable that is a boolean
var aBoolean = true
//3.4 Assign a variable that is an object
var anObject = {
  name: "something",
  does: "stuff"
}

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
var statement = "something"
if(statement){
  console.log("hello");
} else{
  console.log("bye");
}

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var firstAnimal = animals[0];
//5.2. Assign the last element to a variable
var lastAnimal = animals[animals.length-1];
//5.3. Assign the length of an array to a variable
var animalsLength = animals.length;
//5.4. Add an item to the end of the array
animals.push("emu");
//5.5. Add an item to the start of the array
animals.unshift("kudu");
//5.6. Assign the index of hedgehog to a variable
var hedgehogIndex = animals.indexOf("hedgehog");

//Section 6

//6.1 Create an array of 5 vegetables
var vegArray = ["leek", "potato", "carrot", "onion", "sweetcorn"];
//6.2 Loop over the array and write to the console using a "while"
var x = 0;
while(x<vegArray.length){
  console.log(vegArray[x]);
  x++;
}
//6.3 Loop again using a "for" with a counter
for(var i = 0; i < vegArray.length; i++){
  console.log(vegArray[i]);
}
//6.4 Loop again using a "for in"
for(veg in vegArray){
  console.log(vegArray[veg]);
}

// // EXTRAS
// // Loop again using a "for of"
// for(veg of vegArray){
//   console.log(veg);
// }
// // Loop again using a "for each"
// vegArray.forEach(function(veg){
//   console.log(veg);
// })

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
]
//7.1 Calculate the total cash in accounts
// var totalCash = function(type){
//   total = 0;
//   for(account in accounts){
//     total += accounts[account]['amount'];
//   }
//   return total;
// }
var totalCash = function(type){
  total = 0;
  for(var account of accounts){
    if(account['type'] === type || !type){
      total += account['amount'];
    }
  }
  return total;
}
console.log("Total cash = £" + totalCash());

//7.2 Find the name of the account with the largest balance
var largestAccount = function(type){
  result = accounts[0];
  for(var account of accounts){
    if(!type || account['type'] === type){
      if(account['amount'] > result['amount']){
        result= account;
      }
    }
  }
  return result
}

// var largestAccount = accounts[0];
// for(var index in accounts){
//   if(accounts[index]['amount'] > largestAccount['amount']){
//     largestAccount = accounts[index];
//   }
// }
console.log(largestAccount()['name'] + " has the largest balance.");

//7.3 Find the name of the account with the smallest balance
var smallestAccount = accounts[0];
for(account of accounts){
  if(account['amount'] < smallestAccount['amount']){
    smallestAccount = account;
  }
}
console.log(smallestAccount['name'] + " has the smallest balance.");

//7.4 Calculate the average bank account value
var averageValue = function(total){
  return total/accounts.length;
}
console.log("The average bank account value is £" + averageValue(totalCash()));

// 7.5 Find the value of marcs bank account
// for(account in accounts){
//   var accountValue = 0
//   if(accounts[account]['name'] === 'marc'){
//     console.log("Marc's account value is £" + accounts[account]['amount']);
//   }
// }
var findByName = function(name){
  return accounts.find(function(account){
    return account.name === name;
  })
}
var accountHolder = 'marc'
console.log(accountHolder + "'s account value is £" + findByName(accountHolder).amount);

//7.6 Find the holder of the largest bank account
console.log(largestAccount()['name'] + " has the largest balance.");

//7.7 Calculate the total cash in business accounts
console.log("Total cash in business accounts = £" + totalCash('business'));

//7.8 Find the largest personal account owner
// var largestPersonalAccount = {amount: 0};
// for(account in accounts){
//   if(accounts[account]['amount'] > largestPersonalAccount['amount'] && accounts[account]['type'] === 'personal'){
//     largestPersonalAccount = accounts[account];
//   }
// }
console.log(largestAccount('personal')['name'] + " has the largest personal account.");

//Section 8
//Assign a variable myPerson to a hash, giving them a name, height favourite food
var myPerson = {
  name: "ev",
  height: 170,
  favouriteFood: "pizza"
}