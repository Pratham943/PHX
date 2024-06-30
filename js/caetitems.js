let users = [
  { id: 1, name: "Ram" },
  { id: 2, name: "sita" },
  { id: 3, name: "hari" },
];

let products = [
  { id: 1, name: "keyboard", rate: 100 },
  { id: 2, name: "mouse", rate: 200 },
  { id: 3, name: "watch", rate: 300 },
];

let cartItems = [
  {
    user_id: 1,
    product_id: 1,
    quantity: 2,
  },
  {
    user_id: 2,
    product_id: 1,
    quantity: 2,
  },
  {
    user_id: 2,
    product_id: 2,
    quantity: 2,
  },
  {
    user_id: 3,
    product_id: 1,
    quantity: 2,
  },
  {
    user_id: 3,
    product_id: 2,
    quantity: 2,
  },
  {
    user_id: 3,
    product_id: 3,
    quantity: 2,
  },
];


/* code here to find the total amount spent by each user */
let amount = 0;
for (let k = 0; k < users.length; i++) {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].user_id == users[i].id) {
      for (let j = 0; j < products.length; j++) {
        if (cartItems[i].product_id == products[i].id) {
          let item = cartItems[i];
          let product = products[i];
          amount = product.rate * item.quantity + amount;
          console.log(`${users[j].name} has brought item worth Rs.${amount}`);
        }
      }
    }
   
  }
}

/*
    ram has bought itesm worth Rs.200
    sita has bought itesm worth Rs.600
    hari has bought itesm worth Rs.1200
*/
