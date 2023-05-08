
import '../css/style.css'
import Sidebar from './sidebar';
import Left from './left';


export default function Body() {
    return (
        <div className='body'>
            <div className="corpo">
                <Left/>
                <Sidebar/>
            </div>
        </div>
    );
};



