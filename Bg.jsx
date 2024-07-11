import React from 'react';
import './Bg.css'; 
import bgimage from './bg-removebg-preview.png'
function BackgroundChanger() {
  const changeBg = (clr) => {
    document.body.style.backgroundColor = clr;
      if (clr=== '#ffffff'){
        document.getElementById('par').style.color = 'black';
      }
    if (clr === '#000000') {
      document.getElementById('par').style.color = 'white';
      // document.getElementById('about').style.color = 'green';
      document.getElementById('main').style.color = 'green';
    }
  };

  return (
    <div>
      <h1 id="main">Click here to change the Background-Color 👇</h1>
      <div id="color-switch" className="color-switch-container">
        <span className="btn" id="white" onClick={() => changeBg('#ffffff')}></span>
        <span className="btn" id="aqua" onClick={() => changeBg('#7fffd4')}></span>
        <span className="btn" id="violet" onClick={() => changeBg('#ce9aff')}></span>
        <span className="btn" id="black" onClick={() => changeBg('#000000')}></span>
        <span className="btn" id="Green" onClick={() => changeBg('#6BFF33')}></span>
        <span className="btn" id="red" onClick={() => changeBg('#FF3333')}></span>
        <span className="btn" id="blue" onClick={() => changeBg('#3F33FF')}></span>
        <span className="btn" id="yellow" onClick={() => changeBg('#E6FF33')}></span>
      </div>
      <img src= {bgimage} alt="" className="background-image" />

      <p id="par">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, nisi, est
        totam adipisci deleniti recusandae sint velit sunt dolor id, quisquam
        voluptate! Ipsam expedita autem minima! Quia, dolores. Eum ad voluptas
        recusandae pariatur aliquid ipsam numquam unde voluptate itaque, tenetur
        quia architecto perferendis, voluptatem nulla ea incidunt impedit ullam.
        Tempore fugit voluptate nihil omnis iure similique pariatur odio nesciunt
        nam! Doloremque explicabo quos libero impedit doloribus nihil quis fugiat
        ab natus illo nulla, id, aperiam est cupiditate dolores quod maxime
        eveniet temporibus quidem! Sint, voluptatem voluptates doloremque
        temporibus nemo itaque ducimus ab harum odio omnis laborum, vitae illum
        accusantium? Labore, quis! Quaerat libero amet architecto sapiente non
        aliquid incidunt aut, molestias eveniet laboriosam, provident officia, ea
        nesciunt voluptate? Eum modi unde distinctio iste odio harum sed
        architecto dolorem omnis quisquam. Suscipit molestias tenetur sunt
        assumenda laudantium porro voluptas hic, doloremque similique temporibus,
        natus atque dolor cumque eum, nisi unde dolorem corporis? Sequi iusto
        similique animi earum deserunt enim, alias id est beatae asperiores?
        Obcaecati, veniam pariatur officiis harum magni voluptas eaque tempore!
        Debitis ratione quaerat soluta? Harum ut ea obcaecati! Velit tempora ut
        cumque fugit hic sed eum illum deserunt quaerat recusandae. Aperiam
        cupiditate dolorem est natus numquam ipsum nihil molestiae iste quam
        officiis perspiciatis adipisci inventore velit veniam magni, tempora odio.
        Atque itaque quidem maxime consectetur exercitationem repellat quos
        commodi fuga porro fugiat, dolores voluptatem autem quisquam tempore iste
        at laboriosam totam? Iste consequatur repudiandae, molestias accusamus
        ipsam officia commodi cumque adipisci doloribus tenetur ducimus beatae
        nihil magnam facere itaque laborum amet aut facilis laboriosam magni
        mollitia in? Est architecto, totam facilis quisquam, nulla adipisci odio
        earum cumque reiciendis in, laudantium eos exercitationem tenetur
        consequatur modi incidunt ea soluta nostrum beatae
      </p>
    </div>
  );
}

export default BackgroundChanger;
