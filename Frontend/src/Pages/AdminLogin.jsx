import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

function AdminLogin() {
  const [adminInfo, setAdminInfo] = useState({ email: "", password: "" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Admin Access",
      description: "Manage teams, users, tasks and audit workflows",
      image:
        "https://i.pinimg.com/1200x/c5/d8/bd/c5d8bd31f0da49c263f8f48eee7cfce3.jpg",
    },
    {
      title: "Secure Admin Dashboard",
      description: "Advanced tools to monitor system and operations",
      image:
        "https://i.pinimg.com/736x/b9/bd/7a/b9bd7ae332b68bf56ba28fd1573ed462.jpg",
    },
    {
      title: "Control Everything",
      description: "Full access to AuditLabs administration panel",
      image:
        "https://i.pinimg.com/1200x/f8/da/47/f8da472bc2681d682c14fd02bd5a28be.jpg",
    },
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) =>
    setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    const { email, password } = adminInfo;

    if (!email || !password)
      return handleError("Please fill in all fields");

    try {
      const res = await fetch("https://adl-api-ten.vercel.app/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adminInfo),
      });

      const result = await res.json();

      if (result.success) {
        handleSuccess(`Welcome Admin!`);
        localStorage.setItem("adminToken", result.token);

        setTimeout(() => navigate("/admin-dashboard"), 1200);
      } else {
        handleError(result.message || "Invalid credentials");
      }
    } catch (err) {
      handleError("Unable to connect to server");
    }
  };

  return (
    <>
      <div className="min-h-screen flex font-['Inter'] bg-gray-50">
        {/* LEFT - Carousel */}
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === i ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt="slide"
                className="w-full h-full object-cover brightness-75"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-16 text-white max-w-2xl">
                <h3
                  className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {slide.title}
                </h3>
                <p className="text-xl text-gray-100 leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}

          {/* Logo */}
          <div className="absolute top-10 left-12 z-20">
            <h1 className="brand-font text-6xl font-bold text-white">
              Elite Advisers
            </h1>
            <p className="text-lg text-gray-300 mt-1">
              Admin Management Panel
            </p>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1 rounded-full transition-all ${
                  currentSlide === i ? "w-16 bg-white" : "w-10 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT - Admin Login */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-10 border border-gray-200/50">
              <div className="text-center mb-10">
                <h2
                  className="text-4xl font-bold text-gray-900"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Admin Login
                </h2>
                <p className="text-gray-600 mt-3">
                  Sign in to manage Elite Advisers
                </p>
              </div>

              <form onSubmit={handleAdminLogin} className="space-y-6">
                {/* EMAIL */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={adminInfo.email}
                    onChange={handleChange}
                    placeholder="admin@auditlabs.com"
                    className="mt-2 w-full px-5 py-4 rounded-xl border border-gray-300"
                    required
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={adminInfo.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="mt-2 w-full px-5 py-4 rounded-xl border border-gray-300"
                    required
                  />
                </div>

                {/* REMEMBER + FORGOT */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 rounded"
                    />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Sign In
                </button>
              </form>

              {/* BACK TO USER LOGIN */}
              <p className="text-center mt-8 text-gray-600">
                Not an admin?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  User Login
                </Link>
              </p>
            </div>

            <p className="text-center mt-8 text-sm text-gray-500">
              © 2025 AuditLabs • Admin Panel
            </p>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={4000} theme="light" />
    </>
  );
}

export default AdminLogin;
