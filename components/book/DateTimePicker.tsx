"use client";

import { useState } from "react";
import clsx from "clsx";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const timeSlots = [
  { time: "7:00 AM", available: true },
  { time: "9:00 AM", available: true },
  { time: "11:00 AM", available: false },
  { time: "1:00 PM", available: true },
  { time: "3:00 PM", available: true },
  { time: "6:00 PM", available: true },
];

// Generate this week's dates
function getWeekDates() {
  const today = new Date();
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));

  return daysOfWeek.map((day, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return {
      day,
      date: date.getDate(),
      isToday: date.toDateString() === today.toDateString(),
    };
  });
}

interface DateTimePickerProps {
  selectedDate: number | null;
  selectedTime: string | null;
  onDateSelect: (date: number) => void;
  onTimeSelect: (time: string) => void;
}

export default function DateTimePicker({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
}: DateTimePickerProps) {
  const weekDates = getWeekDates();

  return (
    <div className="mb-12">
      <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent/60 mb-5">
        Step 2 — Pick a Date &amp; Time
      </p>

      {/* Day selector */}
      <div className="grid grid-cols-7 gap-2 mb-8">
        {weekDates.map(({ day, date, isToday }) => (
          <button
            key={date}
            onClick={() => onDateSelect(date)}
            className={clsx(
              "flex flex-col items-center py-3 px-1 border transition-colors duration-200 cursor-pointer",
              selectedDate === date
                ? "bg-primary border-primary text-background"
                : isToday
                ? "border-primary/50 text-foreground"
                : "border-soft text-accent/70 hover:border-primary/40"
            )}
          >
            <span className="font-sans text-[10px] tracking-wider uppercase mb-1">
              {day}
            </span>
            <span className="font-serif text-lg leading-none">{date}</span>
          </button>
        ))}
      </div>

      {/* Time slots */}
      <div className="grid grid-cols-3 gap-3">
        {timeSlots.map(({ time, available }) => (
          <button
            key={time}
            onClick={() => available && onTimeSelect(time)}
            disabled={!available}
            className={clsx(
              "py-3 px-4 border font-sans text-sm transition-colors duration-200",
              !available
                ? "border-soft/40 text-accent/30 cursor-not-allowed"
                : selectedTime === time
                ? "bg-primary border-primary text-background"
                : "border-soft text-accent/70 hover:border-primary/50 cursor-pointer"
            )}
          >
            {available ? time : `${time} — Full`}
          </button>
        ))}
      </div>
    </div>
  );
}
