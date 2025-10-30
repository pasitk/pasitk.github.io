<script>
  import "../app.postcss";
  import { base } from '$app/paths';
</script>

<nav class="menu">
  <a href="{base}/">Home</a>
  <a href="{base}/about">About</a>
  <a href="{base}/portfolio">Portfolio</a>
</nav>
<nav class="contacts">
  <div class="engine">
    This website is developed by using SvelteKit
  </div>
  <div class="contact-links">
    <a href="{base}/">Website</a>
    <a href="https://www.linkedin.com/in/pasitk/" target="_blank">LinkedIn</a>
    <a href="https://twitter.com/PasitKong" target="_blank">X (Twitter)</a>
  </div>
</nav>

<slot />

<style>
  @media (max-width: 640px) {
    .contacts {
      flex-direction: column;
    }
  }

  @media (min-width: 641px) {
    .contacts {
      flex-direction: row;
    }

    .contact-links > a:nth-child(1) {
      padding-left: 0.5em;
      border-left: 1px solid #999999;
    }

    .engine {
      padding-right: 0.5em;
    }
  }
  
  nav {
    position: fixed;
    display: flex;
    color: #666666;
  }

  .menu {
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    border-top: 0px;
    z-index: 6;
    border-radius: 0px 0px 10px 10px;
    top: 0%;
    left: 2%;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    gap: 1em;
  }

  .contacts {
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    z-index: 5;
    bottom: 0%;
    right: 2%;
    border-radius: 10px 10px 0px 0px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  }

  .contact-links {
    text-align: right;
  }

  .contact-links > a:nth-child(2) {
    padding-left: 1em;
    padding-right: 1em;
  }

  nav a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }

  nav a[aria-current="true"] {
    border-bottom: 2px solid;
  }
</style>
