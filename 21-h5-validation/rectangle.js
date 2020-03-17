$(function() {

  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      //$btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $form = $('form'),
      $area = $('#area');
      

  /*calc button click.event*/
  $form.submit(function(e) {
    e.preventDefault();

    // get value
    var w = Number($width.val()),
        h = Number($height.val());

    // calculate
    var p = roundFractional(2 * (w + h),2),
        a = roundFractional(w * h,2);

    // out put
    
    $perimeter.val(p);
    $area.val(a); 
  
  });

  /**
   * 小数点后面保留第 n 位
   * 
   * @param x 做近似处理的数
   * @param n 小数点后第 n 位
   * @returns 近似处理后的数 
   */
  function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);     
  }

});
