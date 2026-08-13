import { teamMemberSchema, type TeamMember } from './types'

export const TEAM_NAME = 'Group 01 - Microsoft - AI-Powered Cybersecurity App'
export const TEAM_TAGLINE = 'Meet the people working on the project.'

/**
 * The team page is static and read-only for the mock sprint, so the roster
 * lives in source rather than Firestore. Each blurb must stay within
 * BLURB_MAX_LENGTH — the parse below fails the build if one doesn't.
 */
const roster: TeamMember[] = [
  {
    id: 'spencer-keeghan',
    name: 'Spencer Keeghan',
    role: 'Project Manager',
    blurb:
      "I'm a third-year Computer Science student majoring in Cyber Security. Outside of uni, I enjoy working on cars and playing footy on the weekends :)",
  },
  {
    id: 'rayan-hameed',
    name: 'Rayan Hameed',
    role: 'Business Analyst',
    // TODO: replace with Rayan's own blurb once posted in the team channel
    blurb:
      'Turns client conversations into written requirements the team can build against, and chases down the open decisions before they become blockers.',
  },
  {
    id: 'haley-wong',
    name: 'Haley Wong',
    role: 'UX Designer',
    // TODO: replace with Haley's own blurb once posted in the team channel
    blurb:
      'Designs the interface in Figma against the Microsoft Fluent 2 design language, covering layout, states and the visual direction the build follows.',
  },
  {
    id: 'manthan-punjabi',
    name: 'Manthan Punjabi',
    role: 'Developer 1',
    blurb:
      "Third-year CS student at RMIT, working as a developer on this project. I like building things end to end and figuring out how they break. Outside of uni I'm into cricket and gaming :)",
  },
  {
    id: 'jiong-ruan',
    name: 'Jiong Ruan',
    role: 'Developer 2',
    blurb:
      'I am Jiong, currently in my graduating year of a Bachelor of IT at RMIT University, where I am expanding my knowledge and skills in Information Technology and Cybersecurity.',
  },
]

export const teamMembers: TeamMember[] = roster.map((member) => teamMemberSchema.parse(member))