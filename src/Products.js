function Products () {
    const Productslist =[
      {
      title: "Paire de gant de cuisine",
      price : "15e",
      isPublished : true,

      title: "Spatule",
      price : "5e",
      isPublished :true,

      title: "Batteur",
      price: "50e",
      isPublished : true,

      title: "Fouet manuel",
      price : "20e",
      isPublished : true
    }
    ]



    return (
     <main>
       {productslist.map((product) => { 
        return (
          <>
          {product.isPublished && (
       <article>
       <h2>{product.title}</h2>
       <p>{product.price}</p>
       </article>
       )}
       </>
           );
        })}
      </main>
    );
  }

export default Products