<script>
  import Card from "$lib/components/Card.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";

    const navigationLinks = [
        {label: 'Home', href: '/'},
        {label: 'About', href: '/about'},
        {label: 'Content', href: '/content'}
    ]
</script>

<svelte:head>
    <title>SvelteKit Components Demo</title>
    <meta name="description" content="A demonstration of reusable SvelteKit components and props."/>
</svelte:head>

<Header
    title="Welcome to Web Development"
    subtitle="Learning reusable components and props"
    navItems={navigationLinks}
/>
<!-- <h1>{title}</h1>
<p>Welcome to my home page!</p>
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="content">Content</a>
</nav> --> 

<main>
    <h2>Our Example Card</h2>

    <Card
        title="Learning SvelteKit"
        description="Components let us reuse interface elements across our application."
    />

    <Card
        title="Understanding Props"
        description="Props allow us to customise each component with different data."
    />
</main>

<Footer course="ID512 Web Development" year={2026} />

<style>
    main {
        padding: 1rem;
        /* display: flex;
        flex-wrap: wrap; */
    }
</style>