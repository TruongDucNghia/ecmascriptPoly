const banner = {
    render(){
        return `
        <section class="banner mt-5">
            <img src="https://cdn-images.kooding.com/bannerItem/desktop/845/947309576d8518278eb9e011c612218d100edda7.jpg" alt="">
            <img src="https://cdn-images.kooding.com/bannerItem/desktop/823/7e94b06dc9bc3bbb19c65146d6a66ab43a383122.jpg" alt="">
            <img src="https://cdn-images.kooding.com/bannerItem/desktop/755/ecc46121fea4ee8228e40d94abf231334b316403.jpg" alt="">
        </section>
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
export default banner