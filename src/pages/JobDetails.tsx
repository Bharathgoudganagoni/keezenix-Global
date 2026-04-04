import { useParams } from "react-router-dom";
import { MapPin, Clock, CheckCircle2, CheckCircle } from "lucide-react";
import { useState } from "react";

/* ✅ Job Type */
type Job = {
  title: string;
  location: string;
  type: string;
  desc: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
};

/* ✅ Job Data */
const jobs: Job[] = [
  {
    title: "Executive Assistant – Recruitments & Client Services",
    location: "Remote / India",
    type: "Full-Time",
    desc: "We are looking for a proactive Executive Assistant to support recruitment operations and client coordination.",

    responsibilities: [
      "Assist in end-to-end recruitment process",
      "Coordinate with clients and candidates",
      "Schedule interviews and follow-ups",
      "Maintain candidate database",
      "Support HR operations"
    ],

    requirements: [
      "0–2 years experience",
      "Strong communication skills",
      "Basic MS Office knowledge",
      "Good time management",
      "Interest in HR domain"
    ],

    skills: ["Recruitment", "Communication", "MS Office", "HR Operations"]
  }
];

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();

  /* ✅ Form State */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  /* ✅ Success Popup State (FIXED POSITION) */
  const [success, setSuccess] = useState(false);

  /* ✅ Submit */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload resume");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    formData.append("resume", file);

    try {
      await fetch("https://keezenix-backend.onrender.com/apply", {
        method: "POST",
        body: formData
      });

      // ✅ Show success popup
      setSuccess(true);

      // ✅ Clear form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setFile(null);

      // ✅ Auto hide after 3 sec
      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    } catch (err) {
      console.error(err);
      alert("Error sending application");
    }
  };

  const job = jobs[0];

  return (
    <div className="pt-32 px-4 max-w-5xl mx-auto">

      {/* ✅ SUCCESS POPUP */}
      {success && (
        <div className="fixed top-6 right-6 z-50 animate-slideIn">
          <div className="bg-white shadow-xl rounded-xl px-6 py-4 flex items-center gap-3 border">

            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle className="text-green-600" size={24} />
            </div>

            <div>
              <p className="font-semibold text-sm">
                Application Submitted Successfully 🎉
              </p>
              <p className="text-xs text-gray-500">
                Our team will review your profile and get back to you soon.
              </p>
            </div>

          </div>
        </div>
      )}

      {/* JOB DETAILS */}
      <div className="service-card p-8 mb-10">
        <h1 className="text-2xl font-bold mb-3">{job.title}</h1>

        <div className="flex gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <MapPin size={14} /> {job.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> {job.type}
          </span>
        </div>

        <p className="mb-6">{job.desc}</p>

        <h3 className="font-bold mb-2">Responsibilities</h3>
        {job.responsibilities.map((item) => (
          <div key={item} className="flex gap-2 text-sm mb-1">
            <CheckCircle2 size={14} /> {item}
          </div>
        ))}

        <h3 className="font-bold mt-6 mb-2">Requirements</h3>
        {job.requirements.map((item) => (
          <div key={item} className="flex gap-2 text-sm mb-1">
            <CheckCircle2 size={14} /> {item}
          </div>
        ))}
      </div>

      {/* FORM */}
      <div className="service-card p-8">
        <h2 className="text-xl font-bold mb-6">Apply Now</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="file"
            onChange={(e) =>
              e.target.files && setFile(e.target.files[0])
            }
            className="w-full"
            required
          />

          <textarea
            placeholder="Why should we hire you?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border rounded"
          />

          <button type="submit" className="btn-hero">
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
};

export default JobDetails;