import React, { Fragment,  useState } from "react";
import ProductCard from "./ProductCard.js";

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


const Catalogo = (props) => {

    var [orderBy, setOrderBy] = useState("");
    var [estadoProducto, setEstadoProducto] = useState("new");
    var [allProducts, setAllProducts] = useState(props.products);


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


    const esNuevo = () => item => {return item.condition === "new"}

    const esUsado = () => item => {return item.condition === "used"}

    const sonTodos = () => item => {return item}


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
                {props.products.sort(sortF).filter(estadoProducto && estadoProducto==='new'?esNuevo():esUsado()).map((item) => {
                    return (
                        <ProductCard
                            title={item.title}
                            price={item.price}
                            currency_id={item.currency_id}
                            available_quantity={item.available_quantity}
                            thumbnail={item.thumbnail}
                            condition={item.condition}
                        />
                    );
                })}

            </div>
        </Fragment>
    )

}

export default Catalogo
