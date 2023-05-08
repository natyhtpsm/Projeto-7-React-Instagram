import '../css/style.css'
import Posts from './posts';
import Stories from './stories';

export default function Left() {
    return (
        <div className="esquerda">
            <Stories/>
            <Posts/>
        </div>
    );
};





