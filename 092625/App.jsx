import React, { useState } from "react";

export function Today() {
  const now = new Date();

  const pad = (n) => n.toString().padStart(2, "0");
  const day = pad(now.getDate());
  const month = pad(now.getMonth() + 1);
  const year = now.getFullYear();
  const dateStr = `${day}.${month}.${year}`;

  const hour = now.getHours();
  let greeting = "Добрий вечір";
  if (hour >= 5 && hour <= 11) greeting = "Добрий ранок";
  else if (hour >= 12 && hour <= 17) greeting = "Добрий день";

  return (
    <div style={styles.card}>
      <div style={styles.heading}>Дата</div>
      <div style={styles.large}>{dateStr}</div>
      <div style={styles.greeting}>{greeting}!</div>
    </div>
  );
}

export function CoffeeCounter() {
  const [count, setCount] = useState(0);
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Кави випито</div>
      <div style={styles.counter}>{count} ☕</div>
      <button
        style={styles.button}
        onClick={() => setCount((c) => c + 1)}
        aria-label="Додати чашку кави"
      >
        Ще чашка кави
      </button>
      {count > 3 && <div style={styles.warn}>Можливо, досить ☕</div>}
    </div>
  );
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Дякую, ${name || "користувач"}!`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formCard}>
      <div style={styles.heading}>Напиши мені</div>

      <label style={styles.label}>
        Ім'я
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
      </label>

      <label style={styles.label}>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
      </label>

      <label style={styles.label}>
        Повідомлення
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ ...styles.input, height: 100 }}
          required
        />
      </label>

      <button type="submit" style={styles.button}>
        Надіслати
      </button>
    </form>
  );
}

export function MoodColor() {
  const moods = {
    Веселий: { background: "#FFF7D6", color: "#7A4F01" },
    Спокійний: { background: "#E8F7F2", color: "#054A40" },
    Злий: { background: "#FDECEA", color: "#7A0B0B" },
  };

  const [mood, setMood] = useState("Веселий");

  const style = {
    padding: 20,
    borderRadius: 8,
    background: moods[mood].background,
    color: moods[mood].color,
    transition: "background 300ms ease, color 300ms ease",
    boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
  };

  return (
    <div style={{ ...styles.card, ...style }}>
      <div style={styles.heading}>Колір настрою</div>
      <div style={{ marginBottom: 12 }}>
        {Object.keys(moods).map((m) => (
          <button
            key={m}
            onClick={() => setMood(m)}
            style={{
              ...styles.moodButton,
              border: m === mood ? "2px solid rgba(0,0,0,0.12)" : "1px solid #ddd",
              background: m === mood ? "rgba(0,0,0,0.04)" : "transparent",
            }}
          >
            {m}
          </button>
        ))}
      </div>
      <div style={{ fontWeight: 600 }}>
        Поточний настрій: <span style={{ fontStyle: "italic" }}>{mood}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.grid}>
        <Today />
        <CoffeeCounter />
        <ContactForm />
        <MoodColor />
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Inter, Roboto, system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial",
    padding: 24,
    background: "#2a3977ff",
    minHeight: "100vh",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 18,
  },
  card: {
    padding: 18,
    borderRadius: 10,
    background: "#5950d4ff",
    boxShadow: "0 6px 20px rgba(19,24,36,0.03)",
  },
  formCard: {
    padding: 18,
    borderRadius: 10,
    background: "#5950d4ff",
    boxShadow: "0 6px 20px rgba(19,24,36,0.03)",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  heading: {
    fontSize: 14,
    color: "#000000ff",
    marginBottom: 8,
    fontWeight: 600,
  },
  large: { fontSize: 20, fontWeight: 700, marginBottom: 6 },
  greeting: { fontSize: 16, color: "#2b2f36" },
  counter: { fontSize: 18, margin: "8px 0" },
  button: {
    padding: "8px 12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
  warn: { marginTop: 10, color: "#9b2c2c", fontWeight: 600 },
  label: { display: "flex", flexDirection: "column", fontSize: 14, gap: 6 },
  input: {
    padding: 8,
    borderRadius: 6,
    border: "1px solid #99b1c2ff",
    fontSize: 14,
  },
  moodButton: {
    marginRight: 8,
    padding: "6px 10px",
    borderRadius: 6,
    cursor: "pointer",
    color: '#000'
  },
};
