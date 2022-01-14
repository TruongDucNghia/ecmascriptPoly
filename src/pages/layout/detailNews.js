import datas from "../../data"
import header from "../../components/layout/header/header"
import menu from "../../components/layout/header/menu"
import banner from "../../components/layout/header/banner"
import footer from "../../components/layout/footer/foorter"
const detailNews = {
    render(id){
        const detailItem = datas.find((item) =>{
            return item.id === id
        })
        return /*html*/`
        ${header.render()}
        ${menu.render()}
        ${banner.render()}
        <div class="news-item p-4 flex">
        <div class="news-img">
            <a href="/news/${detailItem.id}">
                <img src="${detailItem.img}" />
            </a>
        </div>
        <div class="ml-4">
            <h3 class="my-3"><a href="/news/${detailItem.id}" class="font-semibold text-orange-500 text-3xl">${detailItem.title}</a></h3>
            <p class="text-sm text-gray-600">${detailItem.desc}</p>
            <p class="text-1xl text-gray-400 mt-5">${detailItem.createdAt}</p>
        </div>
        
        </div>
        ${footer.render()}
        `
    }
}

export default detailNews