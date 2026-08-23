import { useMemo, useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import { users } from '../data/users'

function Users() {
  const [userRecords, setUserRecords] = useState(users)
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('All Roles')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [selectedUser, setSelectedUser] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newUserName, setNewUserName] = useState('')

  const filteredUsers = useMemo(() => userRecords.filter((user) => {
    const search = searchTerm.toLowerCase()
    const matchesSearch = [user.name, user.email, user.role].some((value) => value.toLowerCase().includes(search))
    return matchesSearch && (roleFilter === 'All Roles' || user.role === roleFilter) && (statusFilter === 'All Status' || user.status === statusFilter)
  }), [userRecords, searchTerm, roleFilter, statusFilter])

  const clearFilters = () => {
    setSearchTerm('')
    setRoleFilter('All Roles')
    setStatusFilter('All Status')
  }

  const addUser = (event) => {
    event.preventDefault()
    const name = newUserName.trim()
    if (!name) return
    setUserRecords((currentUsers) => [...currentUsers, {
      id: Date.now(), name, email: 'Pending email', role: 'Receptionist', status: 'Away', lastActive: 'Never',
    }])
    setNewUserName('')
    setShowAddForm(false)
  }

  return (
    <div className="page-stack">
      <PageHeader title="Users" subtitle="System access and team activity" actions={<button type="button" className="primary-button" onClick={() => setShowAddForm((visible) => !visible)}>{showAddForm ? 'Close form' : 'Add user'}</button>} />

      {showAddForm && (
        <form className="quick-form" onSubmit={addUser}>
          <div><strong>Add system user</strong><span>Create the account first, then configure its permissions.</span></div>
          <input value={newUserName} onChange={(event) => setNewUserName(event.target.value)} placeholder="User full name" aria-label="User full name" autoFocus required />
          <button type="submit" className="primary-button">Create user</button>
        </form>
      )}

      <div className="summary-boxes">
        <div className="summary-box"><span>Total users</span><strong>{users.length}</strong><small>System accounts</small></div>
        <div className="summary-box summary-positive"><span>Active now</span><strong>{users.filter((user) => user.status === 'Active').length}</strong><small>Ready to work</small></div>
        <div className="summary-box summary-warning"><span>Needs review</span><strong>{users.filter((user) => user.status !== 'Active').length}</strong><small>Away or inactive</small></div>
      </div>

      <div className="panel">
        <div className="toolbar row-gap">
          <div className="search-box">
            <span>⌕</span>
            <input type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search name, email or role" aria-label="Search system users" />
          </div>
          <select value={roleFilter} onChange={(event) => setRoleFilter(event.target.value)} aria-label="Filter users by role">
            <option>All Roles</option>
            {[...new Set(users.map((user) => user.role))].map((role) => <option key={role}>{role}</option>)}
          </select>
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="Filter users by status">
            <option>All Status</option>
            <option>Active</option>
            <option>Away</option>
          </select>
        </div>
        <div className="table-caption"><span>Showing {filteredUsers.length} of {userRecords.length} system users</span>{(searchTerm || roleFilter !== 'All Roles' || statusFilter !== 'All Status') && <button type="button" className="text-button" onClick={clearFilters}>Clear filters</button>}</div>
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
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="identity-cell">
                      <div className="avatar">{user.name.split(' ').map((part) => part[0]).join('')}</div>
                      <strong>{user.name}</strong>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>{user.status}</span>
                  </td>
                  <td>{user.lastActive}</td>
                  <td>
                    <button type="button" className="secondary-button small-button" onClick={() => setSelectedUser(user)}>View access</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!filteredUsers.length && <p className="empty-state">No system users match these filters.</p>}
        </div>
        {selectedUser && (
          <div className="profile-detail" role="status">
            <div className="profile-detail-heading">
              <div className="avatar avatar-large">{selectedUser.name.split(' ').map((part) => part[0]).join('')}</div>
              <div><strong>{selectedUser.name}</strong><span>{selectedUser.email}</span></div>
            </div>
            <div><span>Role</span><strong>{selectedUser.role}</strong></div>
            <div><span>Last active</span><strong>{selectedUser.lastActive}</strong></div>
            <span className={`status-badge ${selectedUser.status.toLowerCase()}`}>{selectedUser.status}</span>
            <button type="button" className="text-button" onClick={() => setSelectedUser(null)}>Close access</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Users
