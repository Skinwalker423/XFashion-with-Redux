import './spinner-style.scss';

const Spinner = ({title}) => {
    return (
        <div id='spinner'>
            <div className="ui active massive centered inline loader">{title}</div>
        </div>
    )
}

export default Spinner;