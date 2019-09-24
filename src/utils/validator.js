import { Toast } from "vant";
const validate = {
  isEmpty: /^[^\\0]+$/,
  email: /^[A-Za-z\\d]+([-_.][A-Za-z\\d]+)*@([A-Za-z\\d]+[-.])+[A-Za-z\\d]{2,5}$/,
  mobile: /^(0|86|17951)?(1[0-9]{1}[0-9]{1})[0-9]{8}$/,
  password: /^[A-Za-z0-9]{6,12}$/,
  tel: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,
  idNo: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  name: /^[\u4e00-\u9fa5]{2,11}$/,
  verificationCode: /^\d{4,}$/, //验证码
  organizationalCode: /^([0-9A-Z]){8}-[0-9|X]$/, //组织机构代码
  ename: /^[a-z]+$/i, //英文名字
  cfName: /^[\u4e00-\u9fa5]{1,3}$/, //中文姓
  cName: /^[\u4e00-\u9fa5]{1,10}$/, //中文名
  spName: /^\[A-Z]{1,12}$/, //拼音名
  spFname: /^\[A-Z]{1,12}$/, //拼音姓
  ceName: /^[a-zA-Z\u4e00-\u9fa5]+$/, //中英文混合名字
  address: /^[\u4e00-\u9fa5]+[\u4e00-\u9fa5\w\d\s#-]*[\u4e00-\u9fa5]+$/,
  birthNo: /^\b[a-zA-Z]{1}\d{9}\b$/,
  passport: /^1[45][0-9]{7}|([P|p|S|s]\d{7})|([S|s|G|g]\d{8})|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8})|([H|h|M|m]\d{8,10})$/,
  carNum: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
  social: /^[a-zA-Z0-9]{15,18}$/, //统一社会信用代码正则
  chinaEnglish: /^[\u4e00-\u9fa5_a-zA-Z0-9_]{2,}/i,
  number: /^\d+$/,
  numberEnglish: /^[a-zA-Z0-9_]+$/, //案件编号
  officersCertificate: /^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/, // 军官证
  passportId: /^([a-zA-z]|[0-9]){5,17}$/, // 护照
  identityCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, // 大陆身份证
  numberLetter: /^[0-9a-zA-Z]+$/
};

