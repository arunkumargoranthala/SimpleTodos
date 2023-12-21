import './index.css'

const TodoItem = props => {
  const {items, DeleteItem} = props
  const {id, title} = items
  const onDelete = () => {
    DeleteItem(id)
  }

  return (
    <li className="list">
      <p>{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
