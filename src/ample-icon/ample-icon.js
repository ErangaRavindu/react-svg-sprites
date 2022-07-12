
function AmpleIcon(props) {
    return (
        <svg viewBox="0 0 28.3 28.3" className="App-icon">
            <use xlinkHref={"./icons.svg#" + props.icon } />
        </svg>
    );
}

export default AmpleIcon;
