import { Outlet } from "react-router-dom";


export default function Main() {

    return (
        <>
            <header>
                __ Header __
            </header>
            <main>
                <section>Search</section>
                <section>Conteudo  <Outlet /> here </section>
            </main>
            <footer>
                __ Footer __
            </footer>

        </>
    )
}