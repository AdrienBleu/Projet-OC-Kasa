import { useParams } from "react-router-dom";
import products from "../__mocks__/data.json";
import { Navigate } from "react-router-dom";

import Rating from "../components/Rating";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";
import Slider from "../components/Slider";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  
  if (product) {
  const { title, location, rating, host, equipments, description, pictures } = product;
  return (
    <main className="singleproduct">
      { <Slider slides={pictures} /> }
      <div className="singleproduct__content">
        <div className="singleproduct__informations">
          <h1 className="singleproduct__title">{title}</h1>
          <p className="singleproduct__location">{location}</p>
          <div className="singleproduct__tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="singleproduct__rating-and-host">
          <Rating rating={rating} />
          <Host host={host} />
        </div>
      </div>
      <div className="singleproduct__dropdowns">
        <Collapse title="Description" content={description} />
        <Collapse title="Equipement" content={equipments} />
      </div>
    </main>
  );
}
else {
  return <Navigate to="/error" replace={true} />

}
};

export default SingleProduct;