import React from 'react'
import data from './list.json'
import moment from 'moment';
import { render } from 'react-dom';


function App() {
  return (
    <div>
      <header>
        <link rel="stylesheet" href="index.css" />
        <title>aCommerce</title>
      </header>
      <body>
        <div className="grid-container">
          <header className="header">
            <img className="logo-image" src='/Logo.png'/>;
          </header>
          <main className="main">
            <div className="content">
              <ul className="products">
              <List/>
              </ul>
            </div>
          </main>
          <footer>
          </footer>
        </div>
      </body>
    </div>
  );
}

function List () {
  let product = data.map((product) =>{
    // 
    let now = moment(new Date())
    let end = product.created_at
    let duration = moment.duration(now.diff(end))
    let days = duration.asDays().toFixed(0)
    let rating = product.vote
    let item = []

    for (let i = 0;i<rating;i++){
      item.push(<span class="fa fa-star checked"></span>)
    }
    
    return (
      <li className="products li">
        <div>
          <img className="product-image" src={product.image_url} width="100%"/>
          <div className="product-title">{product.title}</div>
          <div className="product-created"> {days} days ago</div>
          <div className="product-vote">{item}</div>
          <div className="product-price">฿{product.price.toFixed(2)}</div>
        </div>
      </li>
    )
  }) 
  return product;
}

export default App;
