import React, { useState, useEffect } from 'react';
import itemsData from './items.json'; // Importing the JSON data
import './App.css'; // Assuming you have a CSS file for styling
import { TECollapse, TERipple } from "tw-elements-react";


function App() {
  // State to store the list of all items (loaded from JSON/YAML)
  const [items, setItems] = useState([]);

  // State to store the current search query
  const [searchQuery, setSearchQuery] = useState('');

  // State to store the selected items in the loot list
  const [lootList, setLootList] = useState([]);

  // Load items data from JSON/YAML file (mocked as an empty array for now)
  useEffect(() => {
    setItems(itemsData);
  }, []);

  // Function to handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to add an item to the loot list
  const addItemToLoot = (item) => {
    setLootList([...lootList, item]);
  };

  // Calculate total weight and value of the loot
  const totalWeight = lootList.reduce((acc, item) => acc + item.weight, 0);
  const totalValue = lootList.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="App p-4">
      <header className="py-4">
        <h1 className="text-3xl font-bold">DND Tools</h1>
      </header>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search for items"
          className="p-2 border border-gray-300 rounded"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="mt-4">
        {/* List the items in the loot */}
        {lootList.map((item, index) => (
          <div key={index} className="p-2 border-b border-gray-200">
            {item.name} - Weight: {item.weight}, Value: {item.value}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p>Total Weight: {totalWeight}</p>
        <p>Total Value: {totalValue}</p>
      </div>
    </div>
  );
}

export default App;
