import header from "../../components/layout/header/header"
import menu from "../../components/layout/header/menu"
import banner from "../../components/layout/header/banner"
import footer from "../../components/layout/footer/foorter"
import comment from "../../components/layout/comment"
import detailNews from "./detailNews"
import { get, updateProduct } from "../../api/products"
const detailProduct = {
    async render(id){
        const {data} = await get(id)
        return /*html*/ `
        ${header.render()}
        ${menu.render()}
        <div class="news-item p-4 flex gap-x-8 w-full mt-6">
            <div class="news-img grow-0 shrink-0 basis-96 h-full">
            <input type="hidden" id="view" value="${data.view}">
                <a href="#">
                    <img class="w-full h-full"
                        src="${data.img}" />
                </a>
            </div>
            <div class="ml-4">
                <p>Danh mục: <span>${data.cateProductId == 1 ? 'Nam' : 'Nữ'}</span></p>
                <h3 class="mb-5"><a href="#" class="font-semibold text-orange-500 text-3xl">${data.name}</a></h3>
                <p class="text-2xl text-gray-600">${Number(data.price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                <p class="text-1xl text-gray-800 mt-5">Mô tả :</p>
                <p class="text-1xl text-gray-400">${data.desc}</p>
                <p class="text-1xl mt-4 text-gray-600">Màu Sắc:</p>
                <select class="color form-select appearance-none w-40 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-3" id="">
                    <option value="">----Chọn màu----</option>
                    ${data.color.map(e =>{
                        return `
                            <option value="${e}">${e}</option>
                        `
                    })}
                </select>
                <p class="text-1xl mt-4 text-gray-600">Kích cỡ:</p>
                <select class="size form-select appearance-none w-40 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-3" id="">
                    <option value="">----Chọn size----</option>
                    ${data.size.map(e =>{
                        return `
                            <option value="${e}">${e}</option>
                        `
                    })}
                </select> <br>
                <p class="text-1xl mt-4 text-gray-600">Số lượng :</p>
                <div class="form-select appearance-none w-40 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-3 grid grid-cols-3 place-items-center">
                    <button class="btn plus" type=""><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg></button>
                    <input disabled type="number" id="inputQuantity" class="w-8 ml-2  bg-white flex justify-center items-center" value="1" min="1" >
                    <button class="btn minus"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                  </svg></button>
                </div>
                 <br>
                <button class="btn bg-gray-500 hover:bg-gray-400 text-white font-medium py-2 px-10 rounded mt-4">Thêm vào giỏ hàng <i class="bi bi-cart-plus"></i></button>
            </div>

        </div>
        ${comment.render()}
        ${footer.render()}
        `
    },
    afterRender(id){
        menu.afterRender()
        const views = document.querySelector('#view').value
        const view = Number(views)
        updateProduct({
            id,
            view: view + 1
        })

        // handler add cart 
        const btnQuantity = document.querySelectorAll('.btn')
        btnQuantity.forEach(btn =>{
            btn.addEventListener('click', () =>{
                if(btn.classList.contains('plus')){
                    
                    document.querySelector('#inputQuantity').value ++
                }else if(btn.classList.contains('minus')){
                    document.querySelector('#inputQuantity').value --
                    if(document.querySelector('#inputQuantity').value <= 0){
                        document.querySelector('#inputQuantity').value = 1
                    }
                }else{
                    const size = document.querySelector('.size').value
                    const color = document.querySelector('.color').value
                    if(size == '' || color == ''){
                        alert('Vui lòng chọn thuộc tính !')
                    }else{
                        console.log('add');
                    }
                }
            })
        })

    }
}
export default detailProduct