import PageHeader from '../components/layout/PageHeader'
import GuestTable from '../components/guests/GuestTable'
import { guests } from '../data/guests'

function Guests() {
  return (
    <div className="page-stack">
      <PageHeader
        title="Guests"
        subtitle="Guest profile overview and current stays"
        actions={<button type="button" className="primary-button">Add Guest</button>}
      />

      <div className="toolbar row-gap">
        <div className="search-box">
          <span>⌕</span>
          <input type="text" placeholder="Search guest" aria-label="Search guest" />
        </div>
        <select aria-label="Filter guest status">
          <option>All Status</option>
          <option>Checked In</option>
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Checked Out</option>
        </select>
        <button type="button" className="secondary-button">Filter</button>
      </div>

      <GuestTable guests={guests} />
    </div>
  )
}

export default Guests
