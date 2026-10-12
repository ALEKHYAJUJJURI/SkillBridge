
export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-4xl animate-pulse rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
        <div className="h-5 w-28 rounded bg-slate-200" />
        <div className="mt-8 h-10 w-3/4 rounded bg-slate-200" />
        <div className="mt-5 h-5 w-full rounded bg-slate-100" />
        <div className="mt-3 h-5 w-2/3 rounded bg-slate-100" />
        <div className="mt-8 h-20 rounded-xl bg-slate-100" />
        <div className="mt-8 h-7 w-48 rounded bg-slate-200" />

        <div className="mt-5 space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-16 rounded-xl bg-slate-100" />
          ))}
        </div>
      </div>
    </main>
  );
}
