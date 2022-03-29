import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
    return (
        <div className='App'>
           <header>
               <div className="row head">
                   <div className="col-9 logo">
                        <h1>Jonnen valinta</h1>
                    </div>
                    <div className="col-3 shopcarter">
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
                        <div className="col-sm-5 col-md-4 col-lg-3">
                            <div class="card">
                            <img src={require('./images/battery.png')} className="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 col-md-4 col-lg-3">
                            <div class="card">
                            <img src={require('./images/battery.png')} className="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 col-md-4 col-lg-3">
                            <div class="card">
                            <img src={require('./images/battery.png')} className="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 col-md-4 col-lg-3">
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
