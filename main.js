import Navigo from "navigo";
import homePage from "./src/pages/layout/homePage";
import login from "./src/pages/layout/signin";
import register from "./src/pages/layout/register";
import products from "./src/pages/layout/products";
import detailNews from "./src/pages/layout/detailNews";
import posts from "./src/pages/layout/posts";
import detailProduct from "./src/pages/layout/detailProducts";
import notFound from "./src/pages/layout/404Page"
// ----------admin-------------
import dashboard from "./src/pages/admin/dashboard"
import news from "./src/pages/admin/news/news"
import addNews from "./src/pages/admin/news/add"
import updateNews from "./src/pages/admin/news/update";
import adminProducts from "./src/pages/admin/products/products"
import adminAddProducts from "./src/pages/admin/products/add"
import updateProducts from "./src/pages/admin/products/update";
const router = new Navigo("/", {linksSelector: 'a'})
const print = async (content, id ) =>{
    document.querySelector('#app').innerHTML = await content.render(id);
    if(content.afterRender){
      content.afterRender(id)
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
  "/products": () =>{
    print(products)
  },
  "/posts": () =>{
    print(posts)
  },
  "/detailProduct/:id": ({data}) =>{
    print(detailProduct, data.id)
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
  "/admin/news/:id/edit": ({data}) =>{
    print(updateNews, data.id)
  },
  "/admin/products": () =>{
    print(adminProducts)
  },
  "/admin/products/add": () =>{
    print(adminAddProducts)
  },
  "/admin/products/:id/edit": ({data}) =>{
    print(updateProducts, data.id)
  },
})

router.notFound(() =>{print (notFound)})
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
