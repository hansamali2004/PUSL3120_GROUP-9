function Header({ title, onToggleSidebar }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="mobile-menu-button" type="button" onClick={onToggleSidebar} aria-label="Toggle sidebar">
          ☰
        </button>
        <h1>{title}</h1>
      </div>

      <div className="topbar-actions">
        <button type="button" className="icon-button" aria-label="Search">
          ⌕
        </button>
        <button type="button" className="icon-button" aria-label="Notifications">
          🔔
        </button>

        <div className="user-profile">
          <div className="avatar">AU</div>
          <div>
            <div className="user-name">Admin User</div>
            <div className="user-role">Administrator</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
