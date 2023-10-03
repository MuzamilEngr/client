import React from 'react';
import { Icon } from '@iconify/react';
import Services from '../components/Services';
import { data } from '../Data';

const index = () => {
  return (
    <div className='container1'>
      <nav className="nav">
        <ul className="lists">
          <li className='lists_items'>Home</li>
          <li className='lists_items'>Services</li>
          <li className='lists_items'>Gift Cards</li>
          <li className='lists_items'>Contact</li>
          <li className='list_number'>8 400 324 123</li>
        </ul>
      </nav>
      <header className="nav">
        <ul className="lists2">
          <li className='header_list'>Arnbnb</li>
          <li className='header_list'>DayCare</li>
          <li className='header_list'>Home</li>
          <li className='header_list'>Office</li>
          <li className='header_list'>Construction</li>
          <li className='header_list'>Move in/out</li>
          <li className='header_list2'>Carpet</li>
        </ul>
      </header>
      <main className='main'>
        <div className="">
          <p className='main_para'>Provider of <span className='text_blue'>deep</span> <br /> <span className='text_blue'>cleaning</span> according to <br />your needs</p>
          <p className='para_1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vivamus massa netus faucibus ante.</p>
          <div className="flex">
            <button className='btn_1'>Get a Quote</button>
            <button className='btn_2'>Call Us</button>
          </div>
          <div className="rating">
            <div className="rating_container">
              <Icon className='text-lg' icon="ic:round-star" color="yellow" />
              <Icon className='text-lg' icon="ic:round-star" color="yellow" />
              <Icon className='text-lg' icon="ic:round-star" color="yellow" />
              <Icon className='text-lg' icon="ic:round-star" color="yellow" />
              <Icon className='text-lg' icon="ic:round-star" color="yellow" />
            </div>
            <span className='text_gray'>rated 4.9 uot by 200 clients on</span>
            <Icon className='text-lg ml-2' icon="devicon:google" color="yellow" />
            <span className='text-gray-400 ml-2'>and</span>
            <Icon icon="devicon:facebook-original" color="yellow" />
            <img style={{ marginLeft: '.5rem' }} className='' src="images/Vector.png" alt="" />
          </div>
        </div>
        <div style={{ height: '30rem', maxWidth: '30rem', marginLeft: '2rem' }}>
          <p className='circle_1'></p>
          <img src="images/person.png" className='person_img' alt="" />
          <p className='circle_2'></p>
        </div>
      </main>
      {/* services components */}
      <div className="center">
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }} className="">Our Services</h1> <br />
      </div>
      <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem', flexDirection: 'column' }}>
        <div className="services" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6rem' }}>
          {data?.slice(0, 4).map((item, index) => (
            <Services key={item.id} img={item.img} title={item.title} desc={item.desc} style={{ gridColumn: index >= 4 ? '2 / 4' : 'auto' }} />
          ))}
        </div>

      </div>
      <div className="center">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6rem' }}>
          {data?.slice(4, 7).map((item, index) => (
            <Services key={item.id} img={item.img} title={item.title} desc={item.desc} style={{ gridColumn: index >= 4 ? '2 / 4' : 'auto' }} />
          ))}
        </div>
      </div>
      <div className="center" style={{ marginTop: '2rem' }}>
            <button className='btn_1'>Get a Quote</button>
            <button className='btn_2'>Call Us</button>
          </div>
    </div>
  );
};

export default index;
