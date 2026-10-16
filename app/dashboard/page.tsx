
import { redirect } from "next/navigation";
import { connectDB } from "../lib/mongodb";
import { getSession } from "../lib/session";
import User from "../models/User";
import { Suspense } from "react";

function DashboardLoading() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <p className="text-slate-600">Loading your dashboard...</p>
    </main>
  );
}

async function DashboardContent() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  await connectDB();

  const user = await User.findById(session.userId).select(
    "name email role"
  );

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Welcome, {user.name}!
      </h1>

      <p className="mt-3 text-slate-600">
        You are successfully logged in to SkillBridge.
      </p>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Your account
        </h2>

        <p className="mt-4 text-slate-600">
          <strong>Name:</strong> {user.name}
        </p>

        <p className="mt-2 text-slate-600">
          <strong>Email:</strong> {user.email}
        </p>

        <p className="mt-2 text-slate-600">
          <strong>Role:</strong> {user.role}
        </p>
      </section>
    </main>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardContent />
    </Suspense>
  );
}