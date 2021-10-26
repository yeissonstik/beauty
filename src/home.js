

import box from './box.svg';
import product from './foundation 1.png';
import card from './card.svg';
import image from './image.svg'
function susbcribe(){
    return(
        <div>
            <h1 className='title'>Elige un plan</h1>
            <div className="cardscontainer">
                <div className="susbcribeCard">
                    <h1>MENSUAL</h1>
                    <div className="infoContainer">
                        <div className='info'>
                            <img src={box}/>
                            <span>Recibes una caja mensual.</span>
                        </div>

                        <div className='info'>
                            <img src={product}/>
                            <span>Recibes una caja mensual.</span>
                        </div>

                        <div className='info'>
                            <img src={card}/>
                            <span>Recibes una caja mensual.</span>
                        </div>
                    </div>
                    <div className="paySeccion">
                        <span>$ 20.000</span>
                        <img src={image}/>
                        <a href='/buy/?suscription=mensual'>Lo quiero</a>
                    </div>
                </div>
                <div className="susbcribeCard">
                    <h1>TRIMESTRAL</h1>
                    <div className="infoContainer">
                        <div className='info'>
                            <img src={box}/>
                            <span>Recibes una caja mensual.</span>
                        </div>

                        <div className='info'>
                            <img src={product}/>
                            <span>Recibes una caja mensual.</span>
                        </div>

                        <div className='info'>
                            <img src={card}/>
                            <span>Recibes una caja mensual.</span>
                        </div>
                    </div>
                    <div className="paySeccion">
                        <span>$ 50.000</span>
                        <img src={image}/>
                        <a href='/buy/?suscription=trimestral'>Lo quiero</a>
                    </div>
                </div>
                <div className="susbcribeCard">
                    <h1>SEMESTRAL</h1>
                    <div className="infoContainer">
                        <div className='info'>
                            <img src={box}/>
                            <span>Recibes una caja mensual.</span>
                        </div>

                        <div className='info'>
                            <img src={product}/>
                            <span>Recibes una caja mensual.</span>
                        </div>

                        <div className='info'>
                            <img src={card}/>
                            <span>Recibes una caja mensual.</span>
                        </div>
                    </div>
                    <div className="paySeccion">
                        <span>$ 90.000</span>
                        <img src={image}/>
                        <a href='/buy/?suscription=semestral'>Lo quiero</a>
                    </div>
                </div>
                <div className="susbcribeCard">
                    <h1>ANUAL</h1>
                    <div className="infoContainer">
                        <div className='info'>
                            <img src={box}/>
                            <span>Recibes una caja mensual.</span>
                        </div>

                        <div className='info'>
                            <img src={product}/>
                            <span>Recibes una caja mensual.</span>
                        </div>

                        <div className='info'>
                            <img src={card}/>
                            <span>Recibes una caja mensual.</span>
                        </div>
                    </div>
                    <div className="paySeccion">
                        <span>$ 120.000</span>
                        <img src={image}/>
                        <a href='/buy/?suscription=anual'>Lo quiero</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default susbcribe