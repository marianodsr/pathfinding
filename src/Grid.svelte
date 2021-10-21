<script>
    import Cell from './Cell.svelte'
    import { solveDijsktra, buildPath } from './dijkstra'
    import { nodes, rows, cols, mouseState, MODE, reset } from './store'

    let nodes_v = []

    nodes.subscribe(val => {
        nodes_v = val
    })

</script>

<main>
    <div class="button-bar">
        <div class="node-change-buttons">
            <div class="button-block">
                <div class="circle start-node-button" on:click={() => {
                    mouseState.set(MODE.START_NODE)
                }}>
                    <div class="green">
                    </div>
                </div>
                <small>change starting cell</small>
            </div>
            
            <div class="button-block">
                <div class="circle end-node-button" on:click={() => {
                    mouseState.set(MODE.END_NODE)
                }}>
                    <div class="red">
                    </div>
                </div>
                <small>change objective cell</small>
            </div>
        </div>
        <h3>Click on an empty cell to add a wall</h3>
        <div class="solve-and-reset">
            <img src="/images/restart.svg" alt="restart_icon" on:click={reset}>
            <button
                on:click={async () => {
                    const found = await solveDijsktra()
                    await buildPath(nodes_v.find(curr => curr.isEndNode))
                }}
            >SOLVE
            </button>
        </div>
        
    </div>
    <section>
        {#each Array(rows) as _, i}
        <div class="col-container">
            {#each Array(cols) as _, j}
                <Cell self={nodes_v.find(curr => curr.row === i && curr.col === j)}/>
            {/each}
    
        </div>
        {/each}

    </section>
</main>


<style>
   main {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  .circle {
      background-color: white;
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      cursor: pointer;
      box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
  }

  h3 {
      color: white;
      align-self: flex-end;
  }

  .button-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      font-weight: bold;
  }

  small{
      margin-top: .5rem;
      font-size: .8rem;
  }



  .circle:hover {
    transform: scale(110%)
  }

  .start-node-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .end-node-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1d3557;
  }


  .green {
      width: 2rem;
      height: 2rem;
      background-color: #80ffdb;
  }

  .red {
    width: 2rem;
      height: 2rem;
      background-color: #f8f9fa;
  }
  .col-container {
        display: flex;
    }

    button {
       
        padding: 1rem 4rem;
        color: white;
        background-color: #f72585;
        border-radius: 5%;
        border: none;
        outline: none;
        font-weight: bold;
        font-size: 2rem;
        cursor: pointer;
        box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    }
    button:hover{
        transform: scale(105%);
        background-color: white;
        color: #f72585
    }

    .button-bar {
        margin-top: 8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 65%;
        padding: 0 40rem;
        margin-bottom: 1rem;
    }

    .node-change-buttons {
        display: flex;
        width: 20rem;
        justify-content: space-between;
    }

    .solve-and-reset {
        display:flex;
        align-items: center;
        width: 20rem;
        justify-content: space-between;
    }
    
    img {
        cursor: pointer;
    }

    img:hover {
        transform: scale(110%)
    }

</style>