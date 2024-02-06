/**
 * 解决首页白屏问题
 */
(function () {
  const div = document.createElement('div')
  div.className = 'loading'
  div.innerHTML = '<div class="loading__icon"></div>'
  document.body.appendChild(div)
})()
