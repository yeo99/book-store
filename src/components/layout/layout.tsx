import Footer from "../common/Footer";
import Header from "../common/Header";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}

export default Layout;