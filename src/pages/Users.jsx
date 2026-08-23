import PageHeader from '../components/layout/PageHeader'
import { users } from '../data/users'
import { useState } from 'react'

function Users() {
  const [userList, setUserList] = useState(users)
  const [search, setSearch] = useState('')
  const [role, setRole] = useState('All Roles')
  const [status, setStatus] = useState('All Status')
  const [selectedUser, setSelectedUser] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Receptionist' })

  const roles = [...new Set(userList.map((user) => user.role))]
  const filteredUsers = userList.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())).filter((user) => role === 'All Roles' || user.role === role).filter((user) => status === 'All Status' || user.status === status)

  function saveUser(event) {
    event.preventDefault()
    if (selectedUser) setUserList((currentUsers) => currentUsers.map((user) => user.id === selectedUser.id ? selectedUser : user))
    else setUserList((currentUsers) => [...currentUsers, { ...newUser, id: Date.now(), status: 'Active', lastActive: 'Just now' }])
    setSelectedUser(null); setShowAddForm(false)
  }

  function toggleStatus() {
    setSelectedUser({ ...selectedUser, status: selectedUser.status === 'Active' ? 'Inactive' : 'Active' })
  }

  function getInitials(name) {
    return name.split(' ').map((part) => part[0]).join('').slice(0, 2)
  }

  return (
    <div className="page-stack">
      <PageHeader title="Users" subtitle="System access and team activity" actions={<button type="button" className="primary-button" onClick={() => setShowAddForm(true)}>Add user</button>} />

      <div className="summary-boxes"><div className="summary-box"><span>Total users</span><strong>{userList.length}</strong></div><div className="summary-box"><span>Active now</span><strong>{userList.filter((user) => user.status === 'Active').length}</strong></div><div className="summary-box"><span>Roles in use</span><strong>{roles.length}</strong></div></div>

      <div className="toolbar row-gap"><div className="search-box"><span>⌕</span><input placeholder="Search name or email" aria-label="Search users" value={search} onChange={(event) => setSearch(event.target.value)} /></div><select aria-label="Filter user role" value={role} onChange={(event) => setRole(event.target.value)}><option>All Roles</option>{roles.map((userRole) => <option key={userRole}>{userRole}</option>)}</select><select aria-label="Filter user status" value={status} onChange={(event) => setStatus(event.target.value)}><option>All Status</option><option>Active</option><option>Away</option><option>Inactive</option></select>{(search || role !== 'All Roles' || status !== 'All Status') && <button type="button" className="secondary-button" onClick={() => { setSearch(''); setRole('All Roles'); setStatus('All Status') }}>Clear filters</button>}</div>

      <div className="panel">
        <div className="list-summary"><strong>{filteredUsers.length}</strong> of {userList.length} system users</div>
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
              {filteredUsers.length === 0 ? <tr><td colSpan="6" className="empty-state">No users match these filters.</td></tr> : filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="identity-cell">
                      <span className="avatar">{getInitials(user.name)}</span>
                      <div>
                        <strong className="user-name">{user.name}</strong>
                        <span className="table-secondary">System account</span>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>{user.status}</span>
                  </td>
                  <td>{user.lastActive}</td>
                  <td>
                    <button type="button" className="secondary-button table-action" onClick={() => setSelectedUser(user)}>Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {(selectedUser || showAddForm) && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && (setSelectedUser(null), setShowAddForm(false))}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="user-modal-title"><div className="modal-header"><div><p className="eyebrow">{showAddForm ? 'New account' : 'Access management'}</p><h3 id="user-modal-title">{showAddForm ? 'Add system user' : selectedUser.name}</h3></div><button type="button" className="icon-button" aria-label="Close dialog" onClick={() => { setSelectedUser(null); setShowAddForm(false) }}>×</button></div><form className="modal-form" onSubmit={saveUser}><label>Name<input required value={showAddForm ? newUser.name : selectedUser.name} onChange={(event) => showAddForm ? setNewUser({ ...newUser, name: event.target.value }) : setSelectedUser({ ...selectedUser, name: event.target.value })} /></label><label>Email<input required type="email" value={showAddForm ? newUser.email : selectedUser.email} onChange={(event) => showAddForm ? setNewUser({ ...newUser, email: event.target.value }) : setSelectedUser({ ...selectedUser, email: event.target.value })} /></label><label>Role<select value={showAddForm ? newUser.role : selectedUser.role} onChange={(event) => showAddForm ? setNewUser({ ...newUser, role: event.target.value }) : setSelectedUser({ ...selectedUser, role: event.target.value })}><option>Administrator</option><option>Manager</option><option>Receptionist</option><option>Restaurant Staff</option></select></label>{selectedUser && <div className="account-status"><span>Status</span><strong className={`status-badge ${selectedUser.status.toLowerCase()}`}>{selectedUser.status}</strong></div>}<div className="form-actions">{selectedUser && <button type="button" className="secondary-button" onClick={toggleStatus}>{selectedUser.status === 'Active' ? 'Deactivate' : 'Activate'}</button>}<button type="button" className="secondary-button" onClick={() => { setSelectedUser(null); setShowAddForm(false) }}>Cancel</button><button type="submit" className="primary-button">{showAddForm ? 'Create user' : 'Save changes'}</button></div></form></div></div>}
    </div>
  )
}

export default Users
