import React, { useState } from 'react'
import './Product.css'
import Footer from './Footer';

const PRODUCT_LIST = [
  {
    id: '1',
    title: 'Product One',
    productAvatar: 'https://codyhouse.co/app/assets/img/wiz-form-img-1.jpg',
    productDis: 'Lorem ipsum dolor sit, amet consectetur',
  },
  {
    id: '2',
    title: 'Product Two',
    productAvatar: 'https://codyhouse.co/app/assets/img/wiz-form-img-2.jpg',
    productDis: 'Lorem ipsum dolor sit, amet consectetur',
  },
  {
    id: '3',
    title: 'Product Three',
    productAvatar: 'https://codyhouse.co/app/assets/img/wiz-form-img-3.jpg',
    productDis: 'Lorem ipsum dolor sit, amet consectetur',
  },
  {
    id: '4',
    title: 'Product Four',
    productAvatar: 'https://codyhouse.co/app/assets/img/wiz-form-img-4.jpg',
    productDis: 'Lorem ipsum dolor sit, amet consectetur',
  }

]

function Product() {
  const [products, setProducts] = useState(PRODUCT_LIST);


  return (
    <>
      <div className='container' >
        <header>
          <div className="row justify-content-center">
            <div className="col-md-4">
            <p className="fw-light text-secondary d-none d-md-block">Step 2</p>
              <p className="fw-light text-secondary d-block d-md-none">Step 2 of 3</p>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h2 className="fw-bold accountHead">Product</h2>
            </div>
            <div className="col-md-4"></div>
          </div>
        </header>
        <main>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <p className='fw-light text-secondary mt-4'>Select a Product:</p>
            </div>
            <div className="col-md-4"></div>
          </div>
          <form>
            <div className="row justify-content-center">
              <div className="col-12 col-md-4">
                <input type="radio" name="product" id="1" className='hide-box' />
                <label htmlFor="1" className='lbl-radio'>
                  <div className="card display-box">
                    <img className='card-img-top' src={products[0].productAvatar} alt={products[0].title} />
                    <div className="card-body">
                      <h5 className="card-title">{products[0].title}</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </div>
                </label>
              </div>
              <div className="col-12 col-md-4">
                <input type="radio" name="product" id="2" className='hide-box' />
                <label htmlFor="2" className='lbl-radio'>
                  <div className="card display-box">
                    <img className='card-img-top' src={products[1].productAvatar} alt={products[1].title} />
                    <div className="card-body">
                      <h5 className="card-title">{products[1].title}</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="row justify-content-center mb-0">
              <div className="col-12 col-md-4">
                <input type="radio" name="product" id="3" className='hide-box' />
                <label htmlFor="3" className='lbl-radio'>
                  <div className="card display-box">
                    <img className='card-img-top' src={products[2].productAvatar} alt={products[2].title} />
                    <div className="card-body">
                      <h5 className="card-title">{products[2].title}</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </div>
                </label>
              </div>
              <div className="col-12 col-md-4">
                <input type="radio" name="product" id="4" className='hide-box' />
                <label htmlFor="4" className='lbl-radio'>
                  <div className="card display-box">
                    <img className='card-img-top' src={products[3].productAvatar} alt={products[3].title} />
                    <div className="card-body">
                      <h5 className="card-title">{products[3].title}</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </form>
        </main>
      </div>
      <Footer showBack={true} pageNumber={'2'} next={'Next'} icon={'→'} prevPage={"/"} nextPage={"/contact"}  progress={'66.666%'}/>
    </>
  );
}

export default Product;