<script>
	import { onMount } from 'svelte';
	import { fly, scale, fade } from 'svelte/transition';
	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<div class="whole-window-home">
		<div class="short-bio">
			<div class="name semi-bold" in:fly={{ y: 50, duration: 2000 }}>Pasit</div>
			<div class="five-times surname" in:fly={{ y: 50, duration: 2000, delay: 300 }}>Kongkunakornkul</div>
			<div class="job-headline light" in:fly={{ y: 50, duration: 2000, delay: 600 }}>Data and graphics journalist</div>
			<div class="job-headline-desc light" style="--c:white;--w:30px;--b:10px" in:scale={{delay: 600, opacity: 0, duration: 1000}}><span in:fly={{ y: 50, duration: 2000, delay: 900 }}>Pasit Kongkunakornkul is a Financial Graphics Reporter for the Reuters Graphics team at the Reuters news agency. He creates daily breaking news graphics across markets, economics and companies beats worldwide and generates story and graphics ideas from the financial news of the day. He also supports data and graphics reporting for Thailand's big stories outside economics and financial side, e.g., Thailand general election in 2023.</span></div>
		</div>
	</div>
{/if}
<style>
	@media (max-width: 360px) {
		.name {
			font-size: 4em;
		}

		.surname {
			font-size: 2em;
		}

		.job-headline {
			font-size: 1em;
		}

		.short-bio {
			padding-left: 2em;
			padding-right: 2em;
		}

		.job-headline-desc {
			width:85%;
		}
		
		.job-headline-desc {
			font-size: 1em;
		}
	}

	@media (min-width: 361px) and (max-width: 640px) {
		.name {
			font-size: 5em;
		}

		.surname {
			font-size: 2.75em;
		}

		.job-headline {
			font-size: 1.5em;
		}

		.short-bio {
			padding-left: 2.5em;
			padding-right: 2.5em;
		}

		.job-headline-desc {
			width:85%;
		}
		
		.job-headline-desc {
			font-size: 1em;
		}
	}

	@media (min-width: 641px) and (max-width: 1024px) {
		.name {
			font-size: 6em;
		}

		.surname {
			font-size: 4em;
		}

		.job-headline {
			font-size: 2em;
		}

		.short-bio {
			padding-left: 4em;
			padding-right: 4em;
		}

		.job-headline-desc {
			width:75%;
		}

		.job-headline-desc {
			font-size: 1.25em;
		}
	}

	@media (min-width: 1024px) {
		.name {
			font-size: 7em;
		}

		.surname {
			font-size: 5em;
		}

		.job-headline {
			font-size: 2.5em;
		}

		.short-bio {
			padding-left: 5em;
			padding-right: 5em;
		}

		.job-headline-desc {
			width:50%;
		}

		.job-headline-desc {
			font-size: 1.5em;
		}
	}

	.whole-window-home {
		background: rgba(8,83,156, 0.8);  /* fallback for old browsers */
		background-image: -webkit-linear-gradient(45deg,rgba(245,70,66, 0.8),rgba(8,83,156, 0.8)), url('/images/bg-home-gradient.jpg'); /* Chrome 10-25, Safari 5.1-6 */
		background-image: linear-gradient(45deg,rgba(245,70,66, 0.8),rgba(8,83,156, 0.8)), url('/images/bg-home-gradient.jpg'); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		background-position-y: center;
		background-position-x: center;
		background-size: cover;
		height: inherit;
		display: table;
		color: #FFFFFF;
	}

	.short-bio {
		display: table-cell;
		vertical-align: middle;
		line-height: 1;
		width: 100%;
		text-shadow: 0px 0px 5px rgba(0,0,0,0.33);
	}

	.semi-bold {
		font-weight: 600;
	}

	.light {
		font-weight: 300;
	}

	.job-headline {
		width:max-content;
		margin-top: 0.5em;
		margin-bottom: 0.75em;
	}

	.job-headline-desc {
		margin-top: 3em;
		padding: 1em;
		line-height: 1.2em;
		font-style: oblique;
		/*border-left: 3px solid #FFFFFF;*/

		--b: 5px;   /* thickness of the border */
		--c: red;   /* color of the border */
		--w: 20px;  /* width of border */
		
		border: var(--b) solid #0000; /* space for the border */
		--_g: #0000 90deg,var(--c) 0;
		--_p: var(--w) var(--w) border-box no-repeat;
		background:
			conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--_g)) 0    0    / var(--_p),
			conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--_g)) 100% 100% / var(--_p);
	}
</style> 