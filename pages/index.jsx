import React from 'react'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
const index = () => {
  const requestjson = () => {
    fetch('api/hello').then(res => res.json()).then(data => console.log(data))
  }
  return (
    <div>
      <h1>This is home page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsum quos similique beatae, corrupti quia mollitia, dolores distinctio accusantium nobis animi enim dolor alias expedita aspernatur temporibus, aliquid quasi inventore?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsum quos similique beatae, corrupti quia mollitia, dolores distinctio accusantium nobis animi enim dolor alias expedita aspernatur temporibus, aliquid quasi inventore?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsum quos similique beatae, corrupti quia mollitia, dolores distinctio accusantium nobis animi enim dolor alias expedita aspernatur temporibus, aliquid quasi inventore?</p>
      <button onClick={requestjson}>Request Json</button>
    </div>
  )
}

export default index
