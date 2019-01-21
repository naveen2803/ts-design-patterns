import IProduct from './IProduct';

class Product1 implements IProduct
{
    manipulate(): void {
        console.log("Doing stuff with Product1");
    }
}

export default Product1;
