function OccupancyChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="panel occupancy-panel">
      <div className="panel-heading">
        <h3>Occupancy Overview</h3>
      </div>

      <div className="chart-wrap">
        <div className="donut-chart" aria-label="Occupancy distribution chart">
          {data.map((item) => (
            <div
              key={item.label}
              className="donut-segment"
              style={{
                background: `conic-gradient(${item.color} 0 ${((item.value / total) * 100)}%, transparent 0 100%)`,
              }}
            />
          ))}
          <div className="donut-center">
            <strong>60%</strong>
            <span>Occupied</span>
          </div>
        </div>

        <div className="chart-legend">
          {data.map((item) => (
            <div className="legend-item" key={item.label}>
              <span className="legend-swatch" style={{ background: item.color }}></span>
              <span>{item.label}</span>
              <strong>{item.value}%</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OccupancyChart
