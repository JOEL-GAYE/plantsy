import React from 'react';

export default function PlantList({ plants }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  // Handle search input change
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  // Filter plants based on search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="plant-list">
      <h2>Search Plants:</h2>
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="card-container">
        {filteredPlants.map((plant, index) => (
          <div key={index} className="card">
            <h3>{plant.name}</h3>
            <img src={plant.image} alt={plant.name} />
            <p>${plant.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
