import axios from "axios";
import { add } from "../../../api/products"
import header from "../../../components/admin/header"
const addProducts = {
    render(){
        return /*html*/`
        ${header.render()}
        <h2 class="text-center text-3xl p-5">Thêm Mới Sản Phẩm</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8 mb-5">
          <a class="flex" href="/#/admin/products"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <label for="title" class="text-lx font-serif">Name:</label>
                    <input type="text" placeholder="name" id="name" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" />
                  </div>
                  <div>
                    <label for="title" class="text-lx font-serif">Img:</label>
                    <input type="file" placeholder="img  cdn" id="img" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" />
                    <img class="loadImgNow" src="" alt="" width="250px">
                  </div>
                  <div>
                    <label for="price" class="text-lx font-serif">Price:</label>
                    <input type="text" placeholder="price" id="price" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" />
                  </div>
                  <div>
                    <label for="description" class="block mb-2 text-lg font-serif">Description:</label>
                    <textarea id="description" cols="30" rows="10" placeholder="whrite here.." class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
                  </div>
                  <div>
                    <label for="" class="text-lx font-serif">Category:</label>
                    <select id="cate">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                  </div>
                  <div>
                    <label for="" class="text-lx font-serif">Size:</label>
                    <label for="S">S</label>
                    <input type="checkBox" value="S" name="size" id="S"/>
                    <label for="M">M</label>
                    <input type="checkBox" value="M" name="size" id="M" />
                    <label for="L">L</label>
                    <input type="checkBox" value="L" name="size" id="L" />
                    <label for="XL">XL</label>
                    <input type="checkBox" value="XL" name="size" id="XL" />
                    <label for="XXL">XXL</label>
                    <input type="checkBox" value="XXL" name="size" id="XXL" />
                    <label for="XXX">XXX</label>
                    <input type="checkBox" value="XXX" name="size" id="XXX" />
                    
                    
                  </div>
                  <div>
                    <label for="color" class="text-lx font-serif">Color:</label>
                    <input type="text" placeholder="Enter space-separated color values" id="color" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" />
                  </div>
                  <button disabled class="opacity-70 px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD PRODUCTS</button>
                </div>
              </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
        `
    },
    afterRender(){
      const img = document.querySelector('#img')
      const loadImgNow = document.querySelector('.loadImgNow')
      const btnAdd = document.querySelector('.opacity-70')

      img.addEventListener('change', async (e) =>{
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

        if(response.status === 200){
          loadImgNow.src = response.data.url
          btnAdd.classList.remove('opacity-70')
          btnAdd.removeAttribute('disabled')

          btnAdd.addEventListener('click', (e) =>{
            e.preventDefault()
            const getSize = document.getElementsByName("size")
            let size = []
            for(let i = 0; i < getSize.length; i++){
              if(getSize[i].checked === true){
                size.push(getSize[i].value)
              }
            };
            const color = document.querySelector('#color').value.split(',')
            const name = document.querySelector('#name').value
            const desc = document.querySelector('#description').value
            const price = document.querySelector('#price').value
            const cate = document.querySelector('#cate').value
            const createdAt = new Date().getTime()
            
            if(name == "" || price == "" || desc == "" || size.length == 0 || color == ""){
              alert('Vui lòng nhập đầy đủ thông tin!')
            }else{
              add({
                name: name,
                img: response.data.url,
                price: price,
                cateProductId: cate,
                desc: desc,
                size: size,
                color: color,
                view: 0,
                createdAt: createdAt,
                updatedAt: createdAt
              }).then(() =>{
                alert('Thêm sản phẩm mới thành công !')
                window.location = '/admin/products'
              })
            }
          })

        }

      })

     


    }
}
export default addProducts