// ターゲット要素をすべて取得
const targets = document.querySelectorAll('.main');
// IntersectionObserverを設定
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // ビューポート内に表示されたらクラスを追加
      entry.target.classList.add('is-inview');
    } else {
      // ビューポート外に出たらクラスを削除
      entry.target.classList.remove('is-inview');
    }
  });
}, {
  threshold: 0.1 // 要素が10%表示されたら反応
});
// 各ターゲット要素をオブザーバーに監視させる
targets.forEach(target => observer.observe(target));
