'use strict'
const container = document.getElemenById('root');
      const root = reactDom.createRoot(container);
      root.render(<App/>);

      function App() {
         return (
            <section className='game'>
               <ul className="cards">
                  <CardWord/>
                  <CardImage url="img/photo-card-5.jpg"/>
                  <CardImage url="img/photo-card-6.jpg"/>
                  <CardImage url="img/photo-card-1.jpg"/>
                  <CardWord/>
                  <CardWord/>
                  <CardWord/>
                  <CardWord/>
                  <CardWord/>
                  <CardImage url="img/photo-card-2.jpg"/>
                  <CardImage url="img/photo-card-3.jpg"/>
                  <CardImage url="img/photo-card-4.jpg"/>
                  </ul>
               </section>
            );
         }