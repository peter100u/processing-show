import CSearch from "./c-search";
import CExampleCard from "./c-example-card"

export default function CExample({ example }) {
    const nodes = example['result']['data']['examples']['nodes'];
    const imageNodes = example['result']['data']['images']['nodes'];

    let nodesObject = {}
    nodes.forEach(node => {
        const pathKey = node['relativeDirectory']
        const key = pathKey.split("/").slice(1, 2).join()
        nodesObject[key] = nodesObject[key] || []
        nodesObject[key].push(node)
    });



    const imageInfoFunction = (name) => {
        return imageNodes.find((imageNode) => {
            return imageNode['name'] == name
        })['childImageSharp']['gatsbyImageData']
    }

    return (
        <div className="w-full">
            <CSearch></CSearch>
            <div>
                {
                    Object.keys(nodesObject).map(groupTitle => {
                        return <div key={groupTitle}>
                            <h2>{groupTitle}</h2>
                            <div className='flex flex-wrap'>
                                {
                                    nodesObject[groupTitle].map(node => {
                                        return <CExampleCard key={node['name']} nodeBean=
                                            {{ nodeInfo: node, imageInfo: imageInfoFunction(node['name']) }} />
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}