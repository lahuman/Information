import './Information.css';

import Item from './Components/Item';

function App() {
  return (
    <>
      <section class="clearfix section">
        <div class="layout-row">
          <Item name="XWIKI" descript="문서 도구" url="#" backgroundColor="#1f42c3" buttonColor="#b3c1f3" />
          <Item name="REDMINE" descript="이슈트레커" url="#" backgroundColor="#f53978" buttonColor="#fbaec8" />
        </div>
      </section>
      <footer class="backlink clearfix grey-80">
        <p class="text">
          <span>ⓒ Digital IT Group. All Rights Reserved.</span>
        </p>
      </footer>

    </>
  );
}

export default App;
