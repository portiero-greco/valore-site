import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { useLanguage } from "../lib/LanguageContext";

export function ContactForm() {
  const { t } = useLanguage(); // safe even if unused later

  const [attemptedSubmit, setAttemptedSubmit] =
    useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [consentGiven, setConsentGiven] =
    useState(false);

  /* ================= VALIDATION ================= */

  const canSubmit = () => {
    return (
      !!fullName &&
      !!email &&
      !!phone &&
      !!subject &&
      !!message &&
      consentGiven
    );
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (!canSubmit()) return;

    const formData = {
      fullName,
      email,
      phone,
      subject,
      message,
    };

    console.log(
      "Contact form submitted:",
      formData
    );

    alert(
      `Ευχαριστούμε ${fullName}! Το μήνυμά σας στάλθηκε επιτυχώς.`
    );

    /* Reset */

    setFullName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setConsentGiven(false);
    setAttemptedSubmit(false);
  };

  return (
    <section
      className="py-12 md:py-20 bg-gray-50"
      id="contact-form"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">

          <h2 className="text-[#52a447] mb-2">
            Επικοινωνήστε μαζί μας
          </h2>

          <p className="text-gray-600 mb-8">
            Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Full Name */}
            <div>
              <Label htmlFor="fullName">
                Ονοματεπώνυμο *
              </Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) =>
                  setFullName(e.target.value)
                }
                className={`mt-1 ${
                  attemptedSubmit && !fullName
                    ? "border-red-500 border-2"
                    : ""
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className={`mt-1 ${
                  attemptedSubmit && !email
                    ? "border-red-500 border-2"
                    : ""
                }`}
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone">
                Τηλέφωνο *
              </Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                className={`mt-1 ${
                  attemptedSubmit && !phone
                    ? "border-red-500 border-2"
                    : ""
                }`}
              />
            </div>

            {/* Subject */}
            <div>
              <Label htmlFor="subject">
                Θέμα *
              </Label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) =>
                  setSubject(e.target.value)
                }
                className={`mt-1 ${
                  attemptedSubmit && !subject
                    ? "border-red-500 border-2"
                    : ""
                }`}
              />
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message">
                Μήνυμα *
              </Label>
              <Textarea
                id="message"
                rows={6}
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                className={`mt-1 ${
                  attemptedSubmit && !message
                    ? "border-red-500 border-2"
                    : ""
                }`}
              />
            </div>

            {/* Consent */}
            <div
              className={`flex items-start space-x-2 rounded-lg p-4 ${
                attemptedSubmit &&
                !consentGiven
                  ? "border-red-500 border-2 bg-red-50"
                  : "border bg-gray-50"
              }`}
            >
              <Checkbox
                id="consent"
                checked={consentGiven}
                onCheckedChange={(checked) =>
                  setConsentGiven(
                    checked === true
                  )
                }
              />

              <Label
                htmlFor="consent"
                className="cursor-pointer leading-relaxed"
              >
                Δίνω τη συγκατάθεσή μου…
              </Label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-[#52a447] hover:bg-[#458a3b]"
            >
              Αποστολή Μηνύματος
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
