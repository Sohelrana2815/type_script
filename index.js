const menu = [
  { name: "Rana", price: 8 },
  { name: "Yamin", price: 10 },
  { name: "Samiul", price: 12 },
  { name: "Juel", price: 16 },
];

const cashInRegister = 100;
const nextOrderid = 
const orderQueue = [];

function addNewPizza(pizza) {
  menu.push(pizza);
}

/**
 * Write another fun, placeholder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu
 * 2. adds the income to the cashInRegister
 * 3. pushes a new "order object" to the orderQueue (e.g {pizza: selectedPizzaObjectFromStep1, status: "ordered"})
 * 4. returns the new order object (just in case we need it letter)
 */

function placeholder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = { pizza: selectedPizza, status: "ordered" };
  orderQueue.push(newOrder);
  return newOrder;
}



function completeOrder(orderId){
     
}