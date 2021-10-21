import { writable } from 'svelte/store';

export const rows = 12
export const cols = 30

const startNodeRow = 3
const startNodeCol = 6
const endNodeRow = 9
const endNodeCol = 19

export const MODE = {
    WALL: "WALL",
    START_NODE: "START_NODE",
    END_NODE: "END_NODE"
}

export const reset = () => {
    nodes.set(initializeNodes(rows, cols, startNodeRow, startNodeCol, endNodeRow, endNodeCol))
}

const initializeNodes = (rows, cols, startNodeRow, startNodeCol, endNodeRow, endNodeCol) => {
    const nodes = []

    for (let i = 0; i < rows;  i++ ) {
        for(let j = 0; j < cols;  j++ ) {
            const isStartNode = i === startNodeRow && j === startNodeCol
            nodes.push({row: i, col: j, isVisited: false, isStartNode: isStartNode, isEndNode: i === endNodeRow && j === endNodeCol, neighbours: addNeighbours(i, j, rows, cols), distance: isStartNode ? 0 : Infinity})
        }
    }

return nodes
}


const addNeighbours = (row, col, maxRows, maxCols) => {

    const neighbours = []
   
    if (row !== 0) {
        neighbours.push(
            {
                row: row - 1 ,
                col,
                isVisited: false,
            }
        )
    
    }

    if (row !== maxRows - 1) {
        neighbours.push(
            {
                row: row + 1,
                col,
                isVisited: false, 
            }
        )
    }

    if (col !== 0) {
        neighbours.push(
            {
                row: row,
                col: col - 1,
                isVisited: false, 
            }
        )
    }

    if (col !== maxCols  - 1) {
        neighbours.push(
            {
                row: row,
                col: col + 1,
                isVisited: false, 
            }
        )
    }



    return neighbours
}

export const nodes = writable(initializeNodes(rows, cols, startNodeRow, startNodeCol, endNodeRow, endNodeCol));


export const mouseState = writable(MODE.WALL)