import Image from "next/image";
export default function CExampleCard({ nodeBean }) {

    return <div className='flex justify-center items-center m-2'>
        <h2>{nodeBean.nodeInfo['name']}</h2>
        <Image src={'https://processing.org' + nodeBean.imageInfo['images']['fallback']['src']} width={400} height={225}></Image>
    </div>
}