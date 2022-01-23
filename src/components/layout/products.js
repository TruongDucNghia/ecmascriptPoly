import axios from "axios"
import { getAll } from "../../api/post"

const componentProducts = {
    async render(){
        const {data} = await getAll()
        return /*html*/`
        <div class="content">
            <section class="main">
                <div class="main_title text-3xl font-medium ml-4 mt-4 mb-5">
                    <h3>Sản phẩm của Shop</h3>
                </div>
                <div class="grid grid-cols-4 gap-8">
                        ${data.map((item) => `
                                    <div class="news-item border p-4">
                                        <div class="news-img">
                                            <a href="/news/${item.id}">
                                                <img src="${item.img}" />
                                            </a>
                                        </div>
                                        <h3 class="my-3"><a href="/news/${item.id}" class="font-semibold text-orange-500">${item.title}</a></h3>
                                        <p class="text-sm text-gray-600">${item.desc}</p>
                                    </div>
                            `).join("")}
                </div>
            </section>
        </div>
        `
    }
}
export default componentProducts