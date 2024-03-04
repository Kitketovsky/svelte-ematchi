<script lang="ts">
	import { getTwemojiUrl } from './utils';

	export let emoji: string;
	export let selected: boolean;
	export let found: boolean;
</script>

<div class="square" class:flipped={selected || found}>
	<button on:click disabled={selected || found} />

	<img alt={emoji} src={getTwemojiUrl(emoji)} />
</div>

<style>
	.square {
		display: flex;
		align-items: center;
		justify-content: center;
		transform-style: preserve-3d;
		transition: transform 0.4s;
		border-radius: 1em;
	}

	button {
		border-radius: 1em;
		border: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		backface-visibility: hidden;
		background-color: #ccc;
		cursor: pointer;
		transition: transform 0.2s ease-in-out;
	}

	button:hover {
		transform: scale(1.04);
	}

	img {
		--size: 3em;

		width: var(--size);
		height: var(--size);
		pointer-events: none;
		transform: rotateY(180deg);
		backface-visibility: hidden;
	}

	.flipped {
		border: 2px solid purple;
		transform: rotateY(180deg);
	}
</style>
