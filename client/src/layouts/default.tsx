import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header/header'

export default function DefaultLayout() {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Header />
            <Outlet />
        </div>
    )
}
