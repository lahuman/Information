import './App.css';
import Item from './Components/Item';

function App() {
  return (
    <>
      <section class="u-clearfix u-section-2">
        <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <Item name="XWIKI" descript="문서 도구" url="#" backgroundColor="#1f42c3" buttonColor="#b3c1f3" />
              <Item name="REDMINE" descript="이슈트레커" url="#" backgroundColor="#f53978" buttonColor="#fbaec8" />
            </div>
          </div>
        </div>
      </section>
      <section class="u-backlink u-clearfix u-grey-80">
        <p class="u-text">
          <span>ⓒ Digital IT Group. All Rights Reserved.</span>
        </p>
      </section>

    </>
  );
}

export default App;
