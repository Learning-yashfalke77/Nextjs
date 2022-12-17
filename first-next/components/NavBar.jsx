import React from 'react'
import Link from "next/link";

function NavBar() {

    const styles = {
        display: "flex",
        background: "grey",
        padding: "1rem",
        justifyContent: "space-between"
    }

    return (
        <div style={styles}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/blog"><a>Blog</a></Link>
            <Link href="/blog/blog1"><a>1st blog of all Blogs</a></Link>
            <Link href="/about"><a>About Page</a></Link> {/* using link the rendering is on client side*/}
            <Link href="/contact"><button>Contct me</button></Link>
        </div>
    )
}

export default NavBar
