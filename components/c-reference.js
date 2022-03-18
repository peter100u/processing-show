import CSearch from "./c-search";
import CReferenceCard from "./c-reference-card";

export default function CReference({reference}) {
    const nodes = reference['result']['data']['items']['nodes'];
    
    let nodesObject = {}
    // nodes.forEach(node => {
    //     const pathKey = node['childJson']['category'].toLowerCase()
    //     nodesObject[pathKey] = nodesObject[pathKey] || []

    //     nodesObject[pathKey].push(node)
    // });

    nodes.forEach(node => {
        const parentKey = node['childJson']['category'].toLowerCase()
        const childKey = node['childJson']['subcategory'].toLowerCase()
        nodesObject[parentKey] = nodesObject[parentKey] || {}
        nodesObject[parentKey][childKey] = nodesObject[parentKey][childKey] || {}
        nodesObject[parentKey][childKey].push(node)
    });

    console.log("peter ", nodes)
    return (
        <div className="w-full">
            <CSearch></CSearch>
            <div>
                {
                    Object.keys(nodesObject).map(groupTitle => {
                        return <div key={groupTitle}>
                            <h2>{groupTitle}</h2>
                            <div className='flex flex-wrap flex-col overflow-hidden'>
                                {
                                    // nodesObject[groupTitle].map(node => {
                                    //     return <CReferenceCard key={node['name']} nodeBean=
                                    //         {{ nodeInfo: node}} />
                                    // })
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}