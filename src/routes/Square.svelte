<script lang="ts">
	import { getTwemojiUrl } from './utils';

	export let emoji: string;
	export let selected: boolean;
	export let found: boolean;
</script>

<div class="square" class:flipped={selected}>
	{#if !found}
		<button on:click>
			<img alt={emoji} src={getTwemojiUrl(emoji)} />
		</button>
	{/if}
</div>

<style>
	.square {
		display: flex;
	}

	.square button {
		justify-content: center;
		align-items: center;
		background-color: yellow;
		width: 100%;
		height: 100%;
		position: absolute;
	}

	button img {
		--size: 4em;

		width: var(--size);
		height: var(--size);
		pointer-events: none;
	}

	.square.flipped button {
		background-color: purple;
	}
</style>
