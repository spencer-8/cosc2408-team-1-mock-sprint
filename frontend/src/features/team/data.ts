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
    photoUrl: '/team/spencer-keeghan.jpg',
    name: 'Spencer Keeghan',
    role: 'Project Manager',
    blurb:
      "I'm a third-year Computer Science student majoring in Cyber Security. Outside of uni, I enjoy working on cars and playing footy on the weekends :)",
  },
  {
    id: 'rayan-hameed',
    photoUrl: '/team/rayan-hameed.jpg',
    name: 'Rayan Hameed',
    role: 'Business Analyst',
    blurb:
      'Final-year IT student with a strong interest in cloud, cybersecurity and AI. Outside of uni, I enjoy reading and experimenting with Linux.',
  },
  {
    id: 'haley-wong',
    photoUrl: '/team/haley-wong.jpeg',
    name: 'Haley Wong',
    role: 'UX Designer',
    blurb:
      'Final-year IT student with experience in IoT development and network & server admin. The Android L & Material Design launch blew me away, and I have been keeping tabs on design frameworks since.',
  },
  {
    id: 'manthan-punjabi',
    photoUrl: '/team/manthan-punjabi.jpg',
    name: 'Manthan Punjabi',
    role: 'Developer 1',
    blurb:
      "Third-year CS student at RMIT, working as a developer on this project. I like building things end to end and figuring out how they break. Outside of uni I'm into cricket and gaming :)",
  },
  {
    id: 'jiong-ruan',
    photoUrl: '/team/jiong-ruan.jpg',
    name: 'Jiong Ruan',
    role: 'Developer 2',
    blurb:
      'I am Jiong, currently in my graduating year of a Bachelor of IT at RMIT University, where I am expanding my knowledge and skills in Information Technology and Cybersecurity.',
  },
]

export const teamMembers: TeamMember[] = roster.map((member) => teamMemberSchema.parse(member))
