export function Difuser(props){
    const {background, height, top, bottom} = props

    return (
        <div style={{
            background: background,
            position: "absolute",
            width: "100%",
            height, 
            bottom
            }}>

        </div>
    )
}