import Image from "next/image";
export default function CExampleCard({ nodeBean }) {
    console.log(nodeBean);
    const name = nodeBean.nodeInfo['childJson']['name']
    return <button className='max-w-sm rounded overflow-hidden shadow-lg m-3 text-left'>
        <Image className="w-full" alt={name} src={'https://processing.org' + nodeBean.imageInfo['images']['fallback']['src']} width={400} height={225}></Image>

        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>

        <div className="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>

    </button>
}