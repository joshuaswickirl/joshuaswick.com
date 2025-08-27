import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="px-6 sm:px-8 lg:px-12 pt-8 lg:pt-16 pb-16">
      <section className="w-full max-w-3xl sm:mx-12 md:mx-auto space-y-2 text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-gray-700 dark:text-primary">
          Joshua Swick
        </h1>
        <p className="text-gray-700 dark:text-primary text-lg lg:text-lg leading-relaxed max-w-prose break-words hyphens-auto">
          Building tools to accelerate ingenuity.
        </p>
        <ul className="gap-y-8 text-gray-700 dark:text-gray-300 text-lg lg:text-lg max-w-prose mb-8">
          <li className="flex items-center gap-3">
            <IconMail
              className="h-5 w-5 md:h-6 md:w-6 text-gray-600 dark:text-primary"
              stroke={1.75}
              aria-hidden="true"
            />
            <a
              href="mailto:joshuaswickirl@gmail.com"
              aria-label="Email"
              className="no-underline md:underline underline-offset-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              joshuaswickirl@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <IconBrandYoutube
              className="h-5 w-5 md:h-6 md:w-6 text-gray-600 dark:text-primary"
              stroke={1.75}
              aria-hidden="true"
            />
            <a
              href="https://www.youtube.com/@joshuaswickirl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube channel"
              className="no-underline md:underline underline-offset-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              youtube.com/@joshuaswickirl
            </a>
          </li>
          <li className="flex items-center gap-3">
            <IconBrandX
              className="h-5 w-5 md:h-6 md:w-6 text-gray-600 dark:text-primary"
              stroke={1.75}
              aria-hidden="true"
            />
            <a
              href="https://x.com/joshuaswickirl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X profile"
              className="no-underline md:underline underline-offset-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              x.com/joshuaswickirl
            </a>
          </li>
          <li className="flex items-center gap-3">
            <IconBrandGithub
              className="h-5 w-5 md:h-6 md:w-6 text-gray-600 dark:text-primary"
              stroke={1.75}
              aria-hidden="true"
            />
            <a
              href="https://github.com/joshuaswickirl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="no-underline md:underline underline-offset-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              github.com/joshuaswickirl
            </a>
          </li>
          <li className="flex items-center gap-3">
            <IconBrandLinkedin
              className="h-5 w-5 md:h-6 md:w-6 text-gray-600 dark:text-primary"
              stroke={1.75}
              aria-hidden="true"
            />
            <a
              href="https://www.linkedin.com/in/joshuaswickirl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="no-underline md:underline underline-offset-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              linkedin.com/in/joshuaswickirl
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
