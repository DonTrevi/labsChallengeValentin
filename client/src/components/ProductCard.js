import React from "react";



const ProductCard = (props)=> {


    return (
      <div>
        <img src={props.thumbnail} alt="Imagen de MercadoLibre" />
        <span><h3>{props.title}</h3>
        <p>Stock: {props.available_quantity}</p>
        <span>$$$ {props.currency_id}   {props.price}</span>
        <p>{props.condition}</p>
        </span>
        <hr/>
      </div>

    )

}


export default ProductCard
