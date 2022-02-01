const menu = {
    render(){
        return `
        <section class="nav flex justify-between items-center bg-amber-600 h-14">
            <ul class="menu flex items-center pl-4 text-white">
                <li class="p-3 underline"><a href="/homaPage">Trang chủ</a></li>
                <li class="p-3"><a href="/products">Sản Phẩm</a></li>
                <li class="p-3"><a href="/posts">Tin Tức</a></li>
                <li class="p-3"><a href="/admin">ADMIN</a></li>
                <li class="p-3"><a href="/dangNhap">Đăng Nhập</a></li>
            </ul>
            <div class="search">
                <input class="w-64 p-1" type="text">
                <button style="background-color: #272f54;" class="text-white w-20 p-1 mr-4" type="submit">Tìm kiếm</button>
            </div>
        </section>
        `
    }
}
export default menu;