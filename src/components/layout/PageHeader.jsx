function PageHeader({ title, subtitle, actions }) {
  return (
    <div className="page-header">
      <div>
        <p className="eyebrow">Overview</p>
        <h2>{title}</h2>
        {subtitle && <p className="muted-text">{subtitle}</p>}
      </div>

      {actions && <div className="page-actions">{actions}</div>}
    </div>
  )
}

export default PageHeader
