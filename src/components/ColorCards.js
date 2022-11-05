const ColorCards = ( props ) => {

    console.log(props)
      const styleMain = {
        backgroundColor: props.colorCode,
        width: '12vw',
        height: '280px',
        margin: '3rem',
        boxShadow: '5px 6px 7px 0px black,0px -5px 10px 0px black'
    }
    
    const styleH5 = {
        color: props.colorCode,
        padding: '0px',
        margin:'2px'
    }

    return (
        <div style={styleMain}>
            <div className="styleChildDiv">
                <h2 className="styleH2">{props.colorCode}</h2>
                <h5 className= "styleH5" style={styleH5}>{ props.colorName}</h5>
            </div>
        </div>
    )
};

export default ColorCards;