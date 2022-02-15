import header from "../../components/layout/header/header"
import menu from "../../components/layout/header/menu"
import banner from "../../components/layout/header/banner"
import footer from "../../components/layout/footer/foorter"
import { filterCateProduct, filterPriceProduct, getAll } from "../../api/products"
const products = {
    async render() {
        const { data } = await getAll()
        return /*html*/ `
        ${header.render()}
        ${menu.render()}
        <section>
            <div class="new_product pb-10">
                <div class="new_product-title text-2xl font-medium pl-5 mt-5 mb-5 text-center">
                    <h2 class="font-normal text-3xl">Thời trang</h2>
                    <p class="quantityProducts text-base text-gray-500 mt-4 font-light">( ${data.length} mặt hàng )</p>
                    <p class="text-base text-gray-500 mt-4 font-light">Bạn đang tìm kiếm những sản phẩm hoàn hảo phù hợp với mọi thứ hay chiếc váy dễ thương nhất lấy cảm hứng từ KOODING</p>
                </div>
                <div class=" mx-5 flex justify-between">
                    <div class="">
                        <p class="text-sm">Chọn mua những gì phù hợp với bạn</p>
                        <div class="flex gap-5">
                            <div>
                                <select class="form-select appearance-none w-40 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-3">
                                    <option value="0" >---Danh Mục---</option>
                                    <option value="1">Nam</option>
                                    <option value="2">Nữ</option>
                                </select>
                            </div>
                            <div class="mt-2">
                                <p>
                                    <label for="amount">Giá:</label>
                                    <input type="text" id="amount" readonly style="width:300px; border:0; color:#f6931f; font-weight:bold;">
                                </p>
                                
                                <div class="mt-1" id="slider-range"></div>
                            </div>    
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
                <div class="box_items new_product-content px-5 flex flex-wrap gap-y-6 mt-8">
                    ${data.map(item => {
            return /*html*/ `
                        <div class="new_product-item grow-0 shrink-0 basis-1/5">
                            <div class="new_produc-img mx-3">
                                <a href="/detailProduct/${item.id}">
                                <img src="${item.img}" alt="">
                                </a>
                            </div>
                            <div class="new_product-content mt-4 mx-3">
                                <p class="font-semibold text-orange-500">${item.name}</p>
                                <span class="text-sm text-gray-600 mt-3">${Number(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
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
    afterRender() {
        menu.afterRender()
        $(function () {
            $("#slider-range").slider({
                range: true,
                min: 1,
                max: 10000000,
                values: [1000000, 3000000],
                slide: function (event, ui) {
                    $("#amount").val(ui.values[0].toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) + " - " + ui.values[1].toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
                    // handlerFilterPrice(ui.values[0], ui.values[1])
                },
                stop: function(event, ui) {
                    handlerFilterPrice(ui.values[0], ui.values[1])
                }
            });
            $("#amount").val($("#slider-range").slider("values", 0).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) +
                " - " + $("#slider-range").slider("values", 1).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) );
        })

        const form_select = document.querySelector('.form-select')
        form_select.addEventListener('change', async () =>{
            if(form_select.value == 1){
                const data1 = await filterCateProduct(1)
                handlerRender(data1.data.products)
            }else if(form_select.value == 2){
                const data2 = await filterCateProduct(2)
                handlerRender(data2.data.products)
            }else{
                const data3 = await getAll()
                handlerRender(data3.data)
            }
        })
        // hàm xử khi render dữ liệu
        function handlerRender(data){
            const element = document.querySelector('.box_items')
            document.querySelector('.quantityProducts').innerHTML = `(${data.length} sản phẩm)`
            const htmls = data.map(item =>{
                return /*html*/ `
                <div class="new_product-item grow-0 shrink-0 basis-1/5">
                    <div class="new_produc-img mx-3">
                        <a href="/detailProduct/${item.id}">
                        <img src="${item.img}" alt="">
                        </a>
                    </div>
                    <div class="new_product-content mt-4 mx-3">
                        <p class="font-semibold text-orange-500">${item.name}</p>
                        <span class="text-sm text-gray-600 mt-3">${Number(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                </div>
                `
            }).join('')
            element.innerHTML = htmls
        }

        // hàm xử lý lọc giá
        async function handlerFilterPrice(minPrice, maxPrice){
            const data = await filterPriceProduct(minPrice, maxPrice)
            handlerRender(data.data)
            
        }
    }
}

export default products;