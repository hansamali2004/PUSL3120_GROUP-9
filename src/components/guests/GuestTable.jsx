function GuestTable({ guests }) {
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
            {guests.map((guest) => (
              <tr key={guest.id}>
                <td>{guest.name}</td>
                <td>{guest.contact}</td>
                <td>{guest.idNumber}</td>
                <td>{guest.room}</td>
                <td>{guest.checkIn}</td>
                <td>{guest.checkOut}</td>
                <td>
                  <span className={`status-badge ${guest.status.toLowerCase().replace(/\s+/g, '-')}`}>{guest.status}</span>
                </td>
                <td>
                  <button type="button" className="secondary-button">View</button>
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
