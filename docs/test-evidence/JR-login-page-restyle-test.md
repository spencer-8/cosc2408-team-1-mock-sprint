# JR Test Evidence - Login Page Restyle

Date: 2026-08-13
Tester: JR
Repository: `spencer-8/cosc2408-team-1-mock-sprint`
Pull request: `#10`
Branch under test: `feature/login-page-restyle`
Local URL used during test: `http://localhost:3001`

## Scope

Planner task: `[BOOTSTRAP RESTYLING] - Test Edge Cases & Log Bugs`

This branch does not include the Team page route. Testing focused on the login restyle branch behavior:

- Restyled sign-in page rendering
- Invalid login handling
- Direct protected-route access without login
- Valid login redirect behavior
- Bug logging with reproduction steps

## Automated Checks

Passed:

- `pnpm run validate`
- `pnpm --filter frontend lint`
- `pnpm --filter frontend typecheck`

Note: the first typecheck attempt in the local test environment failed because stale generated `.next/dev/types` referenced the Team page route from the previous branch. Moving the generated `.next` cache out of the repo path and rerunning typecheck passed.

## Browser Checks

### Sign-in Page Render

Status: Passed

Observed:

- Page loaded at `/auth/signin`.
- Header displayed: `Group 01 - Microsoft - AI-Powered Cybersecurity App`.
- Restyled sign-in panel rendered.
- Email input, password input, Sign in button, Continue with Google button, and Create one link were visible.
- No visual overlap was observed on the captured desktop viewport.

Screenshot:

- `docs/test-evidence/assets/login-page-restyle-signin.png`

### Empty Submit Validation

Status: Passed

Steps:

1. Open `/auth/signin`.
2. Click `Sign in` with empty fields.

Expected:

- User remains on sign-in page.
- Email and password validation messages are shown.

Actual:

- User remained on `/auth/signin`.
- Email message shown: `Please enter a valid email address`.
- Password message shown: `Password is required`.

### Malformed Email Validation

Status: Passed

Steps:

1. Enter `invalid-email`.
2. Enter a password.
3. Click `Sign in`.

Expected:

- Form does not submit to Firebase.
- Email validation message remains visible.

Actual:

- User remained on `/auth/signin`.
- Email message shown: `Please enter a valid email address`.

### Invalid Login

Status: Passed

Steps:

1. Enter a valid-format email that does not exist.
2. Enter an incorrect password.
3. Click `Sign in`.

Expected:

- User remains on sign-in page.
- Invalid credentials feedback is shown.

Actual:

- User remained on `/auth/signin`.
- Firebase returned a 400 sign-in response, which is expected for invalid credentials.

### Direct Protected Route Access Without Login

Status: Passed

Steps:

1. Open `/dashboard` while unauthenticated.

Expected:

- User is redirected to sign-in.

Actual:

- User was redirected to `/auth/signin?redirect=%2Fdashboard`.

Screenshot:

- `docs/test-evidence/assets/login-page-restyle-redirect-signin.png`

### Valid Login

Status: Passed with redirect issue noted below

Steps:

1. Open `/profile` while unauthenticated.
2. Confirm redirect to `/auth/signin?redirect=%2Fprofile`.
3. Sign in with the provided QA account.

Expected:

- User signs in successfully.
- User returns to `/profile`, because the sign-in URL contains `redirect=%2Fprofile`.

Actual:

- User signed in successfully.
- User landed on `/dashboard`.

Screenshot:

- `docs/test-evidence/assets/login-page-restyle-valid-login-dashboard.png`

## Bug Log

### Bug 1: Login Ignores Redirect Query After Protected Route Bounce

Severity: Medium

Branch: `feature/login-page-restyle`

Steps to reproduce:

1. Ensure the browser is signed out.
2. Open `http://localhost:3001/profile`.
3. Observe redirect to `http://localhost:3001/auth/signin?redirect=%2Fprofile`.
4. Sign in with a valid account.

Expected:

- After successful sign-in, the user should be redirected to `/profile`.

Actual:

- After successful sign-in, the user is redirected to `/dashboard`.

Evidence:

- The proxy correctly adds `redirect=%2Fprofile`.
- `frontend/src/app/(auth)/auth/signin/page.tsx` redirects to `/dashboard` after successful email or Google sign-in instead of reading the `redirect` query parameter.

Suggested fix:

- Read the `redirect` search parameter on the sign-in page.
- After successful sign-in, redirect to that path when present and safe.
- Fall back to `/dashboard` when no redirect parameter exists.

## Planner Update

Use this update:

`Login page restyle tested. Empty submit, malformed email, invalid login, and protected-route redirect to sign-in passed. Valid login works, but one bug was found: after visiting /profile unauthenticated, sign-in URL contains redirect=/profile, but successful login lands on /dashboard instead of returning to /profile. Evidence documented in docs/test-evidence/JR-login-page-restyle-test.md.`
