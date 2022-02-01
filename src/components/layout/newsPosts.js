import { getTop3Posts } from "../../api/post"

const newsPosts = {
    async render() {
        const {data} = await getTop3Posts()
        return /*html*/`
        <section>
            <div class="news_posts pl-5 pr-5">
                <h2 class="mt-5 mb-5 font-medium text-2xl">Bài viết mới nhất</h2>
                <div class="news_post-content flex">
                    ${data.map(item =>{
                        return /*html*/ `
                            <div class="posts_item h-full text-center grow-0 shrink-0 basis-1/3">
                                <div class="posts_boxImg mx-4 h-96">
                                    <a href="/news/${item.id}">
                                        <img class="w-full h-full object-cover" src="${item.img}" alt="">
                                    </a>
                                </div>
                                <div class="posts_title text-2xl font-medium mt-4 mx-4">
                                    <h2>${item.title}</h2>
                                </div>
                                <div class="posts_text mt-4 mx-4">
                                    <p>${item.desc.slice(0,50)}...</p>
                                </div>
                            </div>
                        `
                    }).join(' ')}
                </div>
            </div>
        </section>
        `
    }
}

export default newsPosts