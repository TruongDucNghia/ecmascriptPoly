let cart = []
if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'))
}

export const addToCart = (newProduct, next) =>{
    const existProduct = cart.find(item => item.id === newProduct.id)

    console.log(existProduct);
    if(!existProduct){
        cart.push(newProduct)
    }else{
        existProduct.quantity += newProduct.quantity
        existProduct.color += ', ' + newProduct.color
        existProduct.size += ', ' + newProduct.size
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    next()
}

export const increaseQty = (id, next) => {
    cart.find(item => item.id == id).quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}

export const decreaseQty = (id, next) => {
    const currentProduct = cart.find(item => item.id == id);
    currentProduct.quantity--;

    if(currentProduct.quantity < 1){
        const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không ?");
        if(confirm){
          cart = cart.filter(item => item.id != id)
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}

export const removeItemInCart = (id, next) => {
    const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không ?");
    if(confirm){
        cart = cart.filter(item => item.id != id)
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
    console.log(12);
}