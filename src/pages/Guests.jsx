import PageHeader from '../components/layout/PageHeader'
import GuestTable from '../components/guests/GuestTable'
import { guests } from '../data/guests'
import { useState } from 'react'

function Guests() {
  const [guestList, setGuestList] = useState(guests)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All Status')
  const [selectedGuest, setSelectedGuest] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newGuest, setNewGuest] = useState({ name: '', contact: '', idNumber: '', room: '' })

  const filteredGuests = guestList.filter((guest) => {
    const searchText = `${guest.name} ${guest.contact} ${guest.idNumber} ${guest.room}`.toLowerCase()
    return searchText.includes(search.toLowerCase()) && (status === 'All Status' || guest.status === status)
  })

  function addGuest(event) {
    event.preventDefault()
    setGuestList((currentGuests) => [...currentGuests, { ...newGuest, id: Date.now(), checkIn: 'Not scheduled', checkOut: 'Not scheduled', status: 'Pending' }])
    setNewGuest({ name: '', contact: '', idNumber: '', room: '' })
    setShowAddForm(false)
  }

  return (
    <div className="page-stack">
      <PageHeader
        title="Guests"
        subtitle="Guest profile overview and current stays"
        actions={<button type="button" className="primary-button" onClick={() => setShowAddForm(true)}>Add Guest</button>}
      />

      <div className="toolbar row-gap">
        <div className="search-box">
          <span>⌕</span>
          <input type="text" placeholder="Search by name, contact or room" aria-label="Search guest" value={search} onChange={(event) => setSearch(event.target.value)} />
        </div>
        <select aria-label="Filter guest status" value={status} onChange={(event) => setStatus(event.target.value)}>
          <option>All Status</option>
          <option>Checked In</option>
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Checked Out</option>
        </select>
        {(search || status !== 'All Status') && <button type="button" className="secondary-button" onClick={() => { setSearch(''); setStatus('All Status') }}>Clear filters</button>}
      </div>

      <div className="list-summary"><strong>{filteredGuests.length}</strong> of {guestList.length} guest profiles</div>
      <GuestTable guests={filteredGuests} onView={setSelectedGuest} />

      {(selectedGuest || showAddForm) && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && (setSelectedGuest(null), setShowAddForm(false))}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="guest-modal-title"><div className="modal-header"><div><p className="eyebrow">{showAddForm ? 'New profile' : 'Guest profile'}</p><h3 id="guest-modal-title">{showAddForm ? 'Add guest' : selectedGuest.name}</h3></div><button type="button" className="icon-button" aria-label="Close dialog" onClick={() => { setSelectedGuest(null); setShowAddForm(false) }}>×</button></div>{showAddForm ? <form className="modal-form" onSubmit={addGuest}>{['name', 'contact', 'idNumber', 'room'].map((field) => <label key={field}>{field === 'idNumber' ? 'NIC / Passport' : field[0].toUpperCase() + field.slice(1)}<input required value={newGuest[field]} onChange={(event) => setNewGuest({ ...newGuest, [field]: event.target.value })} /></label>)}<div className="form-actions"><button type="button" className="secondary-button" onClick={() => setShowAddForm(false)}>Cancel</button><button type="submit" className="primary-button">Create profile</button></div></form> : <div className="detail-list"><div><span>Contact</span><strong>{selectedGuest.contact}</strong></div><div><span>NIC / Passport</span><strong>{selectedGuest.idNumber}</strong></div><div><span>Room</span><strong>{selectedGuest.room}</strong></div><div><span>Stay</span><strong>{selectedGuest.checkIn} to {selectedGuest.checkOut}</strong></div><div><span>Status</span><strong><span className={`status-badge ${selectedGuest.status.toLowerCase().replace(/\s+/g, '-')}`}>{selectedGuest.status}</span></strong></div></div>}</div></div>}
    </div>
  )
}

export default Guests
