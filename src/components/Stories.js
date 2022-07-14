export default function Stories(){

    const stories = [
        {
            image: "assets/img/9gag.svg",
            user: "9gag"
        },
        {
            image: "assets/img/meowed.svg",
            user: "meowed"
        },
        {
            image: "assets/img/barked.svg",
            user: "barked"
        },
        {
            image: "assets/img/nathanwpylestrangeplanet.svg",
            user: "nathanwpylestrangeplanet"
        },
        {
            image: "assets/img/wawawicomics.svg",
            user: "wawawicomics"
        },
        {
            image: "assets/img/respondeai.svg" ,
            user: "respondeai"
        },
        {
            image: "assets/img/filomoderna.svg",
            user: "filomoderna"
        },
        {
            image: "assets/img/memeriagourmet.svg" ,
            userName: "memeriagourmet"
        }
    ];

    return(
        <div className="stories">
            {stories.map((story, index) => {
                return(
                    <div className="story" key={index}>
                        <div className="imagem">
                            <img src={story.image} alt={story.userName}/>
                        </div>
                        <div className="usuario">
                            {story.userName}
                        </div>
                    </div>
                );
            })}
            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}