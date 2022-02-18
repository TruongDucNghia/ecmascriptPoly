import header from "../../components/layout/header/header"
import menu from "../../components/layout/header/menu"
import footer from "../../components/layout/footer/foorter"
import { decreaseQty, increaseQty, removeItemInCart } from "../../utils/cart"
import { reRender } from "../../utils/reRender"
import { toast } from "../../utils/toast"
const pageCart = {
    render(){
        let cart = []
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        let totalProducts = 0
        cart.forEach(item =>{
            totalProducts += Number(item.price)*Number(item.quantity) 
        })
        return /*html*/ `
        <div id="toast"></div>
        ${header.render()}
        ${menu.render()}
        <div class="container mx-auto mt-10">
            <div class="flex shadow-md my-10">
            <div class="w-3/4 bg-white px-10 py-10">
                <div class="flex justify-between border-b pb-8">
                <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                <h2 class="font-semibold text-2xl">${cart.length} Sản phẩm</h2>
                </div>
                ${cart.length > 0 ? `
                <div class="flex mt-10 mb-5">
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Chi tiết sản phẩm</h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Số Lượng</h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Giá</h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Tổng</h3>
                </div>

                ${cart.map((item) =>{
                    return /*html*/ `
                    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div class="flex w-2/5"> <!-- product -->
                            <div class="w-20">
                            <img class="h-24" src="${item.img}" alt="">
                            </div>
                            <div class="flex flex-col justify-between ml-4 flex-grow">
                            <span class="font-bold text-sm">${item.name}</span>
                            <span class="text-red-500 text-xs">${item.cateProductId}</span>
                            <span class=text-xs">${item.size}</span>
                            <span class=text-xs">${item.color }</span>
                            <span class=" "><span data-id="${item.id}" class="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer btn btn-remove">xóa</span></span>
                            </div>
                        </div>
                        <div class="flex justify-center w-1/5">
                            <svg data-id="${item.id}" class="btn btn-giam fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                            </svg>
        
                            <input class="mx-2 border text-center w-8" type="text" value="${item.quantity}">
        
                            <svg data-id="${item.id}" class="btn btn-tang fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                            </svg>
                        </div>
                        <span class="text-center w-1/5 font-semibold text-sm">${Number(item.price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                        <span class="text-center w-1/5 font-semibold text-sm">${(Number(item.price)*Number(item.quantity)).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                    </div>
                    `
                }).join('')}
                ` 
                : 
                
                `<img src="http://res.cloudinary.com/dbpw1enlu/image/upload/v1645198780/jux41r9vypaqxrjej9pz.jpg" />`}
                

                

                <a href="/#/products" class="flex font-semibold text-indigo-600 text-sm mt-10">
            
                <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                Trở về trang sản phẩm
                </a>
            </div>

            <div id="summary" class="w-1/4 px-8 py-10">
                <h1 class="font-semibold text-2xl border-b pb-8">Tóm tắt</h1>
                <div class="flex justify-between mt-10 mb-5">
                <span class="font-semibold text-sm uppercase">${cart.length} item</span>
                <span class="totalProducts font-semibold text-sm">${totalProducts.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                </div>
                <div>
                <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                <select class="block p-2 text-gray-600 w-full text-sm">
                    <option>Phí vận chuyển - 30.000đ</option>
                </select>
                </div>
                <div class="border-t mt-8">
                <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Tổng tiền</span>
                    <span>${cart.length > 0 ? (totalProducts + 30000).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) : '0 VND'}</span>
                </div>
                <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                </div>
            </div>

            </div>
        </div>
      ${footer.render()}
        `
    },
    afterRender(){
        const btns = document.querySelectorAll('.btn')
        btns.forEach(btn =>{
            const id =  btn.dataset.id
            btn.addEventListener('click', () =>{
                if(btn.classList.contains('btn-tang')){
                    increaseQty(id, () => reRender(pageCart, '#app'))
                }else if(btn.classList.contains('btn-giam')){
                    decreaseQty(id, () => reRender(pageCart, '#app'))
                }else{
                    removeItemInCart(id, () =>{
                        reRender(pageCart, '#app')
                    })
                }
            })
        })

    }
}
export default pageCart