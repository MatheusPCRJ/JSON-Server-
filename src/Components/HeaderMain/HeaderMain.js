import React from "react";
import { Link } from 'react-router-dom';
import './HeaderMain.css';

function HeaderMain(){

    return(

        <header>
            <div className="container">

                <div className="logo">
                    <h1>CRUder</h1>
                </div>

                <div className="btn-newPost">
                    <Link to="/post">
                        <button>Adicionar nova Postagem</button>
                    </Link>
                </div>
            </div>

        </header>

    )
}
export default HeaderMain