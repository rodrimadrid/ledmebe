import firebase from 'firebase/compat/app';

// funcion para generar orden
export  const createOrder = (collection, order, setID)=>{
         collection.add(order).then(({ id }) => {
            setID(id)
        }).catch((error) => {
            console.log("Error al realizar compra", error);
      })
    }
// funcion para actualizar stock en firestore
export  const updateStock = (collection, list, batch, listTo) => {
    collection.where(firebase.firestore.FieldPath.documentId(), 'in', list.map(i => i.id))
    .get()
    .then((query)=>{

        query.docs.forEach((docSnapshot, idx) => {
         if (docSnapshot.data().stock >= list[idx].quantity) {
            batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - list[idx].quantity })
        }else{
            listTo.push({...docSnapshot.data(), id: docSnapshot.id})
        }
        })
          if (listTo.length === 0) {
            batch.commit().then(r => r)
        }
    })
    }

//funcion para scroll automatico al alert de orden/error 
export  const scrollear = (param)=>{
       const position = document.querySelector(param).offsetTop;
            window.scrollTo(0, position)
    }


 