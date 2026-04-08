# OCIO Education App

A self-paced, client-side web app for building OCIO and institutional-investing fluency. It keeps the PE Learning app structure, but the curriculum is now a 20-lesson OCIO education program covering delegated governance, client archetypes, asset allocation, LDI, implementation, private markets, liquidity, reporting, risk, team structure, and provider diligence.

## What it does

- Walks through a 20-lesson OCIO curriculum with lesson content, quizzes, confidence tracking, review cards, practice, concept mapping, and search.
- Stores progress locally in the browser, with separate `ocio-app-*` storage keys so it does not share state with the PE app.
- Includes optional AI help and short-response evaluation through OpenRouter when `OPENROUTER_API_KEY` is set.

## Routes

- `/` dashboard
- `/modules` lesson list and progress
- `/lesson/[lessonId]` lesson content and quiz
- `/practice` cumulative and wrong-answer drills
- `/review` spaced review cards
- `/concepts` dependency and weakness map
- `/search` full-text lesson search
- `/calibration` confidence versus score view

## Local setup

```bash
npm install --strict-ssl=false
npm run dev
```

Open `http://localhost:3000`.

If your machine has the same TLS certificate-chain issue this environment had, use system TLS certs for builds:

```bash
$env:NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS='1'
npm run build
```

## Environment

Create `.env.local` if you want AI help enabled:

```bash
OPENROUTER_API_KEY=
```

The app still works fully without that key.

## Source note

The OCIO curriculum source text is preserved in `LessonContent.txt`, and the app runtime content is in `lib/lessonContent.ts`.
