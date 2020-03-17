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

  // 1. event keypress
  // 2. event argument get key value, e.key and e.target.value
  // 3. feifa key filter, e.preventDefault
  // 4. 合法字符还要考虑出现的位置，例如：.，e，E，-
  $width.keypress(function(e){
    console.log(e);
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
      return;
    } 
    // 合法字符 e
    // 允许出现在非科学计数法的数字末尾
    // 允许出现在非科学计数法的数字中间
    // 不允许出现在非科学计数法的数字前面
    // 不允许出现在空文本中
    // 不允许出现在负号后面
    // 不允许出现在科学计数法（e和E）数字的末尾
    // 不允许出现在科学计数法数字的前面
    // 不允许出现在科学技术发数字的中间
    var pos = e.target.selectionStart,
        con = e.target.value;
    console.log(pos);
    console.log(con);
    if(e.key === 'e'){
      if(pos === 0 || con.indexOf('e') !== -1 || con.indexOf('E') !== -1){
        e.preventDefault();
        return;
      }
      if(pos ===1 && con.substring(0,1) === '-'){
        e.preventDefault();
        return;
      }
      // 合法字符E
      // 合法字符.
      // 合法字符-
    }
  });
  $height.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
      return;      
    }
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
