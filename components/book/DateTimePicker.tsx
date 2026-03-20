"use client";

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
      <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-foreground/30 mb-6">
        Step 2 — Pick a Date &amp; Time
      </p>

      {/* Day selector */}
      <div className="grid grid-cols-7 gap-1.5 mb-8">
        {weekDates.map(({ day, date, isToday }) => (
          <button
            key={date}
            onClick={() => onDateSelect(date)}
            className={clsx(
              "flex flex-col items-center py-3 border transition-colors duration-200",
              selectedDate === date
                ? "bg-foreground border-foreground text-background"
                : isToday
                ? "border-foreground/30 text-foreground"
                : "border-foreground/10 text-foreground/40 hover:border-foreground/25"
            )}
          >
            <span className="font-sans text-[9px] tracking-wider uppercase mb-1.5">
              {day}
            </span>
            <span className="font-serif font-light text-lg leading-none">{date}</span>
          </button>
        ))}
      </div>

      {/* Time slots */}
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map(({ time, available }) => (
          <button
            key={time}
            onClick={() => available && onTimeSelect(time)}
            disabled={!available}
            className={clsx(
              "py-3 px-3 border font-sans text-[11px] transition-colors duration-200",
              !available
                ? "border-foreground/6 text-foreground/20 cursor-not-allowed"
                : selectedTime === time
                ? "bg-foreground border-foreground text-background"
                : "border-foreground/12 text-foreground/45 hover:border-foreground/30"
            )}
          >
            {available ? time : `${time} — Full`}
          </button>
        ))}
      </div>
    </div>
  );
}
