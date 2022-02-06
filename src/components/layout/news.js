import axios from "axios"
import { getAll } from "../../api/post"

const componentNews = {
    async render(){
        const {data} = await getAll()
        return /*html*/`
        <div class="content">
            <section class="main">
                <div class="main_title text-3xl font-medium ml-4 mt-4 mb-1">
                    <h3>Tin Tức</h3>
                </div>
                <p class="ml-4 text-zinc-500">Cập nhận tin tức mới nhất của chúng tôi để biết thêm nhiều chương trình khuyến mãi</p>
                <div class="grid grid-cols-2 gap-8 mt-5 px-8">
                        ${data.map((item) => /*html*/ `
                                    <div class="news-item border p-4 flex">
                                        <div class="news-img mr-4 grow-0 shrink-0 basis-1/2 h-72 max-w-sm">
                                            <a href="/news/${item.id}">
                                                <img class=" w-full h-full object-cover" src="${item.img}" />
                                            </a>
                                        </div>
                                        <div class="flex flex-col justify-between">
                                            <div>
                                                <h3 class="my-3"><p class="font-semibold text-orange-500">${item.title}</p></h3>
                                                <p class="text-sm text-gray-600">${item.desc.slice(0, 200)}...</p>
                                            </div>
                                            <div>
                                                <p class="text-neutral-500 text-sm">${item.name}</p>
                                                <p class="text-neutral-400 text-sm">${new Date(item.createdAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                    </div>
                            `).join("")}
                </div>
            </section>
        </div>
        `
    }
}
export default componentNews