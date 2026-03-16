import SectionIntro from "./SectionIntro";
import { useLanguage } from "../../context/LanguageContext";
import type { HomepageTexts } from "../../context/LanguageProvider";
import { useEffect, useState } from "react";

type Props = {};

function Process({}: Props) {
  const STEP_DURATION = 3000;
  const { texts } = useLanguage();
  const steps = texts.homepageTexts.Process.steps;

  const [focusedIndex, setFocusedIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;

        if (next >= 100) {
          return 100;
        }

        return next;
      });
    }, STEP_DURATION / 50);

    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    if (progress < 100) return;

    const timeout = setTimeout(() => {
      setFocusedIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));

      setProgress(0);
    }, 200);

    return () => clearTimeout(timeout);
  }, [progress, steps.length]);

  return (
    <section className="py-24 lg:py-32 text-dark-text">
      <SectionIntro
        head={texts.homepageTexts.Process.intro_head}
        text={texts.homepageTexts.Process.intro_text}
      />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full border-2 border-highlight-accent border-dashed -translate-y-1/2 z-0" />
          {steps.map(
            (
              entry: HomepageTexts["Process"]["steps"][number],
              index: number,
            ) => (
              <div className="relative">
                <div
                  onMouseEnter={() => {
                    setFocusedIndex(index);
                    setPaused(true);
                  }}
                  onMouseLeave={() => {
                    setPaused(false);
                  }}
                  className={`flex flex-col h-full gap-4 rounded-4xl p-4 transition-all duration-500 relative hover:cursor-pointer
                    ${
                      focusedIndex === index
                        ? "bg-highlight-accent scale-105 text-white shadow-2xl z-10"
                        : "bg-white border-2 border-highlight-accent text-dark-text z-10"
                    }
                    `}
                >
                  <div className="text-sm font-medium text-muted-foreground text-black">
                    {entry.number}
                  </div>
                  <h3 className="text-xl font-semibold">{entry.title}</h3>
                  {focusedIndex === index ? (
                    <div
                      className="h-1 bg-white transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  ) : (
                    <div className="bg-dark-text border-t mb-2 "></div>
                  )}
                  <p className="text-muted-foreground leading-relaxed">
                    {entry.text}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Process;
