import { Outlet } from "react-router-dom"

export default function CareersLayout() {
    return (
        <div className="careers-layout">
            <h2 className="text-3xl text-primary-100 mb-8">Cargos</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>

            <Outlet />
        </div>
    )
}
