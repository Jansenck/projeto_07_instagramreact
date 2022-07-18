function RenderSuggestions(props){
    return(
        <div className={"sugestao"} key={props.index}>
            <div className={"usuario"}>
              <img src={props.dataSuggestions.image} alt={props.dataSuggestions.image} />
              <div className="texto">
                <div className="nome">{props.dataSuggestions.userName}</div>
                <div className="razao">Segue você</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}

export default function SideBar(){

    const suggestions = [
        {
            image: "assets/img/bad.vibes.memes.svg",
            userName: "bad.vibes.memes"
        },
        {
            image: "assets/img/chibirdart.svg",
            userName: "chibirdart"
        },
        {
            image: "assets/img/razoesparaacreditar.svg",
            userName: "razoesparaacreditar"
        },
        {
            image: "assets/img/adorable_animals.svg",
            userName: "adorable_animals"
        },
        {
            image: "assets/img/smallcutecats.svg",
            userName: "smallcutecats"
        }
    ];

    return(
        <div className={"sidebar"}>
          <div className={"usuario"}>
            <img src={"assets/img/catanacomics.svg"} alt={"assets/img/catanacomics.svg"}/>
            <div className={"texto"}>
              <strong>{"catanacomics"}</strong>
              {"Catana"}
            </div>
          </div>

          <div className={"sugestoes"}>
            <div className={"titulo"}>
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            
            {suggestions.map((suggestion, index)=> <RenderSuggestions key={index} dataSuggestions={suggestion} />)}

          </div>

          <div className={"links"}>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div className={"copyright"}>
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    );
}