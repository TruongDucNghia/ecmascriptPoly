import header from "../../components/layout/header/header"
import menu from "../../components/layout/header/menu"
import banner from "../../components/layout/header/banner"
import footer from "../../components/layout/footer/foorter"
import comment from "../../components/layout/comment"
import detailNews from "./detailNews"
const detailProduct = {
    render(){
        return /*html*/ `
        ${header.render()}
        ${menu.render()}
        <div class="news-item p-4 flex gap-x-8 w-full mt-6">
            <div class="news-img w-1/2 h-full">
                <a href="#">
                    <img class="w-full h-full"
                        src="https://cdn-images.kooding.com/productListingImage/297988-2/9f5573ddc1288e56d93200241cad61efea9fb6a4.jpg" />
                </a>
            </div>
            <div class="ml-4">
                <p>Danh mục: <span>Nam</span></p>
                <h3 class="mb-5"><a href="#" class="font-semibold text-orange-500 text-3xl">Lorem ipsum dolor
                        sit amet.</a></h3>
                <p class="text-2xl text-gray-600">$169</p>
                <p class="text-1xl text-gray-800 mt-5">Mô tả :</p>
                <p class="text-1xl text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
                    voluptatibus nemo placeat incidunt eligendi corrupti ab sequi velit quo tempore officia in commodi, rem
                    saepe magnam, ducimus alias quaerat ratione.</p>
                <p class="text-1xl mt-4 text-gray-600">Màu Sắc:</p>
                <select class="form-select appearance-none w-40 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-3" id="">
                    <option value="">----Chọn màu----</option>
                    <option value="">Đen</option>
                    <option value="">Đen</option>
                    <option value="">Đen</option>
                </select>
                <p class="text-1xl mt-4 text-gray-600">Kích cỡ:</p>
                <select class="form-select appearance-none w-40 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-3" id="">
                    <option value="">----Chọn size----</option>
                    <option value="">xl</option>
                    <option value="">xll</option>
                    <option value="">xll</option>
                </select> <br>
                <button class="bg-gray-500 hover:bg-gray-400 text-white font-medium py-2 px-10 rounded mt-4">Thêm vào giỏ hàng <i class="bi bi-cart-plus"></i></button>
            </div>

        </div>
        ${comment.render()}
        ${footer.render()}
        `
    }
}
export default detailProduct