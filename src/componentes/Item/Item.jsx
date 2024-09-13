import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3> {nombre} </h3>
        <p>Precio: {precio} </p>
        <p>ID: {id} </p>
        <Link to={`/item/${id}`} className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver Detalles</Link>
    </div>
  )
}

export default Item