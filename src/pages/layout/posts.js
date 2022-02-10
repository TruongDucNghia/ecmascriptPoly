import header from "../../components/layout/header/header"
import menu from "../../components/layout/header/menu"
import banner from "../../components/layout/header/banner"
import footer from "../../components/layout/footer/foorter"
import componentnews from "../../components/layout/news"

const posts = {
    async render(){
        return /*html*/ `
            ${header.render()}
            ${menu.render()}
            ${banner.render()}
            ${await componentnews.render()}
            ${footer.render()}
        `
    },
    afterRender(){
       banner.afterRender()
    }
}
export default posts