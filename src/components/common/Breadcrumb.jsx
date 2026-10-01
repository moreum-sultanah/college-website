
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {isLast || !item.to ? (
                <span aria-current="page" className="font-medium text-ink">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="text-ink/60 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              )}

              {!isLast && (
                <ChevronRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-ink/40"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}