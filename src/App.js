import logo from './logo.svg';
import './App.css';
import Header from './componets/Header';
import Form from './componets/Form';
import PlantList from './componets/PlantList';
import { useState } from 'react';


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const[plants, setPlants]= useState([
     
      {
        id: 1,
        name: "Aloe",
        Image: "/Images/aloe.jpg",
        price: 15.99,
      },
      {
        id: 2,
        name: "ZZ Plant",
        image: "/images/zz-plant.jpg",
        price: 25.98,
      },
      {
        id: 3,
        name: "Pilea peperomioides",
        image: "./images/pilea.jpg",
        price: 5.99,
      },
      {
        id: 4,
        name: "Pothos",
        image: "./images/pothos.jpg",
        price: 12.11,
      },
      {
        id: 5,
        name: "Jade",
        image: "./images/jade.jpg",
        price: 10.37,
      }
      

  ]);
  

  function handleAddPlants(newPlant){
      setPlants([...plants,newPlant])
  }
  return (
    <div>
      <h1>Plantsy 🌱</h1>
      
      <Form onAddPlant={handleAddPlants}/>
      <PlantList plants={plants}/>
      
      
    </div>
  );
}

export default App;
