<script>
	import Grid from './Grid.svelte'
	import Navbar from './Navbar.svelte'
	import { selectedAlgorithm, ALGORITHMS } from "./store"
	import BubbleSort from "./BubbleSort.svelte"

	let selAlg

	selectedAlgorithm.subscribe(val => {
		selAlg = val
	})



</script>

<main>
	<Navbar />
	{#if selAlg === ALGORITHMS.DIJKSTRA}
		<Grid />
	{:else if selAlg === ALGORITHMS.BUBBLE_SORT}
		<BubbleSort />
	{/if}
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		width: 100vw;
		height: 100vh;
		background-color: #560bad;
	}
</style>