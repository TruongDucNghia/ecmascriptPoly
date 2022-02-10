import header from "../../components/layout/header/header"
import menu from "../../components/layout/header/menu"
import banner from "../../components/layout/header/banner"
import footer from "../../components/layout/footer/foorter"
import { signup } from "../../api/users"
const register = {
    render(){
        return /*html*/ `
        ${header.render()}
        ${menu.render()}
        <div class="bg-grey-lighter w-full flex flex-col">
        <div class="container mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Đăng ký</h1>
                <form class="formSignin"> 
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4 name"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4 email"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4 password"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4 passCf"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="bg-blue-900 font-bold text-white w-36 h-10 rounded"
                    >Đăng Ký</button> <br>
                    <a class=" text-sm mt-4 hover:text-blue-darker text-blue-500" href="/dangNhap">Đăng nhập tài khoản</a>
                </form>
            </div>
        </div>
    </div>
    ${footer.render()}
        `
    },
    afterRender(){
        const formSignin = document.querySelector('.formSignin')
        formSignin.addEventListener('submit', async (e) =>{
            e.preventDefault()
            const name = document.querySelector('.name').value
            const email = document.querySelector('.email').value
            const password = document.querySelector('.password').value
            const passCf = document.querySelector('.passCf').value
            try {
                const response = await signup({
                    username: name,
                    email: email,
                    password: password
                });
                console.log(response);

            } catch (error) {
                console.log(error.response.data);
            }
            // if(password == passCf){
            //     // call api signup
            //     try {
            //         const response = await signup({
            //             username: name,
            //             email: email,
            //             password: password
            //         })
            //         console.log(response);
            //     } catch (error) {
            //         alert(error.response.data)
            //     }
            // }else{
            //     alert('Vui lòng nhập password giống nhau!')
            // }
        })
    }
}
export default register