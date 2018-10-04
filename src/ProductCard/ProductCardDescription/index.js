import React from 'react';

import './styles.scss';

class ProductCardDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      productName,
      description,
      rating,
      buttonLabel,
      buttonClass,
      url
    } = this.props;

    return (
      <div className='product-card-description-box'>
        <div className='product-card-name'>
	  {productName}
	</div>
        <p className='product-card-description'>
	  {description}
	</p>
        <div className='product-card-row'>
          <a className={buttonClass ? butonClass : 'buy-button'} href={url}>{buttonLabel ? buttonLabel : 'Buy now'}</a>
	</div>
      </div>
    );
  }
}

export default ProductCardDescription;
