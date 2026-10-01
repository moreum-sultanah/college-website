
export default function HistorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Narrative */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our History
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">
            A journey that began in 1993.
          </h2>
          <p className="mt-6 leading-relaxed text-ink/70">
            In the early 1990s, a group of young, educated individuals — led
            by educationist Professor Momtajul Haque — took the initiative to
            establish a private college in Cox's Bazar town.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            Over time, the initiative grew stronger as more education-friendly
            members of the community joined hands — including the then
            Chairman of Cox's Bazar Municipality, local political and social
            figures, and prominent journalists.
          </p>
        </div>

        {/* Pull-quote */}
        <div className="flex items-center">
          <blockquote className="border-l-4 border-accent pl-6">
            <p className="font-heading text-xl italic leading-relaxed text-primary sm:text-2xl">
              "Cox's Bazar City College began its journey in 1993 as a higher
              secondary educational institution, and the first classes
              commenced on 29 July of that year."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}