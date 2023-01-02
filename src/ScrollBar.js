const ScrollBar = (props) => {
    return(
        <div style={{
            overflowY: 'scroll',
            border: '4px solid black',
            height: '700px',
            marginTop: '2em',
        }}>
            {props.children}
        </div>
    )
}
export default ScrollBar