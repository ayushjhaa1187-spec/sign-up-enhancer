import { FileText, Activity, Target, Clock, Eye, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";

const statsCards = [
  { label: "Total BRDs", value: "24", icon: FileText, trend: "+3 this week", color: "text-primary" },
  { label: "Active Pipelines", value: "3", icon: Activity, trend: "2 processing", color: "text-primary" },
  { label: "Avg Accuracy", value: "92.4%", icon: Target, trend: "+0.8%", color: "text-primary" },
  { label: "Docs Processed", value: "150K", icon: Clock, trend: "12K today", color: "text-primary" },
];

const recentBrds = [
  { name: "Enron Email Analysis", time: "2 hours ago", accuracy: 93 },
  { name: "AMI Meeting Transcript", time: "5 hours ago", accuracy: 91 },
  { name: "Stakeholder Comms Q4", time: "1 day ago", accuracy: 89 },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm">Monitor your AI requirement intelligence pipeline</p>
        </div>
        <Button>
          <FileText className="w-4 h-4 mr-2" /> New BRD
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statsCards.map((card) => (
          <div key={card.label} className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{card.label}</span>
              <card.icon className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold text-foreground">{card.value}</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-success" />
              <span className="text-xs text-success">{card.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent BRDs */}
      <div className="bg-card border border-border rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Recent BRDs</h2>
          <button className="text-sm text-primary hover:underline">View all →</button>
        </div>
        <div className="space-y-3">
          {recentBrds.map((brd) => (
            <div key={brd.name} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">{brd.name}</p>
                  <p className="text-xs text-muted-foreground">{brd.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">{brd.accuracy}%</span>
                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                  <Eye className="w-4 h-4" /> View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
