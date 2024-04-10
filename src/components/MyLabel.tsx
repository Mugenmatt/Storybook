import './MyLabel.css'

// Si cambias la interface, storybook no reconoce el cambio, asi que hay que reiniciar la ejecución
interface Props {
    /* 
    * Texto a mostrar
    */
    label: string;

    /* 
    * Tamaño del label
    */
    size?: 'normal'|'h1'|'h2'|'h3';

    /* 
    * Capitalización de label
    */
    allCaps?: boolean;

    /* 
    * Color de fondo del span
    */
    color?: 'text-primary'|'text-secondary'|'text-tertiary';

    /* 
    * Color de texto del span
    */
    fontColor?: string;
}

export const MyLabel = ({ 
    label, 
    size = 'normal',
    allCaps = false,
    color = 'text-tertiary',
    fontColor = 'red'
} :Props) => {
    return (
        <span 
            className={ `${size} ${color} label` } 
            style={{color: fontColor}}>
                { allCaps? label.toUpperCase() : label }
        </span>
    )
}
