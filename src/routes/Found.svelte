<script lang="ts">
	import { getTwemojiUrl } from './utils';

	export let found: string[];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<img alt={emoji} src={getTwemojiUrl(emoji)} />
	{/each}
</div>

<style>
	.found {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2em;
		gap: 0.5em;
	}

	.found img {
		--size: 1em;

		height: var(--size);
		width: var(--size);
	}
</style>
