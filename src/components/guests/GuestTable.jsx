function GuestTable({ guests, onView }) {
  return (
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
            {guests.map((guest) => (
              <tr key={guest.id}>
                <td>
                  <div className="identity-cell">
                    <div className="avatar">{guest.name.split(' ').map((part) => part[0]).join('')}</div>
                    <strong>{guest.name}</strong>
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
                    <button type="button" className="secondary-button small-button" onClick={() => onView(guest)}>View profile</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          {!guests.length && <p className="empty-state">No guest profiles match these filters.</p>}
    </div>
  )
}

export default GuestTable
