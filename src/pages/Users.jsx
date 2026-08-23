import PageHeader from '../components/layout/PageHeader'
import { users } from '../data/users'

function Users() {
  return (
    <div className="page-stack">
      <PageHeader title="Users" subtitle="System access and team activity" />

      <div className="panel">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>{user.status}</span>
                  </td>
                  <td>{user.lastActive}</td>
                  <td>
                    <button type="button" className="secondary-button">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users
