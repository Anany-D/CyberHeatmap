import { useState } from "react"
import { VisualizationCard } from "./visualization-card"

interface DashboardSectionProps {
  searchQuery: string
}

export function DashboardSection({ searchQuery }: DashboardSectionProps) {
  const [liveStates, setLiveStates] = useState<Record<string, boolean>>({
    globalThreatMap: false,
    threatDistribution: false,
    threatLevels: false,
    attackPatterns: false,
    geographicAnalysis: false,
  })

  const toggleLive = (id: string) => {
    setLiveStates(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const baseUrl = "http://localhost:5601"

  const visualizations = [
    {
      id: "globalThreatMap",
      title: "Global Threat Map",
      icon: "🌍",
      description: "Interactive global map showing real-time cyber threat distribution and attack patterns",
      dashboardUrl: `${baseUrl}/app/dashboards#/view/014ed670-3efc-11f0-a5ea-5bd6f73155c2?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),query:(language:kuery,query:''),timeRestore:!f,title:'Map%20Dashboard',viewMode:view)`,
      demoContent: (
        <div className="absolute inset-0 cyber-bg p-4">
          <div className="text-white mb-4">
            <h4 className="text-lg font-semibold mb-2">Global Cyber Threat Distribution (Demo)</h4>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-red-400">🔴 Critical: 23</span>
              <span className="text-orange-400">🟠 High: 156</span>
              <span className="text-yellow-400">🟡 Medium: 891</span>
              <span className="text-green-400">🟢 Low: 2,341</span>
            </div>
          </div>
          <div className="relative w-full h-80 bg-gray-800 rounded cyber-border">
            <div className="absolute top-20 left-20 w-3 h-3 bg-red-500 rounded-full pulse-cyber" title="Critical Threat: North America"></div>
            <div className="absolute top-16 right-32 w-2 h-2 bg-orange-500 rounded-full pulse-cyber" title="High Threat: Europe"></div>
            <div className="absolute bottom-24 left-1/2 w-2 h-2 bg-yellow-500 rounded-full pulse-cyber" title="Medium Threat: Africa"></div>
            <div className="absolute top-32 right-16 w-3 h-3 bg-red-500 rounded-full pulse-cyber" title="Critical Threat: Asia"></div>
            <div className="absolute bottom-16 right-24 w-2 h-2 bg-green-500 rounded-full pulse-cyber" title="Low Threat: Australia"></div>
            <div className="text-center pt-32 text-gray-400">🌍 Interactive Global Threat Map (Demo)</div>
          </div>
        </div>
      )
    },
    {
      id: "threatDistribution",
      title: "Threat Distribution",
      icon: "📊",
      description: "Pie chart visualization showing distribution of different threat types and their prevalence",
      dashboardUrl: `${baseUrl}/app/dashboards#/view/6ea6bd60-3efb-11f0-a5ea-5bd6f73155c2?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),query:(language:kuery,query:''),timeRestore:!f,title:'Piechart%20Dashboard',viewMode:view)`,
      demoContent: (
        <div className="absolute inset-0 cyber-bg p-4 flex items-center justify-center">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-white">Threat Type Distribution (Demo)</h4>
            <div className="w-64 h-64 rounded-full border-4 border-cyber-blue mx-auto mb-4 bg-gradient-conic from-red-500 via-orange-500 via-yellow-500 to-green-500"></div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-red-400">🔴 Malware: 35%</div>
              <div className="text-orange-400">🟠 Phishing: 28%</div>
              <div className="text-yellow-400">🟡 DDoS: 22%</div>
              <div className="text-green-400">🟢 Other: 15%</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "threatLevels",
      title: "Heatmap Dashboard", 
      icon: "🎯",
      description: "Real-time heatmap visualization showing threat intensity across different regions and categories",
      dashboardUrl: `${baseUrl}/app/dashboards#/view/df1f4fd0-3efb-11f0-a5ea-5bd6f73155c2?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),query:(language:kuery,query:''),timeRestore:!f,title:'Heatmap%20Dashboard',viewMode:view)`,
      demoContent: (
        <div className="absolute inset-0 cyber-bg p-4 flex items-center justify-center">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-white">National Threat Level (Demo)</h4>
            <div className="relative w-48 h-48 mx-auto mb-4">
              <div className="w-full h-full rounded-full border-8 border-orange-500 bg-gradient-radial from-orange-500/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">HIGH</div>
                  <div className="text-sm text-gray-400">Threat Level</div>
                </div>
              </div>
            </div>
            <div className="text-sm text-orange-400">Current Status: Elevated Risk</div>
          </div>
        </div>
      )
    },
    {
      id: "attackPatterns",
      title: "New Dashboard",
      icon: "📈",
      description: "Advanced analytics dashboard with comprehensive data visualizations and insights",
      dashboardUrl: `${baseUrl}/app/dashboards#/view/6d3da750-3d15-11f0-8be9-9375013f3cdd?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),query:(language:kuery,query:''),timeRestore:!f,title:NEW_DASHBOARD,viewMode:view)`,
      demoContent: (
        <div className="absolute inset-0 cyber-bg p-4">
          <div className="text-white mb-4">
            <h4 className="text-lg font-semibold mb-2">Attack Pattern Analysis (Demo)</h4>
          </div>
          <div className="h-80 flex items-end justify-around px-8">
            <div className="flex flex-col items-center">
              <div className="w-8 h-32 bg-red-500 rounded-t"></div>
              <span className="text-xs mt-2 text-gray-400">Jan</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-40 bg-orange-500 rounded-t"></div>
              <span className="text-xs mt-2 text-gray-400">Feb</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-48 bg-yellow-500 rounded-t"></div>
              <span className="text-xs mt-2 text-gray-400">Mar</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-36 bg-green-500 rounded-t"></div>
              <span className="text-xs mt-2 text-gray-400">Apr</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-44 bg-blue-500 rounded-t"></div>
              <span className="text-xs mt-2 text-gray-400">May</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-52 bg-purple-500 rounded-t"></div>
              <span className="text-xs mt-2 text-gray-400">Jun</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "geographicAnalysis",
      title: "LensBar Dashboard",
      icon: "🗺️",
      description: "Advanced bar chart analysis using Kibana Lens for detailed data exploration and insights",
      dashboardUrl: `${baseUrl}/app/dashboards#/view/bd47d440-3efb-11f0-a5ea-5bd6f73155c2?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),query:(language:kuery,query:''),timeRestore:!f,title:'LensBar%20Dashboard',viewMode:view)`,
      demoContent: (
        <div className="absolute inset-0 cyber-bg p-4">
          <div className="text-white mb-4">
            <h4 className="text-lg font-semibold mb-2">Geographic Threat Analysis (Demo)</h4>
            <div className="text-sm text-gray-400">Attack vectors and target analysis by region</div>
          </div>
          <div className="relative w-full h-80 bg-gray-800 rounded cyber-border">
            <div className="absolute inset-4 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded">
              <div className="absolute top-10 left-16 w-4 h-4 bg-red-500 rounded-full pulse-cyber"></div>
              <div className="absolute top-8 right-20 w-3 h-3 bg-orange-500 rounded-full pulse-cyber"></div>
              <div className="absolute bottom-16 left-1/3 w-2 h-2 bg-yellow-500 rounded-full pulse-cyber"></div>
              <div className="absolute top-20 right-12 w-4 h-4 bg-red-500 rounded-full pulse-cyber"></div>
              <div className="absolute bottom-12 right-16 w-2 h-2 bg-green-500 rounded-full pulse-cyber"></div>
              <div className="text-center pt-24 text-gray-400">🗺️ Geographic Attack Vector Analysis</div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="visualizations" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 cyber-gradient">Threat Intelligence Visualizations</h2>
          <p className="text-xl text-muted-foreground">Real-time monitoring and analysis of global cyber threats</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visualizations.map((viz) => (
            <VisualizationCard
              key={viz.id}
              title={viz.title}
              description={viz.description}
              icon={viz.icon}
              dashboardUrl={viz.dashboardUrl}
              demoContent={viz.demoContent}
              isLive={liveStates[viz.id]}
              onToggleLive={() => toggleLive(viz.id)}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
