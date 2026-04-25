export default async function handler(req) {
  const url = new URL(req.url);
  const imageUrl = url.searchParams.get('url');
  if (!imageUrl) {
    return new Response('Not found', { status: 404 });
  }
  // imageUrl is like /_next/static/media/out.6b607183.png
  // Redirect to the actual static file
  const target = new URL(imageUrl, url.origin);
  return Response.redirect(target.toString(), 302);
}

export const config = { path: '/_next/image' };
