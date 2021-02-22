import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'NICK',
		src:'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop191x100.1200w.jpg'
	}
});

export default app;