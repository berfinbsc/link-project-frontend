import React, {useState} from 'react'
import axios from 'axios';
const Link = () => {


const [longlink,setLongLink]=useState('');
const [shortlink,setShortLink]=useState('');

const handlePostRequest=()=>{
  const data={
    longlink:longlink, 
    darvinlink:shortlink 
  }

  axios.post('https://zetacoder.rocks/darvinapi/darvinberfin/create', data) // !!! benim yayinladigima baglan
  .then(response=>{
    console.log(response.data); // burda logluyo iste !! vermesi lazim
  })
  .catch(error =>{
    console.log('post hatası',error);
  })


}
    return (
      <div>

<div class="ui container">

 <div>
    <h1 size='huge'>Link Kısaltma</h1>
  
  </div>


<div class="ui input">
  <input type="text" value={longlink} placeholder="http://" onChange={(e) => setLongLink(e.target.value)} />
</div>

<label>
  Bağlantıyı Özelleştir
</label>

<div class="ui input">
  <input type="text" value={shortlink} onChange={(e) => setShortLink(e.target.value)}/>
</div>


<button class="ui button" onClick={handlePostRequest}>
  Kısalt
</button>


</div>

       


      </div>
    )
  
}
export default Link;