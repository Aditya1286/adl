import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

function CreateQuery() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", description: "", adminId: "" });
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);

  React.useEffect(() => {
    fetch("https://adl-api-ten.vercel.app/admin/list")
      .then(res => res.json())
      .then(data => {
        if (data.success) setAdmins(data.admins || []);
      })
      .catch(() => {});
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return handleError("Please login first");

    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("description", form.description);
      if (form.adminId) fd.append("adminId", form.adminId);
      files.forEach((file) => fd.append("attachments", file));

      const res = await fetch("https://adl-api-ten.vercel.app/auth/query", {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: fd,
      });
      const result = await res.json();
      if (result.success) {
        handleSuccess("Query submitted. A CA will reach out soon.");
        setTimeout(() => navigate("/home"), 800);
      } else {
        handleError(result.message || "Unable to submit query");
      }
    } catch (err) {
      handleError("Connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 w-full max-w-2xl">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Create a Query</h1>
          <p className="text-sm text-gray-600 mb-6">
            Describe the issue you want to raise. Your assigned CA will respond on your dashboard.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="mt-2 w-full border border-gray-200 rounded-lg px-4 py-3"
                placeholder="GST filing support needed"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                className="mt-2 w-full border border-gray-200 rounded-lg px-4 py-3"
                placeholder="Share details of your request or issue"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Choose a CA (optional)</label>
              <select
                name="adminId"
                value={form.adminId}
                onChange={handleChange}
                className="mt-2 w-full border border-gray-200 rounded-lg px-4 py-3"
              >
                <option value="">Any available CA</option>
                {admins.map((admin) => (
                  <option key={admin._id} value={admin._id}>
                    {admin.name} — {admin.bio || "Experienced CA"}
                  </option>
                ))}
              </select>
              {admins.length === 0 && (
                <p className="text-xs text-gray-500 mt-1">No CA list yet, we will assign automatically.</p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-700">Attach files (optional)</label>
              <input
                type="file"
                multiple
                onChange={(e) => setFiles(Array.from(e.target.files))}
                className="mt-2 w-full border border-gray-200 rounded-lg px-4 py-3"
              />
              {files.length > 0 && (
                <p className="text-xs text-gray-500 mt-1">{files.length} file(s) selected</p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Query"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/home")}
                className="px-5 py-3 rounded-lg border border-gray-200 text-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={4000} />
    </>
  );
}

export default CreateQuery;

