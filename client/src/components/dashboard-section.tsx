import { useState } from "react"
import { VisualizationCard } from "./visualization-card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "./ui/chart"
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, LineChart, Line, Area, AreaChart } from "recharts"

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
            <div className="text-sm text-gray-400">Interactive world map simulation</div>
          </div>
          <div className="relative h-[400px] bg-gray-800/50 rounded border border-cyber-blue/30 overflow-hidden">
            {/* Interactive World Map Simulation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                {/* Background */}
                <rect width="800" height="400" fill="#1e293b" />
                
                {/* Continents (simplified shapes) */}
                <g fill="#374151" stroke="#475569" strokeWidth="1">
                  {/* North America */}
                  <path d="M100 80 L200 70 L250 120 L200 180 L120 160 Z" />
                  {/* Europe */}
                  <path d="M350 60 L450 55 L460 100 L400 120 L340 90 Z" />
                  {/* Asia */}
                  <path d="M450 50 L650 45 L680 150 L500 140 L440 80 Z" />
                  {/* Africa */}
                  <path d="M320 140 L420 135 L440 280 L360 300 L300 200 Z" />
                  {/* South America */}
                  <path d="M180 200 L240 195 L260 320 L200 340 L160 280 Z" />
                  {/* Australia */}
                  <path d="M580 260 L650 255 L660 290 L590 295 Z" />
                </g>
                
                {/* Threat Indicators with Animation */}
                <g>
                  {/* Critical Threats - Red */}
                  <circle cx="150" cy="120" r="8" fill="#ef4444" opacity="0.9" className="animate-pulse">
                    <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="600" cy="100" r="10" fill="#dc2626" opacity="0.9" className="animate-pulse">
                    <animate attributeName="r" values="8;14;8" dur="1.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="380" cy="250" r="6" fill="#ef4444" opacity="0.8" className="animate-pulse">
                    <animate attributeName="r" values="4;10;4" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* High Threats - Orange */}
                  <circle cx="400" cy="80" r="6" fill="#f97316" opacity="0.8">
                    <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="220" cy="260" r="5" fill="#ea580c" opacity="0.8">
                    <animate attributeName="r" values="3;7;3" dur="2.8s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="520" cy="120" r="7" fill="#f97316" opacity="0.8">
                    <animate attributeName="r" values="5;9;5" dur="2.2s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Medium Threats - Yellow */}
                  <circle cx="320" cy="70" r="4" fill="#eab308" opacity="0.7">
                    <animate attributeName="r" values="2;6;2" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="180" cy="200" r="4" fill="#ca8a04" opacity="0.7">
                    <animate attributeName="r" values="2;6;2" dur="3.2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="620" cy="275" r="3" fill="#eab308" opacity="0.7">
                    <animate attributeName="r" values="1;5;1" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Low Threats - Green */}
                  <circle cx="280" cy="160" r="3" fill="#22c55e" opacity="0.6">
                    <animate attributeName="r" values="1;4;1" dur="4.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="480" cy="80" r="2" fill="#16a34a" opacity="0.6">
                    <animate attributeName="r" values="1;3;1" dur="5s" repeatCount="indefinite"/>
                  </circle>
                </g>
                
                {/* Grid lines */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#475569" strokeWidth="0.5" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="800" height="400" fill="url(#grid)" />
              </svg>
            </div>
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-gray-900/80 rounded p-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-red-400">Critical: 3</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-orange-400">High: 3</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-yellow-400">Medium: 3</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-green-400">Low: 2</span>
                </div>
              </div>
            </div>
            
            {/* Real-time indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-gray-900/80 rounded px-3 py-1 text-xs">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-green-400">Live Simulation</span>
            </div>
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
            <h4 className="text-lg font-semibold mb-2">Threat Intensity Heatmap (Demo)</h4>
            <div className="text-sm text-gray-400">Real-time threat levels across different vectors</div>
          </div>
          <div className="h-[400px] flex flex-col gap-4">
            {/* Heatmap Grid */}
            <div className="grid grid-cols-7 gap-1 flex-1">
              {Array.from({ length: 35 }, (_, i) => {
                const intensity = Math.floor(Math.random() * 4);
                const colors = ['bg-green-500/30', 'bg-yellow-500/50', 'bg-orange-500/70', 'bg-red-500/90'];
                const labels = ['Low', 'Medium', 'High', 'Critical'];
                return (
                  <div
                    key={i}
                    className={`${colors[intensity]} border border-gray-600 rounded flex items-center justify-center text-xs font-semibold cursor-pointer hover:scale-105 transition-transform`}
                    title={`Threat Level: ${labels[intensity]}`}
                  >
                    {intensity + 1}
                  </div>
                );
              })}
            </div>
            
            {/* Time Series for Heatmap */}
            <div className="h-32">
              <ChartContainer
                config={{
                  intensity: {
                    label: "Threat Intensity",
                    color: "hsl(0, 84%, 60%)",
                  },
                }}
                className="h-full"
              >
                <AreaChart
                  data={[
                    { time: "00:00", intensity: 45 },
                    { time: "04:00", intensity: 32 },
                    { time: "08:00", intensity: 78 },
                    { time: "12:00", intensity: 89 },
                    { time: "16:00", intensity: 67 },
                    { time: "20:00", intensity: 56 },
                  ]}
                >
                  <defs>
                    <linearGradient id="threatGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" tick={{ fill: 'white', fontSize: 10 }} />
                  <YAxis tick={{ fill: 'white', fontSize: 10 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="intensity"
                    stroke="#ef4444"
                    fillOpacity={1}
                    fill="url(#threatGradient)"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
            
            {/* Legend */}
            <div className="flex justify-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500/30 rounded"></div>
                <span>Low (1)</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-yellow-500/50 rounded"></div>
                <span>Medium (2)</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-orange-500/70 rounded"></div>
                <span>High (3)</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-500/90 rounded"></div>
                <span>Critical (4)</span>
              </div>
            </div>
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
