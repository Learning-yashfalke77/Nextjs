import { useRouter } from "next/router";

function pageNo() {

    const router = useRouter()
    // client side info can be seen in client side and server side info can be seen in server side

    return (
        <div>
            <h1>This is my {router.query.pageNo} page</h1>
        </div>
    )
}

export default pageNo
