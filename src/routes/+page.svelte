<script>
let title = $state("Home");
import Card from "$lib/components/Card.svelte";
</script>


<h1>{title}</h1>
<p>Welcome to my home page!</p>
<!-- <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="content">Content</a>
</nav> -->

<main>
    <Card />
    <Card />
    <Card />
</main>

<style>
    main {
        display: flex;
        flex-wrap: wrap;
    }
</style>