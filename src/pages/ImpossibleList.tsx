import { Check } from "lucide-react";

const categories = [
  {
    name: "Fitness",
    items: [
      { text: "Run a marathon", done: true },
      { text: "Complete a triathlon", done: false },
      { text: "Do 100 push-ups in a row", done: true },
      { text: "Hold a 5-minute plank", done: false },
    ],
  },
  {
    name: "Professional",
    items: [
      { text: "Get promoted to Senior PM", done: true },
      { text: "Launch a product used by 1M+ people", done: false },
      { text: "Speak at a major conference", done: true },
      { text: "Mentor 10 aspiring PMs", done: false },
    ],
  },
  {
    name: "Creative",
    items: [
      { text: "Start a podcast", done: true },
      { text: "Write a book", done: false },
      { text: "Publish 100 blog posts", done: false },
      { text: "Reach 10K YouTube subscribers", done: false },
    ],
  },
  {
    name: "Travel",
    items: [
      { text: "Visit Japan", done: true },
      { text: "See the Northern Lights", done: false },
      { text: "Travel to all 7 continents", done: false },
      { text: "Road trip across the US", done: false },
    ],
  },
];

export default function ImpossibleList() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Impossible List</h1>
        <p className="mt-2 text-muted-foreground">
          Not a bucket list — it's an evolving list of goals that push my limits.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {categories.map((cat) => (
          <div key={cat.name}>
            <h2 className="mb-4 text-lg font-semibold">{cat.name}</h2>
            <ul className="space-y-2">
              {cat.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  {item.done ? (
                    <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                  ) : (
                    <span className="h-4 w-4 shrink-0 rounded-full border border-border" />
                  )}
                  <span className={item.done ? "line-through text-muted-foreground" : ""}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
