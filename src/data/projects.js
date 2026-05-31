export const projects = [
  {
    id: 'url-shortener',
    title: 'URL Shortener',
    featured: true,
    tagline: 'Production URL service with Redis-backed redirects and analytics',
    description:
      'High-throughput link shortener with cache-first lookups, async click tracking, and a typed REST API. Built for predictable latency under redirect load.',
    architecture: [
      {
        title: 'Redis cache layer',
        detail: 'Hot slug lookups served from Redis; DB fallback on cache miss',
      },
      {
        title: 'Click analytics',
        detail: 'Async event pipeline for visit counts without blocking redirects',
      },
      {
        title: 'REST API design',
        detail: 'Versioned routes · pagination · custom aliases · TTL expiration',
      },
    ],
    features: [
      'Redis caching for sub-millisecond redirect paths on warm keys',
      'Click analytics with async writes — redirects stay non-blocking',
      'Cursor-based pagination for link management endpoints',
      'Custom aliases with collision detection and validation',
      'Link expiration (TTL) and rate limiting on create/resolve',
      'TypeScript frontend consuming a documented REST contract',
    ],
    systemFlow: 'Client → Express API → Redis (cache) → MongoDB → async analytics worker',
    architectureNotes: [
      {
        label: 'Read path',
        text: 'Resolve slug from Redis first; on miss, fetch from MongoDB, populate cache, return 301/302.',
      },
      {
        label: 'Write path',
        text: 'Validate alias + TTL, persist document, warm Redis, enqueue analytics metadata.',
      },
      {
        label: 'Ops',
        text: 'AWS EC2 deployment, environment-scoped config, indexed lookups for scale.',
      },
    ],
    techStack: ['Node.js', 'Express', 'Redis', 'MongoDB', 'TypeScript', 'React', 'REST API'],
    githubUrl: 'https://github.com/luvtomar2005/Url_Shortener',
    liveDemoUrl: null,
  },
  {
    id: 'devbridge',
    title: 'DevBridge',
    featured: false,
    tagline: 'Developer networking platform with real-time messaging',
    description:
      'Full-stack social layer for developers — JWT-secured REST APIs, protected routes, and Socket.IO chat with room-based routing.',
    architecture: [
      {
        title: 'JWT authentication',
        detail: 'HTTP-only cookies · auth middleware · protected route guards',
      },
      {
        title: 'Socket.IO realtime',
        detail: 'Room routing · connection lifecycle · synchronized events',
      },
      {
        title: 'REST API surface',
        detail: 'Domain-separated routers · validation · MongoDB persistence',
      },
    ],
    features: [
      'Stateless JWT auth with HTTP-only cookies and middleware pipeline',
      'Protected API routes and frontend route guards',
      'Real-time chat via Socket.IO with deterministic room routing',
      'Scalable chat architecture — connection lifecycle managed server-side',
      'REST APIs with domain-separated controllers and MongoDB models',
      'Deployed on AWS EC2 with CORS allowlists and env-scoped config',
    ],
    systemFlow: 'Client → REST API + JWT middleware → MongoDB · parallel WebSocket layer (Socket.IO)',
    architectureNotes: [
      {
        label: 'Request flow',
        text: 'Auth middleware and schema validation before domain controllers touch MongoDB.',
      },
      {
        label: 'Realtime',
        text: 'Socket.IO handles room join/leave, message broadcast, and connection teardown.',
      },
      {
        label: 'Security',
        text: 'JWT session handling, protected endpoints, CORS restrictions, production EC2 config.',
      },
    ],
    techStack: ['Node.js', 'Express', 'MongoDB', 'Socket.IO', 'React', 'JWT', 'REST API'],
    githubUrl: 'https://github.com/luvtomar2005/NODE-JS-2026',
    liveDemoUrl: null,
  },
]
