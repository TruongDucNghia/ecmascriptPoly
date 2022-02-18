import { add, getAll } from "../../api/comment"
import { reRender } from "../../utils/reRender"

const comment = {
    async render(){
        const {data} = await getAll()
        let users = []
        if(localStorage.getItem('user')){
            users = JSON.parse(localStorage.getItem('user'))
        }
        return /*html*/ `
        <div class="comment mx-5 pb-10">
        <hr>
            <h2 class="ml-5 mt-4 text-4xl font-normal mb-6 text-center">Bình luận</h2>
            ${users.length != 0 ? 
            `
            <div class="w-1/2 bg-white p-2 pt-4">
            <div class="flex ml-3">
                <div class="mr-3">
                    <img src="http://picsum.photos/50" alt="" class="rounded-full">
                </div>
                <div>
                    <h1 class="font-semibold">${users.username}</h1>
                </div>

            </div>

            <div class="mt-3 p-3 w-full">
                <textarea rows="3" class="contentCmt border p-2 rounded w-full" placeholder="Write something..."></textarea>
            </div>

            <div class="flex justify-between mx-3">
                <div><button
                        class="btnCmt px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Submit</button>
                </div>
            </div>

            </div>
            `
             :
              `<h2>Vui lòng đăng nhập để bình luận </h2>`}
           
            <h2 class="mt-4 ml-4 text-2xl">Bình luận khác</h2>
            <ul class="mt-6 ml-3">
                ${data.map(item =>{
                    return `
                    <li class="mt-5">
                        <div class="flex ml-3">
                            <div class="mr-3 mt-4">
                                <img src="http://picsum.photos/40" alt="" class="rounded-full">
                            </div>
                            <div>
                                <h1 class="font-semibold">${item.userId}</h1>
                                <span>${item.content}</span>
                                <p class="text-xs text-gray-500">${new Date(item.createdAt)}</p>
                            </div>
        
                        </div>
                    </li>
                    `
                }).join('')}
                
                
            </ul>
        </div>
        `
    },
    afterRender(id){
        const btnCmt = document.querySelector('.btnCmt')
        btnCmt.addEventListener('click', () =>{
            const contentCmt = document.querySelector('.contentCmt').value
            const createdAt = new Date().getTime()
            add({
                content: contentCmt,
                createdAt: createdAt,
                productId: id,
                userId: JSON.parse(localStorage.getItem('user')).id
            })
            .then(() =>{
                reRender(comment, ".comment")
            })
        })
    }
}

export default comment