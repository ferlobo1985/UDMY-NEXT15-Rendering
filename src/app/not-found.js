import Link from 'next/link'

export default function NotFound(){
    return(
        <div>
            <h1>Sorry, not found</h1>
            <Link href="/">Back home</Link>
        </div>
    )
}