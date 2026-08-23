import PageHeader from '../components/layout/PageHeader'
import { reportCards } from '../data/users'

function Reports() {
  return (
    <div className="page-stack">
      <PageHeader title="Reports" subtitle="Hotel performance overview and revenue snapshot" />

      <div className="stats-grid">
        {reportCards.map((item) => (
          <div key={item.label} className="stat-card report-card">
            <div className="stat-label">{item.label}</div>
            <div className="stat-value">{item.value}</div>
            <div className="stat-change">{item.trend}</div>
          </div>
        ))}
      </div>

      <div className="content-grid two-column">
        <div className="panel">
          <div className="panel-heading">
            <h3>Monthly Revenue</h3>
          </div>
          <div className="mini-chart" aria-label="Revenue chart">
            <span style={{ height: '36%' }}></span>
            <span style={{ height: '58%' }}></span>
            <span style={{ height: '48%' }}></span>
            <span style={{ height: '74%' }}></span>
            <span style={{ height: '82%' }}></span>
            <span style={{ height: '92%' }}></span>
            <span style={{ height: '100%' }}></span>
          </div>
        </div>

        <div className="panel">
          <div className="panel-heading">
            <h3>Occupancy Trend</h3>
          </div>
          <div className="mini-rows">
            <div><span>Jan</span><strong>54%</strong></div>
            <div><span>Feb</span><strong>58%</strong></div>
            <div><span>Mar</span><strong>62%</strong></div>
            <div><span>Apr</span><strong>60%</strong></div>
            <div><span>May</span><strong>66%</strong></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
