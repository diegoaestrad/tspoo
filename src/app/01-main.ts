import axios from 'axios'

(async() => {

  async function getProductsAsync(){
    const rta = await axios.get('http://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  const products = await getProductsAsync();
  console.log(products);

})();
