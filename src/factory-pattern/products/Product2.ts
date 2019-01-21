import IProduct from './IProduct';

class Product2 implements IProduct
{
    manipulate(): void {
        console.log("Doing stuff with Product2");
    }
}

export default Product2;
