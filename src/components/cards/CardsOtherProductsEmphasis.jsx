import React, { useContext } from 'react';
import Context from '../../context/Context';
import {CardProduct} from '../'
import './css/CardsOtherProductsEmphasis.css';

function CardsOtherProductsEmphasis() {
  const { database } = useContext(Context);

  return (
    <div className="div-other-products">
      <h3>Veja outros produtos</h3>
      {database.products.map((product, i) =>
        product.categories.some((cat) => cat === 'Para presente') ? (
          <CardProduct key={i} product={product} />
        ) : null,
      )}
    </div>
  );
}

export default CardsOtherProductsEmphasis;