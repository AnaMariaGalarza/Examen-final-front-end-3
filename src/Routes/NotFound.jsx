import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import NotFoundAnimation from "../Animations/NotFound.json";
import { useNavigate } from "react-router-dom";

export default function NotFound() {

    const navigate = useNavigate();
    const container = useRef(null);

    useEffect(() => {
        const animation =  lottie.loadAnimation({
            container: container.current,
            animationData: NotFoundAnimation
        });
        return () => animation.destroy();
    }, []);

    return (
        <div className="anim-card">
            <h1>Error 404: Página no encontrada</h1>
            <p>La página que busca no se encuentra. Por favor, compruebe la URL e inténtelo de nuevo.</p>
            <div ref={container} className='anim' />
            <div className="button-card">
                <button className="button" onClick={() => navigate(-1)}>Volver atrás</button>
                <button className="button" onClick={() => navigate("/")}>Ir a la página de inicio</button>
            </div>
        </div>
    );

}
