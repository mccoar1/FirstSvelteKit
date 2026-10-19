//load function, used to etch data as soon as the page loads

export async function load({ fetch }) {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const dog = await res.json();
    return { dog };
}

/* The dog api above returns this:
"message": "https://images.dog.ceo/breeds/sharpei/noel.jpg";
"status": "success";
*/
