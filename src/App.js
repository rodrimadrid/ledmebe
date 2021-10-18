import './App.css';
import CartContext from "./context/Context.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import Cart from './components/Cart.js'
function App() {
  return (
    <CartContext>
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path = '/'>
           <ItemListContainer marca = 'Led Me Be'/>
          </Route>
          <Route exact path = '/category/:id'>
           <ItemListContainer marca = 'Led Me Be'/>
          </Route>
          <Route exact path = '/item/:id'>
           <ItemDetailContainer/>
          </Route>
          <Route exact path = '/cart'>
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
    </CartContext>
  );
}

export default App;

/* 
 import React, { useEffect, useState } from 'react';
 import { getFirestore } from './firebase'
const App = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
      setLoading(true);
      const db = getFirestore();
      const itemCollection = db.collection("items");
      itemCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0) {
          console.log(‘No Hay resultados’);
        }
        setItems(querySnapshot.docs.map(doc => doc.data()));
      }).catch((error) => {
        console.log(“Error al traer los items”, error);
      }).finally(() => {
        setLoading(false);
      })
    }, []);
    return (
    <>
      <div>{loading && <p>Cargando Informacion...</p>}</div>
      {!loading &&
        <ul key={item.categoryId}>
          <li key={item.categoryId}>{item.categoryId}</li>
          <li key={item.description}>{item.description}</li>
          <li key={item.imageId}>{item.imageId}</li>
          <li key={item.price}>{item.price}</li>
          <li key={item.stock}>{item.stock}</li>
          <li key={item.title}>{item.title}</li>
        </ul>
      }
    </>
  )
export default App; */