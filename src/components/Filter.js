import React from "react";

function Filter({ onCategoryChange, search, setSearch }) {
  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="Filter">
      <input
        onChange={handleSearch}
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
