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
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [notes, setNotes] = useState({}); // { dateKey: [{ id, text, timestamp }] }
  const [currentNote, setCurrentNote] = useState("");
  const [editingNoteId, setEditingNoteId] = useState(null);

  const monthLabel = useMemo(() => {
    return activeStartDate
      .toLocaleString("en-US", { month: "long", year: "numeric" })
      .toUpperCase();
  }, [activeStartDate]);

  // Get date key for storing notes
  const getDateKey = (date) => {
    if (!date) return null;
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  };

  // Handle date selection and load its notes
  const handleDateClick = (date) => {
    const isSame = isSameDay(selectedDate, date);
    setSelectedDate(isSame ? null : date);
    
    if (isSame) {
      setCurrentNote("");
      setEditingNoteId(null);
    }
  };

  // Update note as user types
  const handleNoteChange = (e) => {
    setCurrentNote(e.target.value);
  };

  // Save note (add new or update existing)
  const handleSaveNote = () => {
    if (selectedDate && currentNote.trim()) {
      const key = getDateKey(selectedDate);
      
      if (editingNoteId) {
        // Update existing note
        setNotes(prev => ({
          ...prev,
          [key]: prev[key].map(note => 
            note.id === editingNoteId 
              ? { ...note, text: currentNote, timestamp: Date.now() }
              : note
          )
        }));
        setEditingNoteId(null);
      } else {
        // Add new note
        const newNote = {
          id: Date.now(),
          text: currentNote,
          timestamp: Date.now()
        };
        
        setNotes(prev => ({
          ...prev,
          [key]: [...(prev[key] || []), newNote]
        }));
      }
      
      setCurrentNote("");
    }
  };

  // Click on note to edit
  const handleNoteClick = (note) => {
    setCurrentNote(note.text);
    setEditingNoteId(note.id);
  };

  // Delete note
  const handleDeleteNote = (noteId) => {
    if (selectedDate) {
      const key = getDateKey(selectedDate);
      setNotes(prev => ({
        ...prev,
        [key]: prev[key].filter(note => note.id !== noteId)
      }));
      
      if (editingNoteId === noteId) {
        setCurrentNote("");
        setEditingNoteId(null);
      }
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setCurrentNote("");
    setEditingNoteId(null);
  };

  const dateNotes = selectedDate ? notes[getDateKey(selectedDate)] || [] : [];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.month}>{monthLabel}</div>
        <div className={styles.yearPill}>{activeStartDate.getFullYear()}</div>
      </div>

      <div className={styles.layout}>
        <div className={styles.calendarBox}>
          <Calendar
            value={selectedDate}
            onClickDay={handleDateClick}
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
          
          {selectedDate && (
            <div className={styles.noteInput}>
              <textarea
                value={currentNote}
                onChange={handleNoteChange}
                placeholder={editingNoteId ? "Edit your note..." : "Add a note for this day..."}
                className={styles.textarea}
              />
              <div className={styles.buttonGroup}>
                <button onClick={handleSaveNote} className={styles.saveButton}>
                  {editingNoteId ? "Update" : "Save"}
                </button>
                {editingNoteId && (
                  <button onClick={handleCancelEdit} className={styles.cancelButton}>
                    Cancel
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        <div className={styles.notes}>
          <div className={styles.notesTitle}>NOTE</div>
          <div className={styles.notesContent}>
            {selectedDate ? (
              dateNotes.length > 0 ? (
                <div className={styles.notesList}>
                  {dateNotes.map((note) => (
                    <div 
                      key={note.id} 
                      className={`${styles.noteItem} ${editingNoteId === note.id ? styles.noteItemEditing : ''}`}
                    >
                      <div 
                        className={styles.noteText}
                        onClick={() => handleNoteClick(note)}
                      >
                        {note.text}
                      </div>
                      <button 
                        onClick={() => handleDeleteNote(note.id)}
                        className={styles.deleteIconButton}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.noSelection}>No notes for this day</div>
              )
            ) : (
              <div className={styles.noSelection}>Select a day to view notes</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}