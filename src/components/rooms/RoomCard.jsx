function RoomCard({ room }) {
  return (
    <div className="room-card">
      <div className="room-card-header">
        <div>
          <div className="room-number">{room.roomNumber}</div>
          <div className="room-type">{room.type}</div>
        </div>
        <span className={`status-badge ${room.status.toLowerCase().replace(/\s+/g, '-')}`}>{room.status}</span>
      </div>

      <div className="room-price">LKR {room.price.toLocaleString()}</div>
      <div className="room-card-footer">
        <button type="button" className="secondary-button">View</button>
        <button type="button" className="primary-button">Edit</button>
      </div>
    </div>
  )
}

export default RoomCard
