import { useSelector } from "react-redux";

function Intro() {
    const members = useSelector(state=>state.memberReducer.members);
    console.log(members);
    return (
        <section id="intro" className="myScroll">
            <div className="inner">
                <h2>Introduce Members</h2>
                {
                    members.map((member,index)=>{
                        return(
                            <article key={index}>
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                        </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Intro;