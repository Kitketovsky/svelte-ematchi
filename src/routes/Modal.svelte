<div class="modal-container">
	<div class="modal">
		<slot />
	</div>
</div>

<style>
	.modal-container {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 999;
		backdrop-filter: blur(10px);
		display: grid;
		place-items: center;
	}
</style>
