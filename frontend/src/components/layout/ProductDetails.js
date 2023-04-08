import React, {useEffect} from "react";
import { getProductDetails } from "../../store/actions/productAction";
import { useDispatch, useSelector } from "react-redux"
import Carousel from "react-material-ui-carousel"

const ProductDetails = ({match}) => {
  const dispatch = useDispatch();

  const {product, loading, error} = useSelector(state => state.productDetails);

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id]);
  return (
    <>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {product.images.map((item, i) => (
              <img
                className="CarouselImage"
                key={item.url}
                src={item.url}
                alt={`${i} Slide`}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
