import React from 'react'
import{Link} from 'react-router-dom'

import './NoMatch.scss'


export default function NoMatch() {
    return (<header>

        <nav className="navbar">
            <ul className="n">
                <img src="data:image/png;base64,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" className="team" />
                <li>-</li>
                <li>-</li>
                <li>-</li>
                <li>-</li>
                <li>-</li>
                
            </ul>
        </nav>

        <section>

            <h1>Invalid URL</h1>
                <img src="https://media.istockphoto.com/vectors/little-people-computer-error-vector-id1176277785?k=6&m=1176277785&s=612x612&w=0&h=eq-OaMeECtW17Itn3q0BoHV2x8fX6LrJkjXrPUSo-bE=" className="t" />
            
            <div className="action">
                <Link className="b" to="/">
                    Return
                </Link>
            </div>
            </section>
    </header>
    )
}
