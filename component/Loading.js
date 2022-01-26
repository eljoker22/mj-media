
function Loading({loading}) {
    return(
        <div className={`loader ${loading ? 'active' : ''}`}>
            <img src="/icon-logo.png" alt="MJ Media" />
        </div>
    )
}

export default Loading;