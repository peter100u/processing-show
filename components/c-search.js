export default function CSearch() {
    return (

        <div className="m-4">
            <form className="relative">
                <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <path fill-rule="evenodd" clip-rule="evenodd" 
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>

                <input class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none 
                w-full text-sm text-black placeholder-gray-500 
                border border-gray-200 rounded-md py-2 pl-10" 
                type="search" aria-label="请输入你想要搜索的processing api关键字" placeholder="请输入你想要搜索的processing api关键字" />
            </form>
        </div>
    );
}