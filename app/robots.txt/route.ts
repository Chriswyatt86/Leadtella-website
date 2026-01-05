export async function GET(): Promise<Response> {
  const robotsTxt = `User-agent: *
Allow: /

# Allow essential static assets
Allow: /_next/static/
Allow: /favicon.ico
Allow: /sitemap.xml
Allow: /robots.txt

# Allow important public pages
Allow: /blog/*
Allow: /pricing
Allow: /affiliates
Allow: /experts
Allow: /help/*

# Block sensitive areas only
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /_next/webpack-hmr
Disallow: /.well-known/

# Crawl delay for respectful crawling
Crawl-delay: 1

# Sitemaps
Sitemap: https://leadtella.com/sitemap.xml
Sitemap: https://leadtella.com/sitemap.html

# Host
Host: https://leadtella.com`

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
