import { add } from "../../../api/post"
import header from "../../../components/admin/header"
const addNews = {
    render(){
        return `
        ${header.render()}
        <h2 class="text-center text-3xl p-5">Thêm Mới Tin Tức</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8 mb-5">
          <a class="flex" href="/admin/news"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
        </svg>Quay lại</a>
        </button>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-6 sm:px-0">
          <form action="" id="form-add">
          <input type="text"
                id="title-post"
                class="border border-black"
                placeholder="Title"
          > <br />
          <input type="text"
                id="img-post"
                class="border border-black"
                placeholder="Image"
          > <br />
          <textarea name="" id="desc-post" cols="30" rows="10" class="border border-black"></textarea><br />
          <button class="bg-blue-500 p-4 text-white">Thêm</button>
        </form>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
        `
    },
    afterRender(){
      const formAdd = document.querySelector('#form-add')
      formAdd.addEventListener('submit', (e) =>{
        e.preventDefault()
          add({
            title: "19 phú thọ chào ae",
            img: "https://image.vtc.vn/resize/th/upload/2022/01/17/tuong-ho-o-phu-tho-17071679.jpeg",
            desc: "19 phú thọ chào ae",
          })
      })
    }
}
export default addNews