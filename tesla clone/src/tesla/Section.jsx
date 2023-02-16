import React from 'react'

// TEMPLATE LITERAL 

function Section(props) {
  // const photo = {
  //   backgroundImage: 'url(images/' + props.background + ')',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundAttachment: 'scroll',
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover'
  // }

  const photo = {
    backgroundImage: `url(images/${props.background})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }

  return (
    <section style={photo}>
      <div className="carName">
        <h1>{props.name}</h1>
        <p>{props.tagline}</p>
      </div>
      <div className="cta">
        <div className="buttons">
          <a href="">{props.leftBtn}</a>
          {
            props.rightBtn && <a href="">{props.rightBtn}</a>
          }
        </div>
        {
          props.arrow && <img src="images/down-arrow.svg" alt="" />
        }
        
      </div>
    </section>
  )
}

export default Section