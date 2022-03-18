import Image from "next/image";
export default function CReferenceCard({ nodeBean }) {
    console.log(nodeBean);
    const node = nodeBean.nodeInfo['childJson']
    return <div className='m-1 text-left flex flex-col'>
        <div className="px-6 py-4 items-center flex">
            <h2 className="mr-6 text-lg" dangerouslySetInnerHTML={{__html: node['name']}}></h2>
            <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{__html: node['brief']}}></p>
        </div>
    </div>
}