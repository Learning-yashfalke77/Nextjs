import Image from 'next/image'
import aboutImage from '../public/about.jpg'
function About() {
    return (
        <div>
            <h1>This is our about page</h1>
            <Image src={aboutImage} alt='about image' width="500" height="500" />
            <Image src="https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="xps " width="500" height="500" />
        </div>
    )
}

export default About