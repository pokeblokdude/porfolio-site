import { Link, useRouteMatch } from 'react-router-dom';

const PortfolioCategoryPicker = () => {
    const { url } = useRouteMatch();

    return (
        <div className='portfolio-categories-container'>
            <li className='portfolio-categories-list'>
                <ul><Link className='link' to={`${url}/code`}>Code</Link></ul>
                <ul><Link className='link' to={`${url}/film-video`}>Film & Video</Link></ul>
                <ul><Link className='link' to={`${url}/photo`}>Photo</Link></ul>
                <ul><Link className='link' to={`${url}/misc`}>Misc.</Link></ul>
            </li>
            <hr></hr>
        </div>
    )
}

export default PortfolioCategoryPicker
