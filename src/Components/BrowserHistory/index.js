import './index.css'

const BrowserHistoryItem = props => {
  const {eachItem, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const deleteItem = () => {
    onDelete(id)
  }
  return (
    <li className="item">
      <div className="app-details">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="app-logo" />
        <p className="title">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button onClick={deleteItem} type="button" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default BrowserHistoryItem
