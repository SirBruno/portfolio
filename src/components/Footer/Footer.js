import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <h2>Cupcake</h2>
                <div className="footer__copyright">
                    <div>CC0 {new Date().getFullYear()} CUPCAKE, No Rights Reserved.</div>
                    <div className="footer__links">
                        <span>
                            <a href="https://github.com/SirBruno/portfolio" target="_blank" rel="noreferrer"><b> GitHub</b></a>
                        </span>
                        <span>
                            <a href="https://fakestoreapi.com" target="_blank" rel="noreferrer"><b>Fake Store API</b></a>
                        </span>
                        <span>
                            Powered by<a href="https://react.dev" target="_blank" rel="noreferrer"><b> React</b></a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer