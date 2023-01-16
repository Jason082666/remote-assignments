const $section1 = $('#section1')
$section1.on('click',()=> {
  let $section1Content = $('#section1 h1')
  $section1Content.text('Have a Good Time')
})

const $button = $('.button')
$button.on('click',()=>{
  let $articleAppend = $('.article-container').eq(1)
  $articleAppend.toggleClass('append')
  $articleAppend[0].scrollIntoView()
})
