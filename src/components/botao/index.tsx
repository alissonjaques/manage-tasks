import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component <{
    children: React.ReactNode,
    type? : "button" | "submit" | "reset" | undefined
    }>{
    render() {
        const { type = "button" } = this.props;
        return (
            <button className={style.botao} type={type}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao; 
