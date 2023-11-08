function Products () {
    const Productslist = ["Un rouleau à pâtisserie", "Une spatule" , "Une paire de gant de cuisine"];


    return (
     <main>
       {productslist.map((product) => { 
        return (
       <article>
       <h2>{product}</h2>
       </article>
           );
        })}
      </main>
    );
  }

export default Products