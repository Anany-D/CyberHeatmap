import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useTheme } from "next-themes"
import { 
  Shield, 
  Search, 
  RefreshCw, 
  Download, 
  Moon, 
  Sun, 
  Menu, 
  X,
  ChevronDown 
} from "lucide-react"

interface NavigationProps {
  onSearch: (query: string) => void
  onExportPdf: () => void
  onAutoRefresh: () => void
  autoRefreshEnabled: boolean
}

export function Navigation({ 
  onSearch, 
  onExportPdf, 
  onAutoRefresh, 
  autoRefreshEnabled 
}: NavigationProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { theme, setTheme } = useTheme()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
    setIsSearchOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-cyber-blue mr-3" />
              <span className="text-xl font-bold">CTID</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="hover:text-cyber-blue transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('visualizations')} 
                className="hover:text-cyber-blue transition-colors"
              >
                Visualizations
              </button>
              <button 
                onClick={() => scrollToSection('demo-info')} 
                className="hover:text-cyber-blue transition-colors"
              >
                Demo Info
              </button>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                title="Search Visualizations"
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Auto-refresh Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onAutoRefresh}
                title="Auto Refresh"
                className={autoRefreshEnabled ? "text-cyber-green" : ""}
              >
                <RefreshCw className={`w-5 h-5 ${autoRefreshEnabled ? "animate-spin" : ""}`} />
              </Button>

              {/* Export PDF Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onExportPdf}
                title="Export PDF"
              >
                <Download className="w-5 h-5" />
              </Button>

              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                title="Toggle Theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-effect border-t">
            <div className="px-4 py-2 space-y-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block py-2 hover:text-cyber-blue transition-colors w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('visualizations')} 
                className="block py-2 hover:text-cyber-blue transition-colors w-full text-left"
              >
                Visualizations
              </button>
              <button 
                onClick={() => scrollToSection('demo-info')} 
                className="block py-2 hover:text-cyber-blue transition-colors w-full text-left"
              >
                Demo Info
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Search Visualizations</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSearch} className="space-y-4">
            <Input
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <Button type="submit" className="w-full">
              Search
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
