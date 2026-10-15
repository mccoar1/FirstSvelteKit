<script>
  import Card from "$lib/components/Card.svelte";
</script>

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

<style>
    main {
        padding: 1rem;
        /* display: flex;
        flex-wrap: wrap; */
    }
</style>