import Creator from './Creator';
import Product2 from '../products/Product2';
import IProduct from '../products/IProduct';

class CreatorB extends Creator
{
    factoryMethod():IProduct
    {
        console.log("Creating product 2");
        return new Product2(); // returns concrete product
    }
}

export default CreatorB;
