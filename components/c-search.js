export default function CSearch() {
    return (
        <input type='search'
            className='outline-none rounded-full px-3 py-1.5 w-full flex-auto'
            autoComplete="{true}"
            placeholder='请输入你想要搜索的processing api关键字' />
    );
}