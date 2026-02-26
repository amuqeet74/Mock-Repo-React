# Realtime Chat Application

### [Live Site](https://realtime-chat-application.netlify.com)

### [🌟 Become a top 1% Next.js developer in only one course](https://jsmastery.pro/next15)
### [🚀 Land your dream programming job in 6 months](https://jsmastery.pro/masterclass)

![Chat Application](https://i.ytimg.com/vi/ZwFA3YMfkoc/maxresdefault.jpg)

## Introduction
This is a code repository for the corresponding video tutorial. 

In this video, we will create a full Realtime Chat Application. We're going to use  React on the front end, with NodeJS + Socket.io web socket library on the back end. 

By the end of this video, you will have a strong understanding of how to send and receive messages using web sockets and Socket.io to make any real-time application.

## Launch your development career with project-based coaching - https://www.jsmastery.pro

Setup:
- run ```npm i && npm start``` for both client and server side to start the development server

## API testing (SE 2240 Lab 2)

This project uses Jest + Supertest in the server package.

### Supabase setup

1) Create a Supabase project.
2) Create a table named `healthcheck` with an `id` column.
3) Create a table named `messages` with columns `id`, `room`, `user`, `text`, `created_at`.
4) Create a table named `users` with columns `id`, `name`, `room`.
5) Ensure the service role key is used, or allow reads/writes for the tables.
6) Add your credentials to `.env` (root of the repo).

### Supabase migrations (instead of DBeaver)

This repo now includes:

- `supabase/migrations/20260225120000_init_chat_schema.sql`
- `supabase/seed.sql`

Use Supabase CLI migrations:

```bash
# one-time login and project link
npx supabase login
npx supabase link --project-ref <your-project-ref>

# apply local migration files to your hosted Supabase project
npx supabase db push
```

To create a new migration file later:

```bash
npx supabase migration new <migration_name>
```

Then put SQL in the new file and run `npx supabase db push` again.

### GitHub Actions test automation

The workflow in `.github/workflows/test.yml` runs server tests on:

- push to `main` or `master`
- pull requests targeting `main` or `master`

Add these GitHub repository secrets so CI can access Supabase:

- `SUPABASE_URL`
- `SUPABASE_KEY`

### Install test dependencies

```
cd server
npm install
```

### Run tests

```
npm test
```

### Endpoints covered

- GET /api/health (happy + sad path)
- GET /api/rooms/:room/messages (happy + sad path)
- POST /api/users (happy + sad path)
- GET /api/users

Note: insert at least one `messages` row with `room = lobby` so the happy-path test passes.


