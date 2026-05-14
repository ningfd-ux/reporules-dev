export interface DetectedStack {
  frameworks: string[];
  styling: string[];
  database: string[];
  validation: string[];
  backend: string[];
}

const FRAMEWORK_MAP: Record<string, string> = {
  next: "Next.js App Router",
  "next.js": "Next.js App Router",
  react: "React",
  "react-dom": "React",
  vue: "Vue.js",
  nuxt: "Nuxt.js",
  svelte: "Svelte",
  "@sveltejs/kit": "SvelteKit",
  angular: "Angular",
  "create-react-app": "React (CRA)",
  gatsby: "Gatsby",
  "remix-run": "Remix",
  astro: "Astro",
};

const STYLING_MAP: Record<string, string> = {
  tailwindcss: "Tailwind CSS",
  "styled-components": "Styled Components",
  "@emotion/react": "Emotion",
  "emotion": "Emotion",
  sass: "Sass",
  "node-sass": "Sass",
  less: "Less",
  "css-modules": "CSS Modules",
};

const DATABASE_MAP: Record<string, string> = {
  prisma: "Prisma ORM",
  drizzle: "Drizzle ORM",
  mongoose: "Mongoose (MongoDB)",
  "typeorm": "TypeORM",
  sequelize: "Sequelize",
  "knex": "Knex.js",
  "better-sqlite3": "SQLite",
  "@prisma/client": "Prisma ORM",
  "pg": "PostgreSQL",
  "postgres": "PostgreSQL",
  "redis": "Redis",
};

const VALIDATION_MAP: Record<string, string> = {
  zod: "Zod",
  yup: "Yup",
  joi: "Joi",
  "@hapi/joi": "Joi",
  "zod-validation-error": "Zod",
  "valibot": "Valibot",
};

const BACKEND_MAP: Record<string, string> = {
  express: "Express.js",
  fastify: "Fastify",
  hono: "Hono",
  koa: "Koa",
  "@fastify": "Fastify",
  nest: "NestJS",
  "@nestjs": "NestJS",
};

export function detectStack(deps: Record<string, string>): DetectedStack {
  const result: DetectedStack = {
    frameworks: [],
    styling: [],
    database: [],
    validation: [],
    backend: [],
  };

  const allDeps = { ...deps };

  for (const [key, label] of Object.entries(FRAMEWORK_MAP)) {
    if (key in allDeps && !result.frameworks.includes(label)) {
      result.frameworks.push(label);
    }
  }

  for (const [key, label] of Object.entries(STYLING_MAP)) {
    if (key in allDeps && !result.styling.includes(label)) {
      result.styling.push(label);
    }
  }

  for (const [key, label] of Object.entries(DATABASE_MAP)) {
    if (key in allDeps && !result.database.includes(label)) {
      result.database.push(label);
    }
  }

  for (const [key, label] of Object.entries(VALIDATION_MAP)) {
    if (key in allDeps && !result.validation.includes(label)) {
      result.validation.push(label);
    }
  }

  for (const [key, label] of Object.entries(BACKEND_MAP)) {
    if (key in allDeps && !result.backend.includes(label)) {
      result.backend.push(label);
    }
  }

  return result;
}

export function formatStackSummary(stack: DetectedStack): string[] {
  return [
    ...stack.frameworks,
    ...stack.styling,
    ...stack.database,
    ...stack.validation,
    ...stack.backend,
  ];
}
