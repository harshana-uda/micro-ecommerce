import faker from 'faker'


let productsHTML = '<ol>{x}</ol>';

// Replace the replicable string ({x}) with the value
function clearReplicable(block, value='') {
    return block.replace('{x}', value);
}

// Add an item to the list
function addItem(name) {
    productsHTML = clearReplicable(productsHTML,`<li>${name}</li>{x}`);
}


// Add 5 products to the list
for (let i = 0; i < 3; i++) {
    addItem(faker.commerce.productName())
}

// Clear the replicable string ({x})
productsHTML = clearReplicable(productsHTML);
    
// Render the HTML in the product-list element
document.getElementById('product-list')
    .insertAdjacentHTML('afterbegin', productsHTML);

