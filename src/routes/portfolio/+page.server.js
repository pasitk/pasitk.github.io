export function load({ setHeaders }) {
	setHeaders({
		'Cache-Control': "max-age=604800"
	});
}

export const prerender = true;