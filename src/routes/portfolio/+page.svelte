<script>
	import { fly, fade, scale } from 'svelte/transition';
    import GalleryItem from './Gallery-item.svelte';
	import GalleryGroup from './Gallery-group.svelte';
	import { base } from '$app/paths';

	$: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0
</script>

<svelte:head>
	<title>Pasit Kongkunakornkul: Portfolio</title> 
</svelte:head>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<div class='content' style="--height: {innerHeight}px; --width: {innerWidth}px;">
	<div class="content-header-one semi-bold" in:fly={{ y: 50, duration: 2000 }}>Portfolio</div>
	
	<GalleryGroup>
		<span slot="group-title">Interactive storytelling pages</span>
		<span slot="items" class="content-box-flex column">
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight} awarded="award-1">
				<span slot="award-name">
					<ul>
						<li class="award-bullet">Reuters Journalist of the Year 2024:<br>Finalist in Graphics/Visualization</li>
					</ul>
				</span>

				<span slot="screenshot"><img src="https://www.reuters.com/graphics/JAPAN-YEN/EXPLAINER/xmvjnxjmbvr/cdn/images/share-image.jpg" class="screenshot_img"></span>

				<span slot="title"><a href="https://www.reuters.com/graphics/JAPAN-YEN/EXPLAINER/xmvjnxjmbvr/" target="_blank">The yen’s rollercoaster ride</a></span>

				<span slot="subtitle">
						The Bank of Japan’s interest rate rise last week rattled markets, triggering an unwinding of yen-funded carry trades. Here’s a look at how the BOJ has shaped the yen’s value over time.
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/graphics/JAPAN-YEN/EXPLAINER/xmvjnxjmbvr/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/USA-CHINA/SOLAR-HISTORY/gdpzkdeqlvw/cdn/images/share-image.jpg" class="screenshot_img"></span>

				<span slot="title"><a href="https://www.reuters.com/graphics/USA-CHINA/SOLAR-HISTORY/gdpzkdeqlvw/" target="_blank">US solar tariffs can't keep up with Chinese firms</a></span>

				<span slot="subtitle">
						For twelve years, the United States has waged a tariff war against a rising tide of Chinese solar imports. And for twelve years, Chinese manufacturers have found ways to sidestep the tariffs.
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/graphics/USA-CHINA/SOLAR-HISTORY/gdpzkdeqlvw/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/USA-MARKETS/RATES/jnvwamonqvw/cdn/images/share_card.jpg" class="screenshot_img"></span>

				<span slot="title"><a href="https://www.reuters.com/graphics/USA-MARKETS/RATES/jnvwamonqvw/" target="_blank">How markets could fare after first US rate cut</a></span>

				<span slot="subtitle">
						The Federal Reserve is set to cut U.S. interest rates for the first time since the pandemic. History shows the state of the economy will play a crucial role in how markets respond.
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/graphics/USA-MARKETS/RATES/jnvwamonqvw/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/images/share-image.a0f553ff237784aef9c7f006a2895cc8.jpg" class="screenshot_img"></span>

				<span slot="title"><a href="https://www.reuters.com/graphics/CHINA-STOCKS/byprkdgenve/" target="_blank">China's stock market struggles</a></span>

				<span slot="subtitle">
						Chinese stock indexes touched multi-year lows in February.
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/graphics/CHINA-STOCKS/byprkdgenve/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/images/share-image.19403963abc5afe401c50e4aa85b336c.jpg" class="screenshot_img"></span>

				<span slot="title"><a href="https://www.reuters.com/graphics/CHINA-USA/TRADE/zdvxneaaxvx/" target="_blank">Analysis: What overcapacity?</a></span>

				<span slot="subtitle">
						China says its industries are simply more competitive.
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/graphics/CHINA-USA/TRADE/zdvxneaaxvx/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/images/share-image.ed12223e306721dfc2952e769a42376a.jpg" class="screenshot_img"></span>

				<span slot="title"><a href="https://www.reuters.com/graphics/SAFRICA-ELECTION/ECONOMY/egpbonzrgvq/" target="_blank">Equality eludes South Africa 30 years after apartheid</a></span>

				<span slot="subtitle">
						While strides have been made in delivering education, housing and welfare benefits to a wider share of society, South Africa has yet to overcome the legacy of apartheid and deliver a better life for all.
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/graphics/SAFRICA-ELECTION/ECONOMY/egpbonzrgvq/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://pasitk.github.io/covid-impact-on-thailand-tourism/image/bg-1.jpg"></span>

				<span slot="title"><a href="https://pasitk.github.io/covid-impact-on-thailand-tourism/" target="_blank">An insight into the impact of COVID-19 on Thailand's tourism industry</a></span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Dissertation project at Cardiff University
				</span>

				<span slot="links">
					<a href="https://pasitk.github.io/covid-impact-on-thailand-tourism/" target="_blank">English</a>
				</span>
			</GalleryItem>
		</span>
	</GalleryGroup>
	<GalleryGroup>
		<span slot="group-title">Data investigation with graphics</span>
		<span slot="items" class="content-box-flex column">
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/VOLKSWAGEN-STRATEGY/dwvkzjxxmpm/graphic.jpg"></span>

				<span slot="title"><a href="https://www.reuters.com/business/autos-transportation/volkswagen-is-reeling-china-can-evs-help-it-grow-us-2024-07-23/" target="_blank">Volkswagen is reeling in China. Can EVs help it grow in the US?</a></span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/business/autos-transportation/volkswagen-is-reeling-china-can-evs-help-it-grow-us-2024-07-23/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/THAILAND-ECONOMY/FACTORIES/xmpjnjlqzpr/graphic.jpg"></span>

				<span slot="title"><a href="https://www.reuters.com/markets/asia/thai-economy-faces-upheaval-due-factory-closures-cheap-chinese-imports-2024-07-14/" target="_blank">Thai economy faces upheaval due to factory closures and cheap Chinese imports</a></span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters <span style="font-size: 1em; font-style:oblique">(Additional reporting)</span>
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/markets/asia/thai-economy-faces-upheaval-due-factory-closures-cheap-chinese-imports-2024-07-14/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/GLOBAL-MARKETS/klvynnnmrpg/graphic.jpg"></span>

				<span slot="title"><a href="https://www.reuters.com/markets/global-markets-h1-graphics-pix-2024-06-28/" target="_blank">Tech boom leads global markets through first half of 2024</a></span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters <span style="font-size: 1em; font-style:oblique">(Additional reporting)</span>
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/markets/global-markets-h1-graphics-pix-2024-06-28/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/CHINA-PROPERTY/SCALE/znpnzjdqapl/cdn/images/CHINA_SOCIAL.jpg"></span>

				<span slot="title"><a href="https://www.reuters.com/graphics/CHINA-PROPERTY/SCALE/znpnzjdqapl/" target="_blank">The Massive Scale of China’s Property Sector</a></span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/graphics/CHINA-PROPERTY/SCALE/znpnzjdqapl/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/THAILAND-RICE/gdpzwmzywvw/graphic.jpg"></span>

				<span slot="title"><a href="https://www.reuters.com/markets/commodities/soaring-rice-prices-sow-hope-trouble-indebted-thai-farmers-2023-09-18/" target="_blank">Soaring rice prices sow hope - and trouble - for indebted Thai farmers</a></span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/markets/commodities/soaring-rice-prices-sow-hope-trouble-indebted-thai-farmers-2023-09-18/" target="_blank">English</a>
				</span>
			</GalleryItem>
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
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/USA-TRUMP/TARIFFS/movawekqkva/graphic.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/markets/asia/trade-war-or-not-global-investors-turn-even-more-cautious-china-2025-02-05/" target="_blank">
						China's markets as trade frictions rise in 2025
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/markets/asia/trade-war-or-not-global-investors-turn-even-more-cautious-china-2025-02-05/" target="_blank">
						Trade war or not, global investors turn even more cautious on China
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/markets/asia/trade-war-or-not-global-investors-turn-even-more-cautious-china-2025-02-05/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/CHINA-HUAWEITECH/APPLE/egvbornywpq/graphic.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/technology/artificial-intelligence/how-ai-features-iphone-rival-smartphones-stack-up-2024-09-10/" target="_blank">
						Apple’s market share in Chinese smartphone market falls to sixth rank
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/technology/artificial-intelligence/how-ai-features-iphone-rival-smartphones-stack-up-2024-09-10/" target="_blank">
						How AI features of iPhone and rival smartphones stack up
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/technology/artificial-intelligence/how-ai-features-iphone-rival-smartphones-stack-up-2024-09-10/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/THAILAND-POLITICS/byvrqamxdpe/graphic.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/world/asia-pacific/baptism-fire-awaits-paetongtarn-thailand-gears-up-pm-vote-2024-08-16/" target="_blank">
						Thai Prime Ministers from Shinawatra family and parties
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/world/asia-pacific/baptism-fire-awaits-paetongtarn-thailand-gears-up-pm-vote-2024-08-16/" target="_blank">
						Paetongtarn Shinawatra elected youngest Thai PM
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/world/asia-pacific/baptism-fire-awaits-paetongtarn-thailand-gears-up-pm-vote-2024-08-16/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/JAPAN-STOCKS/mopaqogbnpa/graphic.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/markets/us/global-markets-milestones-graphic-2024-08-05/" target="_blank">
						Nikkei 225’s biggest fall in more than three decades
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/markets/us/global-markets-milestones-graphic-2024-08-05/" target="_blank">
						Markets give off 'Black Monday' vibes as stocks tank
					</a>
					", "
					<a class="subtitle_link" href="https://www.reuters.com/markets/asia/japanese-shares-rebound-sharply-opening-trade-after-rout-2024-08-06/" target="_blank">
						Japanese shares rebound sharply after biggest rout since 1987 Black Monday
					</a>
					", and "
					<a class="subtitle_link" href="https://www.reuters.com/markets/asia/global-markets-view-asia-graphic-pix-2024-08-05/" target="_blank">
						Morning Bid: Taking stock of Japan's historic market crash
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					English <a href="https://www.reuters.com/markets/us/global-markets-milestones-graphic-2024-08-05/" class="subtitle_link" target="_blank">(1)</a>, <a href="https://www.reuters.com/markets/asia/japanese-shares-rebound-sharply-opening-trade-after-rout-2024-08-06/" class="subtitle_link" target="_blank">(2)</a>, <a href="https://www.reuters.com/markets/asia/global-markets-view-asia-graphic-pix-2024-08-05/" class="subtitle_link" target="_blank">(3)</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/INDONESIA-PALMOIL/PAPUA/akpeommbnpr/chart.png"></span>

				<span slot="title">
					<a href="https://www.reuters.com/world/asia-pacific/papuan-tribe-palm-oil-firms-battle-land-rights-indonesian-top-court-2024-06-20/" target="_blank">
						Palm Oil Concessions in Boven Digoel Regency, Papua
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/world/asia-pacific/papuan-tribe-palm-oil-firms-battle-land-rights-indonesian-top-court-2024-06-20/" target="_blank">
						Papuan tribe, palm oil firms battle for land rights in Indonesian top court
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/world/asia-pacific/papuan-tribe-palm-oil-firms-battle-land-rights-indonesian-top-court-2024-06-20/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/SOFTWARE-AI/CHINA-NEWSBREAK/zdvxnmzowvx/graphic.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/technology/top-news-app-us-has-chinese-origins-writes-fiction-with-help-ai-2024-06-05/" target="_blank">
						NewsBreak origins
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/technology/top-news-app-us-has-chinese-origins-writes-fiction-with-help-ai-2024-06-05/" target="_blank">
						NewsBreak: Most downloaded US news app has Chinese roots and 'writes fiction' using AI
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/technology/top-news-app-us-has-chinese-origins-writes-fiction-with-help-ai-2024-06-05/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/JAPAN-ECONOMY/WAGES-COSTCO/egpboyqbnvq/graphic.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/business/retail-consumer/costcos-japan-wages-provide-pathway-firing-up-nations-low-pay-economy-2024-06-06/" target="_blank">
						Costco's hourly wages top prefectural minimum wages in Japan
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/business/retail-consumer/costcos-japan-wages-provide-pathway-firing-up-nations-low-pay-economy-2024-06-06/" target="_blank">
						Costco's Japan wages provide pathway to firing up nation's low pay, economy
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/business/retail-consumer/costcos-japan-wages-provide-pathway-firing-up-nations-low-pay-economy-2024-06-06/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/JAPAN-LNG/ASIA/zjpqynzdnpx/chart.png"></span>

				<span slot="title">
					<a href="https://www.reuters.com/business/energy/japan-builds-gas-markets-asia-boost-lng-trading-energy-security-2024-07-11/" target="_blank">
						Japan’s key gas infrastructure projects in Asia
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/business/energy/japan-builds-gas-markets-asia-boost-lng-trading-energy-security-2024-07-11/" target="_blank">
						Japan builds gas markets in Asia to boost LNG trading, energy security
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/business/energy/japan-builds-gas-markets-asia-boost-lng-trading-energy-security-2024-07-11/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/ASIA-POPULATION/JAPAN-FERTILITY/dwpkzdnbovm/graphic.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/world/japan/japanese-runner-freezes-her-eggs-keep-dreams-motherhood-alive-2024-06-05/" target="_blank">
						Concerns about the number of newborns in Japan
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/world/japan/japanese-runner-freezes-her-eggs-keep-dreams-motherhood-alive-2024-06-05/" target="_blank">
						As Japan's birthrate drops, runner freezes her eggs to sustain motherhood dream
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/world/japan/japanese-runner-freezes-her-eggs-keep-dreams-motherhood-alive-2024-06-05/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/CLIMATE-CHANGE/CORALS-THAILAND/byvrqoeoepe/chart.png"></span>

				<span slot="title">
					<a href="https://www.reuters.com/business/environment/boiling-not-warming-marine-life-suffers-thai-sea-temperatures-hit-record-2024-05-23/" target="_blank">
						Thailand's coral bleaching amid global event
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/business/environment/boiling-not-warming-marine-life-suffers-thai-sea-temperatures-hit-record-2024-05-23/" target="_blank">
						'Boiling not warming': Marine life suffers as Thai sea temperatures hit record
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/business/environment/boiling-not-warming-marine-life-suffers-thai-sea-temperatures-hit-record-2024-05-23/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/CLIMATE-CHANGE/CORALS-THAILAND/egpbonqnwvq/chart.png"></span>

				<span slot="title">
					<a href="https://www.reuters.com/business/environment/boiling-not-warming-marine-life-suffers-thai-sea-temperatures-hit-record-2024-05-23/" target="_blank">
						Thailand's record heat causes coral bleaching
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/business/environment/boiling-not-warming-marine-life-suffers-thai-sea-temperatures-hit-record-2024-05-23/" target="_blank">
						'Boiling not warming': Marine life suffers as Thai sea temperatures hit record
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/business/environment/boiling-not-warming-marine-life-suffers-thai-sea-temperatures-hit-record-2024-05-23/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/SPACE-TECH/AGRICULTURE/egpbonyawvq/graphic.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/world/india/space-data-fuels-indias-farming-innovation-drive-2024-05-17/" target="_blank">
						Agri tech boom in India
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/world/india/space-data-fuels-indias-farming-innovation-drive-2024-05-17/" target="_blank">
						Space data fuels India's farming innovation drive
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/world/india/space-data-fuels-indias-farming-innovation-drive-2024-05-17/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/BRITAIN-POLITICS/ECONOMY/egvbaxlnmpq/graphic.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/world/uk/slow-growth-high-debt-troubled-uk-economy-awaits-election-winners-2024-04-19/" target="_blank">
						Britain’s sluggish economic growth
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/world/uk/slow-growth-high-debt-troubled-uk-economy-awaits-election-winners-2024-04-19/" target="_blank">
						Slow growth, high debt - troubled UK economy awaits election winners
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/world/uk/slow-growth-high-debt-troubled-uk-economy-awaits-election-winners-2024-04-19/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/INDONESIA-ELECTION/NUMBERS/lbpgbljomvq/graphic.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/world/asia-pacific/indonesias-election-numbers-2024-02-08/" target="_blank">
						2024 Indonesia election by the numbers
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/world/asia-pacific/indonesias-election-numbers-2024-02-08/" target="_blank">
						Indonesia's election in numbers
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/world/asia-pacific/indonesias-election-numbers-2024-02-08/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/INDONESIA-ELECTION/POLL/gkvldgxlwvb/chart.png"></span>

				<span slot="title">
					<a href="https://www.reuters.com/world/asia-pacific/indonesia-presidential-hopeful-prabowo-seen-getting-majority-votes-survey-2024-02-10/" target="_blank">
						Indonesian presidential election polls (a set of graphics)
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/world/asia-pacific/indonesia-presidential-hopeful-prabowo-seen-getting-majority-votes-survey-2024-02-10/" target="_blank">
						Indonesia's Prabowo on track for presidential majority, survey shows
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/world/asia-pacific/indonesia-presidential-hopeful-prabowo-seen-getting-majority-votes-survey-2024-02-10/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://www.reuters.com/graphics/CHINA-ECONOMY/GDP-PROVINCES/dwpkeaqxdpm/graphic.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/world/china/chinese-provinces-target-modest-2024-growth-after-missing-previous-goals-2024-01-26/" target="_blank">
						Most Chinese provinces set more modest 2024 growth targets
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/world/china/chinese-provinces-target-modest-2024-growth-after-missing-previous-goals-2024-01-26/" target="_blank">
						Chinese provinces target modest 2024 growth after missing previous goals
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/world/china/chinese-provinces-target-modest-2024-growth-after-missing-previous-goals-2024-01-26/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/INDONESIA-ELECTION/TIMELINE/jnvwxewalpw/graphic.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/world/asia-pacific/indonesia-presidential-frontrunner-under-fire-rivals-attack-defence-plans-2024-01-08/" target="_blank">
						Road to presidency: Indonesia’s 2024 presidential election timeline
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/world/asia-pacific/indonesia-presidential-frontrunner-under-fire-rivals-attack-defence-plans-2024-01-08/" target="_blank">
						Indonesia presidential frontrunner under fire as rivals attack defence plans
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/world/asia-pacific/indonesia-presidential-frontrunner-under-fire-rivals-attack-defence-plans-2024-01-08/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/OIL-OPEC/ANGOLA/gkpldmgzapb/chart.png"></span>

				<span slot="title">
					<a href="https://www.reuters.com/business/energy/angolas-opec-exit-opens-way-more-chinese-investment-2023-12-22/" target="_blank">
						Angola: OPEC's seventh biggest crude oil producer in 2022
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/business/energy/angolas-opec-exit-opens-way-more-chinese-investment-2023-12-22/" target="_blank">
						Angola's OPEC exit opens way for more Chinese investment
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/business/energy/angolas-opec-exit-opens-way-more-chinese-investment-2023-12-22/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/PEOPLE-CHARLES%20MUNGER/zdpxrzjjrpx/graphic.jpg"></span>

				<span slot="title">
					<a href="https://www.tradingview.com/news/reuters.com,2023:newsml_L4N3CV3WC:0-berkshire-s-growth-under-munger-s-watch/" target="_blank">
						Berkshire Hathaway’s legend
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.tradingview.com/news/reuters.com,2023:newsml_L4N3CV3WC:0-berkshire-s-growth-under-munger-s-watch/" target="_blank">
						Berkshire's growth under Munger's watch
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters (Published on TradingView website)
				</span>

				<span slot="links">
					<a href="https://www.tradingview.com/news/reuters.com,2023:newsml_L4N3CV3WC:0-berkshire-s-growth-under-munger-s-watch/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/GLOBAL-MARKETS/THEMES/movalkbwqpa/chart.png"></span>

				<span slot="title">
					<a href="https://www.reuters.com/business/take-five/global-markets-themes-takealook-2024-01-19/" target="_blank">
						Markets are holding tight to soft landing hopes
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/business/take-five/global-markets-themes-takealook-2024-01-19/" target="_blank">
						Take Five: And we're off
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/business/take-five/global-markets-themes-takealook-2024-01-19/" target="_blank">English</a>
				</span>
			</GalleryItem>
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/THAILAND-ECONOMY/GDP/egpbmxbwqvq/graphic.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/markets/asia/thai-q3-gdp-growth-misses-forecast-amid-exports-slowdown-2023-11-20/" target="_blank">
						Thai Q3 GDP growth misses forecast
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/markets/asia/thai-q3-gdp-growth-misses-forecast-amid-exports-slowdown-2023-11-20/" target="_blank">
						Thai PM 'very worried' about weak Q3 growth, plans more stimulus
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/markets/asia/thai-q3-gdp-growth-misses-forecast-amid-exports-slowdown-2023-11-20/" target="_blank">English</a>
				</span>
			</GalleryItem>
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
				<span slot="screenshot"><img src="https://graphics.reuters.com/JAPAN-ECONOMY/BOJ/akpeaewynpr/chart.jpg"></span>

				<span slot="title">
					<a href="https://www.reuters.com/markets/currencies/yen-under-pressure-us-treasury-yields-push-over-decade-peaks-2023-09-22/" target="_blank">
						BOJ maintains ultra-low interest rates
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.reuters.com/markets/currencies/yen-under-pressure-us-treasury-yields-push-over-decade-peaks-2023-09-22/" target="_blank">
						Dollar up as data highlights US economic resilience; yen slumps
					</a>
					"
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Reuters
				</span>

				<span slot="links">
					<a href="https://www.reuters.com/markets/currencies/yen-under-pressure-us-treasury-yields-push-over-decade-peaks-2023-09-22/" target="_blank">English</a>
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
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="{base}/images/project/1.png"></span>

				<span slot="title">
					<a href="https://thestandard.co/russia-ukraine-crisis-live-report/" target="_blank">
						(Map) Situation update in Russia-Ukraine war 
					</a>
				</span>

				<span slot="subtitle">
					In the project "
					<a class="subtitle_link" href="https://thestandard.co/russia-ukraine-crisis-live-report/" target="_blank">
						Ukraine-Russia War Coverage
					</a>
					" (inactive since June 2022)
				</span>

				<span slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					THE STANDARD (Thai online news agency)
				</span>

				<span slot="links">
					<a href="https://thestandard.co/russia-ukraine-crisis-live-report/" target="_blank">Thai</a>
				</span>
			</GalleryItem>
		</span>
	</GalleryGroup>

	<GalleryGroup>
		<span slot="group-title">My works in the media around the world</span>
		<span slot="items" class="content-box-flex column">
			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://d2fc09gk1936lv.cloudfront.net/kbs/390x219/mediafactory.play.kbs.co.kr/vod/2023/04/04/642bf58424bd6d209af14165/thumbnail/642bf58424bd6d209af14165_0_1680603290001.jpg" style="min-width:100%"></span>

				<span slot="title">
					<a href="https://vod.kbs.co.kr/index.html?source=episode&sname=vod&stype=vod&program_code=T2022-0200&program_id=PS-2023046789-01-000&section_code=05&broadcast_complete_yn=&local_station_code=00" target="_blank">
						Graphic: Surprise production cuts
					</a>
				</span>

				<span slot="subtitle">
					In the program "
					<a class="subtitle_link" href="https://vod.kbs.co.kr/index.html?source=episode&sname=vod&stype=vod&program_code=T2022-0200&program_id=PS-2023046789-01-000&section_code=05&broadcast_complete_yn=&local_station_code=00" target="_blank">
						A Morning Worth Trying M&W (해 볼만한 아침 M&W, morning current affairs and economic program) EP.230 
					</a>
					" [ from the minute 00:23:54 - 00:24:33 ]
				</span>

				<div slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					KBS 2 TV channel (South Korea)
				</div>

				<span slot="links">
					<a href="https://vod.kbs.co.kr/index.html?source=episode&sname=vod&stype=vod&program_code=T2022-0200&program_id=PS-2023046789-01-000&section_code=05&broadcast_complete_yn=&local_station_code=00" target="_blank">Korean</a>
				</span>
			</GalleryItem>

			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://cafefcdn.com/203337114487263232/2023/7/11/1689016632-bi-u-02-1689052500979-16890525010822115828544.png"></span>

				<span slot="title">
					<a href="https://cafef.vn/gio-dao-chieu-tai-cong-xuong-o-to-so-1-dong-nam-a-188230711121519786.chn" target="_blank">
						Story: China-led EV boom in Thailand threatens Japan's grip on key market
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://cafef.vn/gio-dao-chieu-tai-cong-xuong-o-to-so-1-dong-nam-a-188230711121519786.chn" target="_blank">
						Gió đảo chiều tại công xưởng ô tô số 1 Đông Nam Á
					</a>
					"
				</span>

				<div slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Cafef.vn (Vietnam)
				</div>

				<span slot="links">
					<a href="https://cafef.vn/gio-dao-chieu-tai-cong-xuong-o-to-so-1-dong-nam-a-188230711121519786.chn" target="_blank">Vietnamese</a>
				</span>
			</GalleryItem>

			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/TESLA-PRODUCTION/FORECAST/akpezdmnavr/chart.png"></span>

				<span slot="title">
					<a href="https://m.edaily.co.kr/news/Read?newsId=02348486632493904&mediaCodeNo=257" target="_blank">
						Graphic: Tesla Model Y and Model 3 production expected to rise
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://m.edaily.co.kr/news/Read?newsId=02348486632493904&mediaCodeNo=257" target="_blank">
						Tesla, ahead of announcing ‘record sales’, will it hit a speed bump? (`역대급 매출` 발표 앞둔 테슬라, 과속방지턱 넘어설까 (영상))
					</a>
					"
				</span>

				<div slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Edaily (South Korea)<br/>by Lee Jeong-hoon
				</div>

				<span slot="links">
					<a href="https://m.edaily.co.kr/news/Read?newsId=02348486632493904&mediaCodeNo=257" target="_blank">Korean</a>
				</span>
			</GalleryItem>

			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/CHINA-ECONOMY/PMI/akpezdadnvr/chart.png"></span>

				<span slot="title">
					<a href="https://www.asiafinancial.com/chinas-factory-activity-edges-up-but-service-sector-slows" target="_blank">
						Graphic: A contrast on two China manufacturing PMIs.
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.asiafinancial.com/chinas-factory-activity-edges-up-but-service-sector-slows" target="_blank">
						China’s Factory Activity Edges up But Service Sector Slows
					</a>
					"
				</span>

				<div slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					Asia Financial (Hong Kong)<br/>
					by Reuters, with additional editing from Alfie Habershon and Jim Pollard
				</div>

				<span slot="links">
					<a href="https://www.asiafinancial.com/chinas-factory-activity-edges-up-but-service-sector-slows" target="_blank">English</a>
				</span>
			</GalleryItem>

			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/CHINA-ECONOMY/PMI/zgpoboombvd/chart.png"></span>

				<span slot="title">
					<a href="https://www.weforum.org/agenda/2023/06/us-china-economy-stories-to-read-this-week/" target="_blank">
						Graphic: China's factory activity extends declines
					</a>
				</span>

				<span slot="subtitle">
					In the story "
					<a class="subtitle_link" href="https://www.weforum.org/agenda/2023/06/us-china-economy-stories-to-read-this-week/" target="_blank">
						US economy holding up while China's economic malaise deepens, and other economy stories to read this week
					</a>
					"
				</span>

				<div slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					World Economic Forum<br>by Gabi Thesing
				</div>

				<span slot="links">
					<a href="https://www.weforum.org/agenda/2023/06/us-china-economy-stories-to-read-this-week/" target="_blank">English</a>
				</span>
			</GalleryItem>

			<GalleryItem parentWidth={innerWidth} parentHeight={innerHeight}>
				<span slot="screenshot"><img src="https://graphics.reuters.com/GLOBAL-OIL/egpbyjrylvq/chart.jpg"></span>

				<span slot="title">
					<a href="https://www.youtube.com/watch?v=sdhFayhpXB0&pp=ygUYVEhFIFNUQU5EQVJEIFdFQUxUSCBPUEVD" target="_blank">
						Graphic: Surprise production cuts
					</a>
				</span>

				<span slot="subtitle">
					In the program "
					<a class="subtitle_link" href="https://www.youtube.com/watch?v=sdhFayhpXB0&pp=ygUYVEhFIFNUQU5EQVJEIFdFQUxUSCBPUEVD" target="_blank">
						Morning Wealth (April 4, 2023)
					</a>
					"
				</span>

				<div slot="for" style="background-color: #F46917; padding-left:0.5em; padding-right:0.5em">
					THE STANDARD (Thai online news outlet)
				</div>

				<span slot="links">
					<a href="https://www.youtube.com/watch?v=sdhFayhpXB0&pp=ygUYVEhFIFNUQU5EQVJEIFdFQUxUSCBPUEVD" target="_blank">Thai</a>
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
			height: 750px;
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

	.screenshot_img {
		width: 100%;
	}

	.subtitle_link:hover {
		text-decoration: underline;
	}

	.award-bullet {
		padding-left: 1.5rem;
		text-indent: -1.6rem;
	}

	.award-bullet::before {
		content: "🏅 ";
	}

</style>