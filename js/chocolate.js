  var ingredientsCB = $('.ingredients-checkbox')
  var ingredients = $('.ingredients')
  var stepsCB = $('.steps-checkbox')
  var steps = $('.steps')
  var infoCB = $('.info-checkbox')
  var info = $('.info')

  var sections = $('section')
  console.log(sections);

  /*ingredientsCB.change(function(){
    if(this.checked){
      sections.each(function() {
        if($(this).hasClass('ingredients')){
          $(this).fadeOut();
        }
      })
    } else {
          sections.each(function(){
            $(this).fadeIn();
          })
        }
    });

    stepsCB.change(function(){
      if(this.checked){
        sections.each(function() {
          if($(this).hasClass('steps')){
            $(this).fadeOut();
          }
        })
      } else {
            sections.each(function(){
              $(this).fadeIn();
            })
          }
      });

      infoCB.change(function(){
        if(this.checked){
          sections.each(function() {
            if($(this).hasClass('info')){
              $(this).fadeOut();
            }
          })
        } else {
              sections.each(function(){
                $(this).fadeIn();
              })
            }
        });

        */

        ingredientsCB.change(function() {
        if (this.checked) {
          ingredients.fadeOut();
        } else {
          ingredients.fadeIn();
      }
    });

    stepsCB.change(function() {
    if (this.checked) {
      steps.fadeOut();
    } else {
      steps.fadeIn();
    }
  });


  infoCB.change(function() {
  if (this.checked) {
    info.fadeOut();
  } else {
    info.fadeIn();
  }
});
