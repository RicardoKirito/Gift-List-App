import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Register } from './Register'
import { GiftList } from './GiftList'
import { RegisteredProvider } from './context/RegisterContex'
import { GiftListProvider } from './context/GiftListContext'
import { ProtectedRoute } from './ProtectedRoutes'

export default function App(){
    return (
        <RegisteredProvider>
            <GiftListProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/register"element={<Register/>}/>
                        <Route path="/"element={<Register/>}/>
                        <Route path="/giftlist"element={<GiftList/>}/>
                        <Route element={<ProtectedRoute/>}/>
                    </Routes>
                </BrowserRouter>
            </GiftListProvider>
        </RegisteredProvider>
    )
}