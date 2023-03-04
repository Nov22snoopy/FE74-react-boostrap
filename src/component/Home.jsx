import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Carousel from './Carousel'
import Card from './Card'
import 'bootstrap-icons/font/bootstrap-icons.css';
import RedCar from './photo/red-car.jpg'
import BlackCar from './photo/black-car.jpg'
import SilverCar from './photo/silver-car.jpg'
import SteelCar from './photo/steel-car.jpg'


export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='container'>
          <Carousel/>
          <div className='row'>
            <div className='col-lg-6 col-xxl-3 mb-5'>
              <Card img = {RedCar}/>
            </div>
            <div className='col-lg-6 col-xxl-3 mb-5'>
              <Card img = {BlackCar}/>
            </div>
            <div className='col-lg-6 col-xxl-3 mb-5'>
              <Card img = {SilverCar}/>
            </div>
            <div className='col-lg-6 col-xxl-3 mb-5'>
              <Card img = {SteelCar}/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
