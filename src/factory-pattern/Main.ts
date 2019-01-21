import Creator from './creator/Creator';
import CreatorA from './creator/CreatorA'
import CreatorB from './creator/CreatorB'

class Main {
    constructor() {
        // instantiate concrete creators
        var cA:Creator = new CreatorA( );
        var cB:Creator = new CreatorB( );
        // creators operate on different products
        // even though they are doing the same operation
        cA.doStuff( );
        cB.doStuff( );
    }
}

export default Main;
