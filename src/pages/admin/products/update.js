import axios from "axios";
import { update, get } from "../../../api/products"
import header from "../../../components/admin/header"
const addProducts = {
    async render(id){
        const {data} = await get(id)
        return /*html*/`
        ${header.render()}
        <h2 class="text-center text-3xl p-5">Cập Nhật Sản Phẩm</h2>
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
                    <input type="text" placeholder="name" id="name" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" value="${data.name}"/>
                  </div>
                  <div>
                    <label for="title" class="text-lx font-serif">Img:</label>
                    <input type="file" placeholder="img  cdn" id="img" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" value="${data.img}" />
                    <img class="loadImgNow" src="${data.img}" alt="" width = "300px">
                  </div>
                  <div>
                    <label for="price" class="text-lx font-serif">Price:</label>
                    <input type="text" placeholder="price" id="price" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" value="${data.price}"/>
                  </div>
                  <div>
                    <label for="description" class="block mb-2 text-lg font-serif">Description:</label>
                    <textarea id="description" cols="30" rows="10" placeholder="whrite here.." class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md">${data.desc}</textarea>
                  </div>
                  <div>
                    <label for="img" class="text-lx font-serif">Category:</label>
                    <select id="cate">
                        
                        ${data.cate == "1" ? ' <option value="1" selected>Male</option> <option value="2">Female</option>' : '<option value="1">Male</option> <option selected value="2">Female</option> '}
                    </select>
                  </div>
                  <div>
                    <label for="" class="text-lx font-serif">Size:</label>
                        <label for="S">S</label>
                        <input type="checkBox" ${data.size.map(item => item == "S" ? "checked" : "").join(' ')} value="S" name="size" id="S"/>
                        <label for="M">M</label>
                        <input type="checkBox" ${data.size.map(item => item == "M" ? "checked" : "").join(' ')} value="M" name="size" id="M" />
                        <label for="L">L</label>
                        <input type="checkBox" ${data.size.map(item => item == "L" ? "checked" : "").join(' ')} value="L" name="size" id="L" />
                        <label for="XL">XL</label>
                        <input type="checkBox" ${data.size.map(item => item == "XL" ? "checked" : "").join(' ')} value="XL" name="size" id="XL" />
                        <label for="XXL">XXL</label>
                        <input type="checkBox" ${data.size.map(item => item == "XXL" ? "checked" : "").join(' ')} value="XXL" name="size" id="XXL" />
                        <label for="XXX">XXX</label>
                        <input type="checkBox" ${data.size.map(item => item == "XXX" ? "checked" : "").join(' ')} value="XXX" name="size" id="XXX" />
                  </div>
                  <div>
                    <label for="color" class="text-lx font-serif">Color:</label>
                    <input type="text" placeholder="Enter space-separated color values" id="color" class=" mt-2 outline-none py-1 px-2 text-md border-2 rounded-md w-full" value="${data.color.map(item => item).join(', ')}" />
                  </div>
                  <button class="btnUpdate px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">UPDATE PRODUCTS</button>
                </div>
              </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
        `
    },
    afterRender(id){
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
        btnUpdate.addEventListener('click', () =>{
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
          const updatedAt = new Date().getTime()
          if(name == "" || price == "" || desc == "" || size.length == 0 || color == ""){
            alert('Vui lòng nhập đầy đủ thông tin!')
          }else{
            update({
              id,
              name: name,
              img: img,
              price: price,
              cateProductId: cate,
              desc: desc,
              size: size,
              color: color,
              updatedAt: updatedAt
            }).then(() =>{
              alert('Cập nhật sản phẩm mới thành công !')
              window.location = '/admin/products'
            })
          }
            
        })
      }
      handlerUpdate(document.querySelector('.loadImgNow').src)

    }
}
export default addProducts