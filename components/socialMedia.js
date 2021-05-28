export default function SocialMedia ({ data }){
    return(
        <li><a href={data.url} className={`fab fa-${data.type}`} target="_blank"/></li>
    );
}