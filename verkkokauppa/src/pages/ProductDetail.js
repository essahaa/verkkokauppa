import React from 'react';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const URL = 'http://localhost/verkkokauppaBackEndi/';

export default function ProductDetail() {
    return (
        <div className="vh-100" style={{ display: 'flex', justifyContent: 'space-between', }}>
            <Navbar url={URL} />
            <div className="container ms-5 me-5 mt-5">
                <h1 className="text-left ms-5">Tuotenimi
                </h1>
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid" src={'/images/battery.png'} alt=""></img>
                    </div>
                    <div className="col-md-4">
                        <h3 className="my-3">Tuotekuvaus</h3>
                        <p>Tuotekuvaus</p>
                        <h3 className="my-3">Ravintoarvot</h3>
                        <p> Ravintoarvot</p>
                        <h3 className="my-3">Ainesosat</h3>
                        <p> Ainesosat</p>
                        <h3 className="my-3 mt-5">Hinta € / kpl</h3>
                        <Link className="links" to='/'>
                            <Button variant="outline-light" className="w-50">
                                Lisää ostoskoriin
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
