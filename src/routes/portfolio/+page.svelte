<script>
	import { fly, fade, scale } from 'svelte/transition';
    import GalleryItem from './Gallery-item.svelte';
	import GalleryGroup from './Gallery-group.svelte';

	$: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0
</script>

<svelte:head>
</svelte:head>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<div class='content' style="--height: {innerHeight}px; --width: {innerWidth}px;">
	<div class="content-header-one semi-bold" in:fly={{ y: 50, duration: 2000 }}>Portfolio</div>
	
	<GalleryGroup>
		<span slot="group-title">Data investigation with graphics</span>
		<span slot="items" class="content-box-flex row">
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/THAILAND-AUTO/klvygwrzzvg/chart.png"></span>

				<span slot="title"><a href="https://www.reuters.com/business/autos-transportation/china-led-ev-boom-thailand-threatens-japans-grip-key-market-2023-07-09/" target="_blank">China-led EV boom in Thailand threatens Japan's grip on key market</a></span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/business/autos-transportation/china-led-ev-boom-thailand-threatens-japans-grip-key-market-2023-07-09/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/CHINA-ECONOMY/TOURISM/klpygmrjjpg/China-tourism-final.jpg"></span>

				<span slot="title"><a href="https://www.reuters.com/world/china/chinese-tourists-are-back-numbers-still-far-pre-covid-levels-2023-04-19/" target="_blank">Chinese tourists are back, but numbers still far from pre-COVID levels</a></span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/world/china/chinese-tourists-are-back-numbers-still-far-pre-covid-levels-2023-04-19/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/SOUTHEASTASIA-INDIA/TOURISM/znvnzdbeavl/chart.png"></span>

				<span slot="title"><a href="https://www.reuters.com/world/asia-pacific/indian-tourists-flock-southeast-asia-chinas-reopening-falters-2023-07-17/" target="_blank">Indian tourists flock to Southeast Asia as China's reopening falters</a></span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters <span style="font-size: 1em; font-style:oblique">(Additional reporting)</span>
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/world/asia-pacific/indian-tourists-flock-southeast-asia-chinas-reopening-falters-2023-07-17/" target="_blank">English</a>
				</span>
			</GalleryItem>
		</span>
	</GalleryGroup>

	<GalleryGroup>
		<span slot="group-title">Graphics</span>
		<span slot="items" class="content-box-flex column">
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/THAILAND-ELECTION/gdpzqeogwvw/chart.png"></span>

				<span slot="title">
					<a href="https://www.reuters.com/world/asia-pacific/old-rivalries-new-battle-thailand-goes-polls-2023-05-13/" target="_blank">
						2023 Thailand Election: Move Forward party wins
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/world/asia-pacific/old-rivalries-new-battle-thailand-goes-polls-2023-05-13/" target="_blank">
						Thailand opposition crushes military parties in election rout
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/world/asia-pacific/old-rivalries-new-battle-thailand-goes-polls-2023-05-13/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/THAILAND-ELECTION/klvygrnjxvg/govt-forming-formula-1.jpg"></span>
				
				<span slot="title">
					<a href="https://www.reuters.com/world/asia-pacific/thailands-opposition-parties-meet-coalition-talks-2023-05-17/" target="_blank">
						Challenges in voting for Thai PM
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/world/asia-pacific/thailands-opposition-parties-meet-coalition-talks-2023-05-17/" target="_blank">
						Thailand's opposition parties meet for coalition talks
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/world/asia-pacific/thailands-opposition-parties-meet-coalition-talks-2023-05-17/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/GLOBAL-MARKETS/zjvqjrlxypx/chart.gif"></span>

				<span slot="title">
					<a href="https://www.reuters.com/markets/global-market-data/global-markets-graphic-pix-2023-06-30/" target="_blank">
						Zeros to heroes
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/markets/global-market-data/global-markets-graphic-pix-2023-06-30/" target="_blank">
						Global markets in the first half of 2023: Banks vs the machines
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/markets/global-market-data/global-markets-graphic-pix-2023-06-30//" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/CHINA-ECONOMY/PMI/gdpzqwozmvw/china-pmi-2022.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/business/take-five/global-markets-themes-graphic-2023-01-27/" target="_blank">
						China's convalescent business activity
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/business/take-five/global-markets-themes-graphic-2023-01-27/" target="_blank">
						Take Five: Goldilocks and the three bears
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/business/take-five/global-markets-themes-graphic-2023-01-27/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/JAPAN-ECONOMY/BOJ/gdvzwynmmpw/chart.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/markets/rates-bonds/boj-seen-keeping-ultra-low-rates-may-debate-tweak-yield-cap-2023-07-27/" target="_blank">
						The BOJ’s YCC faces a reckoning
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/markets/rates-bonds/boj-seen-keeping-ultra-low-rates-may-debate-tweak-yield-cap-2023-07-27/" target="_blank">
						Bank of Japan loosens grip on rates as prices rise, markets bet on bigger pivot
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/markets/rates-bonds/boj-seen-keeping-ultra-low-rates-may-debate-tweak-yield-cap-2023-07-27/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/GLOBAL-MARKETS/THEMES/gkplwejbzvb/chart.png"></span>

				<span slot="title">
					<a href="https://www.reuters.com/business/take-five/global-markets-themes-takealook-2023-05-19/" target="_blank">
						Global business activity was strong in April. Will it last?
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/business/take-five/global-markets-themes-takealook-2023-05-19/" target="_blank">
						Take Five: More drama on the horizon
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/business/take-five/global-markets-themes-takealook-2023-05-19/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/USA-INVESTING/ESG/zjpqjxweovx/chart.png"></span>

				<span slot="title">
					<a href="https://www.reuters.com/sustainability/sustainable-finance-reporting/new-anti-esg-rule-missouri-offers-us-republicans-another-path-away-wokeness-2023-07-10/" target="_blank">
						US anti-ESG bills post mixed legislative record
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/sustainability/sustainable-finance-reporting/new-anti-esg-rule-missouri-offers-us-republicans-another-path-away-wokeness-2023-07-10/" target="_blank">
						Analysis: New anti-ESG rule in Missouri offers US Republicans another path away from 'wokeness'
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/sustainability/sustainable-finance-reporting/new-anti-esg-rule-missouri-offers-us-republicans-another-path-away-wokeness-2023-07-10/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/GLOBAL-OIL/egpbyjrylvq/chart.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/business/energy/sarabia-other-opec-producers-announce-voluntary-oil-output-cuts-2023-04-02/" target="_blank">
						Surprise production cuts
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/business/energy/sarabia-other-opec-producers-announce-voluntary-oil-output-cuts-2023-04-02/" target="_blank">
						OPEC+ announces surprise oil output cuts
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/business/energy/sarabia-other-opec-producers-announce-voluntary-oil-output-cuts-2023-04-02/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/JAPAN-GENDER/lbpggkgdwpq/chart.png"></span>

				<span slot="title">
					<a href="https://www.reuters.com/sustainability/society-equity/japan-will-aggressively-push-womens-participation-after-gender-gap-report-2023-06-21/" target="_blank">
						Japan struggles to narrow the gender gap
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/sustainability/society-equity/japan-will-aggressively-push-womens-participation-after-gender-gap-report-2023-06-21/" target="_blank">
						Japan to push for women's participation after gender gap report
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/sustainability/society-equity/japan-will-aggressively-push-womens-participation-after-gender-gap-report-2023-06-21/" target="_blank">English</a>
				</span>
			</GalleryItem>
		</span>
	</GalleryGroup>

