import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CardItem.css';

const PictureSize = ['cards__item__pic-wrap' , 'cards__item__pic-wrap__small', 'cards__item__pic-wrap__medium']
const textFontSize = ['cards__item__text' , 'cards__item__text__small', 'cards__item__text__medium']
const DesFontSize = ['cards_item_text_description' , 'cards_item_text_description__small', 'cards_item_text_description__medium']
const PriceFontSize = ['cards_item_price' , 'cards_item_price__small', 'cards_item_price__medium']

function CardItem(props) {

    const checkPictureSize = PictureSize.includes(props.picWrapSize) ? props.picWrapSize : PictureSize[0];
    const checktextFontSize = textFontSize.includes(props.textSize) ? props.textSize : textFontSize[0];
    const checkDesFontSize = DesFontSize.includes(props.descriptionSize) ? props.descriptionSize : DesFontSize[0];
    const checkPriceFontSize = PriceFontSize.includes(props.priceSize) ? props.priceSize : PriceFontSize[0];

  return (
    <>
        <li className='cards__item'>
            <Link className={props.style} to={props.path}>
                <figure className={checkPictureSize} data-category={props.label}>
                    <img src={props.src} alt='Travel' className='cards__item__img'/>
                </figure>
                <div className='cards__item__info'>
                    <h5 className={checktextFontSize}>{props.text}</h5>
                    <p className={checkDesFontSize}>{props.description}</p>
                    <p className= {checkPriceFontSize}>{props.price}</p>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem;