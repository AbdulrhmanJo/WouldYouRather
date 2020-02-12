import React from 'react'
import { Link } from 'react-router-dom'
import pageNotFound from '../icon/page_not_found.svg'
const PageNotFound = (props) => {
    return (
        <div className="notFound home">
            <h1>Oops!</h1>
            <p className= 'info'>The question you are looking for, does not exist.</p>
            <div>
                <img src={pageNotFound} alt='page not found'></img>
                <p>404 · Page not found</p>
                <Link className="return-btn"  to='/'>Return</Link>
            </div>
        </div>
    )
}

export default PageNotFound