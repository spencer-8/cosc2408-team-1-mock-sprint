# Bootstrap Restyling Requirements

> **Draft status:** The decisions in Section 7 are awaiting team input coordinated by the PM. The PM will confirm the final decisions after consulting the relevant roles.

## 1. Purpose
This document defines the content and display requirements for the team page, confirms the permitted scope of the login-page restyling, and documents expected edge-case behaviour.

## 2. Feature Scope
### 2.1 In Scope
- Restyle the existing login page without changing its validation, error handling, authentication state, or session behaviour.
- Reuse the boilerplate's existing authentication and session functionality.
- Direct a successfully authenticated user to the team page.
- Display the team name and the required information for each team member.
- Handle missing images and unusually long text without breaking the layout.
### 2.2 Out of Scope
- Changes to Firebase authentication logic.
- Changes to login validation, error handling, authentication state, or session behaviour.
- New authentication methods or social-login providers.
- Changes to registration, password-reset, logout, or account-management functionality.
- Modifications to the existing notes functionality or routes; they must remain unchanged.
- Individual profile pages, search, filtering, messaging or administration features.
- Any functionality not listed in the approved requirements or Planner tasks.


## 3. Team Page Requirements
### 3.1 Page-Level Requirements
- The page must display the approved team name: **Group 01 - Microsoft - AI-Powered Cybersecurity App**.
- The page must display one profile card or section for every team member.
- Member information must use a consistent visual structure.
- The page must remain readable when names, roles, blurbs and image dimensions vary.

### 3.2 Team Members

| Member | Role | Photo supplied? | Blurb supplied? |
|---|---|---|---|
| Spencer Keeghan | Project Manager | Pending | Pending |
| Rayan Hameed | Business Analyst | Pending | Pending |
| Haley Wong | UX Designer | Pending | Pending |
| Jiong Ruan | Developer 1 | Pending | Pending |
| Manthan Punjabi | Developer 2 | Pending | Pending |

### 3.3 Fields, Validation, and Display Rules

| Field | Required? | Validation/content rules | Display rules | Fallback behaviour |
|---|---|---|---|---|
| Team name | Yes | Must not be empty; use the team's approved name. | Display once as the main page heading. | Do not publish until the approved name is provided. |
| Member name | Yes | Must not be empty; trim leading and trailing spaces; use the member's preferred full name. | Display prominently on the member card; wrap long names. | Display "Name unavailable" during development and correct before release. |
| Photo | Yes | Use a valid local image path or approved URL; accepted formats are JPG, PNG, and WebP; meaningful alt text is required. | Use a consistent size and aspect ratio; crop without stretching. | Display the approved placeholder image if missing or broken. |
| Role | Yes | Must match the role agreed by the team; multiple roles are permitted. | Display near or below the member's name; wrap long role titles. | Display "Role unavailable" during development and correct before release. |
| Blurb | Yes | Plain text; one or two sentences; final maximum length pending confirmation under D-03. | Wrap within the card; maintain consistent spacing; do not overlap adjacent content. | Display "Blurb unavailable" during development and correct before release. |

### 3.4 Content Source and Edit Permissions
- **Content source:** Pending confirmation under D-01.
- **Who may edit team information:** Pending confirmation under D-01.
- **How updates are published:** Pending confirmation under D-01.

## 4. Login Styling Scope
### 4.1 Permitted Changes
The login task is styling-only. The following visual changes are permitted:
- Colours and backgrounds
- Typography
- Spacing, alignment, and layout
- Input, label, button, and error-message presentation
- Approved visual assets such as a logo or background image
- Accessibility improvements that do not change authentication behaviour

### 4.2 Prohibited Changes
The following behaviour must remain unchanged:
- Firebase authentication logic
- Credential handling
- Input validation rules and validation triggers
- Authentication error handling and error conditions
- Session creation, persistence, expiry and logout behaviour
- Authentication-state management
- Security controls

### 4.3 Redirect Clarification
- Redirect implementation belongs to the team-page build task rather than the login styling task.
- After successful authentication, the user must be directed to the agreed team-page route.
- The redirect is a routing change after successful authentication; it must not modify authentication or session behaviour.
- Failed authentication must not direct the user to the team page.

## 5. Edge Cases

