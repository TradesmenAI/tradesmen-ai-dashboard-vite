import React from "react";

export default function App() {
  const kpis = [
    { label: "Missed Calls", value: 23, color: "bg-red-100", textColor: "text-red-600" },
    { label: "Leads Captured", value: 19, color: "bg-green-100", textColor: "text-green-600" },
    { label: "AI Response Rate", value: "100%", color: "bg-blue-100", textColor: "text-blue-600" },
    { label: "Avg Call Duration", value: "1:35", color: "bg-purple-100", textColor: "text-purple-600" },
    { label: "Status", value: "Active", color: "bg-yellow-100", textColor: "text-yellow-600" }
  ];

  const leads = [
    { time: "10:22", caller: "John D.", status: "Lead Created", notes: "Bathroom install enquiry" },
    { time: "09:48", caller: "Mary S.", status: "Lead Created", notes: "Quote requested" },
    { time: "09:15", caller: "Unknown", status: "Not Converted", notes: "Spam / No info" }
  ];

  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10 text-orange-400">Tradesmen AI</h1>

        <nav className="flex flex-col gap-4 text-lg">
          <button className="text-left text-orange-400 font-bold hover:text-orange-300">
            Dashboard
          </button>
          <button className="text-left hover:text-orange-300">
            Leads
          </button>
          <button className="text-left hover:text-orange-300">
            Call History
          </button>
          <button className="text-left hover:text-orange-300">
            AI Settings
          </button>
          <button className="text-left hover:text-orange-300">
            Billing
          </button>
        </nav>

        <div className="mt-auto">
          <button className="bg-orange-500 hover:bg-orange-600 w-full py-2 rounded mt-6">
            Log Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 overflow-auto">

        {/* HEADER */}
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
          <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded">
            Profile
          </button>
        </header>

        {/* KPI CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className={`${kpi.color} ${kpi.textColor} p-6 rounded-xl shadow text-center font-semibold`}
            >
              <p className="text-sm">{kpi.label}</p>
              <p className="text-3xl font-bold mt-2">{kpi.value}</p>
            </div>
          ))}
        </section>

        {/* LEADS TABLE */}
        <section className="bg-white p-6 rounded-xl shadow mb-10">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Recent Leads</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Time</th>
                <th className="px-4 py-2 text-left">Caller</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">AI Notes</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 transition">
                  <td className="px-4 py-3">{lead.time}</td>
                  <td className="px-4 py-3">{lead.caller}</td>
                  <td className="px-4 py-3">{lead.status}</td>
                  <td className="px-4 py-3">{lead.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* SETTINGS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* AI SETTINGS */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-3 text-gray-700">AI Settings</h3>
            <p>Voice Tone: <span className="font-semibold">Professional</span></p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Change Tone
            </button>
          </div>

          {/* BUSINESS INFO */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-3 text-gray-700">Business Info</h3>
            <p>Website: <span className="font-semibold">tradesmenexample.co.uk</span></p>
            <p>Hours: <span className="font-semibold">Mon–Sat 8am–6pm</span></p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Refresh AI
            </button>
          </div>

          {/* BILLING */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-3 text-gray-700">Billing / Plan</h3>
            <p>Plan: <span className="font-semibold">Starter</span></p>
            <p>Leads Used: <span className="font-semibold">23 / 20 Included</span></p>
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Upgrade Plan
            </button>
          </div>

        </section>
      </main>
    </div>
  );
}
