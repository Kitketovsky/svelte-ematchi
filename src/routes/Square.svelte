<script lang="ts">
	export let emoji: string;
	export let selected: boolean;
</script>

<div class="square" class:flipped={selected}>
	<button on:click>
		<span>{emoji}</span>
	</button>
</div>

<style>
	.square {
		display: flex;
	}

	.square button {
		justify-content: center;
		align-items: center;
		background-color: yellow;
		font-size: 4em;
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.square.flipped button {
		background-color: purple;
	}
</style>
