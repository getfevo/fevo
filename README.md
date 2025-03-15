#fevo - Open Source way of collecting user feedback

A modern, responsive dashboard application built with Next.js and React for managing product feedback and feature requests.

## Overview

This dashboard provides a comprehensive interface for product managers and teams to track user feedback, feature requests, and overall product metrics. It includes real-time statistics, feature request tracking, and user activity monitoring.

## Features

### 1. Analytics Overview
- Collect Statistics:
  - Total Feedback
  - Active Users
  - Feature Requests
  - Implemented Features
- Percentage changes tracked month-over-month

### 2. Feature Request Management
- Prioritized list of top feature requests
- Status tracking (Planned, In-Progress, Completed)
- Progress indicators for in-progress features
- Categorization system
- Vote and comment tracking

### 3. User Activity Monitoring
- Real-time activity feed
- User interactions tracking
- Timeline of recent actions
- User profile integration

### 4. Advanced Filtering
- Time-based filtering (Today, Yesterday, Last 7/30/90 days)
- Category-based filtering
- Status-based filtering

### 5. UI Components
- Responsive layout
- Search functionality
- User notifications
- Profile management
- Interactive charts and graphs

## Technical Stack

- **Framework**: Next.js
- **UI Components**: shadcn
- **Icons**: Lucide React icons
- **Styling**: Tailwind CSS

## Layout Structure

The dashboard follows a common layout pattern:
- Top navigation bar with search and user controls
- Sidebar for main navigation
- Main content area with responsive grid layouts
- Cards for displaying different data sections

## Component Architecture

The application is built using several key components:
- `AppSidebar`: Main navigation sidebar
- `Card` components for displaying statistics and data
- `DropdownMenu` for various filtering options
- `Avatar` for user profile displays
- `Progress` bars for tracking feature implementation
- `Badge` components for status indicators

## Data Structure

The dashboard uses structured data for:
- Statistics tracking
- Feature requests
- User activity
- Status management

## Responsive Design

The dashboard is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Adaptive component sizing
- Breakpoint-specific optimizations

## Getting Started

1. Install dependencies
```bash
pnpm install
```

2. Run the development server
```bash
pnpm dev

```

3. Open [http://localhost:3000](http://localhost:3000) to view the dashboard

## License

