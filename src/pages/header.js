import banner from "../components/header/banner"
import menu from "../components/header/menu"
const header = {
    reder(){
        return /*html*/ `
        <header style="background-color: #272f54;" class="flex justify-center items-center h-24">
            <img class="w-40" src="https://phothongcaodang.fpt.edu.vn/wp-content/uploads/LOGO-PTC%C4%90-White-Transparency.png" alt="">
        </header>
        ${menu.reder()}
        ${banner.reder()}
        `
    }
}
export default header;