import Navigo from "navigo";
import homePage from "./pages/layout/homePage";
import login from "./pages/layout/signin";
import register from "./pages/layout/register";
import edu from "./pages/layout/educate";
import detailNews from "./pages/layout/detailNews";
import products from "./pages/layout/products";
import detailProduct from "./pages/layout/detailProduct";
// ----------admin-------------
import dashboard from "./pages/admin/dashboard"
import news from "./pages/admin/news/news"
import addNews from "./pages/admin/news/add"
const router = new Navigo("/", {linksSelector: 'a'})
const print = async (content, id ) =>{
    document.querySelector('#app').innerHTML = await content.render(id);
    if(content.afterRender){
      content.afterRender()
    }
}
router.on({
  "/": () =>{
    print(homePage)
  },
  "/homaPage": () =>{
    print(homePage)
    // homePage.reder()
  },
  "/tuyenSinh": () =>{
    print(edu)
  },
  "/products": () =>{
    print(products)
  },
  "/detailProduct": () =>{
    print(detailProduct)
  },
  "/news/:id": ({data})=>{
    print(detailNews, data.id)
  },
  "/dangNhap": () =>{
    print(login)
  },
  "/register": () =>{
    print(register)
  },

  // admin
  "/admin": () =>{
    print(dashboard)
  },
  "/admin/news": () =>{
    print(news)
  },
  "/admin/news/add": () =>{
    print(addNews)
  },
})

router.notFound(() =>{ console.log('loi');})
router.resolve()
// function resolveAfter2s(){
//   return new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//       try{
//         resolve([n'ghia', 'hung', 'nhung'])
//       }catch{
//         reject('error conect!!!')
//       }
//     }, 2000)
//   })
// }

// const data = new resolveAfter2s();
// data
//   .then((result) => [...result, 'hip'])
//   .then((datas) =>{
//     console.log(datas);
//   })
//   .catch((error) =>{
//     console.log(error);
//   })
// async function getData(){
//   const result = await resolveAfter2s()
//   const data1 = await [...result, 'duma']
//   console.log(data1);
// }
// getData()
