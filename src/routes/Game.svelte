<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import Countdown from './Countdown.svelte';
	import Found from './Found.svelte';
	import Grid from './Grid.svelte';
	import type { Level } from './levels';
	import { shuffle } from './utils';

	const dispatch = createEventDispatcher();

	let grid: string[] = [];
	let found: string[] = [];

	let remaining = 0;
	let duration = 0;

	let playing = false;

	export function play(level: Level) {
		grid = createInitialGrid(level);
		found = [];

		remaining = level.duration;
		duration = level.duration;

		resume();
	}

	export function resume() {
		dispatch('state', 'playing');
		playing = true;
		countdown();
	}

	export function quit() {
		grid = found = [];
		remaining = duration = 0;
		playing = false;
		dispatch('state', 'waiting');
	}

	function pause() {
		playing = false;
		dispatch('state', 'paused');
	}

	function createInitialGrid(level: Level) {
		let pairs: string[] = [];
		let copy = level.emojis.slice();

		for (let i = 0; i < (level.size * level.size) / 2; i++) {
			const randomIndex = Math.floor(Math.random() * copy.length);
			const randomEmoji = copy[randomIndex];

			pairs.push(randomEmoji);

			copy.splice(randomIndex, 1);
		}

		pairs.push(...pairs);

		return shuffle(pairs);
	}

	function countdown() {
		let start = performance.now();
		let remaining_at_start = remaining;

		function loop() {
			if (!playing) return;

			remaining = remaining_at_start - (performance.now() - start);

			if (remaining <= 0) {
				dispatch('state', 'lost');
				playing = false;
			}

			requestAnimationFrame(loop);
		}

		loop();
	}
</script>

<div class="game">
	<div class="info">
		{#if playing}
			<Countdown on:click={pause} {remaining} {duration} />
		{/if}
	</div>
	<div class="grid">
		<Grid
			{grid}
			{found}
			on:found={(event) => {
				const emoji = event.detail.emoji;
				found = [...found, emoji];

				if (found.length === grid.length / 2) {
					dispatch('state', 'won');
				}
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
