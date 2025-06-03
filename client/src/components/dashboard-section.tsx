import { useState } from "react"
import { VisualizationCard } from "./visualization-card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "./ui/chart"
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts"

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
          </div>
          <ChartContainer
            config={{
              critical: {
                label: "Critical",
                color: "hsl(0, 84%, 60%)",
              },
              high: {
                label: "High", 
                color: "hsl(25, 95%, 53%)",
              },
              medium: {
                label: "Medium",
                color: "hsl(45, 93%, 47%)",
              },
              low: {
                label: "Low",
                color: "hsl(120, 61%, 50%)",
              },
            }}
            className="h-[400px]"
          >
            <BarChart
              data={[
                { region: "North America", critical: 23, high: 45, medium: 120, low: 340 },
                { region: "Europe", critical: 18, high: 156, medium: 230, low: 890 },
                { region: "Asia Pacific", critical: 35, high: 89, medium: 891, low: 1200 },
                { region: "Latin America", critical: 8, high: 23, medium: 67, low: 234 },
                { region: "Africa", critical: 12, high: 34, medium: 156, low: 567 },
                { region: "Middle East", critical: 15, high: 67, medium: 189, low: 423 }
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="region" 
                tick={{ fill: 'white', fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis tick={{ fill: 'white' }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="critical" stackId="a" fill="var(--color-critical)" />
              <Bar dataKey="high" stackId="a" fill="var(--color-high)" />
              <Bar dataKey="medium" stackId="a" fill="var(--color-medium)" />
              <Bar dataKey="low" stackId="a" fill="var(--color-low)" />
            </BarChart>
          </ChartContainer>
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
        <div className="absolute inset-0 cyber-bg p-4">
          <div className="text-white mb-4">
            <h4 className="text-lg font-semibold mb-2">Threat Type Distribution (Demo)</h4>
          </div>
          <ChartContainer
            config={{
              malware: {
                label: "Malware",
                color: "hsl(0, 84%, 60%)",
              },
              phishing: {
                label: "Phishing", 
                color: "hsl(25, 95%, 53%)",
              },
              ddos: {
                label: "DDoS",
                color: "hsl(45, 93%, 47%)",
              },
              other: {
                label: "Other",
                color: "hsl(120, 61%, 50%)",
              },
            }}
            className="h-[400px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={[
                  { name: "malware", value: 35, fill: "var(--color-malware)" },
                  { name: "phishing", value: 28, fill: "var(--color-phishing)" },
                  { name: "ddos", value: 22, fill: "var(--color-ddos)" },
                  { name: "other", value: 15, fill: "var(--color-other)" },
                ]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={40}
                strokeWidth={2}
              />
              <ChartLegend
                content={<ChartLegendContent nameKey="name" />}
                className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
              />
            </PieChart>
          </ChartContainer>
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
        <div className="absolute inset-0 cyber-bg p-4">
          <div className="text-white mb-4">
            <h4 className="text-lg font-semibold mb-2">National Threat Level (Demo)</h4>
          </div>
          <ChartContainer
            config={{
              threats: {
                label: "Threat Level",
                color: "hsl(25, 95%, 53%)",
              },
            }}
            className="h-[400px]"
          >
            <BarChart
              data={[
                { category: "Network", level: 85, color: "hsl(0, 84%, 60%)" },
                { category: "Email", level: 72, color: "hsl(25, 95%, 53%)" },
                { category: "Web", level: 68, color: "hsl(45, 93%, 47%)" },
                { category: "Mobile", level: 45, color: "hsl(120, 61%, 50%)" },
                { category: "IoT", level: 38, color: "hsl(240, 61%, 50%)" },
              ]}
              layout="horizontal"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} tick={{ fill: 'white' }} />
              <YAxis dataKey="category" type="category" tick={{ fill: 'white' }} width={60} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="level" fill="var(--color-threats)">
                {[
                  { category: "Network", level: 85, color: "hsl(0, 84%, 60%)" },
                  { category: "Email", level: 72, color: "hsl(25, 95%, 53%)" },
                  { category: "Web", level: 68, color: "hsl(45, 93%, 47%)" },
                  { category: "Mobile", level: 45, color: "hsl(120, 61%, 50%)" },
                  { category: "IoT", level: 38, color: "hsl(240, 61%, 50%)" },
                ].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
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
          <ChartContainer
            config={{
              attacks: {
                label: "Attacks",
                color: "hsl(0, 84%, 60%)",
              },
              blocked: {
                label: "Blocked",
                color: "hsl(120, 61%, 50%)",
              },
            }}
            className="h-[400px]"
          >
            <BarChart
              data={[
                { month: "Jan", attacks: 1240, blocked: 1180 },
                { month: "Feb", attacks: 1580, blocked: 1420 },
                { month: "Mar", attacks: 1890, blocked: 1650 },
                { month: "Apr", attacks: 1450, blocked: 1320 },
                { month: "May", attacks: 1760, blocked: 1580 },
                { month: "Jun", attacks: 2100, blocked: 1890 },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fill: 'white' }} />
              <YAxis tick={{ fill: 'white' }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="attacks" fill="var(--color-attacks)" />
              <Bar dataKey="blocked" fill="var(--color-blocked)" />
            </BarChart>
          </ChartContainer>
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
          <ChartContainer
            config={{
              usa: {
                label: "USA",
                color: "hsl(0, 84%, 60%)",
              },
              china: {
                label: "China",
                color: "hsl(25, 95%, 53%)",
              },
              russia: {
                label: "Russia", 
                color: "hsl(45, 93%, 47%)",
              },
              germany: {
                label: "Germany",
                color: "hsl(120, 61%, 50%)",
              },
              others: {
                label: "Others",
                color: "hsl(240, 61%, 50%)",
              },
            }}
            className="h-[400px]"
          >
            <BarChart
              data={[
                { time: "00:00", usa: 120, china: 89, russia: 67, germany: 45, others: 234 },
                { time: "04:00", usa: 89, china: 123, russia: 78, germany: 56, others: 189 },
                { time: "08:00", usa: 156, china: 145, russia: 89, germany: 67, others: 267 },
                { time: "12:00", usa: 234, china: 178, russia: 123, germany: 89, others: 345 },
                { time: "16:00", usa: 189, china: 156, russia: 98, germany: 78, others: 289 },
                { time: "20:00", usa: 145, china: 134, russia: 87, germany: 65, others: 234 },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" tick={{ fill: 'white' }} />
              <YAxis tick={{ fill: 'white' }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="usa" stackId="a" fill="var(--color-usa)" />
              <Bar dataKey="china" stackId="a" fill="var(--color-china)" />
              <Bar dataKey="russia" stackId="a" fill="var(--color-russia)" />
              <Bar dataKey="germany" stackId="a" fill="var(--color-germany)" />
              <Bar dataKey="others" stackId="a" fill="var(--color-others)" />
            </BarChart>
          </ChartContainer>
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