| Edge Case | Expected Behaviour |
| --- | --- |
| Photo is missing | Display the approved placeholder image. |
| Photo fails to load | Replace it with the approved placeholder image. |
| Photos have different dimensions | Crop them consistently without stretching. |
| Member name is unusually long | Wrap the name and keep it within the member card. |
| Role title is unusually long | Wrap the role without overlapping other content. |
| Blurb exceeds the proposed length | Wrap the text without breaking the layout; the final publication limit is pending under D-03. |
| Content includes special characters | Display the characters correctly without corrupting the layout. |
| User submits invalid login details | Preserve the boilerplate's existing validation and error behaviour; remain on the login page and do not redirect to the team page. |
| Unauthenticated user accesses the team page | Redirect the user to the login page and do not display the team-page content. |

## 6. Acceptance Criteria

### AC-01: Successful login

**Given** the user is on the login page,  
**When** they enter valid credentials and submit the login form,  
**Then** they are successfully authenticated, a valid session is established, and they are directed to the team page.

### AC-02: Invalid login

**Given** the user is on the login page,  
**When** they enter invalid credentials and submit the login form,  
**Then** the existing login error is displayed and they remain on the login page.

### AC-03: Display team information

**Given** an authenticated user has accessed the team page,  
**When** the team page finishes loading,  
**Then** the approved team name and every team member's name, photo or approved placeholder image, role, and blurb are displayed.

### AC-04: Missing member photo

**Given** a team member does not have a valid photo,  
**When** their information is displayed on the team page,  
**Then** the approved placeholder image is displayed without breaking the page layout.

### AC-05: Broken member photo

**Given** a team member's photo cannot be loaded,  
**When** their information is displayed on the team page,  
**Then** the approved placeholder image replaces the broken image.

### AC-06: Different photo dimensions

**Given** team-member photos have different original dimensions,  
**When** the photos are displayed on the team page,  
**Then** they are cropped to a consistent size and aspect ratio without visible stretching.

### AC-07: Long member name

**Given** a team member has an unusually long name,  
**When** their information is displayed on the team page,  
**Then** the name wraps within its allocated section without overlapping other content.

### AC-08: Long role title

**Given** a team member has an unusually long role title,  
**When** their information is displayed on the team page,  
**Then** the role title wraps within its allocated section without overlapping other content.

### AC-09: Long blurb

**Given** a team member has a blurb that approaches or exceeds the proposed length,  
**When** their information is displayed on the team page,  
**Then** the blurb remains within its allocated section without overlapping other content.

### AC-10: Unauthenticated access

**Given** the user is not authenticated,  
**When** they attempt to access the team page directly,  
**Then** they are redirected to the login page and the team-page content is not displayed.

### AC-11: Login styling regression

**Given** the login page has been visually restyled,   
**When** the existing login and session flows are tested,  
**Then** authentication, validation, error handling, session behaviour, and security controls operate as they did before the styling changes.

### AC-12: Special characters

**Given** a team member's information contains supported special characters (such as apostrophes, hyphens or accented letters),  
**When** their information is displayed on the team page,  
**Then** the characters display correctly without corrupting the content or page layout.

## 7. Open Decisions

### Clarification Context

On 06/08/2026, the supervisor confirmed that the assignment does not prescribe the strict requirements for D-01, D-02, and D-03. These decisions may therefore be determined internally by the team. The BA has provided recommendations, the PM will coordinate input from the relevant roles, and the PM will confirm the final outcomes. The BA will then update the affected requirements and record the outcome in Section 8.

| ID | Decision required | BA recommendation | Consulted roles | Decision owner | Status |
|---|---|---|---|---|---|
| D-01 | Should the team page be static/read-only or editable? | Implement a static, read-only page because profile editing would add forms, storage, permissions and testing beyond the stated sprint scope. | UX, Dev 1 and Dev 2 | PM | Awaiting review |
| D-02 | Should the team page support desktop and mobile layouts? | Require desktop support only. Mobile-specific design, implementation, and testing are not included because they are not explicitly required and would expand the mock-sprint scope. | UX, Dev 1 and Dev 2 | PM | Awaiting review |
| D-03 | What should the maximum blurb length be? | Limit blurbs to 200 characters to maintain consistent member-card layouts. | UX | PM | Awaiting review |

## 8. Decision Log

| ID | Final decision | Rationale | Approved by | Date |
|---|---|---|---|---|
