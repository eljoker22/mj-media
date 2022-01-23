import Header from '../component/Header'
import Footer from '../component/Footer'
import { useSelector } from 'react-redux';
export default function Layout({children}) {
    const loading = useSelector(state => state.loading)
    return(
            <main>
                <Header />
                <div className={`loader ${loading ? 'active' : ''}`}>
                    <span>...MJ MEDIA</span>
                </div>
                    <div className="app-container">
                    {children}
                    </div>
                <Footer />
            </main>
    )
}