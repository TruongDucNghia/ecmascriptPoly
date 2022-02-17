import { add, get, update } from "../../../api/post"
import axios from "axios";
import header from "../../../components/admin/header"
const updateNews = {
  async render(id) {
    const { data } = await get(id)
    return /*html*/`
        ${header.render()}
        <h2 class="text-center text-3xl p-5">Cập nhật Tin Tức</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8 mb-5">
          <a class="flex" href="/#/admin/news"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
        </svg>Quay lại</a>
        </button>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-6 sm:px-0">
              <div class=" bg-white rounded-md max-w-2xl">
                <div class="space-y-4">
                  <div>
                    <label for="title" class="text-lx font-serif">Title:</label>
                    <input type="text" placeholder="title" id="title" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" value="${data.title}" />
                  </div>
                  <div>
                    <label for="description" class="block mb-2 text-lg font-serif">Description:</label>
                    <textarea id="description" cols="30" rows="10" placeholder="whrite here.." class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md">${data.desc}</textarea>
                  </div>
                  <div>
                    <label for="img" class="text-lx font-serif">Image:</label>
                    <input type="file" placeholder="image cdn" id="img" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" value="${data.img}"/>
                    <img class="loadImgNow" src="${data.img}" alt="" width = "300px">
                  </div>
                  <div>
                    <label for="name" class="text-lx font-serif">Name:</label>
                    <input type="text" placeholder="name" id="name" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" value="${data.name}"/>
                  </div>
                  <button class="btnUpdate px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">UPDATE POST</button>
                </div>
              </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
        `
  },
  afterRender(id) {
    const img = document.querySelector('#img')
    const loadImgNow = document.querySelector('.loadImgNow')
    const btnUpdate = document.querySelector('.btnUpdate')

    img.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dbpw1enlu/image/upload"

      const formData = new FormData();

      formData.append('file', file);
      formData.append('upload_preset', "cyfbktyp");
      // call api cloudinary

      const response = await axios.post(CLOUDINARY_API, formData, {
        headers: {
          "Content-Type": "application/form-data"
        }
      });

      loadImgNow.src = response.data.url
      if(response.status == 200){
        handlerUpdate(response.data.url)
      }
    })

    function handlerUpdate(img){
      btnUpdate.addEventListener('click', () => {
        const title = document.querySelector('#title').value
        const desc = document.querySelector('#description').value
        const name = document.querySelector('#name').value
        const updatedAt = new Date().getTime()
        if (title == '' || desc == '' || name == '') {
          alert('Vui lòng nhập đầy đủ thông tin !')
        } else {
          update({
            id,
            title: title,
            img: img,
            desc: desc,
            name: name,
            updatedAt: updatedAt
          }).then(() => {
            alert('Cập nhật bài viết thành công !!!')
            window.location = '/admin/news'
          })
        }

      })
    }
    handlerUpdate(document.querySelector('.loadImgNow').src)

  }
}
export default updateNews