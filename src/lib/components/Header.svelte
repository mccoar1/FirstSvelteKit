<script>
    import Navigation from './Nav.svelte';
    let {title = 'Sveltekit components',
    subtitle = 'For more info see the sveltekit tutorial',
    navItems=[]
} =$props();
</script>

<header>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <Navigation items = {navItems} />
</header>

<style>
    header {
        background-color: #f8f8f8;
        padding: 1rem;
        border-bottom: 1px solid #f8f8f8;
        /* nav {
            border-top: 1px solid #ccc;
            margin-top: 1rem;
            padding-top: 1rem;
        } */
    }
</style>