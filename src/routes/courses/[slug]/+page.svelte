<script>
    let {params}=$props();

    const courses = {
        programming:{
            title: 'Programming Fundamentals',
            description: 'Learn programming',
        },

        databases: {
            title: 'Database Systems',
            description: 'Learn relational databases and SQL',
        }
    };

    let course = $derived(courses[params.slug]);

</script>

<svelte:head>
    <title>{course ? course.title: 'Course Not Found'}</title>
</svelte:head>

<main>
    {#if course}
    <h1>{course.title}</h1>
    <p>{course.description}</p>
    {:else}
    <h1>Course Not Found</h1>
    <p>We couldn't find that course</p>
    {/if}
</main>


