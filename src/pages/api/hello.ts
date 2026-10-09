import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
	return Response.json({
		message: 'Привет с API Astro (выполняется на сервере)',
		at: new Date().toISOString(),
	});
};
