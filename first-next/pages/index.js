// Whenever you create a files in pages next js automatically creates the route for that
// code is run on server and render on server
// running on client also so see console.log on client as well as server

import styles from '../styles/index.module.css'

function Index() {
    return (
        <div>
            <h1 className={styles.h1}>Our Index page</h1>
            <span className={`${styles.h1} ${styles.jod}`} >jodddd</span>
            {/* inline styles is as same as react */}
        </div>
    )
}

export default Index
