import Link from "next/link";

export default function Page() {
  return (
    <main>
      <header>
        <h1 className="p-4 m-3 text-4xl font-bold">
          CPRG 306: Web Development 2
        </h1>
      </header>
      <div className="p-4 m-4">
        <Link href="/week-2">Week 2 Assignment</Link>
        <br />
        <Link href="/week-3">Week 3 Assignment</Link>
        <br />
        <Link href="/week-4">Week 4 Assignment</Link>
        <br />
        <Link href="/week-5">Week 5 Assignment</Link>
        <br />
        <Link href="/week-6">Week 6 Assignment</Link>
      </div>
    </main>
  );
}
