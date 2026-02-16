const books = [
  { title: "Atomic Habits", author: "James Clear", review: "A practical guide to building good habits and breaking bad ones." },
  { title: "The Mom Test", author: "Rob Fitzpatrick", review: "Essential reading for anyone building products. Changed how I do user research." },
  { title: "Sapiens", author: "Yuval Noah Harari", review: "A sweeping history of humankind that puts everything in perspective." },
  { title: "Deep Work", author: "Cal Newport", review: "Convinced me to restructure my entire work day around focused blocks." },
];

export default function Reads() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reads</h1>
        <p className="mt-2 text-muted-foreground">Books that shaped my thinking.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {books.map((book, i) => (
          <div key={i} className="rounded-lg border border-border p-5">
            <div className="mb-3 h-32 rounded-md bg-muted" /> {/* Cover placeholder */}
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-sm text-muted-foreground">{book.author}</p>
            <p className="mt-2 text-sm leading-relaxed">{book.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
