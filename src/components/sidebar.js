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
        if (photo == "" || photo.lenght == 0){
            setImgProfile(imgProfile);
        } else{
            setImgProfile(photo);     
        };

    }

    function updateName() {
        const name = window.prompt('Digite seu nome de usuário');
        if (name == "" || name.length == 0){
            setNameProfile(nameProfile);
        }
        else{
        setNameProfile(name);
        };
    }

    return (
        <div className="sidebar">
            <div className="usuario">
                <img data-teste="profile-image" src={imgProfile} alt="imagem de perfil" onClick={updatePhoto} />
                <div className="texto">
                    <span>
                        <strong data-test="name">{nameProfile}</strong>
                        <ion-icon name="pencil" data-test="edit-name" onClick={updateName}></ion-icon>
                    </span>
                </div>
            </div>

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sidebars.map(i => <TodasSugestoes picture={i.picture} nome={i.nome} />)}
            </div>

            <div className="links">
                Sobre | Ajuda | Imprensa | API | Carreiras | Privacidade | Termos | Localizações | Contas mais relevantes |
                Hashtags | Idioma
            </div>

            <div className="copyright">
                © 2023 INSTAGRAM DO META
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
                        <div className="razao">Segue você</div>
                    </div>
                </div>
                <div className="seguir" onClick={Seguir}>{ seguindo? "Parar de seguir" : "Seguir"}</div>
            </div>
        </>
    );
};
