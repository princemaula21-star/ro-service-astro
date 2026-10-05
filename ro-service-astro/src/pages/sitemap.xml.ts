import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const site = 'https://rofixservice.co.in';
  
  // Saare pages ki list
  const pages = [
    '',
    '/kent',
    '/aquaguard',
    '/pureit',
    '/lg',
    '/ao-smith',
    '/livpure',
    '/blue-star',
    '/havells',
    '/contact',
    '/blog',
    '/privacy-policy',
    '/terms',
  ];
  
  const today = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${site}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};