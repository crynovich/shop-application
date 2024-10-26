// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.scss';

import { Products } from './products/products';
import { productsService } from './products/products.service';
import { Product } from './products/products.models';

export function App() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    productsService.getProducts().then((data) => {
      setData(data);
      console.log({ data });
    });
  }, []);

  return <Products products={data} />;
}

export default App;
