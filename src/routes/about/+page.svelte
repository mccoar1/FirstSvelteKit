<script>
let title = $state('About');
let { data }=$props();
console.log(data); //so we can see the data in the console
</script>

<h1>{title}</h1>
<p>Welcome to my about page!</p>

<div class="container">
    <h2>Fetch!</h2>
    <p>Here is a random dog from <a href="https://dog.ceo/dog-api/">dog.ceo</a></p>
    We're using the fetched data in our image tag's source attribute
    <img src={data.dog.message} alt="Random Dog" />
</div>

<style>
    .container{
        max-width: 600px;
        margin: 0 auto;
        padding: 2rem;
        font-family: Arial, sans-serif;
    }

    img{
        border-radius: 8px;
    }
</style>