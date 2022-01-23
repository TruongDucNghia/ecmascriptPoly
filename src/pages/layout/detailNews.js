import header from "../../components/layout/header/header"
import menu from "../../components/layout/header/menu"
import banner from "../../components/layout/header/banner"
import footer from "../../components/layout/footer/foorter"
import axios from "axios"
import { get } from "../../api/post"
const detailNews = {
    async render(id){
        const {data} = await get(id)
        return /*html*/`
        ${header.render()}
        ${menu.render()}
        ${banner.render()}
        <div class="news-item p-4 flex">
        <div class="news-img">
            <a href="/news/${data.id}">
                <img src="${data.img}" />
            </a>
        </div>
        <div class="ml-4">
            <h3 class="my-3"><a href="/news/${data.id}" class="font-semibold text-orange-500 text-3xl">${data.title}</a></h3>
            <p class="text-sm text-gray-600">${data.desc}</p>
            <p class="text-1xl text-gray-400 mt-5">${data.createdAt}</p>
        </div>
        
        </div>
        ${footer.render()}
        `
    }
}

export default detailNews