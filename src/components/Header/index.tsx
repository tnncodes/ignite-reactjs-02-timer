import { HeaderContainer } from "./styles";
import { Scroll, Timer } from "phosphor-react";
import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from "react-router-dom";

export function Header() {
    return ( 
        <HeaderContainer>
            <img  
                src={logoIgnite} 
                alt="Dois triângulos verdes inclinados para a direita" 
            />
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24}/>
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}