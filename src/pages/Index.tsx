import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Instagram, Check, ExternalLink, FileText, Coffee, Link } from "lucide-react";

import heroImage from "@/assets/hero-transparent.png";
import profilePhoto from "@/assets/profile-photo.jpeg";
import logoRbc from "@/assets/logo-rbc.svg";
import logoCognizant from "@/assets/logo-cognizant.png";
import logoGirlscript from "@/assets/logo-girlscript.png";
import logoLt from "@/assets/logo-lt.png";
import logoUwindsor from "@/assets/logo-uwindsor.svg";
import logoGtu from "@/assets/logo-gtu.png";
import eduPhoto1 from "@/assets/edu-photo-1.jpeg";
import eduPhoto2 from "@/assets/edu-photo-2.jpeg";
import hobbyPainting from "@/assets/hobby-painting.jpeg";
import hobbyPottery from "@/assets/hobby-pottery.jpeg";
import hobbySnorkelling from "@/assets/hobby-snorkelling.jpeg";
import hobbyExploring from "@/assets/hobby-exploring.jpeg";
import hobbyHiking from "@/assets/hobby-hiking.jpeg";
import hobbySwimming from "@/assets/hobby-swimming.jpeg";
import hobbyKathak from "@/assets/hobby-kathak.jpeg";
import hobbyReading from "@/assets/hobby-reading.jpeg";

import gallerySpeaking from "@/assets/gallery-speaking.jpeg";
import galleryLego from "@/assets/gallery-lego.jpeg";
import galleryDinner from "@/assets/gallery-dinner.jpeg";
import galleryFarm from "@/assets/gallery-farm.jpeg";
import galleryBoostSmall from "@/assets/gallery-boost-small.jpeg";
import galleryFormal from "@/assets/gallery-formal.jpeg";
import galleryBoostGroup from "@/assets/gallery-boost-group.jpeg";
import galleryAxe from "@/assets/gallery-axe.jpeg";
import galleryOutdoor from "@/assets/gallery-outdoor.jpeg";
import galleryBoostTrio from "@/assets/gallery-boost-trio.jpeg";

const galleryImages = [
gallerySpeaking, galleryLego, galleryDinner, galleryFarm, galleryBoostSmall,
galleryFormal, galleryBoostGroup, galleryAxe, galleryOutdoor, galleryBoostTrio];


const roles = ["Product Manager.", "Software Developer.", "Business Systems Analyst.", "Data Analyst.", "Lifelong Learner."];

const socialLinks = [
{ icon: Linkedin, href: "https://www.linkedin.com/in/aashithakkar29/", label: "LinkedIn" },
{ icon: Github, href: "https://github.com/aashi2912", label: "GitHub" },
{ icon: Instagram, href: "https://www.instagram.com/aashi_2912/", label: "Instagram" }];


const updates = [
{ date: "Feb 2026", text: "Launched new podcast season", tag: "Podcast" },
{ date: "Jan 2026", text: "Published article on product thinking", tag: "Blog" },
{ date: "Dec 2025", text: "Spoke at ProductCon 2025", tag: "Speaking" },
{ date: "Nov 2025", text: "Finished reading 50 books this year", tag: "Reads" },
{ date: "Oct 2025", text: "Started new role as Senior PM", tag: "Work" }];


const experiences = [
{
  role: "Product Manager",
  company: "RBC Capital Markets",
  period: "Jan 2025 — Present",
  logo: logoRbc
},
{
  role: "Software Developer",
  company: "RBC Capital Markets",
  period: "Sep 2023 — Dec 2024",
  logo: logoRbc
},
{
  role: "Programmer Analyst",
  company: "Cognizant Technology Solutions",
  period: "Mar 2021 — Jun 2022",
  logo: logoCognizant
},
{
  role: "Open Source Contributor",
  company: "GirlScript Summer of Code",
  period: "Mar 2021 — May 2021",
  logo: logoGirlscript
},
{
  role: "Software Developer Intern",
  company: "Larsen & Toubro",
  period: "May 2019 — Jun 2019",
  logo: logoLt
}];


