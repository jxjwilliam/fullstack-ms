

  const reg = /[^\d]/g;
  const reg2 = /[^\d\.]/g;
  const reg3 = /(^[1-9][0-9]$)|(^100&)|(^[1-9]$)$/; //限制1-100
//金额数字处理
export const numberfun = (num = '',len,float) => {
  let nums = '';
  nums = toString(num);
  if(num === '') {return '';}
 if (float){
    nums = num.replace(reg2,'');
    let index = nums.indexOf('.');
    if(index != -1){
      nums = index === 0 ? '': nums.substr(0,index+1) + (nums.substr(index+1,float)).replace(/[\.]/g,'');
    }  else {
      nums = nums.substr(0,len);
    }
  }  else {
    nums = num.replace(reg,'');
    nums = Number(nums.substr(0,len));
  }
  console.log('numssss',nums);
  return nums;
}
//百分比输入1-100 保留两位小数
export const percent =  (value = '',) => {
  let nums = '';
  nums = value.replace(reg2,'');
  let index = nums.indexOf('0');
  let index2 = nums.indexOf('.');
  if(index === 0 ) { return ''};
  if (Number(nums) > 100) {
      nums = nums.substr(0,2);
    } else if (Number(nums) > 0){
      if(index2 !== -1){
        nums =  nums.substr(0,index2+1) + (nums.substr(index2+1,2)).replace(/[\.]/g,'');
      }  else {
        nums = nums.substr(0,2);
      }
    } else nums = nums.substr(0,2);

  return nums ;
}

//阿拉伯数字转换成大写汉字
export const numberParseChina =  (money) => {
  //汉字的数字
    var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
    //基本单位
    var cnIntRadice = new Array('', '拾', '佰', '仟');
    //对应整数部分扩展单位
    var cnIntUnits = new Array('', '万', '亿', '兆');
    //对应小数部分单位
    var cnDecUnits = new Array('角', '分', '毫', '厘');
    //整数金额时后面跟的字符
    var cnInteger = '整';
    //整型完以后的单位
    var cnIntLast = '元';
    //最大处理的数字
    var maxNum = 999999999999999.99;
    //金额整数部分
    var integerNum;
    //金额小数部分
    var decimalNum;
    //输出的中文金额字符串
    var chineseStr = '';
    //分离金额后用的数组，预定义
    var parts;
    if (money === '') { return ''; }
    money = parseFloat(money);
    if (money >= maxNum) {
      //超出最大处理数字
      return '';
    }
    if (money === 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger;
      return chineseStr;
    }
    //转换为字符串
    money = money.toString();
    if (money.indexOf('.') === -1) {
      integerNum = money;
      decimalNum = '';
    } else {
      parts = money.split('.');
      integerNum = parts[0];
      decimalNum = parts[1].substr(0, 2);
    }
    //获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
      var zeroCount = 0;
      var IntLen = integerNum.length;
      for (var i = 0; i < IntLen; i++) {
        var n = integerNum.substr(i, 1);
        var p = IntLen - i - 1;
        var q = p / 4;
        var m = p % 4;
        if (n === '0') {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            chineseStr += cnNums[0];
          }
          //归零
          zeroCount = 0;
          chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
        }
        if (m === 0 && zeroCount < 4) {
          chineseStr += cnIntUnits[q];
        }
      }
      chineseStr += cnIntLast;
    }
    //小数部分
    if (decimalNum != '') {
      var decLen = decimalNum.length;
      for (var i = 0; i < decLen; i++) {
        var n = decimalNum.substr(i, 1);
        if (n != '0') {
          chineseStr += cnNums[Number(n)] + cnDecUnits[i];
        }
      }
    }
    if (chineseStr === '') {
      chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum === '') {
      chineseStr += cnInteger;
    }
    return chineseStr;
  }
