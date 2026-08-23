import { useMemo, useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import GuestTable from '../components/guests/GuestTable'
import { guests } from '../data/guests'

function Guests() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [selectedGuest, setSelectedGuest] = useState(null)

  const filteredGuests = useMemo(() => guests.filter((guest) => {
    const search = searchTerm.toLowerCase()
    const matchesSearch = [guest.name, guest.contact, guest.idNumber, guest.room].some((value) => value.toLowerCase().includes(search))
    return matchesSearch && (statusFilter === 'All Status' || guest.status === statusFilter)
  }), [searchTerm, statusFilter])

  return (
    <div className="page-stack">
      <PageHeader
        title="Guests"
        subtitle="Guest profile overview and current stays"
        actions={<button type="button" className="primary-button">Add Guest</button>}
      />

      <div className="summary-boxes">
        <div className="summary-box"><span>Total guests</span><strong>{guests.length}</strong><small>Registered profiles</small></div>
        <div className="summary-box summary-positive"><span>Checked in</span><strong>{guests.filter((guest) => guest.status === 'Checked In').length}</strong><small>Currently staying</small></div>
        <div className="summary-box summary-warning"><span>Arrivals pending</span><strong>{guests.filter((guest) => guest.status === 'Confirmed' || guest.status === 'Pending').length}</strong><small>Needs attention</small></div>
      </div>

      <div className="panel">
        <div className="toolbar row-gap">
          <div className="search-box">
            <span>⌕</span>
            <input type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search name, room or ID" aria-label="Search guests" />
          </div>
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="Filter guest status">
            <option>All Status</option>
            <option>Checked In</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Checked Out</option>
          </select>
        </div>
        <div className="table-caption">Showing {filteredGuests.length} of {guests.length} guest profiles</div>
        <GuestTable guests={filteredGuests} onView={setSelectedGuest} />
        {selectedGuest && (
          <div className="profile-detail" role="status">
            <div className="profile-detail-heading">
              <div className="avatar avatar-large">{selectedGuest.name.split(' ').map((part) => part[0]).join('')}</div>
              <div><strong>{selectedGuest.name}</strong><span>{selectedGuest.contact} · ID {selectedGuest.idNumber}</span></div>
            </div>
            <div><span>Room</span><strong>{selectedGuest.room}</strong></div>
            <div><span>Stay</span><strong>{selectedGuest.checkIn} to {selectedGuest.checkOut}</strong></div>
            <span className={`status-badge ${selectedGuest.status.toLowerCase().replace(/\s+/g, '-')}`}>{selectedGuest.status}</span>
            <button type="button" className="text-button" onClick={() => setSelectedGuest(null)}>Close profile</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Guests
