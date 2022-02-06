import header from "../../components/layout/header/header"
import menu from "../../components/layout/header/menu"
import banner from "../../components/layout/header/banner"
import footer from "../../components/layout/footer/foorter"
import newsPosts from "../../components/layout/newsPosts"
import top10Product from "../../components/layout/top10Products"
import newProducts from "../../components/layout/newProducts"
import { add } from "../../api/post"
const homePage = {
    async render() {
        return /*html*/`
        ${header.render()}
        ${menu.render()}
        ${banner.render()}
        ${await newsPosts.render()}
        ${await top10Product.render()}
        ${await newProducts.render()}
        ${footer.render()}
        `
    },
    afterRender(){
        $('.banner').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
        });

        // slider
        function handleSlider(){
            const slider = document.querySelectorAll('.slider')
            const btnLeft = document.querySelectorAll('.left')
            const btnRight = document.querySelectorAll('.right')
            slider.forEach((item, i) =>{
                btnLeft[i].addEventListener('click', ()=>{
                    item.scrollLeft -= item.clientWidth
                })
                btnRight[i].addEventListener('click', ()=>{
                    item.scrollLeft += item.clientWidth
                })
                item.addEventListener('scroll', ()=>{
                    const scrollLeft = Math.ceil(item.scrollLeft)
                    const maxScrollLeft = Math.ceil(item.scrollWidth - item.clientWidth)
                    if(scrollLeft === 0){
                        btnLeft[i].classList.add('active')
                    }else if(scrollLeft >= maxScrollLeft){
                        btnRight[i].classList.add('active')
                    }else{
                        btnRight[i].classList.remove('active')
                        btnLeft[i].classList.remove('active')
                    }
                })
            })
        }
        handleSlider()
    }
}
export default homePage;