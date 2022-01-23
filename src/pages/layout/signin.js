import header from "../../components/layout/header/header"
import menu from "../../components/layout/header/menu"
import banner from "../../components/layout/header/banner"
import footer from "../../components/layout/footer/foorter"
const login = {
    render(){
        return /*html*/`
        ${header.render()}
        ${menu.render()}
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
            Tài Khoản
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
            Mật khẩu
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
        </div>
        <div class="flex items-center justify-between">
        <div class="flex flex-col">
            <button class="bg-blue-900 font-bold text-white w-36 h-10 rounded" type="button">
            Đăng Nhập
          </button>
          <a class=" text-sm mt-4 hover:text-blue-darker text-blue-500" href="/register">Đăng ký tài khoản</a>
        </div>
          
          <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Bạn quên mật khẩu?
          </a>
        </div>
    </div>
    ${footer.render()}
        `
    }
}
export default login