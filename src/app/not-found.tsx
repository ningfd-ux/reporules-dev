import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-6 text-center">
      <span className="text-8xl font-bold text-muted-foreground/20">404</span>
      <h1 className="mt-4 text-2xl font-semibold text-foreground">
        Page not found
      </h1>
      <p className="mt-2 max-w-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
      >
        Back to Home
      </Link>
    </div>
  );
}
