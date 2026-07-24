import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://teamlite.netlify.app';

  // Base static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/career-pages',
    '/insights',
    '/press-release',
    '/pricing',
    '/experts'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
