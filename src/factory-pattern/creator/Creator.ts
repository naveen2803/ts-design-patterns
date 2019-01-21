import IProduct from '../products/IProduct';

// ABSTRACT Class (should be subclassed and not instantiated)
 class Creator
 {
     doStuff( ):void
     {
         let product:IProduct | null = this.factoryMethod( );
         if(product)
            product.manipulate();
     }

 // ABSTRACT Method (must be overridden in a subclass)
     factoryMethod():IProduct | null
     {
         console.log("Abstract method: must be overridden in a subclass");
         return null;
     }
 }

 export default Creator;
