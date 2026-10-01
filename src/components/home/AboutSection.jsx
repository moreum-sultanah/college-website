
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import campusImg from "../../assets/campus.jpeg";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Campus image */}
        <img
          src={campusImg}
          alt="Campus of Cox's Bazar City College"
          loading="lazy"
          className="aspect-[4/3] w-full rounded-lg object-cover"
        />

        {/* Text content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            About Cox's Bazar City College
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-primary sm:text-4xl">
            Building better futures through education.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            Cox's Bazar City College is dedicated to quality education,
            academic excellence, and student development. With a commitment to
            nurturing knowledge and talent, we strive to prepare students for a
            successful future.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}