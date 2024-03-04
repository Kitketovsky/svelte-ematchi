<script lang="ts">
	import { onMount } from 'svelte';
	import Countdown from './Countdown.svelte';
	import Found from './Found.svelte';
	import Grid from './Grid.svelte';
	import { levels } from './levels';
	import type { Level } from './levels';
	import { shuffle } from './utils';

	let level = levels[0];
	let grid: string[] = createInitialGrid(level);
	let found: string[] = [];

	let remaining: number = level.duration;
	let playing: boolean = true;

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

		return shuffle(pairs);
	}

	function countdown() {
		// onMounted timestamp
		let start = performance.now();

		function loop() {
			if (!playing) return;

			remaining = level.duration - (performance.now() - start);

			if (remaining <= 0) {
				// TODO: lost
				playing = false;
			}

			requestAnimationFrame(loop);
		}

		loop();
	}

	onMount(countdown);
</script>

<div class="game">
	<div class="info">
		<Countdown {remaining} duration={level.duration} />
	</div>
	<div class="grid">
		<Grid
			{grid}
			{found}
			on:found={(event) => {
				const emoji = event.detail.emoji;
				found = [...found, emoji];
			}}
		/>
	</div>
	<div class="info">
		<Found {found} />
	</div>
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
		width: 70vmin;
		height: 10vmin;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.grid {
		width: 70vmin;
		height: 70vmin;
	}
</style>
