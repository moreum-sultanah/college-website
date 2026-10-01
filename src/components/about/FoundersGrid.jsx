
import { founders } from "../../data/founders";

export default function FoundersGrid() {
  return (
    <section className="bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-primary">
          Founders & Patrons
        </h2>
        <p className="mt-2 text-ink/70">
          The individuals behind the initiative.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((person) => (
            <div
              key={person.id}
              className="rounded-lg border border-ink/10 bg-white p-5"
            >
              <p className="font-heading text-base font-semibold text-ink">
                {person.name}
              </p>
              <p className="mt-1 text-sm text-ink/60">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}