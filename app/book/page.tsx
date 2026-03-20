"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import SessionSelector from "@/components/book/SessionSelector";
import DateTimePicker from "@/components/book/DateTimePicker";
import BookingForm from "@/components/book/BookingForm";

export default function BookPage() {
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pt-36 pb-28 px-6 md:px-14">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="Reserve Your Space"
          heading="Book a Session"
          subheading="Choose your session, pick a time, and show up. That's all you need to do."
          centered={false}
        />

        <div className="mt-4">
          <SessionSelector
            selected={selectedSession}
            onSelect={setSelectedSession}
          />

          <DateTimePicker
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onDateSelect={setSelectedDate}
            onTimeSelect={setSelectedTime}
          />

          <BookingForm />
        </div>
      </div>
    </div>
  );
}
