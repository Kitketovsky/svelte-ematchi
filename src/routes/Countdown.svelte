<script lang="ts">
	import PauseIcon from '$lib/assets/pause.svg';

	export let duration: number;
	export let remaining: number;
</script>

<div class="countdown">
	<button on:click>
		<img src={PauseIcon} alt="Pause icon" />
	</button>

	<div class="duration">
		<div class="remaining" style="--p: {remaining / duration}"></div>
	</div>
</div>

<style>
	.countdown {
		display: flex;
		align-items: center;
		gap: 1em;
		width: 100%;
		padding: 1em;
	}

	button {
		--size: 3.5rem;

		border: none;
		cursor: pointer;
		background: transparent;
		width: var(--size);
		height: var(--size);
	}

	button img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.duration {
		background-color: white;
		height: 0.3em;
		width: 100%;
	}

	.remaining {
		background-color: gray;
		height: 0.3em;
		width: calc(100% * var(--p));
	}
</style>
