import PageHeader from '../components/layout/PageHeader'
import ReservationTable from '../components/reservations/ReservationTable'
import { reservations, reservationStatuses } from '../data/reservations'

function Reservations() {
  return (
    <div className="page-stack">
      <PageHeader
        title="Reservations"
        subtitle="Upcoming and active bookings"
        actions={<button type="button" className="primary-button">New Reservation</button>}
      />

      <div className="toolbar row-gap">
        <div className="search-box">
          <span>⌕</span>
          <input type="text" placeholder="Search reservation" aria-label="Search reservation" />
        </div>
        <select aria-label="Filter reservation status">
          {reservationStatuses.map((status) => (
            <option key={status} value={status}>{status === 'All' ? 'All Status' : status}</option>
          ))}
        </select>
        <input type="date" aria-label="Filter by date" />
      </div>

      <ReservationTable reservations={reservations} />
    </div>
  )
}

export default Reservations
