/** @jsxImportSource @emotion/react */
"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { speakingEvents, speakingStats, EventCategory } from "../constants/speaking";
import ThemeToggle from "../components/theme-toggle";

function SessionsContent() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | EventCategory>("All");

  const activeEvents = speakingEvents.filter((ev) => ev.category !== "Mentoring & Judging");

  const filteredEvents = selectedCategory === "All"
    ? activeEvents
    : activeEvents.filter((ev) => ev.category === selectedCategory);

  return (
    <div className="min-h-screen relative pb-[64px]">
      {/* Floating Fixed Theme Toggle */}
      <div className="fixed top-[20px] right-[20px] z-[100001]">
        <ThemeToggle />
      </div>

      <div className="max-w-[1152px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px] pt-[32px] space-y-[40px]">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-[6px] text-[14px] font-medium text-[var(--text-accent)] hover:underline transition"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Hero Header */}
        <div className="space-y-[12px] text-center md:text-left">
          <div className="inline-flex items-center gap-[8px] px-[14px] py-[6px] rounded-[9999px] bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-[12px] font-semibold backdrop-blur-md">
            <span className="w-[8px] h-[8px] rounded-[9999px] bg-emerald-400 animate-pulse"></span>
            Public Speaking & Workshops
          </div>

          <h1 className="text-[36px] md:text-[52px] font-extrabold tracking-tight gradient-text">
            Sessions & Talks
          </h1>

          <p className="text-[var(--text-secondary)] text-[16px] md:text-[18px] max-w-[700px] leading-relaxed font-normal">
            Keynote talks and hands-on workshops across tech communities worldwide — empowering developers with Firebase, Google Gemini, Genkit, and Agentic AI.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
          <div className="glass-card p-[20px] rounded-[16px] text-center space-y-[4px]">
            <h2 className="text-[28px] md:text-[36px] font-extrabold gradient-text-accent">
              {speakingStats.totalReach}
            </h2>
            <p className="text-[14px] font-medium text-[var(--text-muted)]">Developers Reached</p>
          </div>

          <div className="glass-card p-[20px] rounded-[16px] text-center space-y-[4px]">
            <h2 className="text-[28px] md:text-[36px] font-extrabold gradient-text-accent">
              {activeEvents.length}+
            </h2>
            <p className="text-[14px] font-medium text-[var(--text-muted)]">Talks & Workshops</p>
          </div>

          <div className="glass-card p-[20px] rounded-[16px] text-center space-y-[4px]">
            <h2 className="text-[28px] md:text-[36px] font-extrabold gradient-text-accent">
              {speakingStats.countriesCount}
            </h2>
            <p className="text-[14px] font-medium text-[var(--text-muted)]">Countries & Global Communities</p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-[8px] p-[6px] rounded-[9999px] bg-[var(--card-bg)] border border-[var(--card-border)] backdrop-blur-md w-fit shadow-sm">
          {(["All", "Talk", "Workshop"] as const).map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = cat === "All"
              ? activeEvents.length
              : cat === "Talk"
              ? speakingStats.talksCount
              : speakingStats.workshopsCount;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-[16px] py-[8px] rounded-[9999px] text-[14px] font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--card-bg-hover)]"
                }`}
              >
                {cat === "Talk" ? "Talks & Keynotes" : cat === "Workshop" ? "Workshops" : "All"} ({count})
              </button>
            );
          })}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {filteredEvents.map((ev) => (
            <div
              key={ev.id}
              className="glass-card glass-card-hover p-[24px] rounded-[16px] flex flex-col justify-between space-y-[16px]"
            >
              <div className="space-y-[12px]">
                {/* Badges Row */}
                <div className="flex flex-wrap items-center justify-between gap-[8px]">
                  <span className="px-[10px] py-[3px] rounded-[9999px] text-[12px] font-semibold bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)]">
                    {ev.category === "Talk" ? "🎤 Talk / Keynote" : ev.category === "Workshop" ? "💻 Workshop" : "🤝 Mentoring & Judging"}
                  </span>

                  <span
                    className={`inline-flex items-center gap-[6px] px-[10px] py-[3px] rounded-[9999px] text-[12px] font-medium border ${
                      ev.mode === "Offline"
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "bg-sky-500/10 border-sky-500/30 text-sky-400"
                    }`}
                  >
                    <span
                      className={`w-[6px] h-[6px] rounded-[9999px] ${
                        ev.mode === "Offline" ? "bg-emerald-400" : "bg-sky-400"
                      }`}
                    ></span>
                    {ev.mode}
                  </span>
                </div>

                {/* Event Name & Topic */}
                <div className="space-y-[4px]">
                  <h3 className="text-[20px] font-bold text-[var(--text-primary)] tracking-tight">
                    {ev.topic}
                  </h3>
                  <h4 className="text-[14px] font-semibold text-[var(--text-accent)]">
                    {ev.eventName}
                  </h4>
                </div>

                {/* Date & Location */}
                <div className="flex flex-wrap items-center gap-[12px] text-[13px] text-[var(--text-muted)] pt-[4px]">
                  <span>📅 {ev.date}</span>
                  <span>•</span>
                  <span>📍 {ev.city}, {ev.country}</span>
                  <span>•</span>
                  <span className="font-medium text-[var(--text-secondary)]">👥 {ev.reach}+ Attendees</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-[6px] pt-[4px]">
                  {ev.domainTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-[10px] py-[2px] rounded-[9999px] text-[11px] font-medium bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links Footer */}
              {(ev.eventUrl || ev.socialUrl) && (
                <div className="flex flex-wrap items-center gap-[12px] pt-[12px] border-t border-[var(--card-border)]">
                  {ev.eventUrl && (
                    <a
                      href={ev.eventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-[4px] text-[12px] font-semibold text-[var(--text-accent)] hover:underline"
                    >
                      Event Details ↗
                    </a>
                  )}

                  {ev.socialUrl && (
                    <a
                      href={ev.socialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-[4px] text-[12px] font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:underline"
                    >
                      Social Post ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SessionsPage() {
  return (
    <Suspense fallback={<div className="p-[40px] text-center">Loading Sessions & Talks...</div>}>
      <SessionsContent />
    </Suspense>
  );
}
