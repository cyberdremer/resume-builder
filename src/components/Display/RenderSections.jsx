export default function RenderSection({array, Component , title }){
    return(
        <>
        <h3>{title}</h3>
        {array.map(component => <Component props={component} key={component.id}/> )}
        </>
    );
}