<script>
    import { selectedAlgorithm, ALGORITHMS } from "./store"
</script>


<main>
    <ul>
        <li on:click="{() => {
            selectedAlgorithm.set(ALGORITHMS.DIJKSTRA)
        }}">Dijkstra</li>
        <li on:click="{() => {
            selectedAlgorithm.set(ALGORITHMS.BUBBLE_SORT)
        }}">Bubble sort</li>
    </ul>
    <section class="title">Algorithm visualizer</section>
</main>


<style>
    main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
        padding: 10px 8rem;
        color: white;
        box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.75);
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
    }

    ul {
        display: flex;
        list-style: none;
        width: 20%;
        justify-content: space-between;
    }

    li {
        cursor: pointer;
        
    }

    li:hover {
        transform: scale(110%);
    }
</style>