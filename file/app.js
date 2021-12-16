// Callback => A callback is a function that is passed as an argument to another function..
// Synchronous => Events that happen all at the same time..
// Asynchronous => Events that happen at a specified time..
// Promise => A promise is an object that may produce a single value after the value has been resolved or rejected..
// Await => Makes a function wait for a Promise..
// Async => Makes a function return a Promise..

// This is the best way to write any asynchronous task..

let shopIsOpen = false;
let stocks = {
    Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid : ["Water","Ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","peanuts"]
};
const time = (ms) => {
    return new Promise((resolve,reject) => {
        if(shopIsOpen) {
            setTimeout(resolve,ms)
        }
        else {
            reject(console.log("Shop is Closed"))
        }
    });
}
time()
async function Production() {
    try {
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected.`);
        console.log("Start the production")

        await time(1000)
        console.log("Chop the fruits");

        await time(1000)
        console.log(`Add ${stocks.liquid[0]} and ${stocks.liquid[1]} to the mixture`);

        await time(2000)
        console.log(`Use ${stocks.holder[0]} as the holder`);

        await time(4000) 
        console.log(`Add ${stocks.toppings[1]} as the topping..`)
    } 
    
    catch(error) {
        console.log("Customer has left")
    } 

    finally {
        await time(3000)
        console.log("Day Ended Shop has been closed..")
    }
};
Production()
