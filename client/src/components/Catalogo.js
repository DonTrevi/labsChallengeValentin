/*                      client/src/components/Catalogo.js                    */
import React, { Fragment,  useState } from "react";
import ProductCard from "./ProductCard.js";
import ReactPaginate from 'react-paginate';
import styles from './Catalogo.css'

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


const Catalogo = (props) => {

    var [allProducts, setAllProducts] = useState(props.products);
    var [orderBy, setOrderBy] = useState("");
    var [estadoProducto, setEstadoProducto] = useState("new");
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 30
    const pageVisited = pageNumber * productsPerPage
    const esNuevo = () => item => {return item.condition === "new"}
    const esUsado = () => item => {return item.condition === "used"}
    const newProducts = props.products.slice(pageVisited, pageVisited + productsPerPage)

    var sortF = () => {}

        switch (orderBy) {
            case 'menorMayor':
                sortF = (a, b) => {
                    if (a.price < b.price) {
                        return -1
                    }
                    if (a.price > b.price) {
                        return 1
                    }
                    return 0
                }
                break;
            case 'mayorMenor':
                sortF = (a, b) => {
                    if (a.price < b.price) {
                        return 1
                    }
                    if (a.price > b.price) {
                        return -1
                    }
                    return 0
                }
                break;
            default:
                break;
        }


    const displayProducts = newProducts.sort(sortF).filter(estadoProducto === "new" ? esNuevo() : esUsado()).map(product => {
      return (
          <ProductCard
              title={product.title}
              price={product.price}
              currency_id={product.currency_id}
              available_quantity={product.available_quantity}
              thumbnail={product.thumbnail}
              condition={product.condition}
          />
      );
    })


    const pageCount = Math.ceil(props.products.length / productsPerPage)

    const changePage = ({selected}) => {
      setPageNumber(selected)
    }






    return (
        <Fragment>
            {" "}
            <div>Catalogo</div>

                     <div>
                     <span>Ordenar:
                     <select id='precio' name="precio">
                       <option>por precio...</option>
                           <option value="mayorMenor" onClick={() =>{setOrderBy ('mayorMenor')}}>De mayor a menor precio</option>
                           <option value="menorMayor" onClick={() =>{setOrderBy ('menorMayor')}}>De menor a mayor precio</option>
                     </select>
                     <select id='precio' name="precio">
                       <option>por condición...</option>
                       <option value="new" onClick={() =>{setEstadoProducto ("new")}}>Productos nuevos</option>
                       <option value="used" onClick={() =>{setEstadoProducto ("used")}}>Productos usados</option>
                     </select>
                     </span>
                    </div>
            <div>
                {displayProducts}
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}

                />

            </div>
        </Fragment>
    )

}

export default Catalogo
