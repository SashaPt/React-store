import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const BestSellers = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products').then((response) => {
      const products = response.data;
      setProducts(products);
    });
  }, []);

  const navigateToProductHandler = (id) => {
    navigate('product/' + id)
  }

  return (
    <div className="bestSeller">
      <h2>Best Sellers</h2>
      <div className="cards">
        {products.map((element) => {
          return (
            <div className="card" key={element.id}>
              <img src={element.image} alt="img" />
              <h4>{element.title}</h4>
              <p className="price">${element.price}</p>
              <button onClick={() => navigateToProductHandler(element.id)}>Show more</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
