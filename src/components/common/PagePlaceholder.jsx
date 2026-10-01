
export default function PagePlaceholder({ label, title, description }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        {label}
      </p>
      <h1 className="mt-4 font-heading text-4xl font-semibold text-primary">
        {title}
      </h1>
      <p className="mt-4 max-w-md text-lg text-ink/70">{description}</p>
    </div>
  );
}