<script>
	import Scroller from '@sveltejs/svelte-scroller';
	import { fly, fade, scale } from 'svelte/transition';
	// import data from "./data.json";
  	// import LineChart from "./LineChart.svelte";
	import { Timeline, TimelineItem } from 'flowbite-svelte';
    import { invalid_attribute_name_character } from 'svelte/internal';
	import { base } from '$app/paths';

	let count1;
	let index1;
	let offset1;
	let progress1;
	let count2;
	let index2;
	let offset2;
	let progress2;
	let top = 0;
	let threshold = 0.5;
	let bottom = 1;

	let innerWidth;
	let innerHeight;

	function padWithLeadingZeros(num, totalLength) {
		return String(num).padStart(totalLength, '0');
	}

	function setBoundaries(num) {
		if (num < 0) return 0;
		else if (num > 500) return 500;
		else return num;
	}

	function getOpacity(offset, index, count) {

		if (index == 0) {
			if (offset <=0.75) {
				return 0.5;
			}
			if (offset >0.75 && offset <= 1) {
				return (1-offset)*2;
			}
		} else if (index + 1 == count) {
			if (offset < 0) {
				return 0;
			}
			if (offset >=0 && offset <= 0.25) {
				return offset*2;
			}
			if (offset >0.25) {
				return 0.5;
			}
		} else {
			if (offset < 0 || offset > 1) {
				return 0;
			}
			if (offset >=0 && offset <= 0.25) {
				return offset*2;
			}
			if (offset >0.25 && offset <= 0.75) {
				return 0.5;
			}
			if (offset >0.75 && offset <= 1) {
				return (1-offset)*2;
			}
		}
	}

	const numberOfImages = 500;

    // This will generate an array of urls such as /images/1.png, /images/2.png, up to numberOfImages
    $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `${base}/images/bg-edu-shots/bg-edu-${padWithLeadingZeros(key+1,3)}.jpg`);

</script>

