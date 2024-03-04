<script lang="ts">
	import './../styles.css';
	import Game from './Game.svelte';
	import Modal from './Modal.svelte';
	import { levels, type Level } from './levels';

	let state: 'waiting' | 'won' | 'lost' | 'paused' | 'playing' = 'waiting';

	let game: Game;
</script>

{#if state !== 'playing'}
	<Modal>
		<header>
			<h1>e<span>match</span>i</h1>
			<p>the emoji matching card game</p>
		</header>

		<div class="buttons">
			{#if state === 'paused'}
				<button
					on:click={() => {
						game.resume();
					}}>resume</button
				>
				<button
					on:click={() => {
						game.quit();
					}}>quit</button
				>
			{:else}
				{#each levels as level}
					<button
						on:click={() => {
							game.play(level);
						}}>{level.label}</button
					>
				{/each}
			{/if}
		</div>
	</Modal>
{/if}

<Game
	bind:this={game}
	on:state={(event) => {
		state = event.detail;
	}}
/>

<style>
	header {
		text-align: center;
	}

	h1 {
		font-size: 4.5em;
	}

	h1 span {
		color: purple;
	}

	.buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5em;
	}

	button {
		background: purple;
		border: 0;
		cursor: pointer;
		color: white;
		padding: 0.5em 1em;
		border-radius: 0.4em;
		font-size: 1.4em;
		font-family: 'Grandstander';
	}
</style>
