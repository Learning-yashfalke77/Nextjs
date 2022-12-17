import Link from "next/link"
import { useRouter } from "next/router";
function PageNotFound() {
    const router = useRouter()
    return (
        <div>
            Page Not found go home here
            <Link href="/">
                <a >Home</a>
            </Link>
            <button onClick={() => (router.push("/"))}>HomepAge using router.push</button>
        </div>
    )
}

export default PageNotFound