<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight} />
<svelte:head>
    {#each preloadImageUrls as image}
      <link rel="preload" as="image" href={image} fetchpriority="high"/>
    {/each}
	<link rel="preload" as="image" href={base+'/images/bg-work-0.jpg'} fetchpriority="high"/>
	<link rel="preload" as="image" href={base+'/images/bg-work-1.jpg'} fetchpriority="high"/>
	<link rel="preload" as="image" href={base+'/images/bg-work-2.jpg'} fetchpriority="high"/>
</svelte:head>

<div class='content'>
	<div class="content-header-one semi-bold" in:fly={{ y: 50, duration: 2000 }}>About</div>

    <div class="content-header-two-first bookmark" in:fly={{ y: 50, duration: 2000, delay: 300 }}>Professional background</div>
	<Scroller
		{top}
		{threshold}
		{bottom}
		bind:count = {count1}
		bind:index = {index1}
		bind:offset = {offset1}
		bind:progress = {progress1}
		>
		<div slot="background">
            <div class="image-background image-background-work" style="--background-image: url('{base}/images/bg-work-{index1==undefined?0:index1+1}.jpg'); --background-height:{innerHeight}px; vertical-align:bottom; --background-opac:{getOpacity(offset1, index1, count1)}">
			</div>
			<!-- <div class="chart-background" style="padding: 0 5% 0 60%;">
				<Timeline order="vertical">
					<TimelineItem title="September 2022" date="Reuters">
					  <svelte:fragment slot="icon">
						<span
						  class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
						  <svg
							aria-hidden="true"
							class="w-3 h-3 text-primary-600 dark:text-primary-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
							  fill-rule="evenodd"
							  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							  clip-rule="evenodd" /></svg>
						</span>
					  </svelte:fragment>
					</TimelineItem>
					<TimelineItem title="Flowbite Figma v1.3.0" date="Released on December 7th, 2021">
					  <svelte:fragment slot="icon">
						<span
						  class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
						  <svg
							aria-hidden="true"
							class="w-3 h-3 text-primary-600 dark:text-primary-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
							  fill-rule="evenodd"
							  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							  clip-rule="evenodd" /></svg>
						</span>
					  </svelte:fragment>
					  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
						All of the pages and components are first designed in Figma and we keep a parity between the
						two versions even as we update the project.
					  </p>
					</TimelineItem>
					<TimelineItem title="Flowbite Library v1.2.2" date="Released on December 2nd, 2021">
					  <svelte:fragment slot="icon">
						<span
						  class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
						  <svg
							aria-hidden="true"
							class="w-3 h-3 text-primary-600 dark:text-primary-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
							  fill-rule="evenodd"
							  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							  clip-rule="evenodd" /></svg>
						</span>
					  </svelte:fragment>
					  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
						Get started with dozens of web components and interactive elements built on top of Tailwind
						CSS.
					  </p>
					</TimelineItem>
				  </Timeline>
			</div> -->
		</div>

		<div slot="foreground" style="margin-bottom:5em" class="box-align-left">
			<section class="content-box-wrapper">
				<div class="content-box" in:scale={{delay: 600, opacity: 0, duration: 1000}}>
					<div class="content-header-three">
						<div class="light">2022 - Present</div>
						<div class="job-or-degree-title semi-bold">Financial Graphics Reporter</div>
						<div>Reuters  •  Bangkok, Thailand</div>
					</div>
					<div>
						<ul>
							<li>Create daily breaking news graphics across markets, economics and companies beats around the world.</li>
							<li>Generate story and graphics ideas from the financial news of the day.</li>
							<li>Also support data and graphics for Thailand's big stories outside economics and financial side, e.g., Thailand general election in 2023.</li>
						</ul>
					</div>
				</div>
            </section>
			<section class="content-box-wrapper">
				<div class="content-box" in:scale={{delay: 600, opacity: 0, duration: 1000}}>
					<div class="content-header-three">
						<div class="light">2019-2022</div>
						<div class="job-or-degree-title semi-bold">Journalist and data journalist</div>
						<div>THE STANDARD (Thai online news outlet)  •  Bangkok, Thailand</div>
					</div>
					<div class="sub-content">
						<b>December 2020 - August 2022: Data journalist</b>
						<ul>
							<li>Produced data-driven journalistic outputs in topics including: Politics, Social, Human Rights, Environment (including related issues).</li>
						</ul>
					</div>
					<div class="sub-content">
						<b>December 2020 - August 2022: In-depth journalist - domestic news</b>
						<ul>
							<li>Produced in-depth features and 'key message' features in various topics for domestic news desk: Education, Media, Crime, Politics, etc.</li>
						</ul>
					</div>
					<div class="sub-content">
						<b>September 2019 - August 2022: News reporter - international news</b><br/>
						Rewrote news articles, produced in-depth features and 'key message' features for international news desk.
						<ul>
							<li>Sep 2019 - Aug 2020: Covered stories in the UK including general situations, Brexit, and COVID-19</li>
							<li>Sep 2020 - Nov 2020: Covered US Election articles and producing explainer videos</li>
							<li>Nov 2020 - Aug 2022: Covered general foreign news reports, mainly focused on COVID-19 situation and vaccines, Russia-Ukraine war, geopolitics, and other general situations</li>
						</ul>
					</div>
					<div class="sub-content">
						<b>April 2019 - August 2019: Daily Newscast News Researcher and Scriptwriter</b><br/>
						Created content for more than 75 episodes of evening newscasts on Facebook and YouTube.
						<ul>
							<li>Selected stories for the anchors, focusing on politics, economics, and international news.</li>
							<li>Researched, interviewed sources, wrote, recorded, and edited stories and scripts for use on the air.</li>
							<li>Liaised with producers and graphics team to prepare visual resources for use on air.</li>
						</ul>
					</div>
				</div>
            </section>
			<section class="content-box-wrapper">
				<div class="content-box" in:scale={{delay: 600, opacity: 0, duration: 1000}}>
					<div class="content-header-three">
						<div class="light">2018-2019</div>
						<div class="job-or-degree-title semi-bold">Assistant Manager (Head of online news)</div>
						<div>GMM Channel Company Limited (GMM25 TV Channel - a national digital terrestrial TV channel in Thailand)  •  Bangkok, Thailand</div>
					</div>
					<div class="sub-content">
						<ul>
							<li>Produced dozens of in-depth features and hundreds of breaking news articles for online platforms.</li>
							<li>Shot and edited news feature videos / Designed many explainer graphics to expand news understanding.</li>
							<li>Managed all online platforms (Website, Facebook, Twitter, YouTube, IG) and analysed the platforms' performances.</li>
							<li>Supervised a junior online reporter.</li>
						</ul>
					</div>
				</div>
            </section>
			<section class="content-box-wrapper">
				<div class="content-box" in:scale={{delay: 600, opacity: 0, duration: 1000}}>
					<div class="content-header-three">
						<div class="light">2017-2018</div>
						<div class="job-or-degree-title semi-bold">Content Editor and Software Coordinator</div>
						<div>BEC-Tero Entertainment Plc. (A content provider for Channel 3, one of the most popular national digital terrestrial TV channels in Thailand)  •  Bangkok, Thailand</div>
					</div>
					<div class="sub-content">
						<ul>
							<li>Produced dozens of in-depth features and hundreds of breaking news articles for online platforms.</li>
							<li>Shot and edited news feature videos / Designed many explainer graphics to expand news understanding.</li>
							<li>Anchored Facebook Live news reports from the field.</li>
						</ul>
					</div>
				</div>
            </section>
			<section class="content-box-wrapper">
				<div class="content-box" in:scale={{delay: 600, opacity: 0, duration: 1000}}>
					<div class="content-header-three">
						<div class="light">2014-2017</div>
						<div class="job-or-degree-title semi-bold">Application Engineer</div>
						<div>The Stock Exchange of Thailand  •  Bangkok, Thailand</div>
					</div>
					<div class="sub-content">
						<ul>
							<li>Implemented and maintained online stock trading web and Android applications in front-end parts. These applications are the most popular stock trading applications in Thailand.</li>
							<li>Designed user interfaces and user experience for these applications.</li>
						</ul>
					</div>
				</div>
            </section>
		</div>
	</Scroller>
	
	<div class="content-header-two bookmark" in:fly={{ y: 50, duration: 2000, delay: 300 }}>Educational background</div>
	<Scroller
		{top}
		{threshold}
		{bottom}
		bind:count = {count2}
		bind:index = {index2}
		bind:offset = {offset2}
		bind:progress = {progress2}
	>
		<div slot="background">
			<!-- <p>current section: <strong>{index + 1}/{count}</strong></p>
			<progress value="{count ? (index + 1) / count : 0}"></progress>

			<p>offset in current section</p>
			<progress value={offset || 0}></progress>

			<p>total progress</p>
			<progress value={progress || 0}></progress> -->

			<div class="image-background image-background-edu" style="--background-image: url('{base}/images/bg-edu-shots/bg-edu-{padWithLeadingZeros(setBoundaries(Math.round((progress2==NaN?0:progress2)*500)), 3)}.jpg'); --background-height:{innerHeight}px; --background-opac:{getOpacity(offset2)}">
			</div>
		</div>

		<div slot="foreground" class="box-align-right">
			<section class="content-box-wrapper">
				<div class="content-box" in:scale={{delay: 600, opacity: 0, duration: 1000}}>
					<div class="content-header-three">
						<div class="light">Master's degree</div>
						<div class="job-or-degree-title semi-bold">MSc Computational and Data Journalism</div>
						<div>Cardiff University, Wales, United Kingdom  •  Class of 2021</div>
					</div>
					<div>
						<ul>
							<li>Grade: Distinction</li>
							<li>Modules Including: Python for Data Analysis, Web Application Development, Data Journalism, Reporters and the Reported, Digital Investigation, Reporting Business Finance and Economics, Data Visualisation, Mandarin Chinese for Beginners (HSK1), Dissertation Project</li>
							<li>Audited Modules: Political Reporting, Business Plan - Developing, Launching & Managing a Media Enterprise</li>
							<li>Chevening Scholar and Chevening / Cardiff University Partner Awardee</li>
						</ul>
					</div>
				</div>
            </section>
			<section class="content-box-wrapper">
				<div class="content-box" in:scale={{delay: 600, opacity: 0, duration: 1000}}>
					<div class="content-header-three">
						<div class="light">Bachelor's degree</div>
						<div class="job-or-degree-title semi-bold">BEng Computer Engineering</div>
						<div>Chulalongkorn University, Bangkok, Thailand  •  Class of 2013</div>
					</div>
					<div>
						<ul>
							<li>Grade: Second Class Honors</li>
							<li>Activities and societies: Columnist, Book Editor, Web Designer, Camps Staff</li>
							<li>Examples Modules in Computer Engineering: Java Programming, Discrete Structure, Computer System Architecture, Digital Computer Logic, Digital Design & Verification, Data Structure (C++), Mathematics for Electrical Engineering, Algorithm Design, Programming Language Principles, Operation Systems Programming, Database Management System Design, Computer Network, Distributed System, Numerical Analysis, Formal Language & Automata, Software Engineering, Computer Engineering Project, Computer Graphics, Software Project Management, Data Warehouse & Business Intelligence, Applied Web Programming, High-Tech Entrepreneurship</li>
							<li>Modules in Journalism including: News, Information & Society, Mass Media Study</li>
							<li>Modules in Foreign Languages: Experiential English I-II, English Communication & Presentation Skills, Intensive Chinese I-II</li>
						</ul>
					</div>
				</div>
            </section>
		</div>
	</Scroller>

	<div class="content-header-two bookmark" in:fly={{ y: 50, duration: 2000, delay: 300 }}>Awards and recognition</div>
	<div class="full-width-content-box" in:scale={{delay: 600, opacity: 0, duration: 1000}}>
		<ul>
			<li>
				<span class="semi-bold job-or-degree-title">Chevening Scholarship: 2019-2020 cohort</span><br/>
				An international scholarship, funded by the British Foreign, Commonwealth and Development Office, which enables future leaders to study in the UK whilst joining a global community of professionals creating positive change worldwide.
			</li>
			<li><span class="semi-bold job-or-degree-title">Finalist: Best Natural and Environmental Conservation News Award 2021</span><br/>
				My data journalism project about the fine particulate matter (PM2.5) problem in Thailand was selected as one of the 2021 Best Natural and Environmental Conservation News Awards finalists by the Thai Society of Environmental Journalists (ThaiSEJ) under the Thai Journalists Association.
			</li>
			<li><span class="semi-bold job-or-degree-title">Finalist: Reuters Journalists of the Year Awards 2022 (Graphics of the year)</span><br/>
				The Financial Graphics team, which I am a member, was selected as one of the 2022 Reuters Journalists of the Year Awards finalists in the Graphic of the Year category.
			</li>
		</ul>
	</div>

	<div class="content-header-two bookmark" in:fly={{ y: 50, duration: 2000, delay: 300 }}>Events and voluntary positions</div>
	<div class="full-width-content-box" in:scale={{delay: 600, opacity: 0, duration: 1000}}>
		<ul>
			<li>
				<span class="semi-bold job-or-degree-title">Ad Hoc Media Pool Committee for Election Results Reporting System Development (supporting the Bangkok Governor Election 2022)</span><br/>
				Be a part of the team which oversees the development of a real-time election results reporting system which was used in the 2022 Bangkok Governor Election by more than 30 TV Channels and leading online newsrooms in Thailand.
			</li>
			<li>
				<span class="semi-bold job-or-degree-title">Guest speaker for the data journalism module at Thammasat University, Thailand</span><br/>
				Academic year 2020 and 2022
			</li>
			<li>
				<span class="semi-bold job-or-degree-title">Guest speaker for the engineering students at Chulalongkorn University, Thailand</span><br/>
				Academic year 2020
			</li>
		</ul>
	</div>

</div>

<style>

	@media (max-width: 360px) {
		.content-header-one {
			margin-left: 5%;
			font-size: 3.5em;
		}

		.content-header-two {
			margin-left: 5%;
			margin-top: 1em;
			font-size: 1.25em;
		}

		.content-header-two-first {
			margin-left: 5%;
			margin-top: 0.25em;
			font-size: 1.25em;
		}

		.job-or-degree-title {
			font-size: 1.3em;
			line-height: 1.2;
		}

		.box-align-left {
			padding: 0 10% 0 5%;
		}

		.box-align-right {
			padding: 0 5% 0 10%;
		}

		.content-box, .full-width-content-box {
			padding: 1.25em;
		}

		.image-background-edu {
			background-position-x: 25%;
		}
	}

	@media (min-width: 361px) and (max-width: 640px) {
		.content-header-one {
			margin-left: 5%;
			font-size: 4em;
		}

		.content-header-two {
			margin-left: 5%;
			margin-top: 2em;
			font-size: 1.5em;
		}

		.content-header-two-first {
			margin-left: 5%;
			margin-top: 0.5em;
			font-size: 1.5em;
		}

		.job-or-degree-title {
			font-size: 1.5em;
			line-height: 1.2;
		}

		.box-align-left {
			padding: 0 10% 0 5%;
		}

		.box-align-right {
			padding: 0 5% 0 10%;
		}
		
		.content-box, .full-width-content-box {
			padding: 1.5em;
		}

		.image-background-edu {
			background-position-x: 25%;
		}
	}

	@media (min-width: 641px) and (max-width: 1024px) {
		.content-header-one {
			margin-left: 5%;
			font-size: 4.5em;
		}

		.content-header-two {
			margin-left: 5%;
			margin-top: 3em;
			font-size: 1.75em;
		}

		.content-header-two-first {
			margin-left: 5%;
			margin-top: 0.75em;
			font-size: 1.75em;
		}

		.job-or-degree-title {
			font-size: 1.5em;
			line-height: 1.2;
		}

		.box-align-left {
			padding: 0 25% 0 5%;
		}

		.box-align-right {
			padding: 0 5% 0 25%;
		}

		.content-box, .full-width-content-box {
			padding: 1.75em;
		}

		.image-background-edu {
			background-position-x: center;
		}
	}

	@media (min-width: 1024px) {
		.content-header-one {
			margin-left: 5%;
			font-size: 5em;
		}

		.content-header-two {
			margin-left: 5%;
			margin-top: 5em;
			font-size: 2em;
		}

		.content-header-two-first {
			margin-left: 5%;
			margin-top: 1em;
			font-size: 2em;
		}

		.job-or-degree-title {
			font-size: 2em;
			line-height: 1.2;
		}

		.box-align-left {
			padding: 0 40% 0 5%;
		}

		.box-align-right {
			padding: 0 5% 0 40%;
		}

		.content-box, .full-width-content-box {
			padding: 2em;
		}

		.image-background-edu {
			background-position-x: center;
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
	
	[slot="background"] {
		font-size: 1.4em;
		overflow: hidden;
	}

    .image-background {
        background-image: var(--background-image);
        background-size: cover;
        height: var(--background-height);
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-ms-backface-visibility: hidden;
		position: absolute;
		width:100%;
		background-position-y: center;
    }

	.image-background-work {
        opacity: var(--background-opac);
		filter: grayscale(100%);
		background-position-x: center;
    }

	.image-background-edu {
		opacity: 0.5;
		filter: grayscale(100%);
    }
	
	[slot="foreground"] {
		pointer-events: none;
	}
	
	[slot="foreground"] section {
		pointer-events: all;
	}

	.content-box-wrapper {
		padding-top: 20vh;
		padding-bottom: 20vh;
	}
	
	.content-box {
		height: max-content;
		background-color: rgba(255,255,255,0.9);
		color: #000000;
		border-radius: 0em 3em 3em 3em;
		box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
		-webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
		-moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
	}

	.full-width-content-box {
		margin: 0em 5% 0em 5%;
		border-radius: 0em 3em 3em 3em;
		background-color: rgba(255,255,255,0.9);
		color: #000000;
		box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
		-webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
		-moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
	}

	.two-times {
		font-size: 2em;
	}

	.semi-bold {
		font-weight: 600;
	}

	.light {
		font-weight: 300;
	}

	.bookmark {
		background-color: rgba(0,0,0,0.75);
		width:fit-content;
		border-radius: 0em 5em 0em 0em;
		padding: 0.25em 1.5em 0.25em 0.75em;
	}

    .content-header-three {
        margin-bottom: 1em;
    }

	ul > li:not(:last-child) {
		margin-top: 0.5em;
		margin-bottom: 0.5em;
	}

    li {
        line-height: 1.5;
		font-weight: 100;
    }

	ul {
		display: block;
		list-style-type: disc;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		padding-inline-start: 40px;
	}

	.sub-content {
		margin-top: 2em;
	}
</style>