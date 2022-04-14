
function Item({ name, descript, url, backgroundColor, buttonColor, guideLink }) {
    // u-size-30 => 50%
    return <div class="align-center container-style size-30 layout-cell" style={{ backgroundColor: `${backgroundColor}`, color: '#ffffff' }} >
        <div class="container-layout u-valign-top container-layout-1" >
            <h2 class="text-1">{name}</h2>
            <p class="text-2">{descript}</p>
            <a href={url} class="btn btn-round hover-palette-3-light-3 radius-50 btn-1" style={{ backgroundColor: buttonColor, color: backgroundColor }}>바로 가기</a>
            {guideLink && <p><a href={guideLink} style={{ color: '#fff', margin: '10px'}} >사용자 가이드</a></p>}
        </div>
    </div>;
}

export default Item;