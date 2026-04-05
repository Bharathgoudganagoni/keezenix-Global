import { useParams } from "react-router-dom";
import { MapPin, Clock, CheckCircle2, CheckCircle } from "lucide-react";
import { useState, useRef } from "react";

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
  },
  {
    title: "Senior System Test Engineer",
    location: "India",
    type: "Hybrid (4 Days Office + 1 Day WFH)",
    desc: "We are looking for a Senior System Test Engineer to Lead system testing for industrial automation environments.",

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
      "Strong experience in Motion Programminge",
      "Knowledge of Fieldbus protocols",
      "Proficiency in FBD & Ladder Logic"
    ],

    skills: ["Fieldbus protocols", "FBD & Ladder Logic", "Servo, PLC, VFD", "Motion Programming"]
  },
  {
    title: "Senior Data Engineer",
    location: "Bengaluru",
    type: "Full-Time",
    desc: "We are looking for a Senior Data Engineer to Demonstrate strong problem-solving skills and technical ownership.",

    responsibilities: [
      "Build and manage end-to-end data pipelines",
      "Develop scalable data systems on AWS",
      "Handle real-time and batch data processing",
      "Optimize performance and resolve data issues",
      "Automate workflows using Airflow, Jenkins, and CI/CD tools"
    ],

    requirements: [
      "6–8 years experience in Data Engineering and distributed systems",
      "Strong skills in Python, Spark, Databricks, and Advanced SQL",
      "Hands-on experience with AWS (S3, EMR, Lambda)",
      "Experience with Airflow, Jenkins, Docker, and Terraform",
      "Knowledge of Kafka, Kinesis, or Spark Streaming"
    ],

    skills: ["Python & Advanced SQL", "Apache Spark & Databricks", "AWS (S3, EMR, Lambda)", "Kafka / Streaming Technologies"]
  },
  {
    title: "Algorithm Engineer",
    location: "Chennai",
    type: "Full-Time",
    desc: "We are looking for a Algorithm Engineer to Design and develop advanced algorithms for high-performance computing applications.",

    responsibilities: [
      "Design and implement efficient algorithms for image processing tasks",
      "Develop high-performance solutions using C++",
      "Analyze data and optimize algorithm accuracy and speed",
      "Test, validate, and debug algorithm performance",
      "Collaborate with cross-functional engineering teams"
    ],

    requirements: [
      "Internship/projects or 1+ year experience in Image Processing",
      "Degree from premier institutes (IIT, NIT, IISc, or top global universities)",
      "Strong proficiency in C++",
      "Experience in Image Processing or MATLAB",
      "Strong analytical and problem-solving skills"
    ],

    skills: ["C++ Programming", "Image Processing", "Algorithm Design", "MATLAB / Data Analysis"]
  },
  {
    title: "Senior Specialist – Graphic Designer",
    location: "Hyderabad",
    type: "Full-Time",
    desc: "We are looking for a Senior Specialist – Graphic Designer to Create high-quality visual designs, driving strong brand communication and user engagement.",

    responsibilities: [
      "Design visually compelling creatives for digital and print platforms",
      "Ensure consistency in typography, layout, and brand guidelines",
      "Manage multiple design projects with tight deadlines",
      "Collaborate with marketing and cross-functional teams",
      "Take ownership of projects from concept to final delivery"
    ],

    requirements: [
      "8+ years of experience in graphic design or related field",
      "Strong portfolio showcasing diverse design work",
      "Solid understanding of typography and design principles",
      "Good communication and project management skills",
      "High attention to detail and ability to handle multiple tasks"
    ],

    skills: ["Adobe Creative Suite", "Visual Design & Typography", "UX/UI & Data Visualization", "MS Office (PowerPoint, Excel)"]
  },
  {
    title: "Sr.Software Engineer",
    location: "Hyderabad",
    type: "Hybrid (4 Days Office + 1 Day WFH)",
    desc: "We are looking for a Sr.Software Engineer to Design and develop scalable software solutions using .NET technologies and object-oriented programming.",

    responsibilities: [
      "Design, develop, and maintain applications using .NET and C#",
      "Apply OOP principles to build scalable and efficient systems",
      "Analyze requirements and translate them into technical solutions",
      "Debug, test, and optimize application performance",
      "Collaborate with cross-functional teams to deliver high-quality software"
    ],

    requirements: [
      "BE/BSc/MSc in Electronics, Electrical, or Computer Science",
      "6–9 years of experience in software development",
      "Strong expertise in .NET Framework / .NET Core and C#",
      "Good analytical and problem-solving skills",
      "Experience working in Agile or collaborative environments"
    ],

    skills: [".NET & C# Development", "Object-Oriented Programming (OOP)", "UML & System Design", "Version Control (Git / SVN)"]
  },
  {
    title: "Digital Marketing Associate",
    location: "Hyderabad",
    type: "Full-Time",
    desc: "We are looking for a Digital Marketing Associate to Manage in-store sales and drive digital engagement through social media and customer interaction.",

    responsibilities: [
      "Assist customers and manage in-store sales operations",
      "Handle social media platforms like Instagram and WhatsApp",
      "Coordinate photoshoots and create fashion content",
      "Convert online inquiries into sales",
      "Maintain strong customer relationships and service experience"
    ],

    requirements: [
      "Minimum qualification with relevant retail or marketing experience",
      "Good communication skills (English / Hindi / Telugu)",
      "Interest in fashion, styling, and social media trends",
      "Friendly, customer-focused attitude",
      "Willingness to work in a retail store environment"
    ],

    skills: ["Sales & Customer Handling", "Social Media Management", "Content Coordination", "Communication & Interpersonal Skills"]
  },
  {
    title: "Industry Vertical Lead | Life Sciences | Multiple States",
    location: "USA",
    type: "Full-Time",
    desc: "Lead and grow the Life Sciences vertical by driving strategic sales, client acquisition, and revenue across regulated industries.",

    responsibilities: [
      "Drive revenue growth and lead business development for Life Sciences vertical",
      "Build and manage relationships with enterprise clients and C-suite leaders",
      "Identify new opportunities across Pharma, Biotech, and Medical Devices",
      "Lead sales of engineering, automation, and digital manufacturing solutions",
      "Travel to client locations and support strategic engagements"
    ],

    requirements: [
      "10–15 years of experience in Life Sciences domain",
      "10+ years in new sales and client acquisition",
      "Strong knowledge of GxP / GMP regulated environments",
      "Experience working with enterprise-level clients and leadership",
    ],

    skills: ["Strategic Sales & Business Development", "Life Sciences Domain Expertise", "MES / MOM / SCADA Systems"]
  },
  {
    title: "Senior Specialist– Graphic Designer",
    location: "Hyderabad",
    type: "Full-Time",
    desc: "We are looking for a Senior Specialist– Graphic Designer to Lead sales strategy and drive business growth by managing key accounts and expanding market presence.",

    responsibilities: [
      "Drive sales growth and achieve revenue targets",
      "Build and manage relationships with key clients and stakeholders",
      "Identify new business opportunities and expand market reach",
      "Develop and execute strategic sales plans",
      "Monitor performance, forecasts, and sales metrics"
    ],

    requirements: [
      "10+ years of experience in sales/business development",
      "Proven track record in achieving revenue targets",
      "Strong client relationship and stakeholder management experience",
      "Experience in B2B or enterprise sales environments",
      "Bachelor’s or Master’s degree in relevant field"
    ],

    skills: ["Sales Strategy & Business Development", "Client Relationship Management", "Market Analysis & Forecasting"]
  },
  {
    title: "Lead Business Transformation",
    location: "Mumbai",
    type: "Full-Time / Hybrid",
    desc: "We are looking for a Lead Business Transformation to Initiatives to drive EBITDA growth, operational excellence, and value creation.",

    responsibilities: [
      "Lead EBITDA improvement and value creation programs",
      "Drive business transformation initiatives across operations",
      "Identify process improvements and enhance operational efficiency",
      "Track P&L performance and ensure financial impact",
      "Collaborate with leadership teams to implement strategic changes"
    ],

    requirements: [
      "5–7 years in Tier-1 consulting (McKinsey, BCG, Bain, etc.)",
      "5+ years leading EBITDA / value creation programs",
      "Experience in Industrial / Automotive sector",
      "Experience in change management and transformation initiatives",
      "Strong understanding of manufacturing and business drivers"
    ],

    skills: ["Business Transformation & Strategy", "Financial Analysis & EBITDA Management", "Operational Excellence (Lean / Six Sigma)"]
  },
];

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();

  /* ✅ Form State */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /* ✅ Success Popup State (FIXED POSITION) */
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setIsSubmitting(true);
      const apiUrl = import.meta.env.VITE_API_URL || "https://keezenix-backend.onrender.com";
      const response = await fetch(`${apiUrl}/apply`, {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to submit application");
      }

      // ✅ Show success popup
      setSuccess(true);

      // ✅ Clear form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // ✅ Auto hide after 3 sec
      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    } catch (err: any) {
      console.error(err);
      alert(err.message || "Error sending application");
    } finally {
      setIsSubmitting(false);
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
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={(e) =>
              e.target.files && setFile(e.target.files[0])
            }
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