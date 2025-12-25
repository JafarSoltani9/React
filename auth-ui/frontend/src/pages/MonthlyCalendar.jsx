import { useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./MonthlyCalendar.module.css";

function isSameDay(a, b) {
  return (
    a &&
    b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function MonthlyCalendar() {
  const [selectedDate, setSelectedDate] = useState(null); // ✅ allow "no selection"
  const [activeStartDate, setActiveStartDate] = useState(new Date()); // ✅ month navigation

  const monthLabel = useMemo(() => {
    return activeStartDate
      .toLocaleString("en-US", { month: "long", year: "numeric" })
      .toUpperCase();
  }, [activeStartDate]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.month}>{monthLabel}</div>
        <div className={styles.yearPill}>{activeStartDate.getFullYear()}</div>
      </div>

      <div className={styles.layout}>
        <div className={styles.calendarBox}>
          <Calendar
            value={selectedDate} // ✅ if null, no tile will be "active"
            onClickDay={(date) => {
              // ✅ toggle: click again -> remove selection -> default styling
              setSelectedDate((prev) => (isSameDay(prev, date) ? null : date));
            }}
            onActiveStartDateChange={({ activeStartDate }) => {
              if (activeStartDate) setActiveStartDate(activeStartDate);
            }}
            activeStartDate={activeStartDate}
            calendarType="gregory"
            showNeighboringMonth={false}
            formatShortWeekday={(locale, date) =>
              date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()
            }
            prev2Label={null}
            next2Label={null}
          />
        </div>

        <div className={styles.notes}>
          <div className={styles.notesTitle}>NOTE</div>
          <div className={styles.dots} />
        </div>
      </div>
    </div>
  );
}
