import React from "react"
import { Link } from 'gatsby'

const IndexPage = () => {
    return(
        <div>
            <h1>Hello!</h1>
            <h2>I am WenTao from China. I have worked as Web developer for five years experience</h2>
            <p>Need Senior Web Developer?<a href = "/contact">Contact Me</a></p>
            <p>Need Senior Web Developer?<Link to = "/contact">Contact Me</Link></p>
        </div>
    )
}

export default IndexPage