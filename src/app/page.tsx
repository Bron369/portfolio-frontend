"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
);

const skills = [
  { name: "Next.js", value: 95 },
  { name: "Laravel", value: 90 },
  { name: "TypeScript", value: 88 },
  { name: "MySQL", value: 82 },
];

export default function Home() {
  const chartData = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: "Skill level",
        data: skills.map((skill) => skill.value),
        backgroundColor: ["#2563eb", "#7c3aed", "#0f766e", "#ea580c"],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <section className="grid items-center gap-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Full stack developer portfolio
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Building modern web experiences with Next.js, Laravel, and MySQL.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              This starter portfolio combines a polished frontend with a REST API backend,
              making it easy to expand with projects, blogs, and admin features.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#skills"
                className="rounded-full bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
              >
                Explore skills
              </a>
              <a
                href="http://localhost:8000/api/portfolio"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-5 py-3 font-medium text-slate-100 transition hover:bg-slate-800"
              >
                View API
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
            <h2 className="mb-4 text-xl font-semibold">Core stack</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>• Next.js + React + TypeScript</li>
              <li>• Tailwind CSS + Shadcn-inspired UI</li>
              <li>• Laravel 12 + Sanctum</li>
              <li>• MySQL + Chart.js dashboards</li>
            </ul>
          </div>
        </section>

        <section id="skills" className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Skills overview
            </p>
            <h2 className="mt-3 text-3xl font-semibold">A fast, polished foundation for your portfolio.</h2>
            <p className="mt-4 text-slate-300">
              The layout is ready for projects, testimonials, contact forms, and analytics.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <Bar
              data={chartData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                  y: { beginAtZero: true, ticks: { color: "#cbd5e1" } },
                  x: { ticks: { color: "#cbd5e1" } },
                },
              }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
