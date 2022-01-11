import Navigo from "navigo";
import homePage from "./homePage";

const router = new Navigo("/", {linksSelector: 'a'})
const print = (content) =>{
    document.querySelector('.content').innerHTML = content
}
router.on({
  "/homaPage": () =>{
    print(homePage.reder())
    // homePage.reder()
  },
  "/tuyenSinh": () =>{
    print('Tuyển Sinh')
  },
  "/daoTao": () =>{
    print('Đào tạo')
  },
  "/sinhVien": () =>{
    print('Sinh Viên')
  },
  "/tuyenDung": () =>{
    print('Tuyển dụng')
  },
})

router.notFound(() =>{ console.log('loi');})
router.resolve()