const skillCategories = [
{
  name: "Product Management",
  items: ["Communication", "Stakeholder Management", "Critical Thinking", "User Research", "Product Strategy", "Project Management", "Market Research", "Design Systems", "Competitive Analysis", "Data Analysis", "A/B Testing", "Product Integration", "Data Visualization", "Product Localization", "Product Vision", "Roadmap Planning", "Feature Prioritization", "Product Lifecycle Management", "Product Launch Execution", "Agile/Scrum", "Backlog Grooming", "User Stories", "Acceptance Criteria", "Cross-functional Collaboration", "PRDs", "BRDs", "Functional Specifications", "Data Flow Diagrams", "Process Modeling (BPM)", "UAT", "Requirements Gathering"]
},
{
  name: "AI/ML",
  items: ["LLMs", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering", "NLP", "Embeddings", "Vector Search", "AI Agents", "Model Evaluation Metrics"]
},
{
  name: "Languages",
  items: ["Python", "SQL", "JavaScript", "TypeScript", "C", "HTML/CSS"]
},
{
  name: "Technologies/Frameworks",
  items: ["React", "Bootstrap", "MUI", "Next.js", "Node.js", "Git"]
},
{
  name: "Tools",
  items: ["Notion", "Figma", "VS Code", "JIRA", "Power BI", "Tableau", "Microsoft Visio", "Excel", "Postman", "GitHub", "Confluence"]
},
{
  name: "Database",
  items: ["MySQL", "MongoDB"]
},
{
  name: "Spoken Languages",
  items: ["English", "Hindi 🇮🇳", "Gujarati"]
}];


const education = [
{
  degree: "Masters of Engineering, Applied Computing",
  school: "University of Windsor",
  period: "Sept 2022 — April 2024",
  logo: logoUwindsor
},
{
  degree: "Bachelors of Engineering, Computer Science",
  school: "Gujarat Technological University",
  period: "Aug 2016 — Aug 2020",
  logo: logoGtu
}];


const contentCreation = [
{ title: "Podcast Host", platform: "@MyPodcast", period: "Jan 2023 — Present", link: "#" },
{ title: "Medium Author", platform: "Medium", period: "Oct 2018 — Present", link: "#" }];


const publications = [
{ title: "Research Paper Title", subtitle: "Published at Conference 2019", date: "May 2019", link: "#" }];


const volunteering = [
{ role: "Product Expert", org: "Organization Name", period: "May 2020 — Present" },
{ role: "Mentor", org: "EducationUSA", period: "Aug 2015 — Present" }];


const projects = [
{
  title: "Product Analytics Dashboard",
  description: "Built an internal analytics tool that reduced reporting time by 60% for the PM team.",
  tag: "Product",
  link: "#",
  year: "2025"
},
{
  title: "Onboarding Flow Redesign",
  description: "Redesigned the end-to-end onboarding experience, improving activation rate by 35%.",
  tag: "UX",
  link: "#",
  year: "2024"
},
{
  title: "Podcast Website",
  description: "Designed and built a personal podcast website with episode archive and newsletter integration.",
  tag: "Side Project",
  link: "#",
  year: "2024"
},
{
  title: "PM Toolkit",
  description: "A curated Notion template system used by 500+ product managers to run discovery and roadmaps.",
  tag: "Templates",
  link: "#",
  year: "2023"
}];


type ImpossibleItem = {
  text: string;
  done?: boolean;
  date?: string;
  link?: {label: string;url: string;};
  sub?: ImpossibleItem[];
};

type ImpossibleCategory = {
  name: string;
  description?: string;
  items: ImpossibleItem[];
};

const impossibleCategories: ImpossibleCategory[] = [
{
  name: "FITNESS",
  items: [
  { text: "Run a marathon", done: true },
  { text: "Complete a triathlon", done: false },
  { text: "Do 100 push-ups in a row", done: true },
  { text: "Hold a 5-minute plank", done: false }]

},
{
  name: "PROFESSIONAL",
  items: [
  { text: "Get promoted to Senior PM", done: true },
  { text: "Launch a product used by 1M+ people", done: false },
  { text: "Speak at a major conference", done: true },
  { text: "Mentor 10 aspiring PMs", done: false }]

},
{
  name: "CREATIVE",
  items: [
  { text: "Start a podcast", done: true },
  { text: "Write a book", done: false },
  { text: "Publish 100 blog posts", done: false },
  { text: "Reach 10K YouTube subscribers", done: false }]

},
{
  name: "TRAVEL",
  items: [
  { text: "Visit Japan", done: true },
  { text: "See the Northern Lights", done: false },
  { text: "Travel to all 7 continents", done: false },
  { text: "Road trip across the US", done: false }]

}];


// ─── Utilities ───────────────────────────────────────────────────────────────

function ScrambleText({ text }: {text: string;}) {
  const [displayed, setDisplayed] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayed(
        text.split("").map((char, i) => {
          if (i < iteration) return char;
          if (char === " ") return " ";
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      iteration += 1 / 2;
      if (iteration > text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [text]);
  return <span className="font-mono text-sm text-muted-foreground">{displayed}</span>;
}

function RevealText({ children, delay = 0 }: {children: React.ReactNode;delay?: number;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}>
      
      {children}
    </motion.div>);

}

function StaggerContainer({ children, className }: {children: React.ReactNode;className?: string;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}>
      
      {children}
    </motion.div>);

}

function StaggerItem({ children, className }: {children: React.ReactNode;className?: string;}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } }
      }}>
      
      {children}
    </motion.div>);

}
function ImpossibleListItem({ item, depth = 0 }: {item: ImpossibleItem;depth?: number;}) {
  return (
    <>
      <div className={`flex items-center gap-3 rounded-md border border-border/50 bg-muted/20 px-4 py-3 ${depth > 0 ? "ml-8" : ""}`}>
        {/* Circle checkbox */}
        <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
        item.done ?
        "bg-emerald-500 border-emerald-500" :
        "border-muted-foreground/40"}`
        }>
          {item.done &&
          <Check className="w-3 h-3 text-white" strokeWidth={3} />
          }
        </div>
        {/* Text */}
        <span className={`text-[15px] leading-relaxed flex-1 ${
        item.done ? "text-muted-foreground" : "text-foreground"}`
        }>
          {item.text}
        </span>
        {/* Link */}
        {item.link &&
        <a href={item.link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline underline-offset-4 hover:text-primary/80 whitespace-nowrap">
            {item.link.label}
          </a>
        }
        {/* Date */}
        {item.date &&
        <span className="text-sm text-muted-foreground whitespace-nowrap">{item.date}</span>
        }
      </div>
      {item.sub?.map((subItem, i) =>
      <ImpossibleListItem key={i} item={subItem} depth={depth + 1} />
      )}
    </>);

}


function ContentWrap({ children, className = "" }: {children: React.ReactNode;className?: string;}) {
  return (
    <div className={`mx-auto max-w-4xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>);

}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function Index() {
  const [roleIndex, setRoleIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* ── Home ── */}
      <section id="home" className="scroll-mt-20">

        {/* Top header: name / roles / social / location */}
        <ContentWrap className="pt-6">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            
            {/* Left: name + roles + social */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[26px] font-bold tracking-tight sm:text-[32px] leading-tight">
                Aashi Thakkar
              </h1>
              <div className="h-6 text-[16px] font-normal text-muted-foreground sm:text-[18px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="block">
                    
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="flex items-center gap-1">
                {socialLinks.map(({ icon: Icon, href, label }) =>
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-1.5 text-muted-foreground transition-all hover:text-foreground"
                  aria-label={label}>
                  
                    <Icon className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Right: location */}
            <div className="self-start">
              <ScrambleText text="TORONTO, ONTARIO" />
            </div>
          </motion.div>
        </ContentWrap>

        {/* Hero image — true full-bleed, zero padding */}
        <motion.div
          className="bg-background relative flex items-center justify-center"
          style={{ height: 'calc(100vh - 160px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}>
          
          <img
            src={heroImage}
            alt="Hero illustration of a person jumping between cliffs"
            className="w-full h-full object-cover" />
          
          <h2 className="absolute top-8 sm:top-12 md:top-16 left-0 right-0 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center px-4">
            I <span className="italic">bridge</span> the gap between<br />ambition and execution!
          </h2>
        </motion.div>



      </section>

      {/* ── Work ── */}
      <ContentWrap className="py-24 scroll-mt-20">
        <section id="work" className="scroll-mt-20">
          <RevealText>
            <h2 className="text-[28px] font-bold tracking-tight">Work</h2>
            <p className="mt-1 text-[18px] text-muted-foreground">An overview of my career.</p>
          </RevealText>

          {/* Profile Card */}
          <RevealText delay={0.1}>
            <div className="mt-12 flex flex-col items-center text-center gap-4">
              <img src={profilePhoto} alt="Aashi Thakkar" className="w-80 h-[28rem] rounded-2xl object-cover object-top" />
              <div>
                <h3 className="text-[26px] font-bold">Aashi Thakkar</h3>
                <p className="text-[18px] text-muted-foreground">Product Manager</p>
              </div>


            </div>
          </RevealText>

          {/* Bio */}
          <RevealText delay={0.15}>
            <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
              <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-[15px] font-mono tracking-[0.2em] text-muted-foreground uppercase">Bio</span>
              </div>
              <div className="flex-1 space-y-4 text-[17px] leading-[1.75]">
                <p>I'm a Product Manager based in Toronto 🇨🇦, currently leading Alternative Data, Gen AI, and Research Technology products at Royal Bank of Canada - Capital Markets 🏦.</p>
                <p>I started out as a software developer 👨‍💻. Three years in, I noticed something: I was spending more time thinking about why we were building things than actually building them. Who was this for? Does it actually solve their problem? Does it matter? 🤔 Turns out, those were the questions I cared about most.</p>
                <p>That curiosity pulled me toward UX and Product 🎨 - and honestly, it clicked in a way that writing code never quite did. I found I was good at it, even before I had the title to match 💡✨.</p>
                <p>What drew me to product management wasn't just the craft - it was the mindset 🧠. Owning a problem end-to-end, bringing clarity to messy situations, and working with people across disciplines to build something that genuinely makes a difference 🎯. That's the work I find most meaningful 🚀.</p>
                <p>These days, I sit at the intersection of technology and business 💼⚙️. My job is to make sense of complex, ambiguous problems and turn them into something a team can actually build - and that users actually want to use 🙌.</p>
                <p>The thing I keep coming back to is this: the best products aren't just technically solid, they're built around real human needs ❤️. That belief shapes how I approach every decision 🔍.</p>
                <p>If you're into AI 🤖, data products 📊, or product strategy - I'd love to connect 🤝.</p>
                <p>And if you want to see what I'm up to outside of work - check out my <a href="#about" onClick={(e) => {e.preventDefault();document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });}} className="text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)] underline underline-offset-4 decoration-[hsl(200,50%,35%,0.4)] dark:decoration-[hsl(200,40%,75%,0.4)] hover:opacity-80 transition-opacity font-medium">About</a>!</p>
              </div>
            </div>
          </RevealText>

          {/* Experience */}
          <RevealText delay={0.2}>
            <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
              <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-[15px] font-mono tracking-[0.2em] text-muted-foreground uppercase">Experience</span>
              </div>
              <div className="flex-1 divide-y divide-border/40">
                {experiences.map((exp, i) =>
                <div key={i} className="flex items-start gap-4 py-5">
                    <img src={exp.logo} alt={exp.company} className="mt-1 h-10 w-10 shrink-0 rounded-lg object-contain" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="text-[17px] font-semibold">{exp.role}</h4>
                        <span className="font-mono text-[13px] text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-[15px] text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </RevealText>




          {/* Skills */}
          <RevealText delay={0.3}>
            <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
              <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-[15px] font-mono tracking-[0.2em] text-muted-foreground uppercase">Skills</span>
              </div>
              <div className="flex-1 space-y-8">
                {skillCategories.map((cat) =>
                <div key={cat.name}>
                    <h4 className="mb-4 text-[22px] font-bold">{cat.name}</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {cat.items.map((skill) =>
                    <span key={skill} className="rounded-full border border-[hsl(200,100%,40%,0.25)] bg-[hsl(200,100%,50%,0.1)] px-3 py-2 text-[14px] text-[hsl(200,50%,35%)] dark:border-[hsl(200,100%,50%,0.15)] dark:bg-[hsl(200,100%,50%,0.13)] dark:text-[hsl(200,40%,75%)]">{skill}</span>
                    )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </RevealText>

          {/* Education */}
          <RevealText delay={0.35}>
            <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
              <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-[15px] font-mono tracking-[0.2em] text-muted-foreground uppercase">Education</span>
              </div>
              <div className="flex-1 divide-y divide-border/40">
                {education.map((edu, i) =>
                <div key={i} className="flex items-start gap-4 py-5">
                    <img src={edu.logo} alt={edu.school} className="mt-1 h-10 w-10 shrink-0 rounded-lg object-contain dark:mix-blend-lighten" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="text-[17px] font-semibold">{edu.degree}</h4>
                        <span className="font-mono text-[13px] text-muted-foreground">{edu.period}</span>
                      </div>
                      <p className="text-[15px] text-muted-foreground">{edu.school}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </RevealText>

          {/* Education Photos */}
          <RevealText delay={0.4}>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={eduPhoto1} alt="At Assumption College" className="w-full h-full object-cover object-[center_85%]" />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={eduPhoto2} alt="Graduation" className="w-full h-full object-cover object-[center_25%]" />
              </div>
            </div>
          </RevealText>


          {/* Contact */}
          <RevealText delay={0.55}>
            <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
              <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-[15px] font-mono tracking-[0.2em] text-muted-foreground uppercase">Contact</span>
              </div>
              <div className="flex-1">
                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  <a href="/Aashi_Thakkar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-[15px] font-medium transition-colors hover:bg-accent">Hire Me <FileText size={16} /></a>
                  <a href="https://www.linkedin.com/in/aashithakkar29/" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-[15px] font-medium transition-colors hover:bg-accent">Coffee Chat <Coffee size={16} /></a>
                  <a href="https://topmate.io/aashi_thakkar" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-[15px] font-medium transition-colors hover:bg-accent">1:1 Mentorship <Link size={16} /></a>
                </div>

              </div>
            </div>
          </RevealText>
        </section>
      </ContentWrap>

      {/* ── Projects ── */}
      <ContentWrap className="py-24 scroll-mt-20">
        <section id="projects">
          <RevealText>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Projects</h2>
              <p className="mt-2 text-muted-foreground">Things I've built, shipped, or experimented with.</p>
            </div>
          </RevealText>

          <StaggerContainer className="space-y-6">
            {projects.map((project, i) =>
            <StaggerItem key={i}>
                <motion.div
                className="group cursor-pointer rounded-lg border border-border p-5 transition-colors hover:bg-accent/50"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}>
                
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-muted-foreground">{project.tag}</span>
                    <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold group-hover:underline">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                </motion.div>
              </StaggerItem>
            )}
          </StaggerContainer>
        </section>
      </ContentWrap>

      {/* ── About ── */}
      <ContentWrap className="py-24 scroll-mt-20">
        <section id="about">
          {/* Headline */}
          <RevealText>
            <div className="mb-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15] whitespace-nowrap">
                When I'm not obsessing over product strategy,
              </h2>
              <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15] text-muted-foreground whitespace-nowrap">
                I'm probably doing <span className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">all of this.</span>
              </h3>
            </div>
          </RevealText>
          <RevealText delay={0.1}>
            <p className="mb-14 text-[17px] text-muted-foreground whitespace-nowrap">
              Indulging in the many hobbies I try to juggle outside the 9-to-5. Here's a peek 👀
            </p>
          </RevealText>

          {/* Current Hobbies - Scattered polaroid mood board */}
          <div className="relative w-full" style={{ minHeight: "1100px" }}>
            {[
            { emoji: "🎨", title: "Painting", caption: "Follow my art journey @aashiarts_", rotate: "-5deg", top: "0px", left: "2%", width: "220px", delay: 0.1, pin: "hsl(0,70%,55%)", image: true },
            { emoji: "🌍", title: "Exploring new places", caption: "Always planning the next adventure", rotate: "3deg", top: "20px", left: "52%", width: "230px", delay: 0.18, pin: "hsl(35,80%,50%)", image: hobbyExploring, imagePos: "center 80%" },
            { emoji: "🤿", title: "Snorkelling", caption: "Discovering the world beneath the waves", rotate: "-2deg", top: "280px", left: "25%", width: "210px", delay: 0.26, pin: "hsl(200,70%,50%)", image: hobbySnorkelling },
            { emoji: "📚", title: "Reading", caption: "Getting lost in stories & ideas", rotate: "4.5deg", top: "300px", left: "68%", width: "200px", delay: 0.34, pin: "hsl(120,50%,45%)", image: hobbyReading, imagePos: "center top", link: "https://morning-tile-b61.notion.site/Books-c3bda9122c404b4aaaaf28d3a4ffebd9" },
            { emoji: "🏺", title: "Pottery", caption: "Moulding clay into something beautiful", rotate: "-4deg", top: "540px", left: "3%", width: "220px", delay: 0.42, pin: "hsl(280,60%,55%)", image: hobbyPottery, imagePos: "center 80%" },
            { emoji: "🥾", title: "Hiking", caption: "Chasing trails & mountain views", rotate: "2.5deg", top: "560px", left: "48%", width: "215px", delay: 0.5, pin: "hsl(25,80%,50%)", image: hobbyHiking },
            { emoji: "💃", title: "Kathak", caption: "Indian classical dance — rhythm & expression", rotate: "-3.5deg", top: "820px", left: "15%", width: "225px", delay: 0.58, pin: "hsl(340,70%,55%)", image: hobbyKathak, imagePos: "center 30%" },
            { emoji: "🏊‍♀️", title: "Swimming", caption: "My kind of meditation", rotate: "5deg", top: "840px", left: "58%", width: "210px", delay: 0.66, pin: "hsl(190,70%,45%)", image: hobbySwimming, imagePos: "center 75%" }].
            map((hobby, i) =>
            <motion.div
              key={i}
              className="absolute"
              style={{ top: hobby.top, left: hobby.left, width: hobby.width, maxWidth: "45%" }}
              initial={{ opacity: 0, y: 60, rotate: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, rotate: hobby.rotate, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: hobby.delay, ease: [0.22, 0.68, 0.36, 1] }}>
              
                {(() => {
                const cardContent =
                <motion.div
                  className={`relative bg-card rounded-sm p-3 pb-4 shadow-[4px_8px_24px_-6px_rgba(0,0,0,0.15)] dark:shadow-[4px_8px_30px_-6px_hsl(200,100%,50%,0.12)] ${(hobby as any).link ? 'cursor-pointer' : 'cursor-grab'}`}
                  style={{ border: "1px solid hsl(var(--border))" }}
                  whileHover={{ scale: 1.08, rotate: "0deg", zIndex: 20, boxShadow: "0 24px 50px -12px hsl(200 80% 50% / 0.2)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}>
                    
                      {/* Polaroid photo area */}
                      <div className="aspect-[4/3] rounded-sm bg-gradient-to-br from-secondary via-muted to-accent flex items-center justify-center mb-3 overflow-hidden">
                        {(hobby as any).image ?
                    <img src={(hobby as any).image === true ? hobbyPainting : (hobby as any).image} alt={hobby.title} className="w-full h-full object-cover" style={{ objectPosition: (hobby as any).imagePos || "center" }} /> :
                    <motion.span
                      className="text-5xl sm:text-6xl select-none"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}>
                            {hobby.emoji}
                          </motion.span>
                    }
                      </div>
                      <h4 className="text-[14px] font-bold leading-snug text-center">{hobby.title}</h4>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground text-center">{hobby.caption}</p>
                      {(hobby as any).link && <div className="flex items-center justify-center gap-1 mt-1"><ExternalLink className="w-3 h-3 text-muted-foreground" /><span className="text-[10px] text-muted-foreground">View Bookshelf</span></div>}
                      {/* Colored pushpin */}
                      <div
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 h-5 w-5 rounded-full shadow-lg z-10"
                    style={{ background: hobby.pin, boxShadow: `0 2px 8px ${hobby.pin}` }} />
                    
                      {/* Tape decoration on some cards */}
                      {i % 3 === 0 &&
                  <div className="absolute -top-3 -right-2 w-12 h-5 bg-[hsl(50,80%,85%)] dark:bg-[hsl(50,30%,30%)] opacity-70 rotate-[15deg] rounded-sm" />
                  }
                    </motion.div>;

                return (hobby as any).link ?
                <a href={(hobby as any).link} target="_blank" rel="noopener noreferrer" className="block no-underline">{cardContent}</a> :
                cardContent;
              })()}
              </motion.div>
            )}

          </div>

          {/* In the Queue section */}
          <RevealText delay={0.2}>
            <div className="mt-20 mb-6">
              <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                In the Queue 🎯
              </h3>
              <p className="mt-1 text-sm text-muted-foreground italic">Gonna try these soon - the list never stops growing

              </p>
            </div>
          </RevealText>

          <StaggerContainer className="flex flex-wrap gap-2.5">
            {[
            { label: "⛷️ Ski", delay: 0.05 },
            { label: "⛸️ Skate", delay: 0.08 },
            { label: "🤿 Scuba Diving", delay: 0.11 },
            { label: "🪂 Sky Diving", delay: 0.14 },
            { label: "🎸 Learn Guitar", delay: 0.17 },
            { label: "🖥️ Digital Art", delay: 0.2 },
            { label: "🎨 Graphic Design", delay: 0.23 },
            { label: "🧶 Knitting", delay: 0.26 },
            { label: "💃 Salsa", delay: 0.29 },
            { label: "🏓 Table Tennis", delay: 0.32 },
            { label: "🪡 Embroidery", delay: 0.35 },
            { label: "🏄‍♀️ Surf", delay: 0.38 },
            { label: "🥊 Kick Boxing", delay: 0.41 },
            { label: "🥋 Martial Arts", delay: 0.44 },
            { label: "🏸 Badminton", delay: 0.47 },
            { label: "✈️ Fly a Plane", delay: 0.5 }].
            map((item, i) =>
            <StaggerItem key={i}>
                <motion.span
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow cursor-default"
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                
                  {item.label}
                </motion.span>
              </StaggerItem>
            )}
            <StaggerItem>
              <motion.span
                className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-muted-foreground/30 bg-transparent px-4 py-2 text-sm text-muted-foreground italic cursor-default"
                whileHover={{ scale: 1.05 }}>
                
                ...and so many more ✨
              </motion.span>
            </StaggerItem>
          </StaggerContainer>

          <RevealText delay={0.25}>
            <div className="mt-14 text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15]">
                Jack of all trades, master of none?
              </h2>
              <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15] text-muted-foreground">
                But oftentimes better than <span className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">a master of one.</span>
              </h3>
            </div>
          </RevealText>

          {/* Team & Culture Gallery - Moved here after Jack of all trades */}
          <RevealText delay={0.3}>
            <div className="mt-16 mb-2">
              <h3 className="text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15]">
                <span className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">{"\n"}</span>
              </h3>
            </div>
          </RevealText>

          {/* Auto-scrolling gallery - Now right after the header */}
          <RevealText delay={0.35}>
            <div className="relative overflow-hidden rounded-2xl py-6 mt-6">
              <div className="flex gap-4 animate-[scroll-left_35s_linear_infinite] hover:[animation-play-state:paused]" style={{ width: "max-content" }}>
                {[...galleryImages, ...galleryImages].map((img, i) =>
                <div key={i} className="h-48 w-72 shrink-0 overflow-hidden rounded-xl">
                    <img src={img} alt="Team activity" className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                )}
              </div>
            </div>
          </RevealText>

          <div className="mt-12 flex flex-col items-center">
          {/* Product management is about people section - AFTER the gallery */}
          <RevealText delay={0.4}>
            <div className="mb-4 text-center">
              <h4 className="text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15] text-muted-foreground">
                Product management is about <span className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">people</span> before it's about <span className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">products.</span>
              </h4>
            </div>
          </RevealText>

          <div className="space-y-5 text-[17px] leading-[1.75] max-w-2xl text-justify">
            <RevealText delay={0.45}>
              <p className="text-muted-foreground">Outside meeting rooms, sprint boards, and roadmaps, you'll usually find me doing something a little more social 🎉 - joining team events, exploring new activities, or organizing spontaneous outings with colleagues. Whether it's group adventures 🏔️, company events 🎊, or just moments of shared laughter 😄, these experiences matter to me.

              </p>
            </RevealText>

            <RevealText delay={0.5}>
              <p>
                Why? Because great products come from <span className="font-semibold">strong human connections</span> 💡.
              </p>
            </RevealText>

            <RevealText delay={0.55}>
              <p className="text-muted-foreground">As a Product Manager, I spend a lot of time bringing people together - engineers, designers, stakeholders, and users 🧩. The same curiosity and energy that pushes me to participate in team activities is what helps me build trust 🤝, understand different perspectives 🌍, and create environments where collaboration thrives 🌱.

              </p>
            </RevealText>

            <RevealText delay={0.6}>
              <p className="text-muted-foreground">This gallery captures some of those moments - the conversations 💬, the adventures 🚀, the team bonding 🫂, and the fun along the way.

              </p>
            </RevealText>

            <RevealText delay={0.65}>
              <p className="text-muted-foreground">
                They're small snapshots of something bigger:
              </p>
              <p className="mt-2 text-[19px] font-semibold">My belief that the best teams and the best products are built when people genuinely enjoy working together ❤️✨.

              </p>
            </RevealText>
          </div>
          </div>
        </section>
      </ContentWrap>

      {/* ── Impossible List ── */}
      <ContentWrap className="py-24 pb-32 scroll-mt-20">
        <section id="impossible-list">
          {/* Header */}
          <RevealText>
            <div className="mb-4">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Impossible List</h2>
              <p className="mt-2 text-lg text-muted-foreground">a bucket list, except better</p>
            </div>
          </RevealText>

          {/* Hero image placeholder */}
          <RevealText delay={0.1}>
            <div className="w-full aspect-[2/1] rounded-xl bg-secondary/50 overflow-hidden flex items-center justify-center my-10">
              <span className="text-muted-foreground text-sm">Hero image</span>
            </div>
          </RevealText>

          {/* Explanation */}
          <RevealText delay={0.15}>
            <div className="space-y-5 mb-16 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Impossible what?</h3>
              <p className="text-[15px] leading-relaxed text-foreground/90">
                The Impossible List is like a bucket list - only more ambitious. The idea was originally created by Joel Runyon, and I first came across it through one of Thomas Frank's videos.
              </p>
              <p className="text-[15px] leading-relaxed text-foreground/90">
                The concept immediately resonated with me, so I decided to create my own.
              </p>
              <p className="text-[15px] leading-relaxed text-foreground/90">
                This list contains goals that challenge me to push beyond my current limits. While these ambitions are personal, sharing them publicly helps keep me accountable and committed to pursuing them.
              </p>
              <p className="text-[15px] leading-relaxed text-foreground/90">
                I may never complete every item on this list - and that's perfectly fine. The real purpose isn't finishing the list, but embracing the journey and the growth that comes from chasing ambitious goals.
              </p>
            </div>
          </RevealText>

          {/* Categories */}
          <div className="space-y-0">
            {impossibleCategories.map((cat, catIndex) =>
            <RevealText key={cat.name} delay={0.05 * catIndex}>
                <div className={`flex flex-col md:flex-row gap-4 md:gap-12 py-10 ${catIndex < impossibleCategories.length - 1 ? "border-b border-border" : ""}`}>
                  {/* Category label */}
                  <div className="md:w-40 shrink-0">
                    <span className="text-xs font-semibold tracking-[0.15em] text-muted-foreground">
                      {cat.name}
                    </span>
                  </div>

                  {/* Items */}
                  <div className="flex-1">
                    {cat.description &&
                  <p className="text-[15px] leading-relaxed text-foreground/90 mb-4">{cat.description}</p>
                  }
                    <div className="space-y-2">
                      {cat.items.map((item, i) =>
                    <ImpossibleListItem key={i} item={item} />
                    )}
                    </div>
                  </div>
                </div>
              </RevealText>
            )}
          </div>
        </section>
      </ContentWrap>

    </div>);

}