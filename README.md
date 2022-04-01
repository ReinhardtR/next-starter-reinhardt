## Technologies

- Next.js
- TypeScript
- tRPC
- Prisma
- PlanetScale
- Tailwind CSS (with Prettier plugin)

## Getting Started

### 1. Create a Next.js app using this starter repository.

```bash
yarn create next-app --example https://github.com/ReinhardtR/next-starter-reinhardt
```

### 2. Install all dependicies.

```bash
yarn
```

### 3. Setup the Database

The Prisma config in this repository is setup to use PlanetScale, but any database can be used.

### 3. Set the enviroment variables in **.env** and **.env.local**.

### 4. Generate the Prisma client.

```bash
yarn prisma generate
```

### 5. Run a local development server.

```bash
yarn dev
```

### 6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/ReinhardtR/next-starter-reinhardt)
