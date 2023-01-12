const $section1 = $('#section1')
$section1.on('click',()=> {
  let $section1Content = $('#section1 h1')
  $section1Content.text('Have a Good Time')
})

const $button = $('.button')
$button.on('click',()=>{
  let $articleAppend = $('.append')
  $articleAppend.removeClass('append')
})
