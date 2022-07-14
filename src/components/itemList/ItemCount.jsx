import React, {useState} from "react";

const ItemCount = ({initial, stock}) => {
    const [count, setCount] = useState(initial);
    
    function suma (){
        if(count<stock)
        setCount(count + 1);
    }

    function resta (){
        if (count>initial)
        setCount(count - 1);
    }

    return ( 
        <>
            <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text center w-full mb-12">
                <h1 className="sm:text-3x1 text-2x1 font-bold title-font mb">Comprar</h1>
                <div>
                    <div>
                    <button onClick={resta}>-</button>
                    <span>{count}</span>
                    <button onClick={suma}>+</button>
                    </div>
                    <div>
                        <button>Agregar al carrtio</button>
                    </div>
                </div>

            </div>

            </div>
        </>
    );
}
 
export default ItemCount;