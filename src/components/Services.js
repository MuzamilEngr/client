import React from 'react'

const Services = ({img, title, desc}) => {
  return (
    <div className='relative' style={{margin: '2rem', maxWidth: '10rem', height: '24rem', width: '100%', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img className='' style={{width: '100%', maxWidth: '7rem', }} src={img ? img : 'images/dcare.png'} alt="daycare" />
        <p className='' style={{fontSize: '1.5rem', fontWeight: 'bold', width: '13rem' ,paddingLeft: '2.5rem'}}>{title} <br /> cleanings</p>
        <p style={{fontSize: '.8rem', width: '18rem',height: '7rem' ,marginTop: '.3rem', textAlign : 'center'}}>{desc}</p>
        <button style={{marginTop: '1.5rem',marginLeft: '.5rem' ,backgroundColor: '#C7DE44', color: 'white', width: '8rem' ,padding: '.5rem', borderRadius: '.2rem', textAlign: 'center', position: "absolute", bottom: '0',}}>Learn More</button>
    </div>
  )
}

export default Services