const Rules = {
  isEmpty(value, tip = "信息") {
    console.log(tip + ":" + value);
    if (!value) {
      Toast.fail(`${tip}不能为空`);
      return false;
    } else {
      return true;
    }
  },
  /**
   *
   * @param {*} value 图片所在数组
   * @param {*} len 应该上传的张数
   * @param {*} tip 提示信息
   */
  isEmptyArr(value, len = 1, tip = "") {
    if (value.length == 0) {
      Toast.fail(`请上传${tip}相关证件`);
      return false;
    } else if (value.length < len) {
      Toast.fail(`${tip}相关证件需上传${len}张`);
      return false;
    } else {
      return true;
    }
  },
  verificationCode(value) {
    if (!value) {
      Toast.fail("验证码不能为空");
      return false;
    } else if (!validate.verificationCode.test(value)) {
      Toast.fail("输入正确的验证码");
      return false;
    } else {
      return true;
    }
  },
  organizationalCode(value) {
    if (!value) {
      Toast.fail("组织机构代码不能为空");
      return false;
    } else if (!validate.organizationalCode.test(value)) {
      Toast.fail("输入正确的组织机构代码");
      return false;
    } else {
      return true;
    }
  },
  mobile(value) {
    if (!value) {
      Toast.fail("手机号不能为空");
      return false;
    } else if (!validate.mobile.test(value)) {
      Toast.fail("请输入正确的手机号码");
      return false;
    } else {
      return true;
    }
  },
  phone(value) {
    if (!value) {
      Toast.fail("电话不能为空");
      return false;
    } else if (!validate.tel.test(value) || !validate.tel.test(value)) {
      Toast.fail("请输入正确的联系方式");
      return false;
    } else {
      return true;
    }
  },
  lxphone(value) {
    if (!value) {
      Toast.fail("联系电话不能为空");
      return false;
    } else if (!validate.tel.test(value) || !validate.tel.test(value)) {
      Toast.fail("请输入正确的联系电话");
      return false;
    } else {
      return true;
    }
  },
  password(value) {
    if (!value) {
      Toast.fail("密码不能为空");
      return false;
    } else if (!validate.password.test(value)) {
      Toast.fail("密码由数字、字母组成，长度在6-12位");
      return false;
    } else {
      return true;
    }
  },
  comfirmPwd(oldVal, newVal) {
    if (oldVal !== newVal) {
      Toast.fail("两次输入的密码不一致");
      return false;
    } else {
      return true;
    }
  },
  // 证件号码
  idCard(value) {
    if (!value) {
      Toast.fail("证件号码不能为空");
      return false;
    } else if (!validate.numberLetter.test(value)) {
      Toast.fail("请输入正确的证件号码");
      return false;
    } else {
      return true;
    }
  },
  numberEnglish(value) {
    if (!value) {
      Toast.fail("编号不能为空");
      return false;
    } else if (!validate.numberEnglish.test(value)) {
      Toast.fail("请输入正确的编号");
      return false;
    } else {
      return true;
    }
  },
  // 中英文混合
  ceName(value, tip = "名称") {
    if (!value) {
      Toast.fail(`${tip}不能为空`);
      return false;
    } else if (!validate.ceName.test(value)) {
      Toast.fail(`请输入正确的${tip}`);
      return false;
    } else {
      return true;
    }
  },
  ename(value, tip = "姓名") {
    if (!value) {
      Toast.fail(`${tip}不能为空`);
      return false;
    } else if (!validate.ename.test(value)) {
      Toast.fail("英文姓名格式错误");
      return false;
    } else {
      return true;
    }
  },
  chineseName(value, tip) {
    if (!value) {
      Toast.fail(tip + "姓名不能为空");
      return false;
    } else if (!validate.name.test(value)) {
      Toast.fail("请输入正确的姓名");
      return false;
    } else {
      return true;
    }
  },
  socialCode(value) {
    if (!value) {
      Toast.fail("信用社会代码不能为空");
      return false;
    } else if (!validate.social.test(value)) {
      Toast.fail("请输入正确的信用社会代码");
      return false;
    } else {
      return true;
    }
  },
  address(value) {
    if (!value) {
      Toast.fail("地址不能为空");
      return false;
    } else if (!validate.address.test(value)) {
      Toast.fail("请输入正确的地址");
      return false;
    } else {
      return true;
    }
  },
  idNo(value) {
    if (!value) {
      Toast.fail("身份证号码不能为空");
      return false;
    } else if (!validate.idNo.test(value)) {
      Toast.fail("请输入正确身份证号码");
      return false;
    } else {
      return true;
    }
  },
  passport(value) {
    if (!value) {
      Toast.fail("护照编号不能为空");
      return false;
    } else if (!validate.passport.test(value)) {
      Toast.fail("请输入正确的护照编号");
      return false;
    } else {
      return true;
    }
  },
  isNumber(value, tip) {
    if (!value) {
      Toast.fail("此项不能为空");
      return false;
    } else if (!validate.number.test(value)) {
      Toast.fail(tip + "项必须是数字");
      return false;
    } else {
      return true;
    }
  },
  isNumberNum(value, tip) {
    if (!value) {
      Toast.fail(tip + "不能为空");
      return false;
    } else if (!validate.number.test(value)) {
      Toast.fail(tip + "项必须是数字");
      return false;
    } else {
      return true;
    }
  },
  carNum(value) {
    if (!value) {
      Toast.fail("车牌号不能为空");
      return false;
    } else if (validate.carNum.test(value)) {
      Toast.fail("请输入正确的车牌号");
      return false;
    } else {
      return true;
    }
  },
  birthNo(value) {
    if (!value) {
      Toast.fail("出生证明编号不能为空");
      return false;
    } else if (!validate.birthNo.test(value)) {
      Toast.fail("请输入正确的出生证明编号");
      return false;
    } else {
      return true;
    }
  }
};
export default Rules;
