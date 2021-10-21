import  { get } from 'svelte/store'
import { nodes as sNodes } from './store.js'


export const solveDijsktra = async () => {
    const nodes = get(sNodes)
    const unvisitedNodes = []
    nodes.map(curr => unvisitedNodes.push(curr))
    while (unvisitedNodes.length > 0) {
        sortNodesByDistance(unvisitedNodes)
        const closest = unvisitedNodes.shift()
        const found = updateNeighbours(closest, nodes)
        sNodes.set(nodes)
        await new Promise(r => setTimeout(r, 10));
        if(found) return
    }
    
}


const sortNodesByDistance = (nodes) => {
 nodes.sort((a, b) => a.distance - b.distance)
} 


const updateNeighbours = (node, nodes) => {
    for (const neighbour of node.neighbours) {
        const i = nodes.findIndex(curr => (curr.row === neighbour.row && curr.col === neighbour.col))
        if (nodes[i].isWall) continue
        if (!nodes[i].isVisited) {
            nodes[i].previousNode = node
            if( nodes[i].isEndNode) return true
            nodes[i].distance = node.distance + 1 
            nodes[i].isVisited = true
        }
    }
    return false
}


export const  buildPath = async (endNode) => {
    await new Promise(r => setTimeout(r, 30));
    const nodes = get(sNodes)
    let previous = endNode.previousNode
    sNodes.set(nodes)
    if(previous.isStartNode) return
    const i = nodes.findIndex(curr => curr.row === previous.row && curr.col === previous.col)
    nodes[i].isPath = true
    buildPath(previous, nodes)

}

