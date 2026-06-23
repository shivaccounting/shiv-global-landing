import { CheckCircle2, TrendingUp } from "lucide-react";

const DashboardMock = () => {
  const rows = [
    { label: "Monthly reconciliations", status: "Complete" },
    { label: "Payroll processing", status: "Complete" },
    { label: "Trust compliance", status: "Complete" },
  ];

  const bars = [40, 65, 45, 80, 55, 90, 70];

  return (
    <div className="relative w-full">
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 rounded-3xl blur-2xl opacity-60" />

      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[hsl(214,84%,8%)] shadow-2xl animate-float">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>
            <span className="text-xs font-medium text-white/50">
              Financial Dashboard
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
            <TrendingUp className="h-3.5 w-3.5" />
            <span className="font-mono">$2M+</span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Revenue", value: "$124K" },
              { label: "Expenses", value: "$89K" },
              { label: "Net", value: "$35K" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <div className="text-[10px] uppercase tracking-wider text-white/40">
                  {stat.label}
                </div>
                <div className="font-mono text-lg font-semibold text-white mt-1">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-[10px] uppercase tracking-wider text-white/40 mb-3">
              Cash Flow
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-emerald-500/80 to-emerald-400/40"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2.5"
              >
                <span className="text-sm text-white/80">{row.label}</span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-5 glass-dark rounded-xl px-5 py-4 animate-float-delayed">
        <div className="font-mono text-2xl font-bold text-emerald-400">$2M+</div>
        <div className="text-sm text-white/50">Managed Monthly</div>
      </div>
    </div>
  );
};

export default DashboardMock;
