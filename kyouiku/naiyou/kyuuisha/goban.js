window.addEventListener('DOMContentLoaded', () => {
  const players = document.querySelectorAll('.board');

  players.forEach(playerElem => {
    const sgf = playerElem.getAttribute('data-sgf');
    const initialMove = parseInt(playerElem.getAttribute('data-initial')) || 0;

    new WGo.Player(playerElem, {
      sgf: sgf,
      move: initialMove,
      width: 400,
      enableWheel: false,
      // layout: "right", // 必要なら再生ボタンを右側などに変更可能
    });
  });
});

