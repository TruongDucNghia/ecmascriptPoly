import header from "../../components/layout/header/header"
import menu from "../../components/layout/header/menu"
import banner from "../../components/layout/header/banner"
import footer from "../../components/layout/footer/foorter"
const edu = {
    reder(){
        return  /*html*/`
        ${header.render()}
        ${menu.render()}
        ${banner.render()}
        <div class="content mt-5">
        <section class="content_edu w-full flex justify-start p-10 h-72">
            <div class="edu_item1 bg-blue-900 w-3/12 p-5">
                <div class="edu_item1-content">
                    <div class="edu_item1-title text-white font-medium text-xl">
                        <p>Thông báo tuyển sinh
                        </p>
                    </div>
                    <div class="edu_item1-title text-white font-medium text-sm mt-3 mb-5">
                        <p>Thí sinh thuộc một trong các đối tượng sau sẽ đủ điều kiện trở thành sinh viên của Cao đẳng FPT Polytechnic:</p>
                    </div>
                    <a href="" class="text-rose-600 font-bold ">Đọc tiếp</a>
                </div>
            </div>
            <div class="edu_item1 bg-amber-500 w-3/12 p-5">
                <div class="edu_item1-content">
                    <div class="edu_item1-title text-white font-medium text-xl">
                        <p>Thời gian xét tuyển</p>
                    </div>
                    <div class="edu_item1-title text-white font-medium text-sm mt-3 mb-7">
                        <p>Thời gian: Tháng 3/2022</p>
                    </div>
                    <a class="text-white font-medium text-sm mt-3" href="">Hotline tư vấn: 0981 725 836</a>
                </div>
            </div>
            <div class="edu_item2 bg-stone-400 w-6/12">
                <div class="edu_item2-content flex justify-center items-center flex-col w-full h-full">
                    <h3 class="font-bold text-2xl text-center text-indigo-900"> Sẵn sàng trở thành sinh viên Cao đẳng FPT Polytechnic</h3>
                    <h2 class=" text-orange-500 text-2xl text-center font-bold mt-4">ĐĂNG KÝ NGAY!</h2>
                </div>
            </div>
        </section>
        <section style="background:linear-gradient(to bottom, rgb(0 0 0 / 17%), rgb(0 0 0 / 47%)), url(https://caodang.fpt.edu.vn/wp-content/uploads/3dfgd.jpg) no-repeat center/cover;" class="edu_banner w-full h-96 text-center flex justify-center items-center">
            <div class="edu_banner-text">
                <h1 class="text-5xl font-bold text-white">40.000+ sinh viên đã lựa chọn Cao đẳng FPT</h1>
                <h3 class="text-3xl font-bold text-white mt-12">Triết lý giáo dục mới “Thực học - Thực nghiệp”</h3>
                <button class="bg-orange-500 w-40 h-10 text-white mt-5">ĐĂNG KÝ HỌC</button>
            </div>
        </section>
        <section class="edu_all-items bg-zinc-300 p-5">
            <div class="edu_items-content bg-white m-5 flex flex-col p-11">
                <div class="edu_items-row w-full flex">
                    <div class="edu_row-item w-3/12 h-44">
                        <p class="font-bold text-xl">NGÀNH ĐÀO TẠO</p>
                        <span class="text-sm">Với triết lý đào tạo “Thực học – Thực nghiệp”, Cao đẳng FPT Polytechnic hướng tới đào tạo nguồn nhân lực chất lượng cao với phương pháp giảng dạy qua dự án thật.</span>
                    </div>
                    <div style="background-image:linear-gradient(to bottom, rgb(0 0 0 / 17%), rgb(0 0 0 / 47%)), url(https://caodang.fpt.edu.vn/wp-content/uploads/CNDT1.png);" class="edu_row-item w-3/12 h-44 flex items-end justify-center">
                        <p class="font-bold text-white mb-3 text-xl">Công nghệ thông tin</p>                            
                    </div>
                    <div style="background-image: linear-gradient(to bottom, rgb(0 0 0 / 17%), rgb(0 0 0 / 47%)), url(https://caodang.fpt.edu.vn/wp-content/uploads/CNDT4.png);" class="edu_row-item w-3/12 h-44 flex items-end justify-center">
                        <p class="font-bold text-white mb-3 text-xl">Thiết kế đồ họa</p>   
                    </div>
                    <div style="background-image: linear-gradient(to bottom, rgb(0 0 0 / 17%), rgb(0 0 0 / 47%)), url(https://caodang.fpt.edu.vn/wp-content/uploads/CNDT2.png);" class="edu_row-item w-3/12 h-44 flex items-end justify-center">
                        <p class="font-bold text-white mb-3 text-xl">Quản trị kinh doanh</p>
                    </div>
                </div>
                <div class="edu_items-row flex">
                    <div style="background-image:linear-gradient(to bottom, rgb(0 0 0 / 17%), rgb(0 0 0 / 47%)), url(https://caodang.fpt.edu.vn/wp-content/uploads/Cơ_khí_2.png);" class="edu_row-item w-3/12 h-44 flex items-end justify-center">
                        <p class="font-bold text-white mb-3 text-xl">Công nghệ kỹ thuật Cơ khí</p>
                    </div>
                    <div style="background-image:linear-gradient(to bottom, rgb(0 0 0 / 17%), rgb(0 0 0 / 47%)), url(https://caodang.fpt.edu.vn/wp-content/uploads/CNDT6.png);" class="edu_row-item w-3/12 h-44 flex items-end justify-center">
                        <p class="font-bold text-white mb-3 text-xl">Công nghệ kỹ thuật điện, điện tử</p>                            
                    </div>
                    <div style="background-image:linear-gradient(to bottom, rgb(0 0 0 / 17%), rgb(0 0 0 / 47%)), url(https://caodang.fpt.edu.vn/wp-content/uploads/CNDT3.png);" class="edu_row-item w-3/12 h-44 flex items-end justify-center">
                        <p class="font-bold text-white mb-3 text-xl">Hướng dẫn viên du lịch</p>   
                    </div>
                    <div style="background-image:linear-gradient(to bottom, rgb(0 0 0 / 17%), rgb(0 0 0 / 47%)), url(https://caodang.fpt.edu.vn/wp-content/uploads/CNDT5.png);" class="edu_row-item w-3/12 h-44 flex items-end justify-center">
                        <p class="font-bold text-white mb-3 text-xl">Thẩm mỹ làm đẹp</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    ${footer.render()}
        `
    }
}

export default edu;