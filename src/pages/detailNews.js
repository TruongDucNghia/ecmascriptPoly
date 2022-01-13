import datas from "../data"

const detailNews = {
    reder(id){
        const detailItem = datas.find((item) =>{
            return item.id === id
        })
        return /*html*/`
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
        `
    }
}

export default detailNews