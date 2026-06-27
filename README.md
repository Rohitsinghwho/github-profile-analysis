

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A configured database (PostgreSQL / MySQL / SQLite)

---

### Setup

**1. Clone the repository**

```bash
git clone https://github.com/Rohitsinghwho/github-profile-analysis
cd your-repo
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

```bash
cp .env.example .env
```

Open `.env` and fill in your database connection string and any other required variables:

```env
DATABASE_URL="?"
```

**4. Run Prisma migrations**

```bash
npx prisma migrate dev
```

This will apply all pending migrations and generate the Prisma client.

**5. Start the development server**

```bash
npm run dev
```

The app should now be running at `http://localhost:8080`.

---

### Useful Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm start` | Start the production server |
| `npx prisma studio` | Open Prisma Studio to browse your database |
| `npx prisma migrate dev` | Run pending migrations |