
function Loading({loading}) {
    return(
        <div className={`loader ${loading ? 'active' : ''}`}>
            <img src="/logo.png" alt="MJ Media" />
        </div>
    )
}

export default Loading;