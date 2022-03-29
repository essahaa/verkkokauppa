import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
    return (
        <div className='App'>
           <header>
               <div className="row head">
                   <div className="col-8 col-xs-8 col-sm-9 col-md-9 col-lg-10 logo">
                        <h1>Jonnen valinta</h1>
                    </div>
                    <div className="col-4 col-xs-4 col-sm-3 col-md-3 col-lg-2 shopcarter">
                    <img src={require('./images/cart.png')} className="shopcart" alt="..." />
                    </div>
               </div>
           </header>

            <body>
                <div className="row">
                    <div className="nav col-2">
                        <ul className="list">
                            <li className="listItem">Etusivu</li>
                            <li className="listItem">Sokerittomat</li>
                            <li className="listItem">Sokerittomat</li>
                            <li className="listItem">Sokerittomat</li>
                            <li className="listItem">Sokerittomat</li>
                            <li className="listItem">Sokerittomat</li>
                            
                        </ul>
                    </div>

                    <div className=" col-10 row">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="card">
                            <img src={require('./images/battery.png')} className="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="card">
                            <img src={require('./images/battery.png')} className="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="card">
                            <img src={require('./images/battery.png')} className="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="card">
                            <img src={require('./images/battery.png')} className="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        
                    </div> 
                </div>
            </body>
        </div>
    )
}

export default App
