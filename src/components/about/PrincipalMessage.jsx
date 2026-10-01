
import principalImg from "../../assets/principal.jpeg";
import { siteInfo } from "../../data/site";

export default function PrincipalMessage() {
  return (
    <section className="bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Photo */}
          <img
            src={principalImg}
            alt="Principal of Cox's Bazar City College in his office"
            loading="lazy"
            className="aspect-[4/5] w-full max-w-md rounded-lg object-cover"
          />

          {/* Message */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Principal's Message
            </p>

            <span
              aria-hidden="true"
              className="mt-4 block font-heading text-6xl leading-none text-accent"
            >
              "
            </span>

            {/* ⚠️ PLACEHOLDER — principal-এর আসল message নাও */}
            <p className="mt-2 font-heading text-xl italic leading-relaxed text-ink sm:text-2xl">
              Education is not just about acquiring knowledge — it is about
              building character and preparing young minds for the
              challenges of tomorrow.
            </p>

            <div className="mt-6 border-t border-ink/10 pt-4">
              <p className="font-semibold text-ink">Name Placeholder</p>
              <p className="text-sm text-ink/60">
                Principal, {siteInfo.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}