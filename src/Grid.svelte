<script>
    import Cell from './Cell.svelte'
    let cellCountX = 20
    let cellCountY = 10
</script>

<main>
    <section>
        {#each Array(cellCountY) as _, i}
            <div>
                {#each Array(cellCountX) as _, j}
                    <Cell />
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
    justify-content: center;
    align-items: center;
  }
  div {
        display: flex;
    }
</style>