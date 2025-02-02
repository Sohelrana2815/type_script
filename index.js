const menu = [
  { name: "pizza1", price: 8 },
  { name: "pizza2", price: 10 },
  { name: "pizza3", price: 12 },
  { name: "pizza4", price: 14 },
];

let cashInRegister = 100;
const nextOrderId = 1;
const orderQueue = [];

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeholder(pizzaName) {
  // Step 1: Find the pizza object in the menu
  const selectedPizza = menu.find((pizza) => pizza.name === pizzaName);

  if (!selectedPizza) {
    console.log(`Pizza "${pizzaName}" not found in the menu.`);
    return null; // Return null if the pizza is not found
  }

  // Step 2: Add the income to the cashInRegister
  cashInRegister += selectedPizza.price;

  // Step 3: Create a new order object and push it to the orderQueue
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);

  // Step 4: Return the new order object
  return newOrder;
}

// Example usage:
const order = placeholder("pizza3");
console.log(order); // { pizza: { name: 'pizza3', price: 12 }, status: 'ordered' }
console.log(cashInRegister); // 112 (100 + 12)
console.log(orderQueue); // [{ pizza: { name: 'pizza3', price: 12 }, status: 'ordered' }]

function completeOrder(orderId) {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = "Completed";
  return order;
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
addNewPizza({ name: "BBQ Chicken", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 11 });
