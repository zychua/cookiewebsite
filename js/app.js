// 1. It should link the checkbox to our script.
// 2. It should test if checkbox is toggled on or off.
// 3. If checked, it should test each article
  // 4. It should only show the article that is non-dairy...
  // 5. ...and hide the rest

  //var dairyCheckbox = document.querySelector('.dairyCheckbox')
  var dairyCheckbox = $('.dairy-checkbox')
  //var aticles = document.querySelectorAll('article');
  var articles = $('article')
  console.log(articles);

  //console.log('test if clicked!')

  //dairyCheckbox.on('change'
  dairyCheckbox.change(function(){
      if (this.checked){
        //console.log('yes, checked');
        articles.each(function() {   //each is like a for loop
          //console.log($(this));
          if (!$(this).hasClass('non-dairy')){
            $(this).fadeOut();
            }
          })
        } else {
          articles.each(function() {
            $(this).fadeIn();
            })
          }
      });
