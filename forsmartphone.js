<!DOCTYPE html>
<html lang="ja">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
    }

    /* 横画面用スタイル（表示したいUI） */
    .landscape {
      display: none;
    }

    .portrait-warning {
      display: none;
      height: 100vh;
      background-color: #000;
      color: #fff;
      text-align: center;
      padding-top: 40vh;
      font-size: 1.5rem;
    }

    @media screen and (orientation: landscape) {
      .landscape {
        display: block;
      }

      .portrait-warning {
        display: none;
      }
    }

    @media screen and (orientation: portrait) {
      .landscape {
        display: none;
      }

      .portrait-warning {
        display: block;
      }
    }
  </style>
</head>
<body>
  <!-- 縦画面のときの警告 -->
  <div class="portrait-warning">
    横向きにしてご覧ください
  </div>

  <!-- 横画面のときだけ表示される内容 -->
  <div class="landscape">
    <h1>ここに通常のコンテンツ</h1>
    <p>スマホを横向きにしたときのみ見える内容です。</p>
  </div>
</body>
</html>
