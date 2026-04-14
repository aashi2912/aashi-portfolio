import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Instagram, Check, ExternalLink, FileText, Coffee, Link, ArrowDown } from "lucide-react";
import { ReferencesSection } from "@/components/ReferencesSection";
import { AnimatedCounter, WiggleText } from "@/components/Doodles";
import { ProjectCarousel, type Project } from "@/components/ProjectCarousel";
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
import hobbyBadminton from "@/assets/hobby-badminton.jpeg";
import impossibleListHero from "@/assets/impossible-list-hero.jpg";
import vibeRouteHero from "@/assets/vibe-route-hero.png";
import netflixLogo from "@/assets/netflix-logo.png";
import rideconvertHero from "@/assets/rideconvert-hero.png";

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
import galleryClimbingGroup from "@/assets/gallery-climbing-group.jpeg";
import galleryClimbing from "@/assets/gallery-climbing.jpeg";

const galleryImages = [
gallerySpeaking, galleryLego, galleryDinner, galleryFarm, galleryBoostSmall,
galleryFormal, galleryBoostGroup, galleryAxe, galleryOutdoor, galleryBoostTrio,
galleryClimbingGroup, galleryClimbing];


const roles = ["Product Manager.", "Software Developer.", "Vibe Coder.", "Business Systems Analyst.", "Data Analyst.", "Lifelong Learner."];

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
  period: "Jan 2025 - Present",
  logo: logoRbc
},
{
  role: "Software Developer",
  company: "RBC Capital Markets",
  period: "Sep 2023 - Dec 2024",
  logo: logoRbc
},
{
  role: "Programmer Analyst",
  company: "Cognizant Technology Solutions",
  period: "Mar 2021 - Jun 2022",
  logo: logoCognizant
},
{
  role: "Open Source Contributor",
  company: "GirlScript Summer of Code",
  period: "Mar 2021 - May 2021",
  logo: logoGirlscript
},
{
  role: "Software Developer Intern",
  company: "Larsen & Toubro",
  period: "May 2019 - Jun 2019",
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
  period: "Sept 2022 - April 2024",
  logo: logoUwindsor
},
{
  degree: "Bachelors of Engineering, Computer Science",
  school: "Gujarat Technological University",
  period: "Aug 2016 - Aug 2020",
  logo: logoGtu
}];


const contentCreation = [
{ title: "Podcast Host", platform: "@MyPodcast", period: "Jan 2023 - Present", link: "#" },
{ title: "Medium Author", platform: "Medium", period: "Oct 2018 - Present", link: "#" }];


const publications = [
{ title: "Research Paper Title", subtitle: "Published at Conference 2019", date: "May 2019", link: "#" }];


const volunteering = [
{ role: "Product Expert", org: "Organization Name", period: "May 2020 - Present" },
{ role: "Mentor", org: "EducationUSA", period: "Aug 2015 - Present" }];


