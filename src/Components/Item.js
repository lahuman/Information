
function Item ({ name, descript, url, backgroundColor, buttonColor }) {
    // u-size-30 => 50%
    return <div class="align-center container-style size-30 layout-cell" >
        <div class="container-layout u-valign-top container-layout-1" style={{ backgroundColor: `${backgroundColor}`, color: '#ffffff' }}>
            <h2 class="text text-1">{name}</h2>
            <p class="text text-2">{descript}</p>
            <a href={url} class="btn btn-round hover-palette-3-light-3 radius-50 btn-1" style={{ backgroundColor: buttonColor, color: backgroundColor }}>바로 가기</a>
        </div>
    </div>;
}

export default Item;