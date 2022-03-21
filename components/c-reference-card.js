import Image from "next/image";
export default function CReferenceCard({ nodeBean }) {
    return <div className='rounded overflow-hidden shadow-lg m-3 text-left flex'>

        <div className='bg-gray-100 py-12 w-48 text-xl text-center'>
            {nodeBean.subcategory}
        </div>

        <div>
            {
                nodeBean.nodeInfo.map((nodeInfo) => {
                    const node = nodeInfo['childJson']
                    return <div key={node['name']} className='m-10 hover: b'>
                        <div className='flex'>
                            <h2 className="mr-6 text-lg" dangerouslySetInnerHTML={{ __html: node['name'] }}></h2>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># {node['type']}</span>
                        </div>
                        <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: node['brief'] }}></p>
                    </div>
                })
            }
        </div>

    </div>
}