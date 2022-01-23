import header from "../../components/layout/header/header"
import menu from "../../components/layout/header/menu"
import banner from "../../components/layout/header/banner"
import footer from "../../components/layout/footer/foorter"
import componentProducts from "../../components/layout/products"

const products = {
    async render(){
        return /*html*/ `
            ${header.render()}
            ${menu.render()}
            ${banner.render()}
            ${await componentProducts.render()}
            ${footer.render()}
        `
    },
    afterRender(){
        $('.banner').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
        });
    }
}
export default products