import firebase from 'firebase/compat/app';


export  const createOrder = (collection, order, setID)=>{
         collection.add(order).then(({ id }) => {
            setID(id)
        }).catch((error) => {
            console.log("Error al realizar compra", error);
      })
    }
export  const updateStock = (docRef, stockPrevio, cantidadAComprar) => {
         const newStock = docRef.update({
            stock: stockPrevio - cantidadAComprar
         })
    }



export  const scrollear = (param)=>{
       const position = document.querySelector(param).offsetTop;
            window.scrollTo(0, position)
    }


 