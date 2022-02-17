import { getTop10ProductNew } from "../../api/products"

const newProducts = {
    async render(){
        const { data } = await getTop10ProductNew()
        return /*html*/ `
        <section>
            <div class="new_product">
                <div class="new_product-title text-2xl font-medium pl-5 mt-5 mb-5">
                    <h2>10 sản phẩm mới nhất</h2>
                </div>
                <div class="new_product-content flex flex-wrap gap-y-6">
                    ${data.map(item =>{
                        return /*html*/ `
                        <div class="new_product-item grow-0 shrink-0 basis-1/5">
                            <div class="new_produc-img ml-5 mr-5">
                                <a href="/#/detailProduct/${item.id}">
                                <img src="${item.img}" alt="">
                                </a>
                            </div>
                            <div class="new_product-content ml-5 mr-5 mt-5">
                                <p class="font-semibold text-orange-500">${item.name}</p>
                                <span class="text-sm text-gray-600">${item.desc.slice(0, 50)}</span>
                            </div>
                        </div>
                        `
                    }).join(" ")}
                    
                    
                </div>
            </div>
        </section>
        `
    }
}
export default newProducts