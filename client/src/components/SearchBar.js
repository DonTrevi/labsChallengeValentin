import React, {useState} from "react";
import axios from 'axios';
import Catalogo from './Catalogo.js'


//
const SearchBar = ()=> {
  const [keyword, setKeyword] = useState('');
  const [products, setProducts] = useState([]);
  //products => [{...},{...},{...},{...},{...},{...},{...},{...}]

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/api/search?q=${keyword}`)

          if (response.data[0] !== undefined) {
            const recursos = response.data;
            setProducts(recursos)


          } else {
                  alert("Producto no encontrado");
                }

    } catch (e) {
      console.log('ERROR: ', e)

    }



  };






    return (
      <div>
        <p>
          <form onSubmit={handleSubmit}>
            <label>
              <p>
                Busque productos:
                <input
                  type="text"
                  name="name"
                  placeholder='Busque algun producto...'
                  value={keyword}
                  onChange={e => setKeyword(e.target.value)}
                />
                
                <input type="submit" value="Busqueda" />

              </p>

            </label>

          </form>
          <Catalogo products={products} />
        </p>
      </div>

    )

}


export default SearchBar
