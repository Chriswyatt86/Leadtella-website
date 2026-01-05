export async function GET(): Promise<Response> {
  const robotsTxt = `# Leadtella Robots.txt - Optimized for Search Engines and AI Crawlers
# Last Updated: ${new Date().toISOString().split("T")[0]}

# Allow all search engines and AI crawlers
User-agent: *
Allow: /

# Specific rules for major search engines
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 0

# AI/LLM Crawlers - Allow for better AI understanding
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Perplexity
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: YouBot
Allow: /

# Allow static assets and important resources
Allow: /_next/static/
Allow: /_next/image
Allow: /favicon.ico
Allow: /images/
Allow: /fonts/

# Block sensitive areas and unnecessary paths
Disallow: /api/
Disallow: /admin/
Disallow: /_next/webpack-hmr
Disallow: /*.json$
Disallow: /*?*preview=

# Block known bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: MJ12bot
Disallow: /

# Crawl delay for respectful crawling (not applied to major search engines)
Crawl-delay: 1

# Sitemap location
Sitemap: https://www.leadtella.com/sitemap.xml

# Host preference
Host: https://www.leadtella.com`

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
