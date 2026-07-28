import { About, Blog, Esn, Gallery, Home, Newsletter, Person, Social } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Domenico",
  lastName: "Futia",
  name: `Domenico Futia`,
  role: "Master's Student in Philosophy",
  avatar: "/images/avatar.jpg",
  email: "domenicofutia@hotmail.com",
  location: "Europe/Rome", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Italian", "English", "German", "Spanish"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My occasional newsletter about philosophy, travel and ideas</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/domenicofutia",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/domfutia/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Philosophy, Phenomenology & Enactivism`,
  description: `Personal portfolio of ${person.name}. Master's Student in Philosophy with a focus on Phenomenology, Enactivism and Narrative Identity.`,
  headline: "Studente Magistrale in Filosofia, con focus su Fenomenologia e Filosofia della Mente",
  headlineI18n: {
    it: "Studente Magistrale in Filosofia, con focus su Fenomenologia e Filosofia della Mente",
    en: "Master’s student in Philosophy, with a focus on Phenomenology and Philosophy of Mind",
  },
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">ESN Pisa</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Volunteering
        </Text>
      </Row>
    ),
    href: "/esn",
  },
  subline: "Mi occupo del tema dell'identità all'interno delle scienze cognitive, attraverso la lente dell'enattivismo e della tradizione ermeneutica, con particolare interesse verso le teorie narrative dell'identità.",
  sublineI18n: {
    it: "Mi occupo del tema dell'identità all'interno delle scienze cognitive, attraverso la lente dell'enattivismo e della tradizione ermeneutica, con particolare interesse verso le teorie narrative dell'identità.",
    en: "My research focuses on the theme of identity within cognitive science, through the lens of enactivism and the hermeneutic tradition, with particular interest in narrative theories of identity.",
  },
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a Master's student in Philosophy at the University of Pisa, where he
        focuses on Phenomenology, Enactivism and the philosophy of mind. His research centres on
        the theme of identity within the cognitive sciences, approached through the lens of
        enactivism and the hermeneutic tradition, with a particular interest in narrative theories
        of identity.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Global Cruises LLC",
        timeframe: "Sep 2024 - Present",
        role: "Shore Excursions Assistant",
        achievements: [
          <>
            Supporting tour guides during group excursions between Pisa and Florence.
          </>,
          <>
            Assisting international visitors and guests with specific needs; managing technical
            equipment and taking photographs for tourists.
          </>,
        ],
        images: [],
      },
      {
        company: "University of Pisa",
        timeframe: "Sep 2025 - Feb 2026",
        role: "Teaching Tutor",
        achievements: [
          <>
            Led weekly study support sessions for students enrolled in the "Introduction to
            Philosophy of Mind" course.
          </>,
          <>
            Clarified theoretical concepts and provided in-depth insights to support exam
            preparation.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Pisa — MSc in Philosophy and Forms of Knowledge",
        timeframe: "Nov 2022 - Present",
        description: <>Focus on Identity, Consciousness and Philosophy of Mind.</>,
      },
      {
        name: "Universität Heidelberg — Erasmus+ Exchange",
        timeframe: "Sep 2023 - Mar 2024",
        description: <>Courses in Philosophy, Transcultural Studies and German.</>,
      },
      {
        name: "University of Pisa — BA in Philosophy",
        timeframe: "Sep 2019 - Nov 2022",
        description: (
          <>
            Graduated 110/110 cum Laude. Thesis: "Embodied Self and Narrative Identity. Ricœur in
            Dialogue with Enactivism."
          </>
        ),
      },
      {
        name: "Licei G. Mazzini, Locri — Human Sciences High School (Economic-Social)",
        timeframe: "Sep 2014 - Jul 2019",
        description: (
          <>
            Graduated 100/100 cum Laude. Student representative at the Provincial Student Council
            and member of the school's Internal Guarantee Body.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Communication & Public Speaking",
        description: (
          <>
            Strong relational and communication skills, public speaking, event organization,
            stakeholder management, copywriting and storytelling.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Languages",
        description: (
          <>Italian (Native), English (Advanced), German (Intermediate), Spanish (Intermediate).</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Digital Skills",
        description: (
          <>Microsoft Office (Intermediate), Google Workspace (Intermediate), Python (Beginner), Canva.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "javascript",
          },
        ],
        images: [],
      },
    ],
  },
};

const esn: Esn = {
  path: "/esn",
  label: "ESN",
  title: `ESN – ${person.name}`,
  description: `Meet ${person.name}, Vice President @ ESN Pisa | Erasmus Student Network`,
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} has been an active member of Erasmus Student Network Pisa - ETS since
        February 2025, supporting international students throughout their exchange experience and
        contributing to the association's mission of promoting intercultural exchange and
        volunteering across Europe.
      </>
    ),
  },
  roles: {
    display: true,
    title: "Roles & Activities",
    items: [
      {
        organization: "Erasmus Student Network Pisa - ETS",
        timeframe: "Feb 2026 - Jul 2026",
        role: "Vice President — Board Member",
        achievements: [
          <>Active member of the Board of Directors, contributing to the strategic direction of the association.</>,
          <>Coordinated volunteer activities and events supporting international students in Pisa.</>,
        ],
      },
      {
        organization: "Erasmus Student Network Pisa - ETS",
        timeframe: "Feb 2025 - Present",
        role: "Volunteer Member",
        achievements: [
          <>Supported the organization of events and initiatives for incoming Erasmus students.</>,
          <>Contributed to fostering a welcoming and inclusive environment for international students.</>,
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about philosophy, travel and ideas...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, esn, blog, gallery };
