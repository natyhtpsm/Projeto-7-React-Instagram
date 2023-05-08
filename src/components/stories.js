
import '../css/style.css';
import Story1 from '../assets/img/dog.svg';
import Story2 from '../assets/img/dog.svg';
import Story3 from '../assets/img/dog.svg';


function RenderStories(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.picture} alt="9gag" />
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
        { nome: "9gag", picture: Story1, },
        { nome: "meowed", picture: Story2, },
        { nome: "barked", picture: Story3, },
        { nome: "9gag", picture: Story1, },
        { nome: "meowed", picture: Story2, },
        { nome: "barked", picture: Story3, },
        { nome: "9gag", picture: Story1, },
        { nome: "meowed", picture: Story2, },
        { nome: "barked", picture: Story3, },
    ];

    return (
        <>
            <div className="stories">
                {story.map(i => <RenderStories picture={i.picture} nome={i.nome} />)}
            </div>
        </>
    );
};
