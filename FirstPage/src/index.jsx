import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))



// Pascal case for custom components
function MainComponent(){
    return (
        <>
            <h1>This is Zoe</h1>
            <ul>
                <li>She is distant in her relationships.</li>
                <li>She doesn't want to be, but it's difficult for her to socialize.</li>
                <li>Her favorite icecream flavor is mint chocolate chip.</li>
            </ul>
        </>
    )
}

function Header(){
    return(
        <header>
            <img src="/src/assets/ZoeHead.png" className="zoe-img" alt="ZoeImage"/>
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer(){
    return(
        <footer>
            <small>© 2024 Carnero Development. All right reserved.</small>
        </footer>
    )
}

root.render(
    <>
        <Header/>
        <MainComponent/>
        <Footer/>
    </>
)
    
