import { getTop10ViewProduct } from "../../api/products"

const top10Product = {
    async render(){
        const {data} = await getTop10ViewProduct()
        console.log(data);
        return /*html*/ `
        <section class="mt-10">
            <div style="background-color: #e27b56;" class="top_products p-5">
                <div class="top_product-title text-center text-white text-2xl font-medium p-2">
                    <h2>TOP 10 : Sản phẩm nhiều lượt xem nhất</h2>
                </div>
                <div class="top_product-content mt-3 relative">
                    <div class="top_content-all flex mr-14 ml-14 slider ">
                        ${data.map(item =>{
                            return /*html*/ `
                            <div class="product-item grow-0 shrink-0 basis-1/5">
                                <div class="product_item-img ml-5 mr-5">
                                    <a class="w-full h-full grid" href="/detailProduct/${item.id}">
                                        <img src="${item.img}" alt="">
                                    </a>
                                </div>
                                <div class="product_item-title ml-5 mr-5 bg-white pt-3 pb-3 pl-1 h-16">
                                    <p>${item.name.slice(0, 40)}</p>
                                </div>
                            </div>
                            `
                        }).join(" ")}
                    </div>
                    <div class="display_btn absolute top-1/2 right-0 w-full flex justify-between">
                        <button class="btn active left text-white text-5xl"><i class="bi bi-chevron-left"></i></button>
                        <button class="btn right text-white text-5xl"><i class="bi bi-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
        `
    }
}

export default top10Product