
function Loading({loading}) {
    return(
        <div className={`loader ${loading ? 'active' : ''}`}>
            <img src="/favicon-96x96.png" alt="MJ Media" />
        </div>
    )
}

export default Loading;