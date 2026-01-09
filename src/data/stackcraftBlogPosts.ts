import { BookOpen, Code, Server, Layers, Terminal, GitBranch, Database, Workflow, Shield, Cpu } from "lucide-react";

export interface StackCraftPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'playbook' | 'tutorial' | 'article';
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
  icon: React.ElementType;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const stackcraftPosts: StackCraftPost[] = [
  {
    id: "sc-1",
    slug: "production-ready-nodejs-architecture",
    title: "Production-Ready Node.js Architecture Playbook",
    excerpt: "A comprehensive guide to building Node.js applications that scale from thousands to millions of users.",
    content: `
## Building for Scale from Day One

This playbook covers the essential patterns for production-grade Node.js applications.

### Directory Structure

\`\`\`
src/
├── api/           # Route handlers and middleware
├── core/          # Business logic and domain models
├── infrastructure/# Database, cache, external services
├── shared/        # Utilities, types, constants
└── config/        # Environment and feature flags
\`\`\`

### Error Handling Pattern

\`\`\`typescript
// Custom error classes for consistent handling
class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number,
    public code: string,
    public isOperational = true
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
}

// Global error handler middleware
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: { code: err.code, message: err.message }
    });
  }
  
  // Log unexpected errors, return generic message
  logger.error('Unexpected error:', err);
  return res.status(500).json({
    error: { code: 'INTERNAL_ERROR', message: 'Something went wrong' }
  });
};
\`\`\`

### Dependency Injection

\`\`\`typescript
// Container pattern for testability
interface Container {
  userRepository: UserRepository;
  emailService: EmailService;
  cacheService: CacheService;
}

const createContainer = (config: Config): Container => ({
  userRepository: new PostgresUserRepository(config.db),
  emailService: new SendGridEmailService(config.email),
  cacheService: new RedisCache(config.redis)
});
\`\`\`

### Health Checks

\`\`\`typescript
// Comprehensive health check endpoint
app.get('/health', async (req, res) => {
  const checks = await Promise.allSettled([
    db.query('SELECT 1'),
    redis.ping(),
    axios.get(config.externalServiceUrl + '/health')
  ]);
  
  const status = checks.every(c => c.status === 'fulfilled') ? 'healthy' : 'degraded';
  res.status(status === 'healthy' ? 200 : 503).json({ status, checks });
});
\`\`\`

### Key Takeaways

1. **Separate concerns** - Keep business logic independent of frameworks
2. **Fail gracefully** - Handle errors at every layer
3. **Monitor everything** - Logs, metrics, traces from day one
4. **Test in production** - Feature flags and canary deployments
    `,
    category: "playbook",
    author: "StackCraft Engineering",
    authorRole: "Platform Engineering",
    date: "January 5, 2026",
    readTime: "15 min read",
    featured: true,
    tags: ["Node.js", "Architecture", "Backend"],
    icon: Server,
    difficulty: "advanced"
  },
  {
    id: "sc-2",
    slug: "typescript-patterns-production",
    title: "TypeScript Patterns for Production Systems",
    excerpt: "Advanced TypeScript patterns used by senior engineers at top tech companies.",
    content: `
## Beyond Basic Types

TypeScript's real power emerges when you use it to encode business rules and prevent bugs at compile time.

### Branded Types

\`\`\`typescript
// Prevent mixing up different ID types
type UserId = string & { readonly __brand: 'UserId' };
type OrderId = string & { readonly __brand: 'OrderId' };

const createUserId = (id: string): UserId => id as UserId;
const createOrderId = (id: string): OrderId => id as OrderId;

// Compile error: can't pass OrderId where UserId expected
const getUser = (id: UserId) => db.users.find(id);
getUser(createOrderId('123')); // ❌ Type error!
\`\`\`

### Result Type Pattern

\`\`\`typescript
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

const parseConfig = (raw: string): Result<Config, ParseError> => {
  try {
    const config = JSON.parse(raw);
    return { success: true, data: validateConfig(config) };
  } catch (e) {
    return { success: false, error: new ParseError(e.message) };
  }
};

// Forces error handling
const result = parseConfig(configString);
if (result.success) {
  startServer(result.data); // Type narrowed to Config
} else {
  logger.error(result.error); // Type narrowed to ParseError
}
\`\`\`

### Builder Pattern with Type Safety

\`\`\`typescript
class QueryBuilder<TSelected = never> {
  private query = { select: [], where: [], orderBy: [] };
  
  select<K extends string>(field: K): QueryBuilder<TSelected | K> {
    this.query.select.push(field);
    return this as QueryBuilder<TSelected | K>;
  }
  
  build(): Query & { fields: TSelected } {
    return this.query as any;
  }
}

// Type tracks which fields are selected
const query = new QueryBuilder()
  .select('name')
  .select('email')
  .build();
// query.fields is 'name' | 'email'
\`\`\`

### Exhaustive Pattern Matching

\`\`\`typescript
type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

const getStatusMessage = (status: PaymentStatus): string => {
  switch (status) {
    case 'pending': return 'Awaiting payment';
    case 'completed': return 'Payment successful';
    case 'failed': return 'Payment failed';
    case 'refunded': return 'Payment refunded';
    default:
      // Compile error if we miss a case
      const _exhaustive: never = status;
      throw new Error(\`Unhandled status: \${_exhaustive}\`);
  }
};
\`\`\`
    `,
    category: "tutorial",
    author: "StackCraft Engineering",
    authorRole: "Senior Engineer",
    date: "January 3, 2026",
    readTime: "10 min read",
    featured: true,
    tags: ["TypeScript", "Patterns", "Best Practices"],
    icon: Code,
    difficulty: "intermediate"
  },
  {
    id: "sc-3",
    slug: "database-migrations-zero-downtime",
    title: "Zero-Downtime Database Migrations",
    excerpt: "How to evolve your database schema without taking your application offline.",
    content: `
## The Art of Safe Migrations

Schema changes are one of the riskiest operations in production. Here's how to do them safely.

### The Expand-Contract Pattern

Never remove or rename in a single migration. Instead:

1. **Expand** - Add the new structure
2. **Migrate** - Move data to new structure
3. **Contract** - Remove old structure

\`\`\`sql
-- Step 1: Add new column (backward compatible)
ALTER TABLE users ADD COLUMN full_name VARCHAR(255);

-- Step 2: Backfill data
UPDATE users SET full_name = CONCAT(first_name, ' ', last_name);

-- Step 3: Update application to use new column
-- ... deploy new code ...

-- Step 4: Remove old columns (only after all code updated)
ALTER TABLE users DROP COLUMN first_name, DROP COLUMN last_name;
\`\`\`

### Online Schema Changes

For large tables, use online DDL tools:

\`\`\`bash
# Using gh-ost for MySQL
gh-ost \\
  --alter="ADD COLUMN status VARCHAR(20)" \\
  --database=mydb \\
  --table=orders \\
  --execute
\`\`\`

### Feature Flags for Schema Changes

\`\`\`typescript
const getUserProfile = async (userId: string) => {
  if (featureFlags.isEnabled('use_new_profile_table')) {
    return db.userProfiles.findOne({ userId });
  }
  // Fall back to old structure
  return buildProfileFromLegacy(userId);
};
\`\`\`

### Validation Before Deletion

\`\`\`typescript
// Verify no code is using old column before dropping
const checkColumnUsage = async (table: string, column: string) => {
  const queries = await analytics.getQueriesUsingColumn(table, column);
  if (queries.length > 0) {
    throw new Error(\`Column still in use: \${queries.length} queries\`);
  }
};
\`\`\`

### Key Principles

1. **Always reversible** - Every migration should have a rollback path
2. **Small batches** - Large data moves should be chunked
3. **Monitor throughout** - Watch query performance during migration
4. **Test with production data** - Use anonymized prod snapshots
    `,
    category: "playbook",
    author: "StackCraft Engineering",
    authorRole: "Database Engineering",
    date: "December 28, 2025",
    readTime: "12 min read",
    tags: ["Database", "Migrations", "DevOps"],
    icon: Database,
    difficulty: "advanced"
  },
  {
    id: "sc-4",
    slug: "ci-cd-pipeline-best-practices",
    title: "Building a Modern CI/CD Pipeline",
    excerpt: "From commit to production in minutes with confidence.",
    content: `
## The Modern Deployment Pipeline

A well-designed CI/CD pipeline is the foundation of reliable software delivery.

### Pipeline Stages

\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Tests
        run: npm test -- --coverage
      - name: Upload Coverage
        uses: codecov/codecov-action@v3

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Security Scan
        run: npm audit --production
      - name: SAST
        uses: github/codeql-action/analyze@v2

  build:
    needs: [test, security]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build
        run: npm run build
      - name: Build Docker Image
        run: docker build -t app:\${{ github.sha }} .

  deploy-staging:
    needs: build
    environment: staging
    steps:
      - name: Deploy to Staging
        run: kubectl set image deployment/app app=app:\${{ github.sha }}
      - name: Run E2E Tests
        run: npm run test:e2e

  deploy-production:
    needs: deploy-staging
    environment: production
    steps:
      - name: Canary Deploy
        run: ./scripts/canary-deploy.sh \${{ github.sha }}
      - name: Monitor Canary
        run: ./scripts/monitor-canary.sh
      - name: Full Rollout
        run: kubectl rollout status deployment/app
\`\`\`

### Canary Deployments

\`\`\`typescript
// Traffic shifting based on health metrics
const canaryDeploy = async (newVersion: string) => {
  // Start with 5% traffic
  await setTrafficSplit({ new: 5, old: 95 });
  
  // Monitor for issues
  const healthy = await monitorForMinutes(10);
  
  if (!healthy) {
    await rollback();
    throw new Error('Canary failed health checks');
  }
  
  // Gradual increase: 5% -> 25% -> 50% -> 100%
  for (const percent of [25, 50, 100]) {
    await setTrafficSplit({ new: percent, old: 100 - percent });
    await monitorForMinutes(5);
  }
};
\`\`\`

### Pipeline Optimization

1. **Parallelization** - Run independent jobs concurrently
2. **Caching** - Cache dependencies and build artifacts
3. **Fail fast** - Run quick checks first
4. **Artifact reuse** - Build once, deploy everywhere
    `,
    category: "tutorial",
    author: "StackCraft Engineering",
    authorRole: "DevOps Engineering",
    date: "December 22, 2025",
    readTime: "8 min read",
    tags: ["CI/CD", "DevOps", "Automation"],
    icon: Workflow,
    difficulty: "intermediate"
  },
  {
    id: "sc-5",
    slug: "api-design-principles",
    title: "API Design Principles That Scale",
    excerpt: "Design APIs that are intuitive, maintainable, and performant at any scale.",
    content: `
## Designing APIs for the Long Term

Great API design makes the difference between a joy to integrate and a maintenance nightmare.

### Consistent Resource Naming

\`\`\`
# Good
GET    /users/{id}
GET    /users/{id}/orders
POST   /users/{id}/orders
DELETE /users/{id}/orders/{orderId}

# Bad
GET    /getUser/{id}
GET    /user/{id}/getAllOrders
POST   /createOrderForUser/{id}
DELETE /removeOrder/{orderId}
\`\`\`

### Error Response Format

\`\`\`typescript
interface ApiError {
  code: string;           // Machine-readable error code
  message: string;        // Human-readable message
  details?: ErrorDetail[];// Field-level errors
  requestId: string;      // For debugging/support
}

// Example response
{
  "code": "VALIDATION_ERROR",
  "message": "Invalid request parameters",
  "details": [
    { "field": "email", "code": "INVALID_FORMAT", "message": "Must be valid email" }
  ],
  "requestId": "req_abc123"
}
\`\`\`

### Pagination Pattern

\`\`\`typescript
interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    cursor: string | null;    // For next page
    hasMore: boolean;
    totalCount?: number;      // Optional, can be expensive
  };
}

// Usage
GET /orders?cursor=eyJpZCI6MTIzfQ&limit=20

// Response
{
  "data": [...],
  "pagination": {
    "cursor": "eyJpZCI6MTQzfQ",
    "hasMore": true
  }
}
\`\`\`

### Rate Limiting Headers

\`\`\`
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
\`\`\`

### Versioning Strategy

\`\`\`typescript
// URL versioning (most explicit)
GET /v1/users

// Header versioning (cleaner URLs)
GET /users
Accept: application/vnd.api+json; version=1

// We recommend URL versioning for its clarity
\`\`\`
    `,
    category: "article",
    author: "StackCraft Engineering",
    authorRole: "API Platform",
    date: "December 18, 2025",
    readTime: "7 min read",
    tags: ["API Design", "REST", "Best Practices"],
    icon: Layers,
    difficulty: "beginner"
  },
  {
    id: "sc-6",
    slug: "observability-production-systems",
    title: "Observability for Production Systems",
    excerpt: "Logs, metrics, and traces - building visibility into complex distributed systems.",
    content: `
## The Three Pillars of Observability

Understanding what's happening in production requires a multi-faceted approach.

### Structured Logging

\`\`\`typescript
// Use structured logging, not string concatenation
const logger = createLogger({
  defaultMeta: { service: 'order-service', version: '1.2.3' }
});

// Good
logger.info('Order created', {
  orderId: order.id,
  userId: user.id,
  amount: order.total,
  processingTimeMs: endTime - startTime
});

// Bad
logger.info(\`Order \${order.id} created for user \${user.id}\`);
\`\`\`

### Metrics with Prometheus

\`\`\`typescript
import { Counter, Histogram } from 'prom-client';

const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.01, 0.05, 0.1, 0.5, 1, 5]
});

const httpRequestTotal = new Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});

// Middleware to track metrics
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    httpRequestDuration.observe(
      { method: req.method, route: req.route?.path, status: res.statusCode },
      duration
    );
    httpRequestTotal.inc({ method: req.method, route: req.route?.path, status: res.statusCode });
  });
  next();
});
\`\`\`

### Distributed Tracing

\`\`\`typescript
import { trace, SpanStatusCode } from '@opentelemetry/api';

const tracer = trace.getTracer('order-service');

const processOrder = async (order: Order) => {
  return tracer.startActiveSpan('processOrder', async (span) => {
    try {
      span.setAttribute('order.id', order.id);
      
      await tracer.startActiveSpan('validateOrder', async (validateSpan) => {
        await validateOrder(order);
        validateSpan.end();
      });
      
      await tracer.startActiveSpan('chargePayment', async (paymentSpan) => {
        await chargePayment(order);
        paymentSpan.end();
      });
      
      span.setStatus({ code: SpanStatusCode.OK });
    } catch (error) {
      span.setStatus({ code: SpanStatusCode.ERROR, message: error.message });
      throw error;
    } finally {
      span.end();
    }
  });
};
\`\`\`

### Alerting Best Practices

- Alert on symptoms, not causes
- Include runbook links in alerts
- Set appropriate thresholds to avoid alert fatigue
- Use severity levels meaningfully
    `,
    category: "playbook",
    author: "StackCraft Engineering",
    authorRole: "SRE Team",
    date: "December 15, 2025",
    readTime: "11 min read",
    tags: ["Observability", "Monitoring", "SRE"],
    icon: Terminal,
    difficulty: "advanced"
  }
];
