<script lang="ts">
	export let found: string[];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<span>{emoji}</span>
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
</style>
