import Navigo from "navigo";
import homePage from "./pages/homePage";
import footer from "./pages/foorter";
import header from "./pages/header";
import login from "./pages/signin";
import register from "./pages/register";
import edu from "./pages/educate";
import detailNews from "./pages/detailNews";
// ----------admin-------------
import dashboard from "./pages/admin/dashboard"
import news from "./pages/admin/news"
const router = new Navigo("/", {linksSelector: 'a'})
const print = (content) =>{
    document.querySelector('.content').innerHTML = content
}
document.querySelector('.header').innerHTML = header.reder()
document.querySelector('.footer').innerHTML = footer.reder()
router.on({
  "/": () =>{
    print(homePage.reder())
  },
  "/homaPage": () =>{
    print(homePage.reder())
    // homePage.reder()
  },
  "/tuyenSinh": () =>{
    print(edu.reder())
  },
  "/daoTao": () =>{
    print('Đào tạo')
  },
  "/sinhVien": () =>{
    print('Sinh Viên')
  },
  "/dangNhap": () =>{
    print(login.render())
  },
  "/dangNhap": () =>{
    print(login.render())
  },
  "/register": () =>{
    print(register.render())
  },
  "/admin": () =>{
    print(dashboard.render())
  },
  "/admin/news": () =>{
    print(news.render())
  },
})

router.notFound(() =>{ console.log('loi');})
router.resolve()