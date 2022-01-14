import header from "../../../components/admin/header"
import datas from "../../../data"
const news = {
    render(){
        return /*html*/ `
        ${header.render()}
        <h2 class="text-center text-3xl p-5">Danh Sách Tin Tức</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8 mb-5">
          <a href="/admin/news/add">Thêm mới Tin Tức</a>
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
                      Tiêu Đề
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mô Tả
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ngày Tạo
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  ${datas.map((item, index) =>{
                    return /*html*/ `
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <p class="font-bold">${index + 1}</p>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <img class="w-40" src="${item.img}" alt="">
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <p>${item.title}</p>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${item.desc.slice(0, 50)}...
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${item.createdAt}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit </a>|
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Delete</a>
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
    }
}
export default news