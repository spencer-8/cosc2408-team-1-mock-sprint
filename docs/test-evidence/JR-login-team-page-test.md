# JR Test Evidence - Login Redirect and Team Page

Date: 2026-08-13
Tester: JR
Repository: `spencer-8/cosc2408-team-1-mock-sprint`
Pull request: `#12`
Branch under test: `feature/team-page-auth-redirect`

## Task: Test login -> redirect -> Team page

Status: Passed

Checklist:

- Valid login tested end-to-end with Google sign-in.
- Redirect to Team page confirmed after login.
- Team page content verified visible and complete on desktop viewport.
- Test evidence document updated.

Evidence:

- Signed-in user shown in the app bar: `mrhhxs@gmail.com`.
- Team page heading rendered: `Group 01 - Microsoft - AI-Powered Cybersecurity App`.
- Five team member cards rendered:
  - Spencer Keeghan - Project Manager
  - Rayan Hameed - Business Analyst
  - Haley Wong - UX Designer
  - Manthan Punjabi - Developer 1
  - Jiong Ruan - Developer 2
- Screenshot: `docs/test-evidence/assets/login-team-page.png`

Result:

No bug found for the valid login -> redirect -> Team page flow.

## Task: Test edge cases and log bugs

Status: Partially tested

Completed:

- Missing-photo case tested visually. Team members without profile photos render initials in a circular fallback avatar.
- Long-blurb display tested visually on desktop. Multi-line blurbs remain readable inside cards and do not overlap adjacent content in the captured viewport.
- Firebase account email/reset issue checked. Email was delivered to Junk, so this is not an application bug.

Pending:

- Invalid login tested.
- Direct Team page access without login tested and confirmed redirect.

Current bug log:

No bugs logged from the completed checks above.

## Planner Update

Use this update:

`Valid login tested with Google sign-in. Redirect to Team page confirmed. Required Team page content is visible and complete. Missing-photo fallback and long-blurb rendering checked. Password/reset email arrived in Junk, so no Firebase/app bug logged. Invalid login and direct unauthenticated Team page access still need final confirmation.`
