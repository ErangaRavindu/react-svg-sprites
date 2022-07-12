
function AmpleIcon(props) {
    return (

            <svg viewBox="0 0 16 16" className="App-icon">
                <use xlinkHref={"./icons.svg#" + props.icon } />
            </svg>

    );
}

export default AmpleIcon;
