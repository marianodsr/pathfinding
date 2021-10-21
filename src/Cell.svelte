<script>
import { get } from 'svelte/store';

    import { nodes, mouseState, MODE } from './store'
    export let self
    const handleClick = (e) => {
       const nodeList = get(nodes)
       const i = nodeList.findIndex(curr => curr.row === self.row && curr.col === self.col)

       switch(get(mouseState)) {
           case MODE.START_NODE:
                const prevStartI = nodeList.findIndex(curr => curr.isStartNode)
                nodeList[prevStartI].isStartNode = false
                nodeList[prevStartI].distance = Infinity
                nodeList[i].isStartNode = true
                nodeList[i].distance = 0

                break
            case MODE.END_NODE:
                const prevEndI = nodeList.findIndex(curr => curr.isEndNode)
                nodeList[prevEndI].isEndNode = false
                nodeList[i].isEndNode = true
                break
            case MODE.WALL:
                if(nodeList[i].isEndNode || nodeList[i].isStartNode) return
                nodeList[i].isWall = !nodeList[i].isWall
                break;
       }
       mouseState.set(MODE.WALL)
       nodes.set(nodeList)
    }

    
</script>

<div class:start-node="{self.isStartNode}" class:end-node="{self.isEndNode}" class:visited="{self.isVisited && !self.isStartNode}" class:path="{self.isPath}" class:wall="{self.isWall}" on:click={handleClick}>

</div>

<style>
    div {
        width: 50px;
        height: 50px;
        border: 1px solid white;
        cursor: pointer;
    }

    div:hover {
        transform: scale(110%);
    }

    .start-node {
        background-color: #80ffdb;
    }

    .end-node {
       background-color: #f8f9fa;
    }

    .visited {
        background-color: #4895ef;
        transition: 2s background-color;
        border-radius: 10%;
    }

    .path {
        transition: none;

        background-color: #f72585;
    }
    
    .wall {
        background-color: #1d3557;
    }
</style>