const projects: Project[] = [
{
  title: "Vibe Route",
  description: "Google Maps tells you the fastest route. I built a tool that tells you the best one - an AI-powered walking route comparison that scores routes by how they feel, not just how fast they are.",
  tag: "AI Product",
  link: "https://vibe-route.vercel.app/",
  year: "2026",
  color: "#2D6A4F",
  secondaryColor: "#C77B30",
  cardBg: "#F5F0E8",
  icon: "🗺️",
  image: vibeRouteHero,
  caseStudyPdf: "/case-studies/vibe-route-case-study.pdf",
  caseStudyPages: Array.from({ length: 13 }, (_, i) => `/case-studies/vibe-route-pages/page-${i + 1}.jpg`),
  prdPages: Array.from({ length: 5 }, (_, i) => `/case-studies/vibe-route-prd-pages/page-${i + 1}.jpg`),
  prdPdf: "/case-studies/vibe-route-prd.pdf",
  githubLink: "https://github.com/aashi2912/vibe-route",
  details: {
    heroTagline: "An AI Product Manager case study - from research to shipped product in 5 weeks.",
    background: "A former Google Maps Senior UX Researcher explained why 'scenic' routing is hard: scoring beauty can bias toward affluent neighborhoods. Google distanced from the feature - but the gap still exists. Scenic driving and hiking trails are solved (Roadtrippers, AllTrails), but urban walking remains a huge gap.",
    stats: [
      { value: "4", label: "AI Components" },
      { value: "6", label: "Research Studies" },
      { value: "30+", label: "POIs per Route" },
      { value: "5", label: "Weeks to Ship" },
    ],
    competitiveGap: [
      { label: "Scenic Driving", status: "Solved", tools: "Roadtrippers, Scenic", solved: true },
      { label: "Hiking & Trails", status: "Solved", tools: "AllTrails, Komoot", solved: true },
      { label: "Urban Walking", status: "Huge Gap", tools: "Google Maps = speed only", solved: false },
    ],
    drawerSections: [
      { label: "Research", title: "Every Decision Backed by Research", content: "6 peer-reviewed studies shaped the MVP.", layout: "list" as const, items: [
        { num: "1", title: "Detour tolerance", desc: "Leisure walkers accept ~25% detours - cap at ~30%" },
        { num: "2", title: "What people love", desc: "Parks, sky visibility, amenities - define vibe dimensions" },
        { num: "3", title: "Facility detours", desc: "Walkers detour for attractive stops - waypoint injection" },
        { num: "4", title: "Night safety gap", desc: "Different needs after dark - Night Walker persona" },
        { num: "5", title: "Avoid poor lighting", desc: "People avoid dark routes - Well-Lit scoring (V2)" },
        { num: "6", title: "Night attention", desc: "Hazard scanning changes - night-mode weights" },
      ]},
      { label: "How It Works", title: "How Vibe Route Works", layout: "steps" as const, items: [
        { num: "1", title: "Enter Origin & Destination", desc: "User inputs start and end points on the map" },
        { num: "2", title: "Select Vibes", desc: "Choose preferences like 'Green & Peaceful' or 'Coffee Stops' - or type naturally" },
        { num: "3", title: "AI Discovers Waypoints", desc: "ML clustering generates genuinely different routes when Google alternatives overlap >70%" },
        { num: "4", title: "Score Routes", desc: "Density-based vibe scoring with diminishing returns (log curve) to avoid inflation" },
        { num: "5", title: "Generate Narratives", desc: "LLM summaries constrained to verified POIs with anti-hallucination guardrails" },
        { num: "6", title: "Compare & Navigate", desc: "Side-by-side comparison with deep link to Google Maps for real navigation" },
      ]},
      { label: "AI Architecture", title: "4 AI Components - Each One Earns Its Place", layout: "grid" as const, items: [
        { title: "Waypoint Discovery", desc: "ML clustering to create genuinely different route options" },
        { title: "Natural Language", desc: "Parse 'quiet walk with coffee' into structured vibe preferences" },
        { title: "Route Narratives", desc: "LLM summaries constrained to verified POIs (anti-hallucination)" },
        { title: "Vibe Scoring", desc: "Density-based scoring with diminishing returns" },
      ], rejections: ["Personalization (not enough user data yet)", "'Scenic' LLM scoring (high bias risk)", "AI soundtrack (feature creep)"] },
      { label: "Bias Design", title: "Designing Around Bias", quote: "Bias isn't a reason not to build - it's a design constraint.", items: [
        { title: "Objective signals", desc: "Use parks, POI density, road types - not subjective 'beauty'. Reduces value-judgment bias." },
        { title: "User-defined vibe", desc: "'Green & peaceful' is a preference - not a neighborhood ranking. Shifts agency to the user." },
        { title: "Audit for correlation", desc: "Planned: 50 routes across diverse Toronto neighborhoods. Correlate vibe scores with census data." },
        { title: "Reward local discovery", desc: "Count cultural spots + independent shops as positive 'Local Character'. Rewards diversity, not just affluence." },
      ]},
      { label: "Decisions", title: "Decisions & Tradeoffs", content: "6 choices that shaped the MVP.", layout: "grid" as const, items: [
        { title: "Overlap check", desc: "Alternates overlap - waypoint injection fallback" },
        { title: "Scoring curve", desc: "Linear to diminishing returns (log) to avoid score inflation" },
        { title: "Global-first MVP", desc: "No city datasets yet - ship everywhere using Maps APIs" },
        { title: "Progressive loading", desc: "Routes, scores, narratives for faster perceived speed" },
        { title: "Anti-hallucination", desc: "Constrained prompts + template fallback for reliability" },
        { title: "Scope cut", desc: "Defer 'Well-Lit' to V2 due to data availability" },
      ]},
      { label: "Roadmap", title: "Future Roadmap", layout: "roadmap" as const, items: [
        { version: "V2", title: "Street View Computer Vision", desc: "Green View Index via semantic segmentation - measure what a route actually looks like" },
        { version: "V2", title: "Well-Lit Scoring", desc: "Use streetlight datasets to support the Night Walker persona" },
        { version: "V2", title: "Bias Audit", desc: "Run 50 routes across diverse neighborhoods, correlate with census income data, publish results" },
        { version: "V3", title: "Community Layer", desc: "User-submitted vibes + ratings. Big value - but comes with moderation & privacy risks." },
      ]},
    ],
    results: [
      "Shipped a live product in 5 weeks - not a concept deck (vibe-route.vercel.app)",
      "4 AI components - each one earns its place with a clear 'why'",
      "0 hallucinated locations across 20 narrative audits",
      "Waypoint injection triggered in >40% of routes, proving Google alternatives are too similar",
      "Log scoring separates routes effectively (0.8-4.2 range vs all hitting 5.0 with linear)",
      "~40% Places API cache hit rate for cost efficiency",
      "Total build + launch cost: $5-$22 (APIs + LLM during dev)"
    ],
    takeawayQuote: "The best AI project isn't the one with the most AI - it's the one where every AI component exists because the product is genuinely better with it.",
    takeawayTags: ["Research-driven thinking", "Honest about limitations", "AI applied where it adds value", "Bias-aware design", "End-to-end shipping", "Scope management"],
    tools: ["Claude API (LLM)", "DBSCAN Clustering (ML)", "NLP Pipeline", "Google Maps API", "Google Places API", "React", "TypeScript", "Vercel", "Jira", "Confluence", "Figma", "Miro", "Product Discovery", "User Research", "User Story Mapping", "Acceptance Criteria", "Sprint Planning"]
  }
},
{
  title: "Blind Spot",
  description: "80% of what you watch on Netflix was chosen by an algorithm. I built a tool that shows you what it's hiding - see your filter bubble, find blind spots, and bridge the gap with AI.",
  tag: "AI Product",
  link: "https://my-blind-spot.vercel.app/",
  year: "2026",
  color: "#E50914",
  secondaryColor: "#B81D24",
  cardBg: "#1a1a1a",
  icon: "🎬",
  image: netflixLogo,
  caseStudyPages: Array.from({ length: 12 }, (_, i) => `/case-studies/blind-spot-pages/page-${i + 1}.jpg`),
  prdPages: Array.from({ length: 5 }, (_, i) => `/case-studies/blind-spot-prd-pages/page-${i + 1}.jpg`),
  prdPdf: "/case-studies/blind-spot-prd.pdf",
  githubLink: "https://github.com/aashi2912/blind-spot",
  details: {
    heroTagline: "Netflix's algorithm is optimized to keep you watching. Blind Spot is optimized to help you grow.",
    background: "301.6M Netflix subscribers worldwide. 80% of what you watch is chosen by the algorithm. A researcher created fake Netflix personas - by Day 3, each one was trapped in a filter bubble. The algorithm even changes poster artwork to match personas. Zero products optimize for showing you what you're missing.",
    stats: [
      { value: "301.6M", label: "Netflix Subscribers" },
      { value: "80%", label: "Algorithm-Chosen" },
      { value: "3", label: "AI Components" },
      { value: "<8s", label: "Full Pipeline" },
    ],
    competitiveGap: [
      { label: "Taste.io", status: "Same Direction", tools: "'Find more of what you like'", solved: true },
      { label: "Letterboxd", status: "Social Only", tools: "No blind spot analysis", solved: true },
      { label: "Blind Spot Analysis", status: "Huge Gap", tools: "Zero products show the bubble", solved: false },
    ],
    drawerSections: [
      { label: "How It Works", title: "See Your Bubble. Find What's Missing. Bridge the Gap.", layout: "grid" as const, items: [
        { title: "Your Bubble", desc: "Visual taste map: genre radar, decade timeline, language concentration" },
        { title: "Blind Spots", desc: "Genres with zero representation, scored by opportunity (title count x avg rating)" },
        { title: "Bridges", desc: "AI explains WHY: 'You loved X for quality Y. This film shares that quality in a new setting.'" },
      ]},
      { label: "AI Architecture", title: "3 AI Components - Each One Earns Its Place", layout: "grid" as const, items: [
        { title: "Taste Profile Analyzer", desc: "Multi-dimensional vectors: genre distribution, keyword themes, and Herfindahl index for language diversity" },
        { title: "Blind Spot Detector", desc: "Gap analysis vs. TMDB space. Weighted by opportunity: (Title count) x (Average rating)" },
        { title: "Bridge Recommender", desc: "Cosine similarity + LLM Reasoning (Claude). Anti-hallucination: LLM receives only verified TMDB metadata" },
      ], rejections: ["Collaborative filtering (no user base - honest)", "AI mood detection (unreliable)"] },
      { label: "Decisions", title: "The Decisions Interviewers Actually Ask About", layout: "grid" as const, items: [
        { title: "Content-based over Collaborative", desc: "Works with one user's data. Honest for a portfolio project with limited users." },
        { title: "Cosine Similarity over Euclidean", desc: "Measures direction ('what KIND'), not just magnitude. Better for sparse movie vectors." },
        { title: "LLM Reasoning, not Generation", desc: "Explaining WHY two things connect, not just describing them. Higher precision, lower hallucination." },
        { title: "Herfindahl Index", desc: "Borrowed from economics to measure language diversity. A concrete, measurable metric." },
      ]},
      { label: "Research", title: "Every Decision Backed by Published Research", layout: "list" as const, items: [
        { title: "Pajkovic (2022)", desc: "SAGE Journals: Personas locked in by Day 3" },
        { title: "NYU Pyrorank (2023)", desc: "Diversity tuning with minimal accuracy loss" },
        { title: "SERAL (2025)", desc: "ACM SIGKDD: LLMs for serendipity recommendations" },
        { title: "Pariser (2011)", desc: "'The Filter Bubble' - the foundational text" },
      ]},
      { label: "Roadmap", title: "V2 Roadmap", layout: "roadmap" as const, items: [
        { version: "V2", title: "Hybrid Filtering", desc: "Blend collaborative + content-based as user base grows" },
        { version: "V2", title: "Progress Tracking", desc: "'Last month: 13 blind spots. Now: 9. You've explored Korean cinema.'" },
        { version: "V2", title: "Bias Audit", desc: "Test if opportunity scores correlate with regional/cultural weighting" },
        { version: "V3", title: "Multi-platform", desc: "YouTube watch history and Spotify listening bubble integration" },
      ]},
    ],
    results: [
      "Full pipeline time: <8 seconds from 'Analyze' to complete bubble + blind spot display",
      "Bridge tap-through rate target: >30%",
      "Bridge reasoning accuracy target: 80%+",
      "Time to 'aha moment' target: <60 seconds",
      "Blind spots explored per session target: 1+"
    ],
    takeawayQuote: "Netflix's algorithm is optimized to keep you watching. Blind Spot is optimized to help you grow.",
    takeawayTags: ["Research-driven product thinking", "AI applied where it matters", "Technical depth", "Full-stack shipping"],
    tools: ["Claude API (LLM)", "Cosine Similarity (ML)", "Content-Based Filtering", "Herfindahl Index", "TMDB API", "React", "TypeScript", "Vercel", "Jira", "Figma", "Miro", "User Research", "Competitive Analysis", "Persona Development", "User Journey Mapping", "PRD Writing"]
  }
},
{
  title: "RideConvert",
  description: "70-80% of bike-share rides come from casual users, but annual members generate 3-5× more lifetime revenue. I built an end-to-end product strategy to convert casual riders into members - validated through data analysis of 150K rides, K-means clustering for persona discovery, and a live analytics dashboard.",
  tag: "Product Strategy",
  link: "https://rideconvert.vercel.app/",
  year: "2026",
  color: "#00C9A7",
  secondaryColor: "#F5A623",
  cardBg: "#0D1117",
  icon: "🚲",
  image: rideconvertHero,
  caseStudyPdf: "/case-studies/rideconvert-case-study.pdf",
  caseStudyPages: Array.from({ length: 10 }, (_, i) => `/case-studies/rideconvert-pages/page-${i + 1}.jpg`),
  prdPdf: "/case-studies/rideconvert-case-study.pdf",
  githubLink: "https://github.com/aashi2912/rideconvert",
  details: {
    heroTagline: "An end-to-end product strategy for converting casual bike-share riders into annual members.",
    background: "The universal bike-share revenue challenge: 70-80% of rides come from casual pay-per-ride users, but annual members generate 3-5× more lifetime revenue. Industry-wide conversion rate sits at 2-4%. Casual riders don't convert because the product wasn't designed to make membership feel obviously worth it for their usage pattern. The value proposition assumes a commuter - most casual riders are not commuters.",
    stats: [
      { value: "150K", label: "Rides Analyzed" },
      { value: "4", label: "Personas Discovered" },
      { value: "5.0%", label: "Target Conversion" },
      { value: "+$363K", label: "Projected ARR" },
    ],
    competitiveGap: [
      { label: "Price Discounting", status: "Rejected", tools: "Destroys LTV permanently", solved: true },
      { label: "Referral Programs", status: "Wrong Sequence", tools: "Acquisition before conversion is solved", solved: true },
      { label: "Behavioral Nudges", status: "Chosen Strategy", tools: "High impact, low effort, data-backed", solved: false },
    ],
    drawerSections: [
      { label: "Personas", title: "Four Personas - Data-Derived, Not Assumed", content: "K-means clustering on 150K rides across duration, timing, day-of-week, bike type, and seasonality. Labels came after the clusters - not before.", layout: "grid" as const, items: [
        { title: "Weekend Explorer (42%)", desc: "Leisure rides, weekends, parks & waterfronts. Pain: single passes feel expensive for spontaneous rides." },
        { title: "Reluctant Commuter (31%)", desc: "Rush-hour weekdays, near transit hubs. Pain: ROI uncertainty for C$105/yr membership." },
        { title: "Seasonal Visitor (18%)", desc: "Tourist clusters, summer only, landmarks. Pain: annual membership is the wrong product." },
        { title: "E-bike Adopter (9%)", desc: "Chooses e-bikes, longer distance, faster trips. Pain: paying 2× the per-minute rate vs members." },
      ]},
      { label: "Strategy", title: "Opportunity Solution Tree", layout: "grid" as const, items: [
        { title: "Remove Price Barrier", desc: "Flexible membership tier (~C$65/yr) + break-even ride calculator (24 rides = C$105 payback)" },
        { title: "Personalize Value Prop", desc: "Post-ride savings nudge + usage-triggered emails for frequent casuals only" },
        { title: "Reduce Friction", desc: "One-tap upgrade flow (6 steps → 2) + geo-targeted offers at top casual stations" },
      ]},
      { label: "Prioritization", title: "RICE Prioritization - What We Build First", layout: "list" as const, items: [
        { num: "92", title: "Post-ride savings nudge", desc: "Intercepts riders at peak motivation (peak-end rule). Minimum engineering, maximum behavioral impact." },
        { num: "78", title: "Flexible membership tier", desc: "~C$65/yr for Weekend Explorers - the largest casual segment at 42% of rides." },
        { num: "74", title: "Break-even calculator", desc: "Shows riders exactly when membership pays for itself. Removes ROI uncertainty." },
        { num: "61", title: "Geo-targeted station offer", desc: "Surface offers at the 15 highest-traffic casual stations." },
        { num: "54", title: "One-tap upgrade flow", desc: "Reduce conversion friction from 6 steps to 2 steps." },
      ]},
      { label: "Data Insights", title: "What 150,000 Simulated Rides Revealed", layout: "grid" as const, items: [
        { title: "Ride Duration", desc: "Casual rides are 2× longer - every day. Members avg 11 min (utility). Casuals avg 29 min (leisure)." },
        { title: "Hourly Pattern", desc: "Members: twin spikes at 8am & 5pm. Casuals: gradual build, peak 2-4pm. Strongest behavioral signal." },
        { title: "Weekly Pattern", desc: "Members peak Tue-Thu. Casuals dominate Sat-Sun. Consistent across all operators." },
        { title: "Seasonality", desc: "Toronto: 16× August vs January. Summer is the conversion campaign window with highest nudge ROI." },
      ]},
      { label: "Roadmap", title: "3-Quarter Execution Plan", layout: "roadmap" as const, items: [
        { version: "Q1", title: "Quick Wins", desc: "Post-ride savings nudge, break-even calculator, funnel instrumentation. Target: ≥20% lift in A/B test." },
        { version: "Q2", title: "Personalize", desc: "Usage-triggered emails, geo-targeted offers at top 15 stations, CTA copy A/B testing. Target: 4.0%+ conversion." },
        { version: "Q3", title: "New Tier", desc: "Flexible membership SKU (~C$65/yr), one-tap upgrade flow, corporate partnerships. Target: 5.0% overall conversion." },
      ]},
    ],
    results: [
      "Live analytics dashboard with 5 interactive views deployed on Vercel",
      "4 data-derived personas via K-means clustering on 150K rides",
      "RICE-prioritized roadmap with 3-quarter execution plan",
      "Projected +$363K incremental ARR at 5.0% conversion target",
      "Python EDA notebook: 21 cells, 7 sections with pandas & scikit-learn",
      "1,091 lines of production-ready SQL (BigQuery, Snowflake, PostgreSQL compatible)",
    ],
    takeawayQuote: "Casual riders don't convert because the product wasn't designed for their usage pattern. Fix the value proposition, not the price.",
    takeawayTags: ["Data-driven personas", "Strategic roadmap planning", "Quantitative insights", "Conversion-focused design"],
    tools: ["K-Means Clustering (ML)", "scikit-learn (ML)", "Python", "pandas", "SQL", "Recharts", "React", "TypeScript", "Vercel", "Jira", "Confluence", "Miro", "RICE Prioritization", "Product Strategy", "A/B Test Design", "Data Analysis", "User Research", "Roadmapping", "Stakeholder Management", "OKR Definition"]
  }
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
    { text: "Run a marathon", done: false },
    { text: "Complete a triathlon", done: false },
    { text: "Hold a 5-minute plank", done: false },
    { text: "Train like an athlete", done: false },
    { text: "Learn rock-climbing", done: false },
    { text: "Learn to ski", done: false },
    { text: "Learn Kick Boxing and Muay Thai", done: false },
    { text: "Learn badminton and swimming", done: true },
  ],
},
{
  name: "PROFESSIONAL",
  items: [
  { text: "Get promoted to Senior PM", done: false },
  { text: "Launch a product used by 1M+ people", done: false },
  { text: "Speak at a major conference", done: false },
  { text: "Mentor 10 People", done: false },
  { text: "Work for Google", done: false }]

},
{
  name: "CREATIVE",
  items: [
  { text: "Start a business", done: false },
  { text: "Write and publish a book", done: false },
  { text: "Make full-time living online", done: false },
  { text: "Learn to play the piano", done: false },
  { text: "Learn to play the guitar", done: false },
  { text: "Learn Pottery", done: true },
  { text: "Learn Kathak", done: true },
  { text: "Learn Salsa", done: false },
  { text: "Learn Knitting/Crochet", done: false }]
},
{
  name: "PERSONAL",
  items: [
  { text: "Open a NGO", done: false },
  { text: "Own a lake house", done: false },
  { text: "Study and settle abroad", done: true }]
},
{
  name: "ADRENALINE",
  items: [
  { text: "Learn to ride motorcycle", done: false },
  { text: "Own a boat", done: false },
  { text: "Become a licensed pilot", done: false },
  { text: "Go skydiving", done: false },
  { text: "Go parasailing", done: false },
  { text: "Go scuba diving", done: false, sub: [
    { text: "Get my PADI Open Water License (18m / 60ft)", done: false },
    { text: "Get my PADI Advanced Open Water License (30m / 100ft)", done: false },
    { text: "Get my PADI Deep Diver Specialty (40m / 130ft)", done: false },
  ]},
  { text: "Go windsurfing", done: false },
  { text: "Go bungee jumping", done: false },
  { text: "Hike (and survive) the most dangerous trail in the US", done: false }]
},
{
  name: "TRAVEL",
  items: [
  { text: "See the Northern Lights", done: false },
  { text: "Travel to all 7 continents", done: false },
  { text: "Road trip across the US", done: false }]
},
{
  name: "READING",
  items: [
  { text: "Read a total of 50 books", done: false },
  { text: "Read a total of 100 books", done: false },
  { text: "Read a total of 250 books", done: false },
  { text: "Read a total of 500 books", done: false }]
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

// ─── Letter-by-letter stagger text (inspired by Dev Ashish's bold type) ──────
function StaggerLetters({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.span ref={ref} className={`inline-block ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.03,
            ease: [0.22, 0.68, 0.36, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// ─── Magnetic hover effect (inspired by interactive elements) ────────────────
function MagneticWrap({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

// ─── Tilt card on hover (inspired by Viha's scattered objects) ──────────────
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rotateY: x * 12, rotateX: -y * 12 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
      animate={tilt}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 800, transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

// ─── Section wrapper with scale-in on scroll ────────────────────────────────
function ScrollSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
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
        hidden: { opacity: 0, y: 20, rotate: -1 },
        visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } }
      }}
      whileHover={{ rotate: [0, -1, 1, 0], transition: { duration: 0.4 } }}>
      
      {children}
    </motion.div>);

}
function ImpossibleListItem({ item, depth = 0 }: {item: ImpossibleItem;depth?: number;}) {
  return (
    <>
      <motion.div
        className={`flex items-center gap-3 rounded-md border border-border/50 bg-muted/20 px-3 py-1.5 group ${depth > 0 ? "ml-8" : ""}`}
        whileHover={{ x: 3, rotate: [0, -0.5, 0.5, 0], backgroundColor: "hsl(var(--accent) / 0.5)" }}
        transition={{ duration: 0.25 }}
      >
        {/* Circle checkbox */}
        <motion.div
          className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          item.done ?
          "bg-emerald-500 border-emerald-500" :
          "border-muted-foreground/40"}`}
          whileHover={!item.done ? { scale: 1.2, borderColor: "hsl(200,50%,35%)" } : {}}
        >
          {item.done &&
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500 }}>
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          </motion.div>
          }
        </motion.div>
        {/* Text */}
        <span className={`text-[15px] leading-relaxed flex-1 ${
        item.done ? "text-muted-foreground line-through" : "text-foreground"}`
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
      </motion.div>
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
      <section id="home" className="scroll-mt-20 relative overflow-hidden">

        {/* Top header: name / roles / social / location */}
        <ContentWrap className="pt-6">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            
            {/* Left: name + roles + social */}
            <div className="flex flex-col gap-2">
              <div className="relative inline-block">
                <h1 className="text-[26px] font-bold tracking-tight sm:text-[32px] leading-tight">
                  <WiggleText>Aashi Thakkar</WiggleText>
                </h1>
                
              </div>
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
                <MagneticWrap key={label} className="inline-block">
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-1.5 text-muted-foreground transition-all hover:text-foreground inline-block"
                    aria-label={label}
                    whileHover={{ scale: 1.3, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}>
                    
                      <Icon className="h-5 w-5" />
                    </motion.a>
                </MagneticWrap>
                )}
              </div>
            </div>

            {/* Right: location */}
            <div className="self-start">
              <ScrambleText text="TORONTO, ONTARIO" />
            </div>
          </motion.div>
        </ContentWrap>

        {/* Hero image - true full-bleed, zero padding */}
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
            I <motion.span className="italic" initial={{ opacity: 0, scale: 1.3 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>bridge</motion.span> the gap between<br />
            <StaggerLetters text="ambition and execution!" delay={0.8} className="mt-1" />
          </h2>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase">scroll</span>
            <ArrowDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </motion.div>

      </section>


      {/* ── Work ── */}
      <ScrollSection>
      <ContentWrap className="py-24 scroll-mt-20">
        <section id="work" className="scroll-mt-20 relative">

          <RevealText>
            <div className="relative inline-block">
              <h2 className="text-[28px] font-bold tracking-tight">Work</h2>
              
            </div>
            <p className="mt-1 text-[18px] text-muted-foreground">An overview of my career.</p>
          </RevealText>

          {/* Infographic Stats Row */}
          <RevealText delay={0.08}>
            <div className="mt-10 mb-8 grid grid-cols-3 gap-6 p-6 rounded-2xl border border-dashed border-border bg-muted/20">
              <AnimatedCounter value={4} suffix="+" label="Years Experience" delay={0} />
              <AnimatedCounter value={3} suffix="" label="Companies" delay={0.15} />
              <AnimatedCounter value={3} suffix="" label="Roles" delay={0.3} />
            </div>
          </RevealText>

          {/* Profile Card */}
          <RevealText delay={0.1}>
            <div className="mt-12 flex flex-col items-center text-center gap-4">
              <TiltCard className="relative">

                <img src={profilePhoto} alt="Aashi Thakkar" className="w-80 h-[28rem] rounded-2xl object-cover object-top" />
              </TiltCard>
            </div>
          </RevealText>

          {/* Bio - Journey Timeline */}
          <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
            <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
              <span className="text-[15px] font-mono tracking-[0.2em] text-muted-foreground uppercase">Bio</span>
            </div>
            <div className="flex-1">
              <div className="relative pl-8 border-l-2 border-border/60 space-y-8">
                {[
                  {
                    emoji: "👨‍💻",
                    label: "The Developer Days",
                    text: "Started as a full stack software developer. Loved building things - but kept asking \"why are we building this?\" more than \"how?\"",
                  },
                  {
                    emoji: "🤔",
                    label: "The Aha Moment",
                    text: "Three years in, realized I cared more about the problem than the code. Who is this for? Does it matter? Those questions consumed me.",
                  },
                  {
                    emoji: "🎨",
                    label: "The Pivot",
                    text: "Curiosity pulled me toward UX & Product - it clicked in a way code never did. Turns out, I was good at it before I even had the title.",
                  },
                  {
                    emoji: "🧠",
                    label: "The Philosophy",
                    text: "Owning problems end-to-end, bringing clarity to chaos, building things that genuinely matter. That's the work I find most meaningful.",
                  },
                  {
                    emoji: "🏦",
                    label: "Now",
                    text: "Leading Alternative Data, Gen AI & Research Tech products at RBC Capital Markets. Sitting at the intersection of tech × business.",
                  },
                  {
                    emoji: "❤️",
                    label: "Core Belief",
                    text: "The best products aren't just technically solid - they're built around real human needs. That shapes every decision I make.",
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                    className="relative group"
                  >
                    <div className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background transition-transform group-hover:scale-125" />
                    <div className="flex items-start gap-3">
                      <span className="text-xl mt-[-2px]">{step.emoji}</span>
                      <div>
                        <span className="text-xs font-mono tracking-wider text-primary uppercase">{step.label}</span>
                        <p className="text-[15px] text-foreground/80 mt-0.5 leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-8 pl-8 text-[15px] text-muted-foreground"
              >
                Into AI 🤖, data products 📊, or product strategy? <span className="text-foreground font-medium">Let's connect 🤝</span>
                {" · "}
                <a href="#about" onClick={(e) => {e.preventDefault();document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });}} className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity font-medium">See my life outside work ↓</a>
              </motion.p>
            </div>
          </div>

          {/* Experience */}
          <RevealText delay={0.2}>
            <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
              <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-[15px] font-mono tracking-[0.2em] text-muted-foreground uppercase">Experience</span>
                
              </div>
              <div className="flex-1 divide-y divide-border/40">
                {experiences.map((exp, i) =>
                <motion.div
                  key={i}
                  className="flex items-start gap-4 py-5 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                >
                    <motion.img
                      src={exp.logo}
                      alt={exp.company}
                      className="mt-1 h-10 w-10 shrink-0 rounded-lg object-contain"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="text-[17px] font-semibold group-hover:text-[hsl(200,50%,35%)] dark:group-hover:text-[hsl(200,40%,75%)] transition-colors">{exp.role}</h4>
                        <span className="font-mono text-[13px] text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-[15px] text-muted-foreground">{exp.company}</p>
                    </div>
                  </motion.div>
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
                {skillCategories.map((cat, catIdx) =>
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.08 }}
                >
                    <h4 className="mb-4 text-[22px] font-bold">{cat.name}</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {cat.items.map((skill, skillIdx) =>
                    <motion.span
                      key={skill}
                      className="rounded-full border border-[hsl(200,100%,40%,0.25)] bg-[hsl(200,100%,50%,0.1)] px-3 py-2 text-[14px] text-[hsl(200,50%,35%)] dark:border-[hsl(200,100%,50%,0.15)] dark:bg-[hsl(200,100%,50%,0.13)] dark:text-[hsl(200,40%,75%)] cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIdx * 0.02 + catIdx * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2, rotate: [0, -3, 3, 0] }}
                    >
                      {skill}
                    </motion.span>
                    )}
                    </div>
                  </motion.div>
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
              <TiltCard className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={eduPhoto1} alt="At Assumption College" className="w-full h-full object-cover object-[center_85%] transition-transform duration-500 hover:scale-110" />
              </TiltCard>
              <TiltCard className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={eduPhoto2} alt="Graduation" className="w-full h-full object-cover object-[center_25%] transition-transform duration-500 hover:scale-110" />
              </TiltCard>
            </div>
          </RevealText>


          {/* Contact */}
          <RevealText delay={0.55}>
            <div className="mt-16">
                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                    { href: "/Aashi_Thakkar_Resume.pdf", label: "Hire Me", icon: FileText, target: "_blank" },
                    { href: "https://www.linkedin.com/in/aashithakkar29/", label: "Coffee Chat", icon: Coffee, target: "_blank" },
                    { href: "https://topmate.io/aashi_thakkar", label: "1:1 Mentorship", icon: Link, target: "_blank" },
                  ].map((btn, i) => (
                    <MagneticWrap key={btn.label} className="inline-block">
                      <motion.a
                        href={btn.href}
                        target={btn.target}
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-[15px] font-medium transition-colors hover:bg-accent animate-pulse-glow"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.08, y: -3 }}
                        whileTap={{ scale: 0.92 }}
                      >
                        {btn.label} <btn.icon size={16} />
                      </motion.a>
                    </MagneticWrap>
                  ))}
                </div>
            </div>
          </RevealText>
        </section>
      </ContentWrap>
      </ScrollSection>

      <ScrollSection>
      <ContentWrap className="scroll-mt-20">
        <section id="projects" className="relative">
          {/* Tagline */}
          <RevealText>
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15]">
                I blend my engineering roots with
              </h2>
              <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15] text-muted-foreground">
                product strategy and thinking to build products
              </h3>
              <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15]">
                that just...{" "}
                <motion.span
                  className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)] inline-block"
                  initial={{ opacity: 0, scale: 1.3, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 0.68, 0.36, 1] }}
                >makes sense</motion.span>{" "}
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                >
                  👀
                </motion.span>
              </h3>
            </div>
          </RevealText>
          <RevealText delay={0.1}>
            <p className="text-[17px] text-muted-foreground italic text-center">
              Okay so... how do I do that? Here's how 👇
            </p>
          </RevealText>

          {/* Projects subtitle */}
          <RevealText delay={0.2}>
            <h3 className="mt-14 mb-12 text-center text-xl font-bold tracking-tight md:text-[28px] md:leading-[1.15] italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">
              Things I've built, shipped, or experimented with.
            </h3>
          </RevealText>

          {/* Projects grid */}
          <ProjectCarousel projects={projects} />
        </section>
      </ContentWrap>
      </ScrollSection>

      {/* ── References ── */}
      <ScrollSection>
      <ContentWrap className="pt-8 pb-8 scroll-mt-20">
        <section id="references" className="relative">
          <ReferencesSection />
        </section>
      </ContentWrap>
      </ScrollSection>

      {/* ── About ── */}
      <ScrollSection>
      <ContentWrap className="pt-8 pb-16 scroll-mt-20">
        <section id="about" className="scroll-mt-20 relative">
          
          {/* Headline */}
          <RevealText>
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15] whitespace-nowrap">
                When I'm not obsessing over product strategy,
              </h2>
              <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15] text-muted-foreground whitespace-nowrap">
                I'm probably doing <span className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">all of this.</span>
              </h3>
            </div>
          </RevealText>
          <RevealText delay={0.1}>
            <p className="mb-14 text-[17px] text-muted-foreground text-center">
              Indulging in the many hobbies I try to juggle outside the 9-to-5. Here's a peek 👀
            </p>
          </RevealText>

          {/* Current Hobbies - Scattered polaroid mood board */}
          <div className="relative w-full" style={{ minHeight: "850px" }}>
            {[
{ emoji: "🎨", title: "Painting", caption: "Follow my art journey @aashiarts_", rotate: "-5deg", top: "0px", left: "2%", width: "200px", delay: 0.1, pin: "hsl(0,70%,55%)", image: true },
{ emoji: "🌍", title: "Exploring new places", caption: "Always planning the next adventure", rotate: "3deg", top: "60px", left: "35%", width: "200px", delay: 0.18, pin: "hsl(35,80%,50%)", image: hobbyExploring, imagePos: "center 80%" },
{ emoji: "🤿", title: "Snorkelling", caption: "Discovering the world beneath the waves", rotate: "-2.5deg", top: "0px", left: "68%", width: "195px", delay: 0.26, pin: "hsl(200,70%,50%)", image: hobbySnorkelling },
{ emoji: "📚", title: "Reading", caption: "Getting lost in stories & ideas", rotate: "4deg", top: "290px", left: "4%", width: "195px", delay: 0.34, pin: "hsl(120,50%,45%)", image: hobbyReading, imagePos: "center top", link: "https://morning-tile-b61.notion.site/Books-c3bda9122c404b4aaaaf28d3a4ffebd9" },
{ emoji: "🏺", title: "Pottery", caption: "Moulding clay into something beautiful", rotate: "-4deg", top: "370px", left: "36%", width: "200px", delay: 0.42, pin: "hsl(280,60%,55%)", image: hobbyPottery, imagePos: "center 80%" },
            { emoji: "🥾", title: "Hiking", caption: "Chasing trails & mountain views", rotate: "2.5deg", top: "290px", left: "69%", width: "195px", delay: 0.5, pin: "hsl(25,80%,50%)", image: hobbyHiking },
            { emoji: "💃", title: "Kathak", caption: "Indian classical dance - rhythm & expression", rotate: "-3.5deg", top: "580px", left: "3%", width: "200px", delay: 0.58, pin: "hsl(340,70%,55%)", image: hobbyKathak, imagePos: "center 30%" },
            { emoji: "🏊‍♀️", title: "Swimming", caption: "My kind of meditation", rotate: "5deg", top: "660px", left: "35%", width: "195px", delay: 0.66, pin: "hsl(190,70%,45%)", image: hobbySwimming, imagePos: "center 75%" },
            { emoji: "🏸", title: "Badminton", caption: "Smashing my way through weekends", rotate: "-3deg", top: "560px", left: "67%", width: "200px", delay: 0.74, pin: "hsl(45,90%,55%)", image: hobbyBadminton }].
            map((hobby, i) =>
            <motion.div
              key={i}
              className="absolute"
              style={{ top: hobby.top, left: hobby.left, width: hobby.width, maxWidth: "32%" }}
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
            <div className="mt-4 mb-6">
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
            { label: "🧗‍♀️ Rock Climbing", delay: 0.47 },
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

          <div className="mt-12">
          {/* Product management is about people section - AFTER the gallery */}
          <RevealText delay={0.4}>
            <div className="mb-10 text-center">
              <h4 className="text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15] text-muted-foreground">
                Product management is about <span className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">people</span> before it's about <span className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">products.</span>
              </h4>
            </div>
          </RevealText>

          {/* Storytelling blocks */}
          <div className="space-y-6 max-w-3xl">
            {/* Block 1 - The social side */}
            <RevealText delay={0.45}>
              <div className="flex gap-4 items-start">
                <motion.div className="shrink-0 mt-1 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-lg" animate={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>🎉</motion.div>
                <div>
                  <p className="text-[17px] leading-[1.8] text-foreground/90">
                    Outside meeting rooms, sprint boards, and roadmaps, you'll usually find me doing something a little more social - joining team events, exploring new activities, or organizing spontaneous outings with colleagues. Whether it's group adventures 🏔️, company events 🎊, or just moments of shared laughter 😄, these experiences matter to me.
                  </p>
                </div>
              </div>
            </RevealText>

            {/* Block 2 - The why - highlighted callout */}
            <RevealText delay={0.5}>
              <div className="border-l-4 border-[hsl(200,50%,35%)] dark:border-[hsl(200,40%,75%)] pl-5 py-3 ml-14">
                <p className="text-[19px] leading-[1.7] font-semibold text-foreground">
                  Why? Because great products come from <span className="text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">strong human connections</span> 💡
                </p>
              </div>
            </RevealText>

            {/* Block 3 - Bringing people together */}
            <RevealText delay={0.55}>
              <div className="flex gap-4 items-start">
                <motion.div className="shrink-0 mt-1 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-lg" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>🧩</motion.div>
                <div>
                  <p className="text-[17px] leading-[1.8] text-foreground/90">
                    As a Product Manager, I spend a lot of time bringing people together - engineers, designers, stakeholders, and users. The same curiosity and energy that pushes me to participate in team activities is what helps me build trust 🤝, understand different perspectives 🌍, and create environments where collaboration thrives 🌱.
                  </p>
                </div>
              </div>
            </RevealText>

            {/* Block 4 - The gallery moments */}
            <RevealText delay={0.6}>
              <div className="flex gap-4 items-start">
                <motion.div className="shrink-0 mt-1 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-lg" animate={{ rotate: [0, -4, 4, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}>📸</motion.div>
                <div>
                  <p className="text-[17px] leading-[1.8] text-foreground/90">
                    This gallery captures some of those moments - the conversations 💬, the adventures 🚀, the team bonding 🫂, and the fun along the way.
                  </p>
                </div>
              </div>
            </RevealText>

            {/* Block 5 - The belief - closing statement */}
            <RevealText delay={0.65}>
              <motion.div
                className="mt-4 rounded-xl border border-dashed border-border bg-muted/30 p-6 relative"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-muted-foreground text-[15px] mb-2 italic">They're small snapshots of something bigger:</p>
                <p className="text-[19px] leading-[1.6] font-semibold text-foreground">
                  My belief that the best teams and the best products are built when people genuinely enjoy working together ❤️✨
                </p>
              </motion.div>
            </RevealText>
          </div>
          </div>
        </section>
      </ContentWrap>
      </ScrollSection>

      {/* ── Impossible List ── */}
      <ScrollSection>
      <ContentWrap className="py-24 pb-32 scroll-mt-20">
        <section id="impossible-list" className="relative">
          
          {/* Header */}
          <RevealText>
            <div className="mb-4 relative inline-block">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                <WiggleText>Impossible List</WiggleText>
              </h2>
              
              <p className="mt-4 text-lg text-muted-foreground">a bucket list, except better</p>
            </div>
          </RevealText>

          {/* Hero image */}
          <RevealText delay={0.1}>
            <div className="w-full aspect-[2/1] rounded-xl overflow-hidden my-10">
              <img src={impossibleListHero} alt="Impossible List hero" className="w-full h-full object-cover" />
            </div>
          </RevealText>

          {/* Explanation - visual storytelling */}
          <div className="mb-16 max-w-3xl">
            <RevealText delay={0.15}>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Impossible what?</h3>
            </RevealText>

            <div className="space-y-8">
              {[
                {
                  emoji: "🚀",
                  label: "The Concept",
                  text: "The Impossible List is like a bucket list - only more ambitious. The idea was originally created by Joel Runyon, and I first came across it through one of Thomas Frank's videos.",
                },
                {
                  emoji: "💡",
                  label: "The Spark",
                  text: "The concept immediately resonated with me, so I decided to create my own.",
                },
                {
                  emoji: "🎯",
                  label: "The Purpose",
                  text: "This list contains goals that challenge me to push beyond my current limits. While these ambitions are personal, sharing them publicly helps keep me accountable and committed to pursuing them.",
                },
                {
                  emoji: "🌱",
                  label: "The Philosophy",
                  text: "I may never complete every item on this list - and that's perfectly fine. The real purpose isn't finishing the list, but embracing the journey and the growth that comes from chasing ambitious goals.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  className="relative group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-[-2px]">{step.emoji}</span>
                    <div>
                      <span className="text-xs font-mono tracking-wider text-primary uppercase">{step.label}</span>
                      <p className="text-[15px] text-foreground/80 mt-0.5 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

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
      </ScrollSection>

    </div>);

}