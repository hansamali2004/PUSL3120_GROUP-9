function StatCard({ label, value, change }) {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-change">{change}</div>
    </div>
  )
}

export default StatCard
