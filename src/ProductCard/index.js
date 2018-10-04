import React from 'react';

import Card from '../Card';
import ProductCardDescription from './ProductCardDescription';
import ProductCardGallery from './ProductCardGallery';
import PriceTag from './PriceTag';

import './styles.scss';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      photos,
      price,
      productName,
      description,
      rating,
      url,
      buttonLabel,
      buttonClass
    } = this.props;

    return (
      <Card
        className='product-card'
      >
        <ProductCardGallery
          photos={photos}
        />
        <PriceTag
          price={price}
        />
        <ProductCardDescription
          productName={productName}
          description={description}
          rating={rating}
          url={url}
          buttonLabel={buttonLabel}
          buttonClass={buttonClass}
        />

      </Card>
    );
  }
}

export default ProductCard;
