import header from "../../components/layout/header/header"
import menu from "../../components/layout/header/menu"
import banner from "../../components/layout/header/banner"
import footer from "../../components/layout/footer/foorter"
import { getAll } from "../../api/products"
const products = {
    async render(){
        const {data} = await getAll()
        return /*html*/ `
        ${header.render()}
        ${menu.render()}
        <section>
            <div class="new_product pb-10">
                <div class="new_product-title text-2xl font-medium pl-5 mt-5 mb-5 text-center">
                    <h2 class="font-normal text-3xl">Thời trang</h2>
                    <p class="text-base text-gray-500 mt-4 font-light">( ${data.length} mặt hàng )</p>
                    <p class="text-base text-gray-500 mt-4 font-light">Bạn đang tìm kiếm những sản phẩm hoàn hảo phù hợp với mọi thứ hay chiếc váy dễ thương nhất lấy cảm hứng từ KOODING</p>
                </div>
                <div class="mx-5 flex justify-between">
                    <div>
                        <p class="text-sm">Chọn mua những gì phù hợp với bạn</p>
                        <div>
                            <select class="form-select appearance-none w-40 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-3">
                                <option value="" >---Danh Mục---</option>
                                <option value="">Nam</option>
                                <option value="">Nữ</option>
                            </select>
                        </div>
                    </div>
                    <nav aria-label="Page navigation">
                        <ul class="inline-flex space-x-2">
                        <li><button class="flex items-center justify-center w-7 h-7 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                        </li>
                        <li><button class="w-7 h-7 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">1</button></li>
                        <li><button class="w-7 h-7 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">2</button></li>
                        <li><button class="w-7 h-7 text-white transition-colors duration-150 bg-gray-400 border border-r-0 rounded-full focus:shadow-outline">3</button></li>
                        <li><button class="flex items-center justify-center w-7 h-7 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                        </li>
                        </ul>
                    </nav>
                </div>
                <div class="new_product-content px-5 flex flex-wrap gap-y-6 mt-8">
                    ${data.map(item =>{
                        return /*html*/ `
                        <div class="new_product-item grow-0 shrink-0 basis-1/5">
                            <div class="new_produc-img mx-3">
                                <a href="/detailProduct/${item.id}">
                                <img src="${item.img}" alt="">
                                </a>
                            </div>
                            <div class="new_product-content mt-4 mx-3">
                                <p class="font-semibold text-orange-500">${item.name}</p>
                                <span class="text-sm text-gray-600 mt-3">${Number(item.price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                            </div>
                        </div>
                        `
                    }).join('')}
                </div>
            </div>
        </section>
        
        ${footer.render()}
        `
    },
    afterRender(){

    }
}

export default products;