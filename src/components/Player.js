import ReactPlayer from 'react-player'

const Player = ({ url }) => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer className='player' url={url} width='100%' height='100%' />
        </div>
    )
}

export default Player
