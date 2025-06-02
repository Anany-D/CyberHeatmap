import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { 
  Camera, 
  Download, 
  Eye, 
  Calendar,
  Clock,
  FileImage,
  Maximize2
} from "lucide-react"

interface Snapshot {
  id: string
  title: string
  description: string
  timestamp: string
  imageUrl: string
  dashboardType: string
  size: string
}

export function SnapshotsSection() {
  const [selectedSnapshot, setSelectedSnapshot] = useState<Snapshot | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Demo snapshots with placeholder content
  const snapshots: Snapshot[] = [
    {
      id: "1",
      title: "Global Threat Distribution Map",
      description: "Interactive world map showing regional cyber threat distribution with major hotspots in Asia-Pacific and European regions",
      timestamp: "2025-01-02T15:30:00Z",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      dashboardType: "Map",
      size: "1920x1080"
    },
    {
      id: "2",
      title: "Threat Type Distribution Analysis",
      description: "Comprehensive pie chart breakdown showing malware, DDoS, brute force, phishing, and SQL injection attack distributions",
      timestamp: "2025-01-02T14:15:00Z",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      dashboardType: "Pie Chart",
      size: "1920x1080"
    },
    {
      id: "3",
      title: "Country-Based Threat Metrics",
      description: "Gauge dashboard displaying threat counts by major regions with real-time monitoring capabilities",
      timestamp: "2025-01-02T13:45:00Z",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      dashboardType: "Gauge",
      size: "1920x1080"
    },
    {
      id: "4",
      title: "Temporal Threat Intensity Heatmap",
      description: "Time-series heatmap showing threat activity patterns across different attack categories with 24/7 coverage",
      timestamp: "2025-01-02T12:20:00Z",
      imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop",
      dashboardType: "Heatmap",
      size: "1920x1080"
    },
    {
      id: "5",
      title: "Attack Volume Trend Analysis",
      description: "Bar chart visualization showing attack volume trends over time with predictive analytics capabilities",
      timestamp: "2025-01-02T11:10:00Z",
      imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=400&fit=crop",
      dashboardType: "Bar Chart",
      size: "1920x1080"
    },
    {
      id: "6",
      title: "Unified Security Dashboard",
      description: "Comprehensive multi-panel view combining all visualization types for complete threat landscape overview",
      timestamp: "2025-01-02T10:30:00Z",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      dashboardType: "Combined Dashboard",
      size: "1920x1080"
    }
  ]

  const handleViewSnapshot = (snapshot: Snapshot) => {
    setSelectedSnapshot(snapshot)
    setIsDialogOpen(true)
  }

  const handleDownloadSnapshot = (snapshot: Snapshot) => {
    // In a real app, this would download the actual image
    const link = document.createElement('a')
    link.href = snapshot.imageUrl
    link.download = `threat-snapshot-${snapshot.id}-${new Date(snapshot.timestamp).toISOString().split('T')[0]}.png`
    link.click()
  }

  const handleCaptureNew = () => {
    // In a real app, this would capture current dashboard states
    alert("Snapshot capture initiated. This would capture all current dashboard states in a production environment.")
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString()
    }
  }

  return (
    <>
      <section id="snapshots" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 cyber-gradient">Dashboard Snapshots</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Historical captures of critical threat intelligence moments
            </p>
            <Button 
              onClick={handleCaptureNew}
              className="bg-cyber-blue hover:bg-cyber-blue/90 text-white"
              size="lg"
            >
              <Camera className="w-5 h-5 mr-2" />
              Capture New Snapshot
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {snapshots.map((snapshot) => {
              const { date, time } = formatTimestamp(snapshot.timestamp)

              return (
                <Card key={snapshot.id} className="visualization-card cyber-border group">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg line-clamp-2">{snapshot.title}</CardTitle>
                      <Badge variant="secondary" className="ml-2 shrink-0">
                        {snapshot.dashboardType}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Snapshot Preview */}
                    <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden cyber-border">
                      <img 
                        src={snapshot.imageUrl}
                        alt={snapshot.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="flex items-center gap-1 text-xs text-white">
                          <FileImage className="w-3 h-3" />
                          <span>{snapshot.size}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {snapshot.description}
                    </p>

                    {/* Timestamp */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{time}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewSnapshot(snapshot)}
                        className="flex-1"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownloadSnapshot(snapshot)}
                        className="flex-1"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Snapshot Preview Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          {selectedSnapshot && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {selectedSnapshot.title}
                  <Badge variant="secondary">{selectedSnapshot.dashboardType}</Badge>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                {/* Full Size Image */}
                <div className="relative bg-gray-800 rounded-lg overflow-hidden cyber-border">
                  <img 
                    src={selectedSnapshot.imageUrl}
                    alt={selectedSnapshot.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <p className="text-muted-foreground">{selectedSnapshot.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Captured: {formatTimestamp(selectedSnapshot.timestamp).date} at {formatTimestamp(selectedSnapshot.timestamp).time}</span>
                    <span>Resolution: {selectedSnapshot.size}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4">
                  <Button
                    onClick={() => handleDownloadSnapshot(selectedSnapshot)}
                    className="bg-cyber-blue hover:bg-cyber-blue/90 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Full Resolution
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(selectedSnapshot.imageUrl, '_blank')}
                  >
                    <Maximize2 className="w-4 h-4 mr-2" />
                    Open in New Tab
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}