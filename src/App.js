import React, { useEffect, useState } from 'react';
import { getFirestore } from './firebase'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartContext from "./context/Context.js";
import Inicio from './components/Inicio/Inicio.js';
import NavBar from './components/NavBar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Cart from './components/Cart/Cart.js' 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
      setLoading(true);
      const db = getFirestore();
      const itemCollection = db.collection("Productos");
      itemCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0) {
          console.log("No Hay resultados");
        }
        
        setProducts(querySnapshot.docs.map(doc => {
          return{id: doc.id, ...doc.data()} 
          }));
        
      }).catch((error) => {
        console.log("Error al traer los products", error);
      }).finally(() => {
        setLoading(false);
      })
    }, []);
      
    return (
    <>
      <div>{loading && <p>Cargando Informacion...</p>}</div>
      {!loading &&
        <CartContext>
          <Router>
            <div className="App">
              <NavBar />
              <Switch>
                <Route exact path={'/ledmebe'}> 
                  <Inicio />
                </Route>
                <Route exact path = '/'>
                  <Inicio />
                </Route>
                <Route exact path = '/productos'>
                <ItemListContainer
                   products = {products}/>
                </Route>
                <Route exact path = '/category/:id'>
                <ItemListContainer
                   products = {products}/>
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
      }
    </>
  )
  }
export default App; 