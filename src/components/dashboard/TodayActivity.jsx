function ActivityTable({ title, rows, columns }) {
  return (
    <div className="panel">
      <div className="panel-heading">
        <h3>{title}</h3>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${title}-${index}`}>
                <td>{row.guest}</td>
                <td>{row.room}</td>
                <td>{row.checkIn || row.checkOut}</td>
                <td>
                  <span className={`status-badge ${row.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {row.status}
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

export default ActivityTable
