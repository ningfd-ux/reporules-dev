import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — RepoRules.dev",
  description:
    "RepoRules.dev privacy policy. We process package.json content in real-time for generating AI coding standards and do not store submitted data.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-muted-foreground">Last updated: May 2026</p>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Information We Collect
          </h2>
          <p>
            RepoRules.dev is a tool that generates AI coding standards from
            repository metadata. We collect only:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              The package.json content you paste into the generator
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Basic analytics (page views, feature usage)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            How We Use Your Information
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Generate AI coding standards from your package.json
              (processed in real-time, not stored)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Improve the product based on usage patterns
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Data Storage
          </h2>
          <p>
            We do not store the package.json content you submit. All data is
            processed in real-time and discarded after the generation is
            complete. We do not use cookies for tracking purposes.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Third-Party Services
          </h2>
          <p>
            We use DeepSeek API to generate AI coding standards. Your
            package.json content is sent to DeepSeek for processing and is
            subject to their privacy policy. We do not share personal
            information with any other third parties.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Contact
          </h2>
          <p>
            If you have questions about this privacy policy, please open an
            issue on our GitHub repository.
          </p>
        </section>
      </div>
    </div>
  );
}
