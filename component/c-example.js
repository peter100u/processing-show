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
        <div>
            <CSearch></CSearch>
            <div>
                {
                    Object.keys(nodesObject).map(groupTitle => {
                        return <div key={groupTitle}>
                            <h2>{groupTitle}</h2>
                            {
                                nodesObject[groupTitle].map(node => {
                                    return <div key={node['name']} className='mt-4 flex '>
                                        <CExampleCard nodeBean={{
                                            nodeInfo: node,
                                            imageInfo: imageInfoFunction(node['name'])
                                        }}></CExampleCard>
                                    </div>
                                })
                            }
                        </div>
                    })
                }
            </div>
        </div>
    );
}