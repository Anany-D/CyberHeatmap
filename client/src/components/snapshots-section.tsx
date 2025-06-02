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

  // Snapshots would be fetched from your backend API
  const snapshots: Snapshot[] = [
    {
      id: "1",
      title: "Global Threat Map - Peak Activity",
      description: "Critical threat spike detected in Eastern Europe region with 340% increase in malware attacks",
      timestamp: "2025-01-02T10:30:00Z",
      imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTFhMWEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwYTBhMGEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmaWxsPSIjMDBmNWZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiPkdsb2JhbCBUaHJlYXQgTWFwPC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iMjMwIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPklOVEVSQUNUSVZFIE1BUCBWSUVXPC90ZXh0PjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iOCIgZmlsbD0iI2ZmMDAwMCIgb3BhY2l0eT0iMC44Ij48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjAuODsxOzAuOCIgZHVyPSIycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSI0NTAiIGN5PSIxMjAiIHI9IjYiIGZpbGw9IiNmZjk5MDAiIG9wYWNpdHk9IjAuOCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwLjg7MTswLjgiIGR1cj0iMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMzAwIiBjeT0iMjgwIiByPSI1IiBmaWxsPSIjZmZmZjAwIiBvcGFjaXR5PSIwLjgiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMC44OzE7MC44IiBkdXI9IjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvY2lyY2xlPjwvc3ZnPg==",
      dashboardType: "Map",
      size: "1920x1080"
    },
    {
      id: "2", 
      title: "Threat Distribution Analysis",
      description: "Monthly threat type breakdown showing ransomware as dominant attack vector (42% increase)",
      timestamp: "2025-01-02T09:15:00Z",
      imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTFhMWEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwYTBhMGEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjMwMCIgeT0iNTAiIGZpbGw9IiMwMGY1ZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCI+VGhyZWF0IERpc3RyaWJ1dGlvbjwvdGV4dD48Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmNWZmIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNIDMwMCwxMDAgQSAxMDAsMTAwIDAgMCwxIDQwMCwyMDAgTCAzMDAsMjAwIFoiIGZpbGw9IiNmZjAwMDAiIG9wYWNpdHk9IjAuNyIvPjxwYXRoIGQ9Ik0gNDAwLDIwMCBBIDEwMCwxMDAgMCAwLDEgMzAwLDMwMCBMIDMwMCwyMDAgWiIgZmlsbD0iI2ZmOTkwMCIgb3BhY2l0eT0iMC43Ii8+PHBhdGggZD0iTSAzMDAsMzAwIEEgMTAwLDEwMCAwIDAsMSAyMDAsMjAwIEwgMzAwLDIwMCBaIiBmaWxsPSIjZmZmZjAwIiBvcGFjaXR5PSIwLjciLz48cGF0aCBkPSJNIDIwMCwyMDAgQSAxMDAsMTAwIDAgMCwxIDMwMCwxMDAgTCAzMDAsMjAwIFoiIGZpbGw9IiMwMGZmMDAiIG9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjEwMCIgeT0iMzUwIiBmaWxsPSIjZmYwMDAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPk1hbHdhcmU6IDM1JTwvdGV4dD48dGV4dCB4PSIyMDAiIHk9IjM1MCIgZmlsbD0iI2ZmOTkwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIj5QaGlzaGluZzogMjglPC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iMzUwIiBmaWxsPSIjZmZmZjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPkREb1M6IDIyJTwvdGV4dD48dGV4dCB4PSI0MDAiIHk9IjM1MCIgZmlsbD0iIzAwZmYwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIj5PdGhlcjogMTUlPC90ZXh0Pjwvc3ZnPg==",
      dashboardType: "Pie Chart",
      size: "1920x1080"
    },
    {
      id: "3",
      title: "Heatmap Intensity Overview",
      description: "Regional threat intensity visualization revealing new attack patterns in Southeast Asia",
      timestamp: "2025-01-02T08:45:00Z", 
      imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTFhMWEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwYTBhMGEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjMwMCIgeT0iNTAiIGZpbGw9IiMwMGY1ZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCI+SGVhdG1hcCBJbnRlbnNpdHk8L3RleHQ+PHJlY3QgeD0iNTAiIHk9IjgwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNmZjAwMDAiIG9wYWNpdHk9IjAuOCIvPjxyZWN0IHg9IjEwMCIgeT0iODAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2ZmNTUwMCIgb3BhY2l0eT0iMC42Ii8+PHJlY3QgeD0iMTUwIiB5PSI4MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZhYTAwIiBvcGFjaXR5PSIwLjQiLz48cmVjdCB4PSIyMDAiIHk9IjgwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNmZmZmMDAiIG9wYWNpdHk9IjAuMyIvPjxyZWN0IHg9IjI1MCIgeT0iODAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2FhZmYwMCIgb3BhY2l0eT0iMC4yIi8+PHJlY3QgeD0iNTAiIHk9IjEzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmY3NzAwIiBvcGFjaXR5PSIwLjciLz48cmVjdCB4PSIxMDAiIHk9IjEzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZiYjAwIiBvcGFjaXR5PSIwLjUiLz48cmVjdCB4PSIxNTAiIHk9IjEzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZkZDAwIiBvcGFjaXR5PSIwLjQiLz48cmVjdCB4PSIyMDAiIHk9IjEzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZGRmZjAwIiBvcGFjaXR5PSIwLjMiLz48cmVjdCB4PSIyNTAiIHk9IjEzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNzJmZjAwIiBvcGFjaXR5PSIwLjIiLz48dGV4dCB4PSI1MCIgeT0iMjUwIiBmaWxsPSIjZmYwMDAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPkhpZ2ggSW50ZW5zaXR5PC90ZXh0Pjx0ZXh0IHg9IjI1MCIgeT0iMjUwIiBmaWxsPSIjMDBmZjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPkxvdyBJbnRlbnNpdHk8L3RleHQ+PC9zdmc+",
      dashboardType: "Heatmap",
      size: "1920x1080"
    },
    {
      id: "4",
      title: "LensBar Trend Analysis",
      description: "7-day attack trend analysis showing coordinated campaign across multiple threat vectors",
      timestamp: "2025-01-02T07:20:00Z",
      imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTFhMWEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwYTBhMGEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjMwMCIgeT0iNTAiIGZpbGw9IiMwMGY1ZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCI+QXR0YWNrIFBhdHRlcm4gQW5hbHlzaXM8L3RleHQ+PHJlY3QgeD0iODAiIHk9IjIwMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmMDAwMCIgb3BhY2l0eT0iMC44Ii8+PHJlY3QgeD0iMTQwIiB5PSIxNjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxNDAiIGZpbGw9IiNmZjU1MDAiIG9wYWNpdHk9IjAuOCIvPjxyZWN0IHg9IjIwMCIgeT0iMTIwIiB3aWR0aD0iNDAiIGhlaWdodD0iMTgwIiBmaWxsPSIjZmZhYTAwIiBvcGFjaXR5PSIwLjgiLz48cmVjdCB4PSIyNjAiIHk9IjE4MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjEyMCIgZmlsbD0iI2ZmZmYwMCIgb3BhY2l0eT0iMC44Ii8+PHJlY3QgeD0iMzIwIiB5PSIxNDAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxNjAiIGZpbGw9IiNhYWZmMDAiIG9wYWNpdHk9IjAuOCIvPjxyZWN0IHg9IjM4MCIgeT0iMTAwIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDBmZjAwIiBvcGFjaXR5PSIwLjgiLz48cmVjdCB4PSI0NDAiIHk9IjgwIiB3aWR0aD0iNDAiIGhlaWdodD0iMjIwIiBmaWxsPSIjMDBmZmZmIiBvcGFjaXR5PSIwLjgiLz48dGV4dCB4PSIxMDAiIHk9IjMzMCIgZmlsbD0iIzY2NiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj5KYW48L3RleHQ+PHRleHQgeD0iMTYwIiB5PSIzMzAiIGZpbGw9IiM2NjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+RmViPC90ZXh0Pjx0ZXh0IHg9IjIyMCIgeT0iMzMwIiBmaWxsPSIjNjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPk1hcjwvdGV4dD48dGV4dCB4PSIyODAiIHk9IjMzMCIgZmlsbD0iIzY2NiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj5BcHI8L3RleHQ+PHRleHQgeD0iMzQwIiB5PSIzMzAiIGZpbGw9IiM2NjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+TWF5PC90ZXh0Pjx0ZXh0IHg9IjQwMCIgeT0iMzMwIiBmaWxsPSIjNjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPkp1bjwvdGV4dD48dGV4dCB4PSI0NjAiIHk9IjMzMCIgZmlsbD0iIzY2NiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj5KdWw8L3RleHQ+PC9zdmc+",
      dashboardType: "Bar Chart",
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
                        onError={(e) => {
                          // Fallback to gradient background if image fails
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
                        }}
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
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.innerHTML = '<div class="flex items-center justify-center h-64 text-muted-foreground">Preview not available</div>'
                    }}
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