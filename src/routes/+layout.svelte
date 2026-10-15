<script>
	import '../styles/global.css'; //Importing global styles
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	const navigationLinks = [
		{label: 'Home', href: '/'},
		{label: 'About', href: '/about'},
		{label: 'Content', href: '/content'},
		{label: 'Courses', href: '/courses'},
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header 
	navItems={navigationLinks}
/>

{@render children()}

<Footer course="ID512 WebDevelopment" year={2026}/>