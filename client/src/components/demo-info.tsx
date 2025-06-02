import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Shield, 
  Globe, 
  BarChart3, 
  Target, 
  Zap, 
  Users, 
  GitBranch,
  Calendar,
  Award
} from "lucide-react"

export function DemoInfo() {
  return (
    <section id="demo-info" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 cyber-gradient">Demo Information</h2>
          <p className="text-xl text-muted-foreground">
            Hackathon Prototype - Cyber Threat Intelligence Dashboard
          </p>
        </div>

        <div className="grid gap-8">
          {/* Project Overview */}
          <Card className="cyber-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-cyber-blue" />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The National Cyber Threat Intelligence Dashboard is a comprehensive real-time monitoring 
                solution designed to visualize and analyze global cyber threats. This prototype demonstrates 
                advanced data visualization capabilities using Kibana dashboards integrated into a modern, 
                responsive web interface.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Real-time Monitoring</Badge>
                <Badge variant="secondary">Interactive Visualizations</Badge>
                <Badge variant="secondary">Responsive Design</Badge>
                <Badge variant="secondary">Dark Theme UI</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Technical Features */}
          <Card className="cyber-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-cyber-green" />
                Technical Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-cyber-blue mt-1" />
                    <div>
                      <h4 className="font-semibold">Global Threat Map</h4>
                      <p className="text-sm text-muted-foreground">
                        Interactive world map showing real-time threat distribution
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-cyber-green mt-1" />
                    <div>
                      <h4 className="font-semibold">Multiple Chart Types</h4>
                      <p className="text-sm text-muted-foreground">
                        Pie charts, gauges, bar charts, and lens visualizations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-cyber-purple mt-1" />
                    <div>
                      <h4 className="font-semibold">Threat Analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        Advanced analytics for threat pattern recognition
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-cyber-blue mt-1" />
                    <div>
                      <h4 className="font-semibold">User Experience</h4>
                      <p className="text-sm text-muted-foreground">
                        Intuitive interface with smooth transitions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GitBranch className="w-5 h-5 text-cyber-green mt-1" />
                    <div>
                      <h4 className="font-semibold">Modular Design</h4>
                      <p className="text-sm text-muted-foreground">
                        Extensible architecture for future enhancements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-cyber-purple mt-1" />
                    <div>
                      <h4 className="font-semibold">Real-time Updates</h4>
                      <p className="text-sm text-muted-foreground">
                        Live data refresh and auto-update capabilities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack */}
          <Card className="cyber-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-6 h-6 text-cyber-purple" />
                Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-cyber-blue">Frontend</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• React with TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Lucide Icons</li>
                    <li>• Framer Motion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-cyber-green">Backend</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Express.js</li>
                    <li>• Node.js</li>
                    <li>• TypeScript</li>
                    <li>• Drizzle ORM</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-cyber-purple">Data & Analytics</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Kibana Dashboards</li>
                    <li>• Elasticsearch</li>
                    <li>• Real-time Data Streams</li>
                    <li>• Interactive Visualizations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demo Note */}
          <Card className="cyber-border bg-card/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-cyber-blue mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Prototype Disclaimer</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This is a hackathon prototype created for demonstration purposes. 
                    The dashboard showcases the potential of real-time cyber threat visualization 
                    and serves as a proof of concept for national-level cybersecurity monitoring systems. 
                    Live data integration requires proper security clearances and access to classified 
                    threat intelligence feeds.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
