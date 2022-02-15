import { getAll, remove } from "../../../api/products"
import header from "../../../components/admin/header"
const adminProducts = {
    async render(){
      const {data} = await getAll()
        return /*html*/ `
        ${header.render()}
        <h2 class="text-center text-3xl p-5">Danh Sách Sản Phẩm</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8 mb-5">
          <a href="/admin/products/add">Thêm mới sản phẩm</a>
        </button>
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto">
          <div class="py-2 align-middle inline-block min-w-full">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      STT
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hình Ảnh
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tên sản phẩm
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Giá
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Loại
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mô tả
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kích cỡ
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Màu sắc
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  ${data.map((item, index) =>{
                    return /*html*/ `
                    <tr class = "item">
                      <td class="px-6 py-4 whitespace-nowrap">
                        <p class="font-bold">${index + 1}</p>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <img class="w-40" src="${item.img}" alt="">
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <p>${item.name}</p>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${item.price} VNĐ
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${item.cateProductId == 1 ? 'Nam' : item.cateProductId == 2 ? 'nữ' : 'bede'}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${item.desc.slice(0, 40)}...
                      </td>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${item.color.map(colo => colo + ' ')}
                      </td>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${item.size.map(colo => colo + ' ' )}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/admin/products/${item.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit </a>|
                        <a href="#" data-id = "${item.id}" class="delete text-indigo-600 hover:text-indigo-900">Delete</a>
                      </td>
                    </tr>
                      `
                  }).join("")}

                  <!-- More people... -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        `
    },
    afterRender(){
      const btns = document.querySelectorAll('.delete')
      const tr = document.querySelectorAll('.item')
      btns.forEach((btn, index) =>{
        btn.addEventListener('click', (e) =>{
          e.preventDefault()
            const id = btn.dataset.id
            const action = window.confirm('Bạn chắc muốn xóa sản phẩm này ?')
            if(action){
              remove(id).then(() =>{
                alert('Bạn xóa thành công !')
              })
              .then(() =>{
                reRender(adminProducts, '#app')
              })
            }
        })
      })
    }
}
export default adminProducts