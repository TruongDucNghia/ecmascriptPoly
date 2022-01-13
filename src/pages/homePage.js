import datas from "../data"
const homePage = {
    reder() {
        return /*html*/`
        <div class="content">
        <section class="main">
            <div style="color: #2b376b;" class="main_title text-3xl font-bold ml-4 mt-4">
                <h3>Tin Tức Học Tập</h3>
            </div>
            <div class="grid grid-cols-3 gap-8">
                    ${datas.map((item) => `
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
export default homePage;