function RenderPosts(props){

    return(
        <div className={"post"} key={props.index}>
            <div className={"topo"}>
                <div className={"usuario"}>
                    <img src={props.dataPost.userImage} alt={props.dataPost.userImage}/>
                    {props.dataPost.userName}
                </div>
                <div className={"acoes"}>
                    <ion-icon name={"ellipsis-horizontal"}></ion-icon>
                </div>
            </div>

            <div className={"conteudo"}>
                <img src={props.dataPost.postImage} alt={props.dataPost.postImage}/>
            </div>

            <div className={"fundo"}>
                <div className={"acoes"}>
                    <div>
                        <ion-icon name={"heart-outline"}></ion-icon>
                        <ion-icon name={"chatbubble-outline"}></ion-icon>
                        <ion-icon name={"paper-plane-outline"}></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={"bookmark-outline"}></ion-icon>
                    </div>
                </div>

                <div className={"curtidas"}>
                    <img src={props.dataPost.imageWhoLiked} alt={props.dataPost.imageWhoLiked}/>
                    <div className={"texto"}>
                        Curtido por <strong>{props.dataPost.postLikedBy}</strong> e <strong>outras {props.dataPost.postNumberLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Posts(){

    const posts = [
        {
            userName: "meowed", 
            userImage: "assets/img/meowed.svg",
            postImage: "assets/img/gato-telefone.svg",
            postLikedBy: "respondeai",
            imageWhoLiked: "assets/img/respondeai.svg",
            postNumberLikes: 101.523
        },
        {
            userName: "barked", 
            userImage: "assets/img/barked.svg",
            postImage: "assets/img/dog.svg",
            postLikedBy: "adorable_animals",
            imageWhoLiked: "assets/img/adorable_animals.svg",
            postNumberLikes: 99.159 
        },
        
    ];

    return(
        <div className={"posts"}>
            {posts.map((post, index) => <RenderPosts dataPost={post} index={index}/>)}
        </div>
    );
}