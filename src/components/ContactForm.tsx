import { useState, type FormEvent } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Send } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

export function ContactForm() {
  const { t } = useLanguage();
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);

  const canSubmit = () => !!fullName && !!email && !!phone && !!subject && !!message && consentGiven;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    if (!canSubmit()) return;
    alert(`Ευχαριστούμε ${fullName}! Το μήνυμά σας στάλθηκε επιτυχώς.`);
    setFullName(""); setEmail(""); setPhone(""); setSubject(""); setMessage("");
    setConsentGiven(false); setAttemptedSubmit(false);
  };

  const fieldErr = (val: string) => attemptedSubmit && !val ? "1.5px solid #f87171" : "1px solid #e5e7eb";

  return (
    <section id="contact-form" style={{ padding: "112px 0", backgroundColor: "white" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 20 }}>
            <div style={{ height: 1, width: 40, backgroundColor: "#52a447" }} />
            <span style={{ color: "#52a447", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>Message</span>
            <div style={{ height: 1, width: 40, backgroundColor: "#52a447" }} />
          </div>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 300, color: "#111827", letterSpacing: "-0.02em", marginBottom: 10 }}>
            Επικοινωνήστε <span style={{ color: "#52a447", fontWeight: 600 }}>μαζί μας</span>
          </h2>
          <p style={{ color: "#9ca3af", fontSize: 15 }}>Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας.</p>
        </div>

        {/* Card */}
        <div style={{ backgroundColor: "white", border: "1px solid #f0f0f0", borderRadius: 16, padding: "44px 40px", boxShadow: "0 2px 24px rgba(0,0,0,0.05)" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
              <div>
                <Label htmlFor="fullName" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af" }}>Ονοματεπώνυμο *</Label>
                <Input id="fullName" value={fullName} onChange={e => setFullName(e.target.value)} style={{ marginTop: 6, border: fieldErr(fullName), borderRadius: 6 }} />
              </div>
              <div>
                <Label htmlFor="email" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af" }}>Email *</Label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ marginTop: 6, border: fieldErr(email), borderRadius: 6 }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
              <div>
                <Label htmlFor="phone" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af" }}>Τηλέφωνο *</Label>
                <Input id="phone" value={phone} onChange={e => setPhone(e.target.value)} style={{ marginTop: 6, border: fieldErr(phone), borderRadius: 6 }} />
              </div>
              <div>
                <Label htmlFor="subject" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af" }}>Θέμα *</Label>
                <Input id="subject" value={subject} onChange={e => setSubject(e.target.value)} style={{ marginTop: 6, border: fieldErr(subject), borderRadius: 6 }} />
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <Label htmlFor="message" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af" }}>Μήνυμα *</Label>
              <Textarea id="message" rows={5} value={message} onChange={e => setMessage(e.target.value)} style={{ marginTop: 6, border: fieldErr(message), borderRadius: 6, resize: "none" }} />
            </div>

            <div style={{ backgroundColor: attemptedSubmit && !consentGiven ? "rgba(254,226,226,0.5)" : "#f9fafb", border: `1px solid ${attemptedSubmit && !consentGiven ? "#fca5a5" : "#f0f0f0"}`, borderRadius: 8, padding: "14px 16px", display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 24 }}>
              <Checkbox id="consent" checked={consentGiven} onCheckedChange={c => setConsentGiven(c === true)} style={{ marginTop: 2 }} />
              <Label htmlFor="consent" style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, cursor: "pointer", fontWeight: 400 }}>
                Δίνω τη συγκατάθεσή μου για την επεξεργασία των προσωπικών μου δεδομένων.
              </Label>
            </div>

            <button
              type="submit"
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                backgroundColor: "#52a447", color: "white",
                fontSize: 14, fontWeight: 600, padding: "14px", borderRadius: 6,
                border: "none", cursor: "pointer",
                boxShadow: "0 4px 16px rgba(82,164,71,0.25)",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget.style.backgroundColor = "#3f8a36"); }}
              onMouseLeave={e => { (e.currentTarget.style.backgroundColor = "#52a447"); }}
            >
              <Send size={15} />
              Αποστολή Μηνύματος
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}