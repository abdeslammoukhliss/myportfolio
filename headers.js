const ContentSecurityPolicy = `
  default-src 'self';
  worker-src 'self' blob:;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
  child-src *.google.com *.spotify.com;
  style-src 'self' *.googleapis.com 'unsafe-inline' 'unsafe-eval';
  img-src 'self' *.gstatic.com * blob: data:;
  object-src 'none';
  base-uri 'none';
  media-src 'self' *.cdninstagram.com;
  connect-src *;
  font-src 'self' *.gstatic.com data:;
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

module.exports = [
  {
    source: '/',
    headers: securityHeaders,
  },
  {
    source: '/:path*',
    headers: securityHeaders,
  },
  {
    source: '/feed.xml',
    headers: [
      {
        key: 'Content-Type',
        value: 'application/rss+xml;charset=utf-8',
      },
    ],
  },
]