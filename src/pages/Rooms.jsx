import { useMemo, useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import RoomFilter from '../components/rooms/RoomFilter'
import RoomCard from '../components/rooms/RoomCard'
import { rooms, roomTypes, roomStatuses } from '../data/rooms'

function Rooms() {
  const [selectedType, setSelectedType] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const matchesType = selectedType === 'All' || room.type === selectedType
      const matchesStatus = selectedStatus === 'All' || room.status === selectedStatus
      return matchesType && matchesStatus
    })
  }, [selectedType, selectedStatus])

  return (
    <div className="page-stack">
      <PageHeader
        title="Rooms"
        subtitle="Housekeeping overview and room assignment status"
        actions={<button type="button" className="primary-button">Add Room</button>}
      />

      <RoomFilter
        types={roomTypes}
        statuses={roomStatuses}
        selectedType={selectedType}
        selectedStatus={selectedStatus}
        onTypeChange={setSelectedType}
        onStatusChange={setSelectedStatus}
      />

      <div className="room-grid">
        {filteredRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  )
}

export default Rooms
