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
  locationI18n: {
    it: "Pisa, Toscana, Italia",
    en: "Pisa, Tuscany, Italy",
  },
  languages: ["Italian", "English", "German", "Spanish"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  titleI18n: {
    it: <>Iscriviti alla Newsletter di {person.firstName}</>,
    en: <>Subscribe to {person.firstName}'s Newsletter</>,
  },
  description: <>My occasional newsletter about philosophy, travel and ideas</>,
  descriptionI18n: {
    it: <>La mia newsletter occasionale su filosofia, viaggi e idee</>,
    en: <>My occasional newsletter about philosophy, travel and ideas</>,
  },
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
  labelI18n: {
    it: "Home",
    en: "Home",
  },
  title: `Portfolio - Domenico Futia`,
  description: `Personal portfolio of ${person.name}. Master's Student in Philosophy with a focus on Phenomenology, Enactivism and Narrative Identity.`,
  descriptionI18n: {
    it: `Portfolio personale di ${person.name}. Studente magistrale in Filosofia con focus su Fenomenologia, Enattivismo e Identità Narrativa.`,
    en: `Personal portfolio of ${person.name}. Master's Student in Philosophy with a focus on Phenomenology, Enactivism and Narrative Identity.`,
  },
  headline: "Studente Magistrale in Filosofia, con focus su Fenomenologia e Filosofia della Mente",
  headlineI18n: {
    it: "Studente Magistrale in Filosofia, con focus su Fenomenologia e Filosofia della Mente",
    en: "Master's student in Philosophy, with a focus on Phenomenology and Philosophy of Mind",
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
  labelI18n: {
    it: "Chi sono",
    en: "About",
  },
  title: `About – ${person.name}`,
  titleI18n: {
    it: `Chi sono – ${person.name}`,
    en: `About – ${person.name}`,
  },
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  descriptionI18n: {
    it: `Scopri ${person.name}, studente magistrale in Filosofia a Pisa, Toscana, Italia`,
    en: `Meet ${person.name}, ${person.role} from Pisa, Tuscany, Italy`,
  },
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
    titleI18n: {
      it: "Presentazione",
      en: "Introduction",
    },
    description: (
      <>
        {person.firstName} is a Master's student in Philosophy at the University of Pisa, where he
        focuses on Phenomenology, Enactivism and the philosophy of mind. His research centres on
        the theme of identity within the cognitive sciences, approached through the lens of
        enactivism and the hermeneutic tradition, with a particular interest in narrative theories
        of identity.
      </>
    ),
    descriptionI18n: {
      it: (
        <>
          Domenico è uno studente magistrale in Filosofia presso l'Università di Pisa, dove si
          concentra su Fenomenologia, Enattivismo e Filosofia della Mente. La sua ricerca verte
          sul tema dell'identità nell'ambito delle scienze cognitive, attraverso la lente
          dell'enattivismo e della tradizione ermeneutica, con un particolare interesse per le
          teorie narrative dell'identità.
        </>
      ),
      en: (
        <>
          {person.firstName} is a Master's student in Philosophy at the University of Pisa, where he
          focuses on Phenomenology, Enactivism and the philosophy of mind. His research centres on
          the theme of identity within the cognitive sciences, approached through the lens of
          enactivism and the hermeneutic tradition, with a particular interest in narrative theories
          of identity.
        </>
      ),
    },
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    titleI18n: {
      it: "Esperienza Lavorativa",
      en: "Work Experience",
    },
    experiences: [
      {
        company: "Global Cruises LLC",
        timeframe: "Sep 2024 - Present",
        timeframeI18n: {
          it: "Set 2024 - Presente",
          en: "Sep 2024 - Present",
        },
        role: "Shore Excursions Assistant",
        roleI18n: {
          it: "Assistente Escursioni a Terra",
          en: "Shore Excursions Assistant",
        },
        achievements: [
          <>
            Supporting tour guides during group excursions between Pisa and Florence.
          </>,
          <>
            Assisting international visitors and guests with specific needs; managing technical
            equipment and taking photographs for tourists.
          </>,
        ],
        achievementsI18n: {
          it: [
            <>
              Supporto alle guide turistiche durante le escursioni di gruppo tra Pisa e Firenze.
            </>,
            <>
              Assistenza a visitatori internazionali e ospiti con esigenze specifiche; gestione
              delle attrezzature tecniche e fotografia per i turisti.
            </>,
          ],
          en: [
            <>
              Supporting tour guides during group excursions between Pisa and Florence.
            </>,
            <>
              Assisting international visitors and guests with specific needs; managing technical
              equipment and taking photographs for tourists.
            </>,
          ],
        },
        images: [],
      },
      {
        company: "University of Pisa",
        timeframe: "Sep 2025 - Feb 2026",
        timeframeI18n: {
          it: "Set 2025 - Feb 2026",
          en: "Sep 2025 - Feb 2026",
        },
        role: "Teaching Tutor",
        roleI18n: {
          it: "Tutor Didattico",
          en: "Teaching Tutor",
        },
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
        achievementsI18n: {
          it: [
            <>
              Conduzione di sessioni settimanali di supporto allo studio per gli studenti iscritti
              al corso di «Introduzione alla Filosofia della Mente».
            </>,
            <>
              Chiarimento di concetti teorici e approfondimenti per supportare la preparazione
              agli esami.
            </>,
          ],
          en: [
            <>
              Led weekly study support sessions for students enrolled in the "Introduction to
              Philosophy of Mind" course.
            </>,
            <>
              Clarified theoretical concepts and provided in-depth insights to support exam
              preparation.
            </>,
          ],
        },
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    titleI18n: {
      it: "Formazione",
      en: "Studies",
    },
    institutions: [
      {
        name: "University of Pisa — MSc in Philosophy and Forms of Knowledge",
        nameI18n: {
          it: "Università di Pisa — LM in Filosofia e Forme del Sapere",
          en: "University of Pisa — MSc in Philosophy and Forms of Knowledge",
        },
        timeframe: "Nov 2022 - Present",
        timeframeI18n: {
          it: "Nov 2022 - Presente",
          en: "Nov 2022 - Present",
        },
        description: <>Focus on Identity, Consciousness and Philosophy of Mind.</>,
        descriptionI18n: {
          it: <>Focus su Identità, Coscienza e Filosofia della Mente.</>,
          en: <>Focus on Identity, Consciousness and Philosophy of Mind.</>,
        },
      },
      {
        name: "Universität Heidelberg — Erasmus+ Exchange",
        nameI18n: {
          it: "Universität Heidelberg — Scambio Erasmus+",
          en: "Universität Heidelberg — Erasmus+ Exchange",
        },
        timeframe: "Sep 2023 - Mar 2024",
        timeframeI18n: {
          it: "Set 2023 - Mar 2024",
          en: "Sep 2023 - Mar 2024",
        },
        description: <>Courses in Philosophy, Transcultural Studies and German.</>,
        descriptionI18n: {
          it: <>Corsi in Filosofia, Studi Transculturali e Tedesco.</>,
          en: <>Courses in Philosophy, Transcultural Studies and German.</>,
        },
      },
      {
        name: "University of Pisa — BA in Philosophy",
        nameI18n: {
          it: "Università di Pisa — L in Filosofia",
          en: "University of Pisa — BA in Philosophy",
        },
        timeframe: "Sep 2019 - Nov 2022",
        timeframeI18n: {
          it: "Set 2019 - Nov 2022",
          en: "Sep 2019 - Nov 2022",
        },
        description: (
          <>
            Graduated 110/110 cum Laude. Thesis: "Embodied Self and Narrative Identity. Ricœur in
            Dialogue with Enactivism."
          </>
        ),
        descriptionI18n: {
          it: (
            <>
              Laurea 110/110 con Lode. Tesi: «Sé incarnato e identità narrativa. Ricœur in
              dialogo con l'Enattivismo.»
            </>
          ),
          en: (
            <>
              Graduated 110/110 cum Laude. Thesis: "Embodied Self and Narrative Identity. Ricœur in
              Dialogue with Enactivism."
            </>
          ),
        },
      },
      {
        name: "Licei G. Mazzini, Locri — Human Sciences High School (Economic-Social)",
        nameI18n: {
          it: "Liceo G. Mazzini, Locri — Scienze Umane (opzione Economico-Sociale)",
          en: "Licei G. Mazzini, Locri — Human Sciences High School (Economic-Social)",
        },
        timeframe: "Sep 2014 - Jul 2019",
        timeframeI18n: {
          it: "Set 2014 - Lug 2019",
          en: "Sep 2014 - Jul 2019",
        },
        description: (
          <>
            Graduated 100/100 cum Laude. Student representative at the Provincial Student Council
            and member of the school's Internal Guarantee Body.
          </>
        ),
        descriptionI18n: {
          it: (
            <>
              Diploma 100/100 con Lode. Rappresentante degli studenti presso la Consulta
              Provinciale degli Studenti e membro dell'Organo di Garanzia Interno dell'istituto.
            </>
          ),
          en: (
            <>
              Graduated 100/100 cum Laude. Student representative at the Provincial Student Council
              and member of the school's Internal Guarantee Body.
            </>
          ),
        },
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    titleI18n: {
      it: "Competenze",
      en: "Skills",
    },
    skills: [
      {
        title: "Communication & Public Speaking",
        titleI18n: {
          it: "Comunicazione e Public Speaking",
          en: "Communication & Public Speaking",
        },
        description: (
          <>
            Strong relational and communication skills, public speaking, event organization,
            stakeholder management, copywriting and storytelling.
          </>
        ),
        descriptionI18n: {
          it: (
            <>
              Spiccate capacità relazionali e comunicative, public speaking, organizzazione di
              eventi, gestione degli stakeholder, copywriting e storytelling.
            </>
          ),
          en: (
            <>
              Strong relational and communication skills, public speaking, event organization,
              stakeholder management, copywriting and storytelling.
            </>
          ),
        },
        tags: [],
        images: [],
      },
      {
        title: "Languages",
        titleI18n: {
          it: "Lingue",
          en: "Languages",
        },
        description: (
          <>Italian (Native), English (Advanced), German (Intermediate), Spanish (Intermediate).</>
        ),
        descriptionI18n: {
          it: (
            <>Italiano (Madrelingua), Inglese (Avanzato), Tedesco (Intermedio), Spagnolo (Intermedio).</>
          ),
          en: (
            <>Italian (Native), English (Advanced), German (Intermediate), Spanish (Intermediate).</>
          ),
        },
        tags: [],
        images: [],
      },
      {
        title: "Digital Skills",
        titleI18n: {
          it: "Competenze Digitali",
          en: "Digital Skills",
        },
        description: (
          <>Microsoft Office (Intermediate), Google Workspace (Intermediate), Python (Beginner), Canva.</>
        ),
        descriptionI18n: {
          it: (
            <>Microsoft Office (Intermedio), Google Workspace (Intermedio), Python (Base), Canva.</>
          ),
          en: (
            <>Microsoft Office (Intermediate), Google Workspace (Intermediate), Python (Beginner), Canva.</>
          ),
        },
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
  labelI18n: {
    it: "ESN",
    en: "ESN",
  },
  title: `ESN – ${person.name}`,
  titleI18n: {
    it: `ESN – ${person.name}`,
    en: `ESN – ${person.name}`,
  },
  description: `Meet ${person.name}, Vice President @ ESN Pisa | Erasmus Student Network`,
  descriptionI18n: {
    it: `Scopri ${person.name}, Vicepresidente @ ESN Pisa | Erasmus Student Network`,
    en: `Meet ${person.name}, Vice President @ ESN Pisa | Erasmus Student Network`,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    titleI18n: {
      it: "Presentazione",
      en: "Introduction",
    },
    description: (
      <>
        {person.firstName} has been an active member of Erasmus Student Network Pisa - ETS since
        February 2025, supporting international students throughout their exchange experience and
        contributing to the association's mission of promoting intercultural exchange and
        volunteering across Europe.
      </>
    ),
    descriptionI18n: {
      it: (
        <>
          Domenico è membro attivo di Erasmus Student Network Pisa - ETS dal febbraio 2025,
          supportando gli studenti internazionali durante la loro esperienza di scambio e
          contribuendo alla missione dell'associazione di promuovere lo scambio interculturale
          e il volontariato in tutta Europa.
        </>
      ),
      en: (
        <>
          {person.firstName} has been an active member of Erasmus Student Network Pisa - ETS since
          February 2025, supporting international students throughout their exchange experience and
          contributing to the association's mission of promoting intercultural exchange and
          volunteering across Europe.
        </>
      ),
    },
  },
  roles: {
    display: true,
    title: "Roles & Activities",
    titleI18n: {
      it: "Ruoli e Attività",
      en: "Roles & Activities",
    },
    items: [
      {
        organization: "Erasmus Student Network Pisa - ETS",
        timeframe: "Feb 2026 - Jul 2026",
        timeframeI18n: {
          it: "Feb 2026 - Lug 2026",
          en: "Feb 2026 - Jul 2026",
        },
        role: "Vice President — Board Member",
        roleI18n: {
          it: "Vicepresidente — Membro del Consiglio Direttivo",
          en: "Vice President — Board Member",
        },
        achievements: [
          <>Active member of the Board of Directors, contributing to the strategic direction of the association.</>,
          <>Coordinated volunteer activities and events supporting international students in Pisa.</>,
        ],
        achievementsI18n: {
          it: [
            <>Membro attivo del Consiglio Direttivo, con contributo alla direzione strategica dell'associazione.</>,
            <>Coordinamento delle attività di volontariato e degli eventi a supporto degli studenti internazionali a Pisa.</>,
          ],
          en: [
            <>Active member of the Board of Directors, contributing to the strategic direction of the association.</>,
            <>Coordinated volunteer activities and events supporting international students in Pisa.</>,
          ],
        },
      },
      {
        organization: "Erasmus Student Network Pisa - ETS",
        timeframe: "Feb 2025 - Present",
        timeframeI18n: {
          it: "Feb 2025 - Presente",
          en: "Feb 2025 - Present",
        },
        role: "Volunteer Member",
        roleI18n: {
          it: "Membro Volontario",
          en: "Volunteer Member",
        },
        achievements: [
          <>Supported the organization of events and initiatives for incoming Erasmus students.</>,
          <>Contributed to fostering a welcoming and inclusive environment for international students.</>,
        ],
        achievementsI18n: {
          it: [
            <>Supporto all'organizzazione di eventi e iniziative per gli studenti Erasmus in arrivo.</>,
            <>Contributo alla creazione di un ambiente accogliente e inclusivo per gli studenti internazionali.</>,
          ],
          en: [
            <>Supported the organization of events and initiatives for incoming Erasmus students.</>,
            <>Contributed to fostering a welcoming and inclusive environment for international students.</>,
          ],
        },
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  labelI18n: {
    it: "Blog",
    en: "Blog",
  },
  title: "Writing about philosophy, travel and ideas...",
  titleI18n: {
    it: "Scrivo di filosofia, viaggi e idee...",
    en: "Writing about philosophy, travel and ideas...",
  },
  description: `Read what ${person.name} has been up to recently`,
  descriptionI18n: {
    it: `Leggi cosa ha scritto di recente ${person.name}`,
    en: `Read what ${person.name} has been up to recently`,
  },
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  labelI18n: {
    it: "Galleria",
    en: "Gallery",
  },
  title: `Photo gallery – ${person.name}`,
  titleI18n: {
    it: `Galleria fotografica – ${person.name}`,
    en: `Photo gallery – ${person.name}`,
  },
  description: `A photo collection by ${person.name}`,
  descriptionI18n: {
    it: `Una raccolta fotografica di ${person.name}`,
    en: `A photo collection by ${person.name}`,
  },
  images: [],
};

export { person, social, newsletter, home, about, esn, blog, gallery };