</div>

<style>
	@media (max-width: 360px) {
		.content-header-one {
			margin-left: 5%;
			font-size: 3.5em;
		}

		.content-box-flex {
			column-count: 1;
			column-gap: 2em;
			display: block;
		}

		.row {
			height: max-content;
		}
	}
	@media (min-width: 361px) and (max-width: 640px) {
		.content-header-one {
			margin-left: 5%;
			font-size: 4em;
		}

		.content-box-flex {
			column-count: 1;
			column-gap: 2em;
			display: block;
		}

		.row {
			height: max-content;
		}
	}
	@media (min-width: 641px) and (max-width: 1024px) {
		.content-header-one {
			margin-left: 5%;
			font-size: 4.5em;
		}

		.content-box-flex {
			column-count: 1;
			column-gap: 2em;
			display: block;
		}

		.row {
			height: max-content;
		}
	}
	@media (min-width: 1024px) {
		.content-header-one {
			margin-left: 5%;
			font-size: 5em;
		}
		.content-box-flex {
			column-count: 3;
			column-gap: 2em;
			display: block;
		}
		.row {
			height: 700px;
		}
	}
	.content {
		padding-top: 5em;
        padding-bottom: 5em;
        color: #FFFFFF;
        background: rgba(8,83,156, 0.8);  /* fallback for old browsers */
		background-image: -webkit-linear-gradient(90deg,rgba(245,70,66, 0.8),rgba(8,83,156, 0.8)); /* Chrome 10-25, Safari 5.1-6 */
		background-image: linear-gradient(90deg,rgba(245,70,66, 0.8),rgba(8,83,156, 0.8)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}

	.semi-bold {
		font-weight: 600;
	}

	.column {
		height: max-content;
	}

	.subtitle_link:hover {
		color: #CCCCCC;
	}


</style>