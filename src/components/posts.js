import React from 'react';
import '../css/style.css';
import Perfil1 from '../assets/img/barked.svg';
import Perfil2 from '../assets/img/meowed.svg';
import Post1 from '../assets/img/gato-telefone.svg';
import Post2 from '../assets/img/dog.svg';
import Curtido from '../assets/img/respondeai.svg';

function Post(props) {

    const [taCurtido, setTaCurtido] = React.useState(false);
    const [taSalvo, setTaSalvo] = React.useState(false)
    const numero = Number(props.num);
    const QuemCurtiu = props.curtidonome;
    const [numCurtidas, setNumCurtidas] = React.useState(numero);
    const [voceCurtiu, setVoceCurtiu] = React.useState(false);


    function CurtirPost(){
        if(!taCurtido){
            setTaCurtido(true);
            setNumCurtidas(numero + 1);
            setVoceCurtiu(true);
        }
        else if(taCurtido){
            setTaCurtido(false);
            setNumCurtidas(numero);
            setVoceCurtiu(false);
        }
    }

    function ClicarImagem(){
        setTaCurtido(true);
        setNumCurtidas(numero + 1);
    }

    function SalvarPost(){
        if(!taSalvo){
            setTaSalvo(true);
        }
        else if(taSalvo){
            setTaSalvo(false);
        }
    }

    return (
        <div className="posts">
            <div className="post" data-test="post">
                <div className="topo">
                    <div className="usuario">
                        <img src={props.picture} alt="meowed" />
                        {props.nome}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div className="conteudo">
                    <img src={props.post} alt="gato-telefone" data-teste="post-image" onClick={ClicarImagem}/>
                </div>
                <div className="fundo">
                    <div className="acoes">
                        <div>
                            { taCurtido ? 
                            <ion-icon name="heart" data-test="like-post" onClick={CurtirPost} style={{color:'red'}}></ion-icon> : 
                            <ion-icon name="heart-outline" data-test="like-post" onClick={CurtirPost} style={{color: 'black'}}></ion-icon>
                            }
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name={ taSalvo ? "bookmark" : "bookmark-outline"} data-test="save-post" onClick={SalvarPost}></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src={props.curtidopicture} alt="respondeai" />
                        <div className="texto">
                            Curtido por <strong>{ voceCurtiu ? "você": QuemCurtiu }</strong> e <strong>outras </strong><strong data-test="likes-number">{numCurtidas}</strong> <strong>pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Posts(){
    const post = [
        {nome: "meowed",  picture: Perfil2, post: Post1, curtidopicture: Curtido, curtidonome: "respondeai", num: 200},
        {nome: "barked",  picture: Perfil1, post: Post2, curtidopicture: Curtido, curtidonome: "respondeai", num: 20},
        {nome: "barked",  picture: Perfil2, post: Post1, curtidopicture: Curtido, curtidonome: "respondeai", num: 500},
    ];
    
    return(
        <>
        {post.map(i => <Post picture={i.picture} nome={i.nome} post={i.post} curtidopicture={i.curtidopicture} curtidonome={i.curtidonome} num={i.num}/>)}
        </>
    );
};
