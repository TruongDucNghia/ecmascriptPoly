const comment = {
    render(){
        return /*html*/ `
        <div class="comment mx-5 pb-10">
        <hr>
            <h2 class="ml-5 mt-4 text-4xl font-normal mb-6 text-center">Bình luận</h2>
            <div class="w-1/2 bg-white p-2 pt-4">
                <div class="flex ml-3">
                    <div class="mr-3">
                        <img src="http://picsum.photos/50" alt="" class="rounded-full">
                    </div>
                    <div>
                        <h1 class="font-semibold">Itay Buyoy</h1>
                        <p class="text-xs text-gray-500">2 seconds ago</p>
                    </div>

                </div>

                <div class="mt-3 p-3 w-full">
                    <textarea rows="3" class="border p-2 rounded w-full" placeholder="Write something..."></textarea>
                </div>

                <div class="flex justify-between mx-3">
                    <div><button
                            class="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Submit</button>
                    </div>
                </div>

            </div>
            <h2 class="mt-4 ml-4 text-2xl">Bình luận khác</h2>
            <ul class="mt-6 ml-3">
                <li class="mt-5">
                    <div class="flex ml-3">
                        <div class="mr-3 mt-4">
                            <img src="http://picsum.photos/40" alt="" class="rounded-full">
                        </div>
                        <div>
                            <h1 class="font-semibold">Itay Buyoy</h1>
                            <span>Tao đã ở đây OK</span>
                            <p class="text-xs text-gray-500">2 seconds ago</p>
                        </div>
    
                    </div>
                </li>
                <li class="mt-5">
                    <div class="flex ml-3">
                        <div class="mr-3 mt-4">
                            <img src="http://picsum.photos/40" alt="" class="rounded-full">
                        </div>
                        <div>
                            <h1 class="font-semibold">Itay Buyoy</h1>
                            <span>Tao đã ở đây OK</span>
                            <p class="text-xs text-gray-500">2 seconds ago</p>
                        </div>
    
                    </div>
                </li>
                <li class="mt-5">
                    <div class="flex ml-3">
                        <div class="mr-3 mt-4">
                            <img src="http://picsum.photos/40" alt="" class="rounded-full">
                        </div>
                        <div>
                            <h1 class="font-semibold">Itay Buyoy</h1>
                            <span>Tao đã ở đây OK</span>
                            <p class="text-xs text-gray-500">2 seconds ago</p>
                        </div>
    
                    </div>
                </li>
                
            </ul>
        </div>
        `
    }
}

export default comment