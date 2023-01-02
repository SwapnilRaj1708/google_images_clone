import React, { useContext } from 'react'
import './Image.css'
import { SearchContext } from '../contexts/SearchContext'


export default function Image(props) {

  const { search } = useContext(SearchContext)

  function loadImage(url) {
    const imgSrc = url
    const img = new Image();
    img.src = imgSrc;
    img.onload = function () {
      // console.log('Width: ' + img.width + " Height: " + img.height);
    }
  }

  return (

    <div className="item-container">
      <img onLoad={() => { loadImage(props.value.urls.small) }} src={props.value.urls.small} alt={props.value.alt_description} className='item' />
      <div className="desc">{props.value.description ? props.value.description : (props.value.alt_description ? props.value.alt_description : search)}</div>
    </div>
  )
}
