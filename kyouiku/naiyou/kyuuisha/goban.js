window.addEventListener('DOMContentLoaded', () => {
  const boards = document.querySelectorAll('.board');

  boards.forEach(boardElem => {
    const sgfData = boardElem.getAttribute('data-sgf');

    const board = new WGo.Board(boardElem, {
      width: 400,
      height: 400,
      background: "#DEB887", // 明るい碁盤色（ベージュ）
    });

    if (sgfData) {
      const parsed = WGo.SGF.parse(sgfData);
      const sgf = Array.isArray(parsed) ? parsed[0] : parsed; // 最初の局面だけ使う

      board.load(sgf);
    } else {
      console.error('SGFデータが見つかりません');
    }
  });
});
