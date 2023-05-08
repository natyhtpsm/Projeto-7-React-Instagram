
import '../css/style.css';
import Story1 from '../assets/img/9gag.svg';
import Story2 from '../assets/img/meowed.svg';
import Story3 from '../assets/img/barked.svg';
import Story4 from '../assets/img/nathanwpylestrangeplanet.svg';
import Story5 from '../assets/img/wawawicomics.svg';
import Story6 from '../assets/img/respondeai.svg';
import Story7 from '../assets/img/filomoderna.svg';
import Story8 from '../assets/img/memeriagourmet.svg';


function RenderStories(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.picture} alt="storypic" />
            </div>
            <div className="usuario">
                {props.nome}
            </div>
        </div>
    );
};

export default function Stories() {
    const story = [
        { nome: "9gag", picture: Story1, },
        { nome: "meowed", picture: Story2, },
        { nome: "barked", picture: Story3, },
        { nome: "nathanwpylestrangeplanet", picture: Story4, },
        { nome: "wawawicomics", picture: Story5, },
        { nome: "respondeai", picture: Story6, },
        { nome: "filomoderna", picture: Story7, },
        { nome: "memeriagourmet", picture: Story8, },
    ];

    return (
        <>
            <div className="stories">
                {story.map(i => <RenderStories picture={i.picture} nome={i.nome} />)}
            </div>
        </>
    );
};
