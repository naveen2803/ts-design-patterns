import Creator from './Creator';
import Product1 from '../products/Product1';
import IProduct from '../products/IProduct';

class CreatorA extends Creator
{
    factoryMethod():IProduct
    {
        console.log("Creating product 1");
        return new Product1( ); // returns concrete product
    }
}

export default CreatorA;
