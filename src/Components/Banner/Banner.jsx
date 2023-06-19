import {} from 'react'
import './Banner.css'

function Banner({link, name, discount}) {
      return (
        <div className='bannerContent'>
          <h3>Hello {name}</h3>
          <p>Get free delivery for every <span>${discount}</span> furniture purchased</p>
          <p>Lorem Lorem</p>
          <a href={link}>Products</a>
        </div>
      )
}

export default Banner
