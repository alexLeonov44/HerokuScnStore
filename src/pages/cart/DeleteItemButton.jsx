import React from 'react'
import styled from 'styled-components';
import s from '../../assets/bin.svg'
const Button = styled.button`
  border:1px solid black;
  cursor:pointer;
  opacity:0.7;

` 
export default function DeleteItemButton({width = 43,height = 43,widthImg=27,heightImg=25 ,product,removeProductInCart}) {
    return (
        <Button onClick={()=>removeProductInCart(product)} style={{width:width,height:height}}>
            <img style={{width:widthImg,height:heightImg}} src={s} alt="Delete button" />
        </Button>
    )
}
