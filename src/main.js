import Navigo from "navigo";
import homePage from "./pages/layout/homePage";
// import footer from "./components/layout/footer/foorter";
// import header from "./pages/layout/header";
import login from "./pages/layout/signin";
import register from "./pages/layout/register";
import edu from "./pages/layout/educate";
import detailNews from "./pages/layout/detailNews";
// ----------admin-------------
import dashboard from "./pages/admin/dashboard"
import news from "./pages/admin/news/news"
import addNews from "./pages/admin/news/add"
const router = new Navigo("/", {linksSelector: 'a'})
const print = (content) =>{
    document.querySelector('#app').innerHTML = content
}
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
  "/news/:id": (value)=>{
    print(detailNews.render(value.data.id))
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
  "/admin/news/add": () =>{
    print(addNews.render())
  },
})

router.notFound(() =>{ console.log('loi');})
router.resolve()