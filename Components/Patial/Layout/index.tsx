import Navbar from "./header"
import Footer from "./footer"

interface Children{
    children:React.ReactNode
}

function Layout({children}:Children){
    return(
        <div>
            <Navbar />
               {children}
            <Footer />
        </div>
    )
}

export default Layout