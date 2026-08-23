function RoomFilter({ types, statuses, selectedType, selectedStatus, onTypeChange, onStatusChange }) {
  return (
    <div className="toolbar row-gap">
      <div className="search-box">
        <span>⌕</span>
        <input type="text" placeholder="Search rooms" aria-label="Search rooms" />
      </div>

      <select value={selectedType} onChange={(event) => onTypeChange(event.target.value)} aria-label="Filter by room type">
        {types.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>

      <select value={selectedStatus} onChange={(event) => onStatusChange(event.target.value)} aria-label="Filter by room status">
        {statuses.map((status) => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>

      <button type="button" className="primary-button">Add Room</button>
    </div>
  )
}

export default RoomFilter
