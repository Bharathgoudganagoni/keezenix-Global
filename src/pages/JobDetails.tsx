import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Clock, CheckCircle2, CheckCircle } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

/* ✅ Job Type */
type Job = {
  id: string;
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
    id: "hr-assistant",
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
  },
  {
    id: "system-test",
    title: "Senior System Test Engineer",
    location: "India",
    type: "Hybrid (4 Days Office + 1 Day WFH)",
    desc: "We are looking for a Senior System Test Engineer to lead system testing for industrial automation environments.",
    responsibilities: [
      "Work on Servo, PLC, VFD & Motion Control systems",
      "Drive installation, parameterization & commissioning activities",
      "Execute testing using PLC programs & drive systems",
      "Collaborate on Fieldbus technologies & integrations",
      "Develop & debug FBD / Ladder Logic programs",
      "Troubleshoot issues & ensure optimal system performance"
    ],
    requirements: [
      "6–9 years of relevant experience",
      "Hands-on expertise in Servo, PLC, VFD",
      "Strong experience in Motion Programming",
      "Knowledge of Fieldbus protocols",
      "Proficiency in FBD & Ladder Logic"
    ],
    skills: ["Fieldbus protocols", "FBD & Ladder Logic", "Servo, PLC, VFD", "Motion Programming"]
  },
  {
    id: "data-engineer",
    title: "Senior Data Engineer",
    location: "Bengaluru",
    type: "Full-Time",
    desc: "We are looking for a Senior Data Engineer to demonstrate strong problem-solving skills and technical ownership.",
    responsibilities: [
      "Build and manage end-to-end data pipelines",
      "Develop scalable data systems on AWS",
      "Handle real-time and batch data processing",
      "Optimize performance and resolve data issues",
      "Automate workflows using Airflow, Jenkins, and CI/CD tools"
    ],
    requirements: [
      "6–8 years experience in Data Engineering",
      "Strong skills in Python, Spark, Databricks, and SQL",
      "Hands-on experience with AWS",
      "Experience with Airflow, Jenkins, Docker",
      "Knowledge of Kafka or Kinesis"
    ],
    skills: ["Python", "Spark", "AWS", "Kafka"]
  },
  {
    id: "algorithm-engineer",
    title: "Algorithm Engineer",
    location: "Chennai",
    type: "Full-Time",
    desc: "Design and develop advanced algorithms for high-performance computing applications.",
    responsibilities: [
      "Design and implement efficient algorithms",
      "Develop high-performance C++ solutions",
      "Analyze data and optimize performance",
      "Test and debug algorithms",
      "Collaborate with engineering teams"
    ],
    requirements: [
      "1+ year experience or strong projects",
      "Strong C++ skills",
      "Image Processing knowledge",
      "MATLAB experience preferred",
      "Strong analytical skills"
    ],
    skills: ["C++", "Image Processing", "Algorithms", "MATLAB"]
  },
  {
    id: "graphic-designer",
    title: "Senior Specialist – Graphic Designer",
    location: "Hyderabad",
    type: "Full-Time",
    desc: "Create high-quality visual designs and drive strong brand communication.",
    responsibilities: [
      "Design creatives for digital and print",
      "Ensure brand consistency",
      "Manage multiple projects",
      "Collaborate with teams",
      "Own design delivery"
    ],
    requirements: [
      "8+ years experience",
      "Strong portfolio",
      "Typography knowledge",
      "Good communication",
      "Attention to detail"
    ],
    skills: ["Adobe Suite", "Visual Design", "UX/UI", "Branding"]
  },
  {
    id: "software-engineer",
    title: "Sr. Software Engineer",
    location: "Hyderabad",
    type: "Hybrid (4 Days Office + 1 Day WFH)",
    desc: "Design and develop scalable software solutions using .NET technologies.",
    responsibilities: [
      "Build and maintain applications",
      "Apply OOP principles",
      "Analyze requirements",
      "Debug and optimize",
      "Collaborate with teams"
    ],
    requirements: [
      "6–9 years experience",
      "Strong .NET / C# skills",
      "Good problem-solving",
      "System design experience",
      "Agile experience"
    ],
    skills: [".NET", "C#", "OOP", "Git"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Associate",
    location: "Pune",
    type: "Full-Time",
    desc: "Manage in-store sales and digital engagement.",
    responsibilities: [
      "Manage sales operations",
      "Handle social media",
      "Create content",
      "Convert leads",
      "Support customers"
    ],
    requirements: [
      "Relevant experience",
      "Good communication",
      "Social media interest",
      "Customer focus",
      "Retail flexibility"
    ],
    skills: ["Sales", "Social Media", "Content", "Communication"]
  },
  {
    id: "industry-lead",
    title: "Industry Vertical Lead",
    location: "USA",
    type: "Full-Time",
    desc: "Lead and grow the Life Sciences vertical.",
    responsibilities: [
      "Drive revenue growth",
      "Manage enterprise relationships",
      "Identify opportunities",
      "Lead solution sales",
      "Travel as needed"
    ],
    requirements: [
      "10–15 years experience",
      "Strong sales experience",
      "Life sciences knowledge",
      "Leadership skills"
    ],
    skills: ["Sales", "Client Management", "Strategy"]
  },
  {
    id: "business-transformation",
    title: "Lead Business Transformation",
    location: "Mumbai",
    type: "Full-Time / Hybrid",
    desc: "Drive EBITDA growth and operational excellence.",
    responsibilities: [
      "Lead transformation programs",
      "Improve processes",
      "Track P&L",
      "Drive value creation",
      "Work with leadership"
    ],
    requirements: [
      "5–7 years consulting experience",
      "Transformation expertise",
      "Industrial sector knowledge",
      "Strong leadership"
    ],
    skills: ["Strategy", "Finance", "Operations"]
  }
];

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const job = jobs.find((item) => item.id === id);

  if (!job) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl font-bold">Job not found</h2>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload resume");
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "resume_upload");

      const cloudRes = await fetch(
        "https://api.cloudinary.com/v1_1/dlvcvmqpr/raw/upload",
        {
          method: "POST",
          body: formData
        }
      );

      const cloudData = await cloudRes.json();

      if (!cloudRes.ok) {
        throw new Error(cloudData.error?.message || "Upload failed");
      }

      const resumeUrl = cloudData.secure_url;

      await emailjs.send(
        "service_shercmh",
        "template_y0j7dlu",
        {
          name,
          email,
          phone,
          message: message || "No message provided",
          job_title: job.title,
          resume_link: resumeUrl
        },
        "BNcg9oCi16DISG1Bj"
      );

      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setFile(null);

      if (fileInputRef.current) fileInputRef.current.value = "";

      setTimeout(() => {
        navigate("/application-submitted", {
          state: {
            name,
            jobTitle: job.title
          }
        });
      }, 1500);
    } catch (error) {
      console.error(error);
      alert("Failed to send application");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 px-4 max-w-5xl mx-auto">
      {success && (
        <div className="fixed top-6 right-6 z-50 animate-slideIn">
          <div className="bg-white shadow-xl rounded-xl px-6 py-4 flex items-center gap-3 border">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div>
              <p className="font-semibold text-sm">Application Submitted Successfully 🎉</p>
              <p className="text-xs text-gray-500">
                Our team will review your profile and get back to you soon.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="service-card p-8 mb-10">
        <h1 className="text-2xl font-bold mb-3">{job.title}</h1>

        <div className="flex gap-4 text-sm text-muted-foreground mb-4 flex-wrap">
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
          <div key={item} className="flex gap-2 text-sm mb-2">
            <CheckCircle2 size={14} className="mt-1 text-primary" />
            <span>{item}</span>
          </div>
        ))}

        <h3 className="font-bold mt-6 mb-2">Requirements</h3>
        {job.requirements.map((item) => (
          <div key={item} className="flex gap-2 text-sm mb-2">
            <CheckCircle2 size={14} className="mt-1 text-primary" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="service-card p-8 mb-20">
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
            type="email"
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
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={(e) => e.target.files && setFile(e.target.files[0])}
            className="w-full"
            required
            disabled={isSubmitting}
          />

          <textarea
            placeholder="Why should we hire you?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border rounded"
          />

          <button type="submit" className="btn-hero" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobDetails;