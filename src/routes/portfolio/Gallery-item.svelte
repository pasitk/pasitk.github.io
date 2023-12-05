<script>
	export let parentWidth, parentHeight;
</script>

<article class="gallery-item" style="--item-width:{parentWidth}px; --item-height:{parentHeight}px;">
    <div class="screenshot">
		<slot name="screenshot">
			<span class="missing">(Screenshot here)</span>
		</slot>
	</div>

    <div class="title">
		<slot name="title">
			<span class="missing">(Untitled)</span>
		</slot>
	</div>

	<div class="subtitle">
		<slot name="subtitle">
			<!-- <span class="missing">(No subtitle)</span> -->
		</slot>
	</div>

	<div class="for">
		<span>
			<slot name="for">
				<span class="missing">-</span>
			</slot>
		</span>
	</div>

	<div class="links">Available in:
		<span>
			<slot name="links">
				<span class="missing">-</span>
			</slot>
		</span>
	</div>
</article>

<style>
	.gallery-item {
		/* max-width: calc((var(--item-width) - 25em)/3); */
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding-bottom: 1.5em;
		background-color: #333333;
		color: #FFFFFF;
		border-radius: 0 0 1em 1em;

		display: inline-block;
		width: 100%;
		margin-bottom: 2em;
	}

    .screenshot {
        /* height: calc(((var(--item-width) - 20em)/3) * 9 / 16); */
		margin-bottom: 1em;
		background-color: #FFFFFF;
    }

	.title {
        font-size: 2em;
        font-weight: 600;
        line-height: 1.2;
		padding-left: 7%;
		padding-right: 7%;
	}

	.subtitle {
        font-size: 1.3em;
        font-weight: 300;
        line-height: 1.2;
		padding-left: 7%;
		padding-right: 7%;
		margin-top: 0.5em;
	}

    .title:hover, .links > span:hover {
        color:#CCCCCC;
    }

	.for {
		margin: 1.5em 0 0.5em 0;
		max-width: fit-content;
	}

	.for, .links {
		font-style: oblique;
		font-weight: 300;
		padding-left: 7%;
		padding-right: 7%;
		font-size: 1.2em;
		line-height: 1.2;
	}

	.for > span, .links > span {
		font-weight: 400;
		font-style: normal;
	}
    
	.missing {
		color: #999;
	}
</style>
