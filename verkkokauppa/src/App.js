import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
    return (
        <div className='App'>
           <header>
               <div className="row">
                   <div className="col-9">
                        <h1>Jonnen valinta</h1>
                    </div>
                    <div className="col-3">
                        <p>ostoskori</p>
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
                        <div className="col-3">
                        </div>
                        <div className="col-3">
                        </div>
                        <div className="col-3">
                        </div>
                        <div className="col-3">
                        </div>
                        <div className="col-3">
                        </div>
                        <div className="col-3">
                        </div>
                        <div className="col-3">
                        </div>
                        <div className="col-3">
                        </div>
                    </div> 
                </div>
            </body>
        </div>
    )
}

export default App
