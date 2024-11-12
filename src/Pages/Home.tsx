import Header from "../components/common/Header";
import { formatNumber } from "../utils/format";

function Home() {
    return (
        <>
            <Header/>
            <div>book store</div>
            <div>count: {formatNumber(20000)}</div>
        </>
    )
}

export default Home;