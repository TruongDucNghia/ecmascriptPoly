import header from "../../components/layout/header/header"
import menu from "../../components/layout/header/menu"
import banner from "../../components/layout/header/banner"
import footer from "../../components/layout/footer/foorter"
import axios from "axios"
import { get, update, updateView } from "../../api/post"
const detailNews = {
    async render(id){
        const {data} = await get(id)
        return /*html*/`
        ${header.render()}
        ${menu.render()}
        <div class="news-item p-4 flex flex-col">
            <div class="news-img w-full h-96">
                <a href="/#/news/${data.id}">
                    <img class="w-full h-full object-cover" src="${data.img}" />
                </a>
            </div>
            <div class="ml-4">
                <h3 class="my-3"><a href="/#/news/${data.id}" class="font-semibold text-orange-500 text-3xl">${data.title}</a></h3>
                <p class="text-sm text-gray-600">${data.desc}</p>
                <p class="text-1xl text-gray-400 mt-5">Ngày đăng: ${new Date(data.createdAt).toLocaleDateString()}</p>
                <p class="text-1xl text-gray-400 mt-5">Tác Giả: ${data.name}</p>
                <div class="flex text-1xl text-gray-400 mt-5">
                    Số lượt xem : <p class="view">${data.view}</p>
                </div>
            </div>
        
        </div>
        ${footer.render()}
        `
    },
    afterRender(id){
        menu.afterRender()
        let views = document.querySelector('.view').innerHTML
        views = Number(views)
        const view = views + 1
        updateView({
            id,
            view: view
        })
    }
}

export default detailNews