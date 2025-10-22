# RentAlytics - Property Management Dashboard

A comprehensive property management and analytics platform built with Next.js 14, React 19, TypeScript, and Tailwind CSS.

## 🏗️ Project Structure

```
rent-alytics/
├── app/
│   ├── (dashboard)/          # Route group for dashboard pages
│   │   ├── layout.tsx        # Dashboard layout wrapper
│   │   ├── dashboard/        # Main dashboard page
│   │   ├── analytics/        # Analytics & insights
│   │   ├── taxes/            # Tax management
│   │   ├── investments/      # Investment portfolio
│   │   ├── payments/         # Payment management
│   │   ├── credit/           # Credit monitoring
│   │   └── security/         # Security settings
│   ├── layout.tsx            # Root layout with sidebar
│   ├── page.tsx              # Root page (redirects to /dashboard)
│   └── globals.css           # Global styles
├── components/
│   ├── dashboard/            # Dashboard-specific components
│   │   ├── stat-card.tsx     # KPI stat cards
│   │   ├── metric-card.tsx   # Metric display cards
│   │   ├── data-table.tsx    # Reusable data table
│   │   └── empty-state.tsx   # Empty state component
│   ├── ui/                   # shadcn/ui components
│   └── [chart-components]    # Chart components
├── lib/
│   ├── types/                # TypeScript definitions
│   ├── constants/            # App constants
│   ├── services/             # Data services & mock data
│   └── utils/                # Utility functions
└── public/                   # Static assets
```

## 🚀 Features

### 📊 Dashboard
- KPI metrics (Revenue, Expenses, Profit, Occupancy)
- Financial charts and visualizations
- Recent transactions with status tracking
- Real-time performance indicators

### 📈 Analytics
- Property performance comparison
- Revenue vs expenses trends
- Occupancy rate tracking
- Portfolio distribution analysis

### 💰 Taxes
- Tax obligations and payment tracking
- Quarterly tax breakdown
- Deduction management and categorization
- Tax savings calculator

### 🏢 Investments
- Portfolio overview with ROI tracking
- Property-by-property performance
- Cash flow analysis
- Multi-dimensional performance metrics

### 💳 Payments
- Payment history and tracking
- Multiple payment method management
- Category-based expense breakdown
- Upcoming payment alerts

### 📊 Credit
- Credit score monitoring with history
- Credit utilization tracking
- Factor analysis affecting your score
- Credit health recommendations

### 🔒 Security
- Two-factor authentication management
- Login history and activity log
- Notification preferences
- Account security settings

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Date Handling**: date-fns

## 🎯 Best Practices Implemented

1. **File Organization**: Feature-based structure with route groups
2. **Type Safety**: Comprehensive TypeScript types
3. **Reusable Components**: DRY principle with shared components
4. **Consistent Styling**: Tailwind CSS with design system
5. **Accessibility**: Semantic HTML and ARIA labels
6. **Performance**: Code splitting with Next.js App Router
7. **Mock Data**: Centralized for easy API integration

## 🔧 Key Components

### StatCard
```tsx
<StatCard
  title="Revenue"
  value={89780}
  change={2.53}
  changeType="increase"
  format="currency"
/>
```

### DataTable
```tsx
<DataTable
  data={transactions}
  columns={[...]}
  pageSize={10}
/>
```

## 📝 Development

### Adding New Pages
1. Create page in `app/(dashboard)/[page-name]/page.tsx`
2. Add route to `components/Sidebar.tsx`
3. Define types in `lib/types/index.ts`
4. Add mock data in `lib/services/mock-data.ts`

### Styling Conventions
- Use Tailwind utility classes
- Follow spacing scale (4px increments)
- Maintain consistent color palette
- Use CSS variables for theme values

## 🔄 Future Enhancements

- API integration
- Authentication system
- Real-time notifications
- Data export functionality
- Multi-currency support
- Dark mode theme
- Advanced filtering
- Mobile app version

## 📄 License

MIT License - free to use for your projects!

---

Built with ❤️ using Next.js and TypeScript
