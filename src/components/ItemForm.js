import React from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm({
  newName,
  setNewName,
  newCategory,
  setNewCategory,
  setArray,
  handleNewItem,
}) {
  function handleNewName(event) {
    setNewName(event.target.value);
  }

  function handleNewCategory(event) {
    setNewCategory(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: newName,
      category: newCategory,
    };
    handleNewItem(newItem);
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newName}
          onChange={handleNewName}
        />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewCategory}>
          <option value={newCategory}>Produce</option>
          <option value={newCategory}>Dairy</option>
          <option value={newCategory}>Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
