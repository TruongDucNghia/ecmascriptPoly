const header = {
    render(){
        return /*html*/ `
        <header style="background-color: #272f54;" class="flex justify-between items-center h-24 px-6">
            <div class="w-1/4">
                ${localStorage.getItem('user') ? `<span class="text-white font-medium">Welcome ${JSON.parse(localStorage.getItem('user')).username}</span>` : ''}
            </div>
            <div class="w-1/2 flex justify-center items-center">
                <img class="w-40" src="https://phothongcaodang.fpt.edu.vn/wp-content/uploads/LOGO-PTC%C4%90-White-Transparency.png" alt="">
            </div>
            <div class="w-1/4 flex justify-end text-3xl text-white">
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
                    </svg>
                </a> 
            </div>
        </header>
        
        `
    }
}
export default header;