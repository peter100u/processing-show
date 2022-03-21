import CSearch from "./c-search";
import CReferenceCard from "./c-reference-card";

export default function CReference({ reference }) {
    const nodes = reference['result']['data']['items']['nodes'];

    let nodesObject = {}
    nodes.forEach(node => {
        const parentKey = node['childJson']['category'].toLowerCase()
        const childKey = node['childJson']['subcategory'].toLowerCase()
        nodesObject[parentKey] = nodesObject[parentKey] || {}
        nodesObject[parentKey][childKey] = nodesObject[parentKey][childKey] || []
        nodesObject[parentKey][childKey].push(node)
    });

    return (
        <div className="w-full">
            <CSearch></CSearch>
            <div>
                {
                    Object.keys(nodesObject).map(category => {
                        return <div key={category}>
                            <h2 className="w-48 text-xl text-center">{category}</h2>
                            <div className='flex flex-wrap flex-col overflow-hidden'>
                                {
                                    Object.keys(nodesObject[category]).map((subcategory) => {
                                        return <CReferenceCard key={subcategory} nodeBean={{ 
                                            subcategory: subcategory,
                                            nodeInfo: nodesObject[category][subcategory]
                                        }} />
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