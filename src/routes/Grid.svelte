<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Square from './Square.svelte';

	export let grid: string[];
	export let found: string[];

	const dispatch = createEventDispatcher();

	let a = -1;
	let b = -1;

	let timeoutId: number;
</script>

<div class="grid">
	{#each grid as emoji, i}
		<Square
			{emoji}
			selected={a === i || b === i}
			found={found.includes(emoji)}
			on:click={() => {
				if (timeoutId) {
					clearTimeout(timeoutId);
				}

				// if none has been selected
				if (a === -1 && b === -1) {
					a = i;

					// if one emoji has been selected
				} else if (b === -1) {
					b = i;

					if (grid[a] === grid[b]) {
						dispatch('found', {
							emoji
						});
					}

					timeoutId = setTimeout(() => {
						a = b = -1;
					}, 1000);

					// if both emojis has been selected
				} else {
					a = i;
					b = -1;
				}
			}}
		/>
	{/each}
</div>

<style>
	.grid {
		height: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-gap: 0.5em;
		perspective: 100vw;
	}
</style>
