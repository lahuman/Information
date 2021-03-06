import './Information.css';

import Item from './Components/Item';

function App() {
  const HOST = "https://host";
  return (
    <>
      <section class="clearfix section">
        <div class="layout-row">
          <Item name="XWIKI" descript="문서 도구" url={`${HOST}:8080`} backgroundColor="#1f42c3" buttonColor="#b3c1f3" guideLink={`${HOST}:8080/xwiki/bin/download/Main/WebHome/xwiki_guide.pdf`} />
          <Item name="REDMINE" descript="이슈트래커" url={`${HOST}:8081`} backgroundColor="#f53978" buttonColor="#fbaec8" guideLink={`${HOST}:8080/xwiki/bin/download/Main/WebHome/redmine_guide.pdf`} />
        </div>
      </section>
      <footer class="backlink clearfix grey-80">
        <p class="text">
          <span>ⓒ 디지털IT그룹. All Rights Reserved.</span>
        </p>
      </footer>

    </>
  );
}

export default App;
