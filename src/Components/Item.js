
function Item ({ name, descript, url, backgroundColor, buttonColor }) {
    // u-size-30 => 50%
    return <div class="u-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-1" >
        <div class="u-container-layout u-valign-top u-container-layout-1" style={{ backgroundColor: `${backgroundColor}`, color: '#ffffff' }}>
            <h2 class="u-text u-text-1">{name}</h2>
            <p class="u-text u-text-2">{descript}</p>
            <a href={url} class="u-btn u-btn-round u-hover-palette-3-light-3 u-palette-2-light-2 u-radius-50 u-text-palette-1-base u-btn-1" style={{ backgroundColor: buttonColor, color: backgroundColor }}>바로 가기</a>
        </div>
    </div>;
}

export default Item;