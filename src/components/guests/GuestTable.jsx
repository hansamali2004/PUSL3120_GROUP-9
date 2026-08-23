function GuestTable({ guests, onView }) {
  function getInitials(name) {
    return name.split(' ').map((part) => part[0]).join('').slice(0, 2)
  }

  return (
    <div className="panel">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Guest</th>
              <th>Contact</th>
              <th>NIC/Passport</th>
              <th>Room</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {guests.length === 0 ? <tr><td colSpan="8" className="empty-state">No guest profiles match these filters.</td></tr> : guests.map((guest) => (
              <tr key={guest.id}>
                <td>
                  <div className="identity-cell">
                    <span className="avatar">{getInitials(guest.name)}</span>
                    <div>
                      <strong className="user-name">{guest.name}</strong>
                      <span className="table-secondary">Guest profile</span>
                    </div>
                  </div>
                </td>
                <td>{guest.contact}</td>
                <td>{guest.idNumber}</td>
                <td>{guest.room}</td>
                <td>{guest.checkIn}</td>
                <td>{guest.checkOut}</td>
                <td>
                  <span className={`status-badge ${guest.status.toLowerCase().replace(/\s+/g, '-')}`}>{guest.status}</span>
                </td>
                <td>
                    <button type="button" className="secondary-button table-action" onClick={() => onView(guest)}>View profile</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default GuestTable
