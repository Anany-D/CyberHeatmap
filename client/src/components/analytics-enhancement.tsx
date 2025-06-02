import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Shield, 
  Activity,
  Globe,
  Users,
  Server
} from "lucide-react"

interface MetricData {
  label: string
  value: number
  change: number
  status: "up" | "down" | "stable"
  critical?: boolean
}

export function AnalyticsEnhancement() {
  const [realTimeMetrics, setRealTimeMetrics] = useState<MetricData[]>([
    { label: "Active Threats", value: 1247, change: 12.5, status: "up", critical: true },
    { label: "Blocked Attacks", value: 8934, change: -5.2, status: "down" },
    { label: "Network Health", value: 98.7, change: 0.3, status: "up" },
    { label: "Response Time", value: 245, change: -15.8, status: "down" }
  ])

  const [systemStatus, setSystemStatus] = useState({
    kibana: "online",
    elasticsearch: "online", 
    dataIngestion: "online",
    alerting: "online"
  })

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setRealTimeMetrics(prev => prev.map(metric => ({
        ...metric,
        value: metric.value + (Math.random() - 0.5) * (metric.value * 0.01),
        change: (Math.random() - 0.5) * 20
      })))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "text-green-500"
      case "warning": return "text-yellow-500"
      case "offline": return "text-red-500"
      default: return "text-gray-500"
    }
  }

  const getTrendIcon = (status: "up" | "down" | "stable") => {
    switch (status) {
      case "up": return <TrendingUp className="w-4 h-4 text-green-500" />
      case "down": return <TrendingDown className="w-4 h-4 text-red-500" />
      default: return <Activity className="w-4 h-4 text-yellow-500" />
    }
  }

  return (
    <section id="analytics" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 cyber-gradient">Advanced Analytics</h2>
          <p className="text-xl text-muted-foreground">
            Real-time system metrics and threat intelligence insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Real-time Metrics */}
          <div className="lg:col-span-2">
            <Card className="cyber-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyber-blue" />
                  Real-time Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {realTimeMetrics.map((metric, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                        {metric.critical && (
                          <Badge variant="destructive" className="text-xs">
                            Critical
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">
                          {metric.label === "Network Health" 
                            ? `${metric.value.toFixed(1)}%`
                            : metric.value.toLocaleString()
                          }
                        </span>
                        {getTrendIcon(metric.status)}
                        <span className={`text-sm ${
                          metric.change > 0 ? "text-green-500" : "text-red-500"
                        }`}>
                          {metric.change > 0 ? "+" : ""}{metric.change.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Status */}
          <Card className="cyber-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="w-5 h-5 text-cyber-green" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(systemStatus).map(([service, status]) => (
                <div key={service} className="flex items-center justify-between">
                  <span className="capitalize text-sm">
                    {service.replace(/([A-Z])/g, ' $1')}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      status === "online" ? "bg-green-500" : 
                      status === "warning" ? "bg-yellow-500" : "bg-red-500"
                    }`} />
                    <span className={`text-xs ${getStatusColor(status)}`}>
                      {status}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Threat Intelligence Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="cyber-border">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Globe className="w-5 h-5 text-cyber-blue" />
                Global Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Monitoring Regions</span>
                  <span className="font-semibold">247/250</span>
                </div>
                <Progress value={98.8} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  98.8% global coverage active
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cyber-border">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="w-5 h-5 text-cyber-green" />
                Protection Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Active Defenses</span>
                  <span className="font-semibold">High</span>
                </div>
                <Progress value={87} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  87% threat mitigation effectiveness
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cyber-border">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5 text-cyber-purple" />
                Active Analysts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>On Duty</span>
                  <span className="font-semibold">23/25</span>
                </div>
                <Progress value={92} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  Full staffing across all time zones
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Center */}
        <Card className="mt-8 cyber-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              Recent Alerts & Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { time: "2 min ago", message: "Suspicious activity detected in Eastern Europe", level: "high" },
                { time: "7 min ago", message: "DDoS attack successfully mitigated", level: "resolved" },
                { time: "15 min ago", message: "New threat signature deployed globally", level: "info" },
                { time: "23 min ago", message: "Phishing campaign blocked across 15 regions", level: "resolved" }
              ].map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded border border-border/30">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      alert.level === "high" ? "bg-red-500" :
                      alert.level === "resolved" ? "bg-green-500" : "bg-blue-500"
                    }`} />
                    <span className="text-sm">{alert.message}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border/30">
              <Button variant="outline" className="w-full">
                View All Alerts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}