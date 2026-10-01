
import Breadcrumb from "./Breadcrumb";

export default function PageHeader({
  label,
  title,
  description,
  breadcrumbItems = [],
}) {
  return (
    <section className="border-b border-ink/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {breadcrumbItems.length > 0 && (
          <Breadcrumb items={breadcrumbItems} />
        )}

        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent">
          {label}
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold text-primary sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-ink/70">{description}</p>
        )}
      </div>
    </section>
  );
}