<script lang="ts">
	import Grid from './Grid.svelte';
	import { levels } from './levels';
	import type { Level } from './levels';

	let level = levels[0];
	let grid: string[] = createInitialGrid(level);
	let found: string[] = [];

	function createInitialGrid(level: Level) {
		let pairs: string[] = [];
		let copy = level.emojis.slice();

		for (let i = 0; i < level.size ** 2 / 2; i++) {
			const randomIndex = Math.floor(Math.random() * copy.length);
			const randomEmoji = copy[randomIndex];

			pairs.push(randomEmoji);

			copy.splice(randomIndex, 1);
		}

		pairs.push(...pairs);

		return pairs;
	}
</script>

<div class="game">
	<div class="info"></div>
	<div class="grid">
		<Grid {grid} />
	</div>
	<div class="info"></div>
</div>

<style>
	.game {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.info {
		background-color: red;
		width: 70vmin;
		height: 10vmin;
	}

	.grid {
		background-color: aquamarine;
		width: 70vmin;
		height: 70vmin;
	}
</style>
