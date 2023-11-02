import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteproduct, get_byId, get_product } from '../../JS/Action/ActionProduct';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductCard({product}) {
  const user=useSelector((state)=>state.userReducer.user  )
  const dispatch=useDispatch()
  const handleDeleteProduct = async (_id) => {
    try {
      await dispatch(deleteproduct(_id));
      await dispatch(get_product());
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };


  return (


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.PostUrl}/>
      <Card.Body>
        <Card.Title>{product.Title}</Card.Title>
        <Card.Text>
        {product.Descrption}
        </Card.Text>
        <Card.Text> {product.Rate}
        </Card.Text>
        <Card.Text>
        {product.Trailer}
        </Card.Text>
        <Link to={`/Details/${product._id}`}>  <Button onClick={()=>dispatch(get_byId(product._id))} >Go film</Button></Link>  
        <Button variant="primary" onClick={() =>handleDeleteProduct(product._id)}>delete</Button>

      </Card.Body>
    </Card>
  );
}

export default ProductCard;