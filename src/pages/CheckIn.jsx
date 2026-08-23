import PageHeader from '../components/layout/PageHeader'

function CheckIn() {
  return (
    <div className="page-stack">
      <PageHeader title="Check-In" subtitle="Search reservation and confirm guest arrival" />

      <div className="panel form-panel">
        <div className="toolbar row-gap">
          <div className="search-box wide-search">
            <span>⌕</span>
            <input type="text" placeholder="Search Reservation" aria-label="Search Reservation" value="RES-1026" readOnly />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-section">
            <h3>Guest Information</h3>
            <div className="detail-list">
              <div><span>Guest</span><strong>Ishara Dissanayake</strong></div>
              <div><span>Contact</span><strong>+94 77 111 2233</strong></div>
              <div><span>Passport</span><strong>N3321458</strong></div>
            </div>
          </div>

          <div className="form-section">
            <h3>Room Information</h3>
            <div className="detail-list">
              <div><span>Room</span><strong>118</strong></div>
              <div><span>Type</span><strong>Standard</strong></div>
              <div><span>Rate</span><strong>LKR 10,000 / night</strong></div>
            </div>
          </div>

          <div className="form-section full-width">
            <h3>Stay Information</h3>
            <div className="detail-list two-column">
              <div><span>Check-In Date</span><strong>2026-08-22</strong></div>
              <div><span>Expected Check-Out</span><strong>2026-08-25</strong></div>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="primary-button">Confirm Check-In</button>
        </div>
      </div>
    </div>
  )
}

export default CheckIn
