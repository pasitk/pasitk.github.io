<script>
    import { fly, fade, scale } from 'svelte/transition';
</script>

<div class="content-header-two bookmark" in:fly={{ y: 50, duration: 2000, delay: 300 }}>
    <slot name="group-title">(Untitled)</slot>
</div>
<div class="full-width-content-box" in:scale={{delay: 600, opacity: 0, duration: 1000}}>
    <slot name="items">
        No items in this category
    </slot>
</div>

<style>
	@media (max-width: 360px) {
		.content-header-two {
			margin-left: 5%;
			margin-top: 0.25em;
			font-size: 1.25em;
		}
	}
	@media (min-width: 361px) and (max-width: 640px) {
		.content-header-two {
			margin-left: 5%;
			margin-top: 0.5em;
			font-size: 1.5em;
		}
	}
	@media (min-width: 641px) and (max-width: 1024px) {
		.content-header-two {
			margin-left: 5%;
			margin-top: 0.75em;
			font-size: 1.75em;
		}
	}
	@media (min-width: 1024px) {
		.content-header-two {
			margin-left: 5%;
			margin-top: 1em;
			font-size: 2em;
		}
	}

    .full-width-content-box {
		margin: 0em 5% 10% 5%;
		border-radius: 0em 3em 3em 3em;
		padding:5%;
		background-color: rgba(255,255,255,0.9);
		color: #000000;
		box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
		-webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
		-moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
	}

	.bookmark {
		background-color: rgba(0,0,0,0.75);
		width:fit-content;
		border-radius: 0em 5em 0em 0em;
		padding: 0.25em 1.5em 0.25em 0.75em;
	}
</style>