/* eslint-disable prettier/prettier */
// TodoItem.js
import './index.css';

const TodoItem = (props) => {
  const { items, deleteItem, editItem, saveItem } = props;
  const { id, title, editing } = items;

  const onDelete = () => {
    deleteItem(id);
  };

  const onEdit = () => {
    editItem(id);
  };

  const onSave = (event) => {
    event.preventDefault();
    const updatedText = event.target.updatedText.value;
    saveItem(id, updatedText);
  };

  return (
    <li className="list">
      {editing ? (
        <form onSubmit={onSave}>
          <input type="text" name="updatedText" defaultValue={title} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <p>{title}</p>
          <button type="button" onClick={onEdit}>
            Edit
          </button>
        </>
      )}
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
