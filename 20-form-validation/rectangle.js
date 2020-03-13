$(function() {

  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
      

  /*calc button click.event*/
  $btnCal.click(function() {
    // validate
    //validate if error return;
    if(!validate('#width') || !validate('#height')) return;

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

  function validate(field) {
    // get DOM error message
    var $data = $(field),
        $msg  = $(field+'-validation-message');

    // validate null
    if($data.val() === ''){
      $msg.html('不能为空!');
      $data.select();
      return false;
    }

    // validate number
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
      $msg.html('必须是数值!');
      $data.select();
      return false;
    }

    // validate > 0
    if(Number($data.val()) < 0){
      $msg.html('必须大于零!');
      $data.select();
      return false;
    }

    // prompt error message
    // return false;
    
    return true;
  }

  $width.focusout(function(){
    // if(!validate(width)) select this;
    if(!validate('#$width')) $width.select();
  });
  $height.focusout(function(){
    // if(!validate(height)) select this;
    if(!validate('#$height')) $height.select();
  });

});
