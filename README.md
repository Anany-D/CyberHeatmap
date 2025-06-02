# National Cyber Threat Intelligence Dashboard

A modern, responsive cyber threat intelligence dashboard featuring real-time Kibana visualizations with toggle-able demo and live modes. Built as a hackathon prototype to showcase advanced data visualization capabilities.

## Features

- **Real-time Monitoring**: Live cyber threat intelligence with auto-refresh capabilities
- **Interactive Visualizations**: Toggle between demo and live Kibana dashboards
- **Responsive Design**: Mobile-first approach with dark theme UI
- **Multiple Chart Types**: Heatmaps, pie charts, maps, and bar charts
- **Export Functionality**: PDF export of dashboard views
- **Search & Filter**: Find specific visualizations quickly
- **Professional UI**: Cyber-themed design with smooth animations

## Technology Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Framer Motion for animations
- React Query for data fetching
- Wouter for routing

### Backend
- Express.js with TypeScript
- Drizzle ORM for database operations
- Session management with connect-pg-simple
- RESTful API architecture

### Data Visualization
- Kibana dashboards integration
- Real-time data streams
- Interactive iframe embeds
- Responsive chart containers

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Kibana instance (for live data)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd cyber-threat-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5000](http://localhost:5000) in your browser

### Configuration

Update the Kibana base URL in `client/src/components/dashboard-section.tsx`:
```typescript
const baseUrl = "http://your-kibana-instance:5601"
```

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy with automatic builds

### Manual Deployment

1. Build the project
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility libraries
│   │   └── pages/          # Page components
├── server/                 # Backend Express server
├── shared/                 # Shared types and schemas
├── components.json         # shadcn/ui configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── vercel.json            # Vercel deployment config
```

## Available Dashboards

1. **Global Threat Map** - Interactive world map with threat indicators
2. **Threat Distribution** - Pie chart showing threat type breakdown
3. **Heatmap Dashboard** - Intensity visualization across regions
4. **New Dashboard** - Comprehensive analytics view
5. **LensBar Dashboard** - Detailed bar chart analysis

## Features in Detail

### Toggle Functionality
Each visualization card includes a toggle switch to switch between:
- **Demo Mode**: Shows static preview with sample data
- **Live Mode**: Displays real Kibana dashboard in iframe

### Search & Navigation
- Global search across all visualizations
- Smooth scrolling navigation
- Mobile-responsive menu

### Export Capabilities
- PDF export of entire dashboard
- High-quality rendering
- Professional formatting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created as a hackathon prototype for demonstration purposes.

## Security Note

This is a prototype dashboard. For production use:
- Implement proper authentication
- Use secure API endpoints
- Apply proper CORS policies
- Validate all external data sources