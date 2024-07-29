import { Outlet } from "react-router-dom";


export default function Main() {

    return (
        <>
            <header className="text-red-400">
                __ Header __
            </header>
            <main>
                <section>Search</section>
                <section>Conteudo start <Outlet />  end </section>
            </main>
            <footer>
                __ Footer __
            </footer>

        </>
    )
}