import Link from 'next/link';
import { CEditor } from '../components/c-editor';
import CExample from '../components/c-example'
import CReference from '../components/c-reference'
import CTutorial from '../components/c-tutorial'

export default function Home({ reference, example }) {
  console.log('references ', reference);
  return (
    <div className="container mx-auto">
      <input className="hidden" type="radio" id="tab-reference" defaultChecked name="boxlist" />
      <input className="hidden" type="radio" id="tab-example" name="boxlist" />
      <input className="hidden" type="radio" id="tab-tutorial" name="boxlist" />

      <Link href='/editor'>open editor page</Link>
      
      <div className="flex justify-center mt-10">
        <label className="mx-2 py-2 px-6 bg-gray-200 rounded-full cursor-pointer" htmlFor="tab-reference">reference</label>
        <label className="mx-2 py-2 px-6 bg-gray-200 rounded-full cursor-pointer" htmlFor="tab-example">example</label>
        <label className="mx-2 py-2 px-6 bg-gray-200 rounded-full cursor-pointer" htmlFor="tab-tutorial">tutorial</label>
      </div>

      <div className="hidden p-8 items-center tab-reference max-h-full max-w-full">
        <CReference reference={reference}></CReference>
      </div>

      <div className="hidden p-8 items-center shadow-lg rounded-lg tab-example">
        <CExample example={example}></CExample>
      </div>

      <div className="hidden p-8 items-center shadow-lg rounded-lg tab-tutorial">
        <CTutorial></CTutorial>
      </div>
    </div>

  )
}


export async function getStaticProps() {
  const responseReference = await fetch('https://processing.org/page-data/reference/page-data.json')
  const reference = await responseReference.json()

  const responseExample = await fetch('https://processing.org/page-data/examples/page-data.json')
  const example = await responseExample.json()


  return {
    props: {
      reference,
      example
    }
  }
}