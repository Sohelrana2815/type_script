type Pizza = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: string;
};

const menu = [
  { name: "Rana", price: 8 },
  { name: "Yamin", price: 10 },
  { name: "Samiul", price: 12 },
  { name: "Juel", price: 16 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order = [];

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeholder(pizzaName: string) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return null;
  }
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
}

addNewPizza({ name: "Chicken pizza", price: 12 });
addNewPizza({ name: "BBQ pizza", price: 15 });
addNewPizza({ name: "Spicy pizza", price: 13 });

placeholder("Chicken pizza");
completeOrder(1);
console.log("Menu:", menu);
console.log("CashInRegister:", cashInRegister);
console.log("order queue:", orderQueue);
