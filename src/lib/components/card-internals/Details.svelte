<script>
    let {title = 'Example Card', description = 'Card description goes here.'} = $props();
</script>

<div class="details">
    <h2>{title}</h2>
    <p>{description}</p>
</div>

<!-- <section>
<h2>Phill Connors</h2>
<dl>
<dt>Favourite song:</dt>
<dd>I Got You Babe</dd>
<dt>Pet's name:</dt>
<dd>Punxsutawney Phil</dd>
</dl>
</section> -->
 
<style>
    dl {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 0.5rem 1rem;
    }
 
    dt {
        font-weight: bold;
    }
 
    dd {
        margin: 0;
    }
</style>