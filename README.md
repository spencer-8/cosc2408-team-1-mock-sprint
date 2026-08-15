# COSC2408 Team 1 Mock Sprint

This repository contains Team 1's mock sprint website for the COSC2408 Capstone Programming Project. The sprint focused on improving the supplied RMIT Garage Boilerplate with a restyled sign-in page and a protected page that introduces the five members of the team.

Live website: [cosc2408-team-1-mock-sprint.vercel.app](https://cosc2408-team-1-mock-sprint.vercel.app)

## What we built

- A sign-in page based on the approved Microsoft Fluent 2 design direction
- Email and password authentication through Firebase Authentication
- Google sign-in through Firebase Authentication
- A secure server session stored in an HTTP-only cookie
- A protected `/team` page that users see after signing in
- Team member cards with each person's name, role, photo and short introduction
- Initials as a fallback when a team member does not have a photo
- Validation that keeps team member blurbs within the agreed 200-character limit

The original boilerplate pages and notes feature are still included in the repository. The mock sprint work itself was limited to the authentication styling, sign-in redirect and team page.

## How it was made

| Area | Technology | How it is used |
| --- | --- | --- |
| Frontend | Next.js 16, React 19 and TypeScript | Provides the pages, layouts, components and server-side session checks |
| Styling | Tailwind CSS 4 | Implements the approved login and team page styling |
| Authentication | Firebase Authentication | Handles email and password accounts and Google sign-in |
| Sessions | Firebase Admin SDK | Verifies ID tokens and creates secure session cookies |
| Database | Cloud Firestore | Supports the notes feature inherited from the boilerplate |
| Hosting | Vercel | Builds and hosts the Next.js frontend from the `frontend` folder |
| Source control | GitHub | Stores the project, pull requests and review history |
| Checks | GitHub Actions | Runs linting, type checks, frontend tests, backend tests and a dependency security scan |

The team roster is static and read-only for this mock sprint, so its content is stored in the frontend source rather than Firestore. The separate Express backend supplied with the boilerplate has not been deployed because the completed feature does not require it.

## Sign-in flow

1. The user signs in with an email and password or with Google.
2. Firebase Authentication returns an ID token.
3. The frontend sends the token to the session API route.
4. The Firebase Admin SDK verifies the token and creates a secure session cookie.
5. The user is redirected to `/team`.
6. The team layout checks the session before showing the page.

## Run the project locally

### Requirements

- Node.js 22 or later
- pnpm 10 or later
- Access to a Firebase project with Authentication and Firestore enabled

### Setup

```bash
git clone https://github.com/spencer-8/cosc2408-team-1-mock-sprint.git
cd cosc2408-team-1-mock-sprint
pnpm run bootstrap
```

Add the Firebase web configuration and service account values to the root `.env` file, then run:

```bash
pnpm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000). See [Environment Variables](docs/ENV-VARS.md) for the full list of required values.

## Useful commands

```bash
pnpm run dev              # Start the frontend locally
pnpm run build            # Build the frontend and backend packages
pnpm run lint             # Run ESLint across the workspace
pnpm run typecheck        # Run TypeScript checks
pnpm run test:component   # Run frontend tests
pnpm run test             # Run backend unit tests
pnpm run test:all         # Run all tests
pnpm run validate         # Check for leftover boilerplate placeholders
```

## Project structure

```text
frontend/                 Next.js website
  public/team/            Team member photos
  src/app/(auth)/         Sign-in and sign-up pages
  src/app/(team)/         Protected team page and layout
  src/features/team/      Team data, types and card component
  src/lib/firebase/       Firebase client and admin setup
backend/                  Optional Express and Cloud Functions boilerplate
firebase/                 Firestore rules and indexes
docs/                     Requirements, testing evidence and project documents
.github/workflows/        Continuous integration and deployment checks
```

## Deployment

Vercel is connected to this GitHub repository and deploys the `frontend` folder. Changes merged into `main` trigger a new frontend deployment. The required public Firebase web configuration and server-side Firebase values are stored as Vercel environment variables.

Firebase Authentication and Firestore are hosted in the team's Firebase project. The production GitHub environment contains the Firebase credentials used by GitHub Actions to deploy Firestore security rules. The optional backend deployment remains manual and is not part of the current mock sprint website.

## Project documents

| Document | Link |
| --- | --- |
| Master document | [Team A Master Document](<docs/01 - Microsoft AI-Powered Cybersecurity App - Team A_MASTER DOCUMENT.docx>) |
| Requirements | [REQUIREMENTS.md](docs/REQUIREMENTS.md) |
| Login page test evidence | [JR-login-page-restyle-test.md](docs/test-evidence/JR-login-page-restyle-test.md) |
| Team page test evidence | [JR-login-team-page-test.md](docs/test-evidence/JR-login-team-page-test.md) |
| Architecture guide | [ARCHITECTURE.md](docs/ARCHITECTURE.md) |
| Environment variables | [ENV-VARS.md](docs/ENV-VARS.md) |
| CI and deployment | [CI-CD.md](docs/CI-CD.md) |

## Team roles

| Team member | Role |
| --- | --- |
| Spencer Keeghan | Project Manager |
| Rayan Hameed | Business Analyst |
| Haley Wong | UX Designer |
| Manthan Himanshu Punjabi | Developer |
| Jiong Ruan | Developer |

## Credits

The project was developed from the RMIT Garage Boilerplate created by Duc Gia Tin Huynh.
