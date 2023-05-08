import React from 'react';
import '../css/style.css'
import Perfil from '../assets/img/meowed.svg';

export default function Sidebar() {
    const [imgProfile, setImgProfile] = React.useState("https://mpmp.pt/wp-content/uploads/2014/07/An%C3%B3nimo-300x283.png");
    const [nameProfile, setNameProfile] = React.useState("Anônimo");

    const sidebars = [
        { nome: "meowed", picture: Perfil, },
        { nome: "meowed", picture: Perfil, },
        { nome: "meowed", picture: Perfil, },
        { nome: "meowed", picture: Perfil, },
        { nome: "meowed", picture: Perfil, },
    ];

    function updatePhoto() {
        const photo = window.prompt('Insira uma nova foto');
        setImgProfile(photo);
    }

    function updateName() {
        const name = window.prompt('Digite seu nome de usuário');
        setNameProfile(name);
    }

    return (
        <div className="sidebar">
            <div className="usuario">
                <img src={imgProfile} alt="imagem de perfil" onClick={updatePhoto} />
                <div className="texto">
                    <span>
                        <strong>{nameProfile}</strong>
                        <ion-icon name="pencil" onClick={updateName}></ion-icon>
                    </span>
                </div>
            </div>

            <div className="sugestoes">
                <div className="titulo">
                    SugestÃµes para vocÃª
                    <div>Ver tudo</div>
                </div>
                {sidebars.map(i => <TodasSugestoes picture={i.picture} nome={i.nome} />)}
            </div>

            <div className="links">
                Sobre â€¢ Ajuda â€¢ Imprensa â€¢ API â€¢ Carreiras â€¢ Privacidade â€¢ Termos â€¢ LocalizaÃ§Ãµes â€¢ Contas mais relevantes â€¢
                Hashtags â€¢ Idioma
            </div>

            <div className="copyright">
                Â© 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
};

function TodasSugestoes(props) {
    const [seguindo, setSeguindo] = React.useState(false);
    
    function Seguir(){
        if(seguindo){
            setSeguindo(false);
        }
        else if(!seguindo){
            setSeguindo(true);
        }
    }
    return (
        <>
            <div className="sugestao">
                <div className="usuario">
                    <img src={props.profile} alt="bad.vibes.memes.svg" />
                    <div className="texto">
                        <div className="nome">{props.nome}</div>
                        <div className="razao">Segue vocÃª</div>
                    </div>
                </div>
                <div className="seguir" onClick={Seguir}>{ seguindo? "Parar de seguir" : "Seguir"}</div>
            </div>
        </>
    );
};
