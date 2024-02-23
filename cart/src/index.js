function renderCartView() {
    document.getElementById('cart').insertAdjacentHTML(
        'beforeend',
        `
            <h2>Cart View!</h2>
            <p>There are four(4) items in your cart</p>
        `
    )
}

renderCartView()