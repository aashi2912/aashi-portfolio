import { motion } from "framer-motion";
import impossibleListHero from "@/assets/impossible-list-hero.jpg";

type ListItem = {
  text: string;
  done?: boolean;
  date?: string;
  link?: { label: string; url: string };
  sub?: ListItem[];
};

type Category = {
  name: string;
  description?: string;
  items: ListItem[];
};

const categories: Category[] = [
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
      { text: "Work for Google", done: false },
    ],
  },
  {
    name: "CREATIVE",
    items: [
      { text: "Start a business", done: false },
      { text: "Write and publish a book", done: false },
      { text: "Learn to play guitar", done: false },
      { text: "Learn Pottery", done: false },
      { text: "Learn Kathak", done: false },
      { text: "Learn Salsa", done: false },
      { text: "Learn Knitting/Crochet", done: false },
    ],
  },
  {
    name: "TRAVEL",
    items: [
      { text: "Visit Japan", done: true },
      { text: "See the Northern Lights", done: false },
      { text: "Travel to all 7 continents", done: false },
      { text: "Road trip across the US", done: false },
    ],
  },
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

function ListItemRow({ item, depth = 0 }: { item: ListItem; depth?: number }) {
  return (
    <>
      <div className={`flex items-start gap-3 py-1 ${depth > 0 ? "pl-6" : ""}`}>
        <div className="flex-1">
          <span
            className={`text-[15px] leading-relaxed ${
              item.done
                ? "line-through text-muted-foreground"
                : "text-foreground"
            }`}
          >
            {item.text}
          </span>
          {item.date && (
            <span className="ml-2 text-xs text-muted-foreground italic">
              {item.date}
            </span>
          )}
          {item.link && (
            <a
              href={item.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-xs text-blue-500 hover:underline"
            >
              {item.link.label}
            </a>
          )}
        </div>
      </div>
      {item.sub?.map((subItem, i) => (
        <ListItemRow key={i} item={subItem} depth={depth + 1} />
      ))}
    </>
  );
}

export default function ImpossibleList() {
  return (
    <div className="space-y-16 max-w-3xl mx-auto">
      {/* Hero */}
      <FadeIn>
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Impossible List</h1>
          <p className="text-lg text-muted-foreground">a bucket list, except better</p>
        </div>
      </FadeIn>

      {/* Hero Image Placeholder */}
      <FadeIn delay={0.1}>
        <div className="w-full aspect-[2/1] rounded-xl overflow-hidden">
          <img src={impossibleListHero} alt="Impossible List hero" className="w-full h-full object-cover" />
        </div>
      </FadeIn>

      {/* Explanation */}
      <FadeIn delay={0.15}>
        <div className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Impossible what?</h2>
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
      </FadeIn>

      {/* Categories */}
      <div className="space-y-12">
        {categories.map((cat, catIndex) => (
          <FadeIn key={cat.name} delay={0.05 * catIndex}>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12">
              {/* Category label */}
              <div className="md:w-40 shrink-0">
                <span className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                  {cat.name}
                </span>
              </div>

              {/* Items */}
              <div className="flex-1 space-y-0">
                {cat.description && (
                  <p className="text-[15px] leading-relaxed text-foreground/90 mb-4">
                    {cat.description}
                  </p>
                )}
                {cat.items.map((item, i) => (
                  <ListItemRow key={i} item={item} />
                ))}
              </div>
            </div>

            {/* Divider */}
            {catIndex < categories.length - 1 && (
              <div className="border-b border-border mt-12" />
            )}
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
