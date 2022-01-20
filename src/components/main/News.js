function News() {

    const getLocalItems=()=>{
        let data = localStorage.getItem('posts');
        
        if(data){
            return JSON.parse(data);
        }else{
            return [];
        }
    }

    const posts = getLocalItems();
    console.log(posts);
    return (
        <section id="news" className="myScroll">
            <div className="inner">
                <h2>RECENT NEWS</h2>

                <div className="textbox">
                    {
                        posts.map((post,index)=>{
                            return(
                                <article key={index}>
                                    <h3>{post.title}</h3>
                                    <p>{post.content}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default News;