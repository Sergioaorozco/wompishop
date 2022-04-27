export default {
    data: {
        cart: [
            { id: 1, title: 'Name of Product 1', price: 40, image: 'product.png', quantity: 1 }
        ]
    },
    add(product) {
        var found = _.find[(this.data.cart, ['id', product.id])]
        if (typeof found != 'object') {
            this.data.cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image
            })
        }
    }
}