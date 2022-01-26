import Header from '../component/Header'
import Footer from '../component/Footer'
import { useSelector } from 'react-redux';
import GlobalStyles from '@mui/material/GlobalStyles';
import { useEffect, useState } from 'react';
import Loading from './Loading';
export default function Layout({children}) {
    const loading = useSelector(state => state.loading)
    return(
            <>
            <Loading loading={loading} />
            <main>
                <Header />
                    <div className="app-container">
                    {children}
                    </div>
                <Footer />
            </main>
            </>
    )
}