import { DATA } from "../data";

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex-1">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 py-6 border-b-2 border-neutral-800">
        <div>
          <h1 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-black text-brand-500 mb-2">Internal System</h1>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter">Admin Dashboard</h2>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-white border-2 border-neutral-800 px-3 py-1.5">
          <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
          SYSTEM LIVE
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-neutral-800 bg-neutral-900">
        {DATA.admin.map((metric, idx) => {
          const isPositive = metric.trend.startsWith('+');
          return (
            <div key={idx} className="p-6 border border-neutral-800 hover:bg-neutral-800 transition-colors flex flex-col">
              <div className="text-[10px] uppercase font-black tracking-widest text-neutral-500 mb-4">{metric.label}</div>
              <div className="text-3xl lg:text-4xl font-black mb-2">{metric.value}</div>
              <div className={`text-[10px] font-black uppercase tracking-widest ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {metric.trend} THIS MONTH
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <div className="border-2 border-neutral-800 p-8">
          <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-8 text-neutral-500">Recent Activity Logs</h3>
          <div className="space-y-0">
            {[
              { text: "Rahul S. checked in.", time: "2 mins ago" },
              { text: "New Premium Membership purchased.", time: "15 mins ago" },
              { text: "CrossFit Class #104 started.", time: "1 hour ago" },
              { text: "Priya P. updated profile.", time: "2 hours ago" },
            ].map((log, i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-neutral-800 group">
                <span className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-brand-500 transition-colors">{log.text}</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">{log.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-2 border-neutral-800 p-8">
          <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-8 text-neutral-500">Capacity Utilization</h3>
          <div className="space-y-6">
             {[
               { label: "Cardio Zone", value: 85, color: "bg-brand-500" },
               { label: "Strength Zone", value: 92, color: "bg-brand-600" },
               { label: "Yoga Studio", value: 45, color: "bg-white" },
               { label: "Locker Rooms", value: 60, color: "bg-neutral-500" },
             ].map((zone, i) => (
               <div key={i}>
                 <div className="flex justify-between items-end mb-2">
                   <span className="text-sm font-bold uppercase tracking-wider text-white">{zone.label}</span>
                   <span className="text-[10px] font-black uppercase tracking-wider text-neutral-500">{zone.value}%</span>
                 </div>
                 <div className="w-full h-1 bg-neutral-800 flex">
                   <div className={`h-full ${zone.color}`} style={{ width: `${zone.value}%` }}></div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="mt-8 border-2 border-neutral-800 p-8">
        <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-8 text-neutral-500">Member Rewards & Status</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-neutral-800 text-[10px] uppercase tracking-widest text-neutral-500">
                <th className="pb-4 font-black">Member Name</th>
                <th className="pb-4 font-black">Tenure</th>
                <th className="pb-4 font-black">30-Day Visits</th>
                <th className="pb-4 font-black">Status</th>
                <th className="pb-4 font-black text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Rahul S.", tenure: "2.5 Years", visits: 24, status: "Elite" },
                { name: "Priya P.", tenure: "8 Months", visits: 12, status: "Pro" },
                { name: "Amit K.", tenure: "1 Month", visits: 4, status: "Beginner" },
                { name: "Sneha M.", tenure: "3 Years", visits: 30, status: "Elite" },
              ].map((member, i) => (
                <tr key={i} className="border-b border-neutral-800/50 hover:bg-neutral-900/50 transition-colors">
                  <td className="py-4 text-sm font-bold">{member.name}</td>
                  <td className="py-4 text-sm font-medium text-neutral-400">{member.tenure}</td>
                  <td className="py-4 text-sm font-medium text-neutral-400">{member.visits}</td>
                  <td className="py-4">
                    <span className={`text-[10px] uppercase font-black tracking-widest px-3 py-1.5 rounded-sm border ${
                      member.status === 'Elite' ? 'bg-brand-500/10 text-brand-500 border-brand-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]' : 
                      member.status === 'Pro' ? 'bg-neutral-800 text-white border-neutral-700' : 
                      'bg-neutral-900 text-neutral-500 border-neutral-800'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <button className="text-[10px] uppercase tracking-widest font-black text-neutral-500 hover:text-white transition-colors">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
