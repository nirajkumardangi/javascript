// Empty inventory array
const inventory = [];

// Find index of product in inventory by name
function findProductIndex(productName) {
  let lowerName = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name == lowerName) {
      return i;
    }
  }
  return -1;
}

// Add a product to inventory or update its quantity
function addProduct(product) {
  let index = findProductIndex(product.name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(product.name.toLowerCase() + ' quantity updated');
  } else {
    inventory.push({
      name: product.name.toLowerCase(),
      quantity: product.quantity,
    });
    console.log(product.name.toLowerCase() + ' added to inventory');
  }
}

// Remove product quantity or the product itself if quantity reaches 0
function removeProduct(productName, quantityToRemove) {
  let index = findProductIndex(productName);
  if (index === -1) {
    console.log(productName.toLowerCase() + ' not found');
    return;
  }

  let product = inventory[index];

  if (product.quantity < quantityToRemove) {
    console.log(
      'Not enough ' +
        product.name +
        ' available, remaining pieces: ' +
        product.quantity
    );
  } else {
    product.quantity -= quantityToRemove;
    if (product.quantity === 0) {
      inventory.splice(index, 1);
    }
    console.log('Remaining ' + product.name + ' pieces: ' + product.quantity);
  }
}

addProduct({ name: 'apple', quantity: 10 });
// Output: "apple added to inventory"

addProduct({ name: 'apple', quantity: 5 });
// Output: "apple quantity updated"

removeProduct('apple', 7);
// Output: "Remaining apple pieces: 8"

removeProduct('apple', 10);
// Output: "Not enough apple available, remaining pieces: 8"

removeProduct('banana', 2);
// Output: "banana not found"
