import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { DashboardSection } from "@/components/dashboard-section"
import { SnapshotsSection } from "@/components/snapshots-section"
import { DemoInfo } from "@/components/demo-info"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (autoRefreshEnabled) {
      interval = setInterval(() => {
        // Trigger refresh of live dashboards
        const iframes = document.querySelectorAll('iframe')
        iframes.forEach(iframe => {
          if (iframe.src) {
            iframe.src = iframe.src
          }
        })
      }, 30000) // Refresh every 30 seconds
    }
    return () => clearInterval(interval)
  }, [autoRefreshEnabled])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleExportPdf = async () => {
    try {
      // Dynamic import for html2pdf
      const html2pdf = (await import('html2pdf.js')).default
      
      const element = document.getElementById('dashboard-content')
      if (element) {
        const opt = {
          margin: 1,
          filename: 'cyber-threat-dashboard.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }
        html2pdf().set(opt).from(element).save()
      }
    } catch (error) {
      console.error('PDF export failed:', error)
    }
  }

  const handleAutoRefresh = () => {
    setAutoRefreshEnabled(!autoRefreshEnabled)
  }

  const scrollToVisualizations = () => {
    const element = document.getElementById('visualizations')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        onSearch={handleSearch}
        onExportPdf={handleExportPdf}
        onAutoRefresh={handleAutoRefresh}
        autoRefreshEnabled={autoRefreshEnabled}
      />

      <main id="dashboard-content">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 cyber-bg"></div>

          {/* Hero Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-gradient">
              National Cyber Threat Intelligence Dashboard
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Real-Time Insights | Live Analytics | Global Cyber Vigilance
            </p>
            <Button 
              onClick={scrollToVisualizations}
              variant="ghost"
              size="lg"
              className="animate-bounce"
              title="Scroll Down"
            >
              <ChevronDown className="w-8 h-8 text-cyber-blue" />
            </Button>
          </div>
        </section>

        {/* Dashboard Visualizations */}
        <DashboardSection searchQuery={searchQuery} />

        {/* Snapshots Section */}
        <SnapshotsSection />

        {/* Demo Info Section */}
        <DemoInfo />
      </main>
    </div>
  )
}
