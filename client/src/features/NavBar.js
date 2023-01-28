

export default function NavBar() {
    const navLinkStyle = "text-3xl text-zinc-800 hover:text-zinc-400"

    return (
        <nav className="flex space-x-32 py-6 border-b-2 border-black">
            <a href="/" className={navLinkStyle + " ml-12"}>Home</a>
            <a href="/one" className={navLinkStyle}>Feature One</a>
            <a href="/two" className={navLinkStyle}>Feature Two</a>
        </nav>
    )
}