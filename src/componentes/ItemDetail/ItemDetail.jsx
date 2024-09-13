import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img,detalle}) => {

  return (
    <div className="container text-center" id='General' >
    <div className="row align-items-start">
      <div className="col" id='contenedorItem'  >
          <h2>Nombre: {nombre} </h2>
          <h3>Precio {precio} </h3>
          <h3>ID: {id}</h3>
          <p>{detalle}</p>
      </div>
      <div className="col">
        <img src={img} alt={nombre} />
      </div>      
    </div>
  </div>

  )
}

export default ItemDetail