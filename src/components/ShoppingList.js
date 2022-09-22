import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleNewItem }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("Produce");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  const searchItems = itemsToDisplay.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        newName={newName}
        setNewName={setNewName}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        handleNewItem={handleNewItem}
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        search={search}
        setSearch={setSearch}
      />
      <ul className="Items">
        {searchItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
