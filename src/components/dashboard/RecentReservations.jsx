function RecentReservations({ reservations }) {
  return (
    <div className="panel">
      <div className="panel-heading">
        <h3>Recent Reservations</h3>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Reservation ID</th>
              <th>Guest</th>
              <th>Room</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.id}</td>
                <td>{reservation.guest}</td>
                <td>{reservation.room}</td>
                <td>{reservation.checkIn}</td>
                <td>{reservation.checkOut}</td>
                <td>
                  <span className={`status-badge ${reservation.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {reservation.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentReservations
