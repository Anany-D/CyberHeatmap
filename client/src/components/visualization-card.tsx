import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ExternalLink, RefreshCw } from "lucide-react"

interface VisualizationCardProps {
  title: string
  description: string
  icon: string
  dashboardUrl: string
  demoContent: React.ReactNode
  isLive: boolean
  onToggleLive: () => void
  searchQuery?: string
}

export function VisualizationCard({
  title,
  description,
  icon,
  dashboardUrl,
  demoContent,
  isLive,
  onToggleLive,
  searchQuery = ""
}: VisualizationCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Filter based on search query
  const isVisible = !searchQuery || 
    title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    description.toLowerCase().includes(searchQuery.toLowerCase())

  if (!isVisible) return null

  const handleIframeLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  const handleRefresh = () => {
    if (iframeRef.current) {
      setIsLoading(true)
      setHasError(false)
      iframeRef.current.src = iframeRef.current.src
    }
  }

  const openInNewTab = () => {
    window.open(dashboardUrl, '_blank')
  }

  return (
    <Card className="visualization-card cyber-border group">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <span className="text-2xl">{icon}</span>
            {title}
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant={isLive ? "default" : "secondary"} className="text-xs">
              {isLive ? "Live" : "Demo"}
            </Badge>
            <Switch
              checked={isLive}
              onCheckedChange={onToggleLive}
              className="data-[state=checked]:bg-cyber-blue"
            />
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      
      <CardContent>
        <div className="relative w-full h-[500px] border rounded-lg overflow-hidden bg-card">
          {!isLive ? (
            demoContent
          ) : (
            <>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
                  <div className="text-center">
                    <RefreshCw className="w-8 h-8 animate-spin text-cyber-blue mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Loading dashboard...</p>
                  </div>
                </div>
              )}
              
              {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
                  <div className="text-center p-6">
                    <AlertTriangle className="w-8 h-8 text-destructive mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Failed to load dashboard. Check if the Kibana service is running.
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button onClick={handleRefresh} size="sm" variant="outline">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Retry
                      </Button>
                      <Button onClick={openInNewTab} size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open in New Tab
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              <iframe
                ref={iframeRef}
                src={dashboardUrl}
                className="w-full h-full border-0"
                loading="lazy"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                title={title}
                sandbox="allow-same-origin allow-scripts allow-forms"
              />
            </>
          )}
        </div>
        
        {isLive && (
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyber-green rounded-full pulse-cyber"></div>
              <span className="text-xs text-muted-foreground">Live Data</span>
            </div>
            <Button 
              onClick={openInNewTab} 
              size="sm" 
              variant="ghost" 
              className="text-xs"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Full Screen
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
