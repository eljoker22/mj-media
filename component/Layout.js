import Header from '../component/Header'
import Footer from '../component/Footer'
import { Provider } from 'react-redux'
import {store} from '../state/store';
export default function Layout({children}) {
    return(
        <Provider store={store}>
            <main>
                <Header />
                    <div className="app-container">
                    {children}
                    </div>
                <Footer />
            </main>
        </Provider>
    )
}