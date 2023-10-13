import React from 'react'
import './main.css'



function Main() {





  return (
    <div>
        <div id='section1' className='about-section-container'>
    
            <p className='studio-container'>St<span className='u-container'>u</span>dio</p>
            <div className='background-image'></div>
            <p className='benoy-container'>BENOY</p> 
            <p className='international'>International Architecture, Masterplanning, <br/> Interior and Graphic Design Studio</p>
        </div>
        <div className='blur-section'>
            <p>DESIGN, <br/>
                 LANDING <br/>
                  LANDSCAPE</p>
        </div>
        <div className='blur-section-right'>
            <p>
                ARC <br/>
                BUIL
            </p>
        </div>
        <div  className='text-container'>
            <ul>
                <li>About</li>
            </ul>
            <div className='abzac'>

                <h1>In our design work we aim to meet the needs and aspiration of local people.</h1>
                <p className='left-text'>

With a focus on agile, flexible, and experiential design, we tailor our thinking to the needs of the people who live in, work in, and use the destinations we create. We leverage our understanding of global trends, local cultures and client needs to create memorable destinations that deliver economic, social and sustainable value. We've been doing this for 75 years-the past 25 at a global level. And we'll continue doing it long into the future.</p>
<p className='right-text'>


Unconstrained by sectoral parameters, building formats, head office agendas or egos, we focus on agile, flexible, and experiential design. Design that is tailored to the needs of the people who live in, work in, and use the destinations we create.
</p>
       
            </div>
        </div>
        <section className='img-container'>
            <div className='img-three'></div>
            <div className='img-two'></div>
            <p className='text-left-img'>Transforming the world we live in</p>
        </section>
        <div className='img-container-expertise'>
                <div className='img-container-left-one'></div>
                <div className='img-container-right-two'></div>
            </div>
        <section id='section2' className='expertise-container'>
            <p className='expertise-name'>EXPERTISE</p>
      

            <ul className='expertise-ul'>
                <li>Urban Design <span className='dujki'>(32)</span></li>
                <li>Architecture and Buildings <span className='dujki'>(73)</span></li>
                <li>Interior Design <span className='dujki'>(61)</span></li>
            </ul>
        </section>
      
    </div>
  )
}

export default Main