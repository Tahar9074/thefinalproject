import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import './ProductCard.css'; 

function ProductCard({ el }) {
  const dispatch = useDispatch();

  const Deletehandler = () => {
    dispatch(deleteProduct(el._id));
  };

  return (
    <div>
      {/* Card 1 */}
      <Card
        style={{
          width: '18rem',
          margin: '10px',
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Fiat Palio</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            70dt /jrs
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <Button onClick={Deletehandler}>Delete</Button>
        </CardBody>
      </Card>

      {/* Card 2 */}
      <Card
        style={{
          width: '18rem',
          margin: '10px',
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <Button onClick={Deletehandler}>Delete</Button>
        </CardBody>
      </Card>

      {/* Card 3 */}
      <Card
        style={{
          width: '18rem',
          margin: '10px',
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </CardText>
          <Button onClick={Deletehandler}>Delete</Button>
        </CardBody>
      </Card>
      <Card
        style={{
          width: '18rem',
          margin: '10px',
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <Button onClick={Deletehandler}>Delete</Button>
        </CardBody>
      </Card>
      <Card
        style={{
          width: '18rem',
          margin: '10px',
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <Button onClick={Deletehandler}>Delete</Button>
        </CardBody>
      </Card>
      <Card
        style={{
          width: '18rem',
          margin: '10px',
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <Button onClick={Deletehandler}>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProductCard;

