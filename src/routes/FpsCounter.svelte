<script lang="ts">
	import { onMount } from 'svelte';

	const times: number[] = [];
	let fps: number = 0;

	onMount(() => {
		// indicating the end time of the previous frame's rendering
		function refreshLoop() {
			window.requestAnimationFrame(() => {
				const now = performance.now();

				// remove all the ticks beyond the past second
				while (times.length > 0 && times[0] <= now - 1000) {
					times.shift();
				}

				times.push(now);
				fps = times.length;

				refreshLoop();
			});
		}

		refreshLoop();
	});
</script>

<div class="fps">
	<span>{fps} FPS</span>
</div>

<style>
	.fps {
		position: absolute;
		top: 10px;
		left: 10px;
	}
</style>
