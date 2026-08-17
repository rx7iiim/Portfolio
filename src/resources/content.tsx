import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Abderrahim",
  lastName: "Zine",
  name: `Abderrahim Zine`,
  role: "Full Stack Developer",
  avatar: "/images/avatar.png",
  email: "azine@estin.dz",
  location: "Africa/Algiers", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rx7iiim",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abderrahim-zine-b2b511329",
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
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer | Computer Science Student at ESTIN</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Experience & Internships</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/about",
  },
  subline: (
    <>
      I am a CS student at <Text as="span" size="xl" weight="strong">ESTIN</Text> with over 2 years of hands-on full-stack development experience. I have a proven track record of delivering real-world, production-grade web applications through freelance work and internships, combined with a solid academic foundation in machine learning.
    </>
  ),
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
        I am a CS student at ESTIN with over 2 years of hands-on full-stack development experience, specializing in building production-grade web applications and machine learning integrations.
      </>
    ),
  },
  projects: {
    display: true,
    title: "Featured Projects",
    items: [
      {
        title: "Startopsy",
        description: <>A web platform providing valuable insights and tools for startups, helping entrepreneurs make data-driven decisions.</>,
        tech: "Next.js, NestJS, LangChain, FastAPI, Microservices, CI/CD, Docker",
        buttons: [
          { label: "View Project", href: "https://startopsy.vercel.app", icon: "chevronRight" },
        ],
        images: [
          {
            src: "/images/projects/startopsy/Screenshot 2026-06-12 032255.png",
            alt: "Startopsy Screen 1",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/startopsy/Screenshot 2026-06-12 032318.png",
            alt: "Startopsy Screen 2",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/startopsy/Screenshot 2026-06-12 032335.png",
            alt: "Startopsy Screen 3",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/startopsy/Screenshot 2026-06-12 032351.png",
            alt: "Startopsy Screen 4",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/startopsy/Screenshot 2026-06-12 032408.png",
            alt: "Startopsy Screen 5",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "PostPlan",
        description: <>A content planning and social media scheduling tool that helps teams organize posts, timelines, and collaboration.</>,
        tech: "React, Node.js, PostgreSQL",
        buttons: [
          { label: "View Project", href: "http://postplan.io/", icon: "chevronRight" },
          { label: "GitHub", href: "https://github.com/rx7iiim", icon: "github" },
        ],
        images: [
          { src: "/images/projects/posplan/Screenshot 2026-06-12 033332.png", alt: "PostPlan Screen 1", width: 16, height: 9 },
          { src: "/images/projects/posplan/Screenshot 2026-06-12 033339.png", alt: "PostPlan Screen 2", width: 16, height: 9 },
          { src: "/images/projects/posplan/Screenshot 2026-06-12 033403.png", alt: "PostPlan Screen 3", width: 16, height: 9 },
          { src: "/images/projects/posplan/Screenshot 2026-06-12 033427.png", alt: "PostPlan Screen 4", width: 16, height: 9 },
          { src: "/images/projects/posplan/Screenshot 2026-06-12 033510.png", alt: "PostPlan Screen 5", width: 16, height: 9 },
          { src: "/images/projects/posplan/Screenshot 2026-06-12 033521.png", alt: "PostPlan Screen 6", width: 16, height: 9 },
          { src: "/images/projects/posplan/Screenshot 2026-06-12 033535.png", alt: "PostPlan Screen 7", width: 16, height: 9 },
          { src: "/images/projects/posplan/Screenshot 2026-06-12 033554.png", alt: "PostPlan Screen 8", width: 16, height: 9 },
        ],
      },
    ],
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2025 - Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            Delivered 4+ full-stack web projects with end-to-end ownership, including a unified social media dashboard.
          </>
        ],
        images: [],
      },
      {
        company: "Kleer Infini Export",
        timeframe: "2025",
        role: "Front-End Developer Intern",
        achievements: [
          <>
            Developed the "Expéditeur" shipping portal and implemented secure authentication flows.
          </>
        ],
        images: [],
      },
      {
        company: "ESTIN CDE",
        timeframe: "2025-presnet",
        role: "Full Stack Developer Intern",
        achievements: [
          <>
            Built a production-ready internal platform to manage 5th-year end-of-study projects.
          </>
        ],
        images: [],
      },
      {
        company: "Museum of Bejaia",
        timeframe: "2025-2026",
        role: "Full Stack Developer Intern",
        achievements: [
          <>
            Designed a custom DB schema and built a digital archive platform for cultural assets.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies & Leadership",
    institutions: [
      {
        name: "ESTIN",
        description: <>Computer Science Student</>,
      },
      {
        name: "ByteCraft Scientific Club",
        description: <>Development Department Manager (managing tech projects, mentoring juniors).</>,
      },
      {
        name: "LDC Cultural Club",
        description: <>External Relations Department Manager (partnerships and official communications).</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technology Arsenal",
    skills: [
      {
        title: "Languages",
        description: (
          <>TypeScript, Python, Go, C#, C, Java, JavaScript, Bun</>
        ),
        tags: [
          { name: "TypeScript", icon: "typescript" },
          { name: "Python", icon: "python" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "Backend & Frameworks",
        description: (
          <>NestJS, FastAPI, Express.js, .NET, Node.js, Kafka, Laravel, gRPC</>
        ),
        tags: [
          { name: "Node.js", icon: "node" },
        ],
        images: [],
      },
      {
        title: "Frontend & UI",
        description: (
          <>React.js, Next.js, Tailwind CSS, HTML5, CSS3, Sass</>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Tailwind CSS", icon: "tailwind" },
        ],
        images: [],
      },
      {
        title: "Databases & Caching",
        description: (
          <>PostgreSQL, MySQL, MongoDB, Redis, SQLite, Prisma</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Machine Learning",
        description: (
          <>Python, TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy</>
        ),
        tags: [
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "DevOps & Tools",
        description: (
          <>Docker, Git, GitHub, GitHub Actions, VS Code, Linux, Postman</>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "Linux", icon: "linux" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Writings by ${person.name}`,
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };
