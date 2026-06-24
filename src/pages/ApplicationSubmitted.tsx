import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft, Home } from "lucide-react";
import { useEffect } from "react";

const ApplicationSubmitted = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, jobTitle } = location.state || {};

  // If someone lands here directly without state, redirect to careers
  useEffect(() => {
    if (!name && !jobTitle) {
      navigate("/careers");
    }
  }, [name, jobTitle, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--hero-gradient)" }}>
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-5">
            <CheckCircle className="text-green-600" size={56} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Application Submitted! 🎉
        </h1>

        {/* Personalised message */}
        {name && (
          <p className="text-gray-600 mb-1">
            Thank you, <span className="font-semibold text-primary">{name}</span>!
          </p>
        )}
        {jobTitle && (
          <p className="text-gray-500 text-sm mb-6">
            Your application for <span className="font-medium">{jobTitle}</span> has been received.
          </p>
        )}

        <p className="text-gray-500 text-sm mb-8">
          Our team will review your profile and reach out to you soon. Keep an eye on your inbox!
        </p>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-8" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/careers")}
            className="flex items-center justify-center gap-2 px-5 py-2.5 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition"
          >
            <ArrowLeft size={16} />
            Browse More Jobs
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
          >
            <Home size={16} />
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSubmitted;
