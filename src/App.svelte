<script>
	import Grid from './Grid.svelte'
	import Navbar from './Navbar.svelte'
</script>

<main>
	<Navbar />
	<Grid />
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