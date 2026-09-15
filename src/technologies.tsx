import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

function TechnologyCard({ technology, isAdded, onAdd }: TechnologyCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <img
          src={technology.icon}
          alt=""
          className="h-7 w-7 object-contain"
        />
        <span className="rounded-full bg-sky-50 px-2 py-1 text-xs text-sky-600">
          {technology.badge}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {technology.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
        {technology.description}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-50 pt-3 text-xs text-slate-500">
        <span className="rounded bg-slate-100 px-2 py-1">
          {technology.category}
        </span>
        <span>{technology.difficulty}</span>
        <span
          className="ml-auto whitespace-nowrap"
          aria-label={`Rating ${technology.rating} out of 5`}
        >
          <span className="text-amber-400">★</span> {technology.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className="mt-4 w-full rounded-lg bg-slate-950 px-3 py-2.5 text-sm text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadTechnologies() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}technologies.json`);
        if (!response.ok) {
          throw new Error("The technology file could not be loaded.");
        }
        const data: Technology[] = await response.json();
        if (active) setTechnologies(data);
      } catch {
        if (active) setError("Could not load technologies. Please refresh to try again.");
      } finally {
        if (active) setLoading(false);
      }
    }

    loadTechnologies();
    return () => { active = false; };
  }, []);

  function addToStack(technology: Technology) {
    const alreadyAdded = stack.some((item) => item.id === technology.id);
    if (alreadyAdded) {
      toast.warn("This technology is already in your stack.");
      return;
    }
    setStack((previous) => [...previous, technology]);
    toast.success(`${technology.name} added to your stack.`);
  }

  function removeFromStack(technology: Technology) {
    setStack((previous) => previous.filter((item) => item.id !== technology.id));
    toast.info(`${technology.name} removed from your stack.`);
  }

  function removeAll() {
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <section
      id="technologies"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16"
    >
      <ToastContainer position="top-right" autoClose={2500} limit={3} />
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">
        Explore the <span className="brand-text">Technologies</span>
      </h2>
      <p className="mt-3 text-sm text-slate-500">
        Explore your options and build your ideal development stack.
      </p>

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-4">
        <div className="min-w-0 lg:col-span-3">
          {loading ? (
            <p role="status" className="py-10 text-slate-500">
              Loading technologies...
            </p>
          ) : error ? (
            <p role="alert" className="py-10 text-red-600">
              {error}
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stack.some((item) => item.id === technology.id)}
                  onAdd={addToStack}
                />
              ))}
            </div>
          )}
        </div>

        <aside className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
          <h3 className="font-bold text-slate-900">Your Stack</h3>
          <p aria-live="polite" className="mt-1 text-xs text-slate-400">
            {stack.length === 0
              ? "No technologies selected yet."
              : `${stack.length} ${stack.length === 1 ? "technology" : "technologies"} selected`}
          </p>
          {stack.length === 0 ? (
            <p className="mt-5 rounded-xl border border-dashed border-slate-200 px-3 py-8 text-center text-sm text-slate-400">
              Your stack is empty.
            </p>
          ) : (
            <>
              <div className="mt-5 space-y-3">
                {stack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 p-3"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="h-6 w-6 shrink-0 object-contain"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-400">{item.category}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromStack(item)}
                      aria-label={`Remove ${item.name}`}
                      className="p-1 text-slate-400 hover:text-red-500"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={removeAll}
                className="mt-8 w-full rounded-lg border border-red-200 py-2 text-sm text-red-500 hover:bg-red-50"
              >
                Remove All
              </button>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}