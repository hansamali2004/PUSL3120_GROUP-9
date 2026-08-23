import { useMemo } from 'react'
import StatCard from '../components/dashboard/StatCard'
import OccupancyChart from '../components/dashboard/OccupancyChart'
import ActivityTable from '../components/dashboard/TodayActivity'
import RecentReservations from '../components/dashboard/RecentReservations'
import { stats, occupancyData, todayCheckIns, todayCheckOuts, recentReservations } from '../data/dashboard'

function Dashboard() {
  const checkInColumns = ['Guest', 'Room', 'Check-in', 'Status']
  const checkOutColumns = ['Guest', 'Room', 'Check-out', 'Status']

  const dashboardStats = useMemo(() => stats, [])

  return (
    <div className="page-stack">
      <div className="stats-grid">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} change={stat.change} />
        ))}
      </div>

      <div className="content-grid two-column">
        <OccupancyChart data={occupancyData} />
        <div className="panel">
          <div className="panel-heading">
            <h3>Today’s Summary</h3>
          </div>
          <div className="summary-boxes">
            <div className="summary-box">
              <span>Check-ins</span>
              <strong>12</strong>
            </div>
            <div className="summary-box">
              <span>Check-outs</span>
              <strong>8</strong>
            </div>
            <div className="summary-box">
              <span>Arrivals</span>
              <strong>5</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="content-grid two-column">
        <ActivityTable title="Today’s Check-ins" rows={todayCheckIns} columns={checkInColumns} />
        <ActivityTable title="Today’s Check-outs" rows={todayCheckOuts} columns={checkOutColumns} />
      </div>

      <RecentReservations reservations={recentReservations} />
    </div>
  )
}

export default Dashboard
