const holidaylist = [
  { name: "元旦", startday: "2019-1-1" },
  { name: "除夕", startday: "2019-2-4" },
  { name: "春节", startday: "2019-2-5" },
  { name: "清明节", startday: "2019-4-5" },
  { name: "劳动节", startday: "2019-5-1" },
  { name: "端午节", startday: "2019-6-7" },
  { name: "中秋节", startday: "2019-9-13" },
  { name: "国庆节", startday: "2019-10-1" }
];
const msg = {
  isTime: false,
  msg: ""
};
function filterDate(date) {
  getDate(date);
  return isTime(date);
}
function getDay(date) {
  if (!date) return "";
  return new Date(date).getDay();
}

function getWeekNumber(date) {
  if (!date) return "";
  const status = [0, 6].includes(getDay(date));
  if (status) {
    msg.msg = "周六日";
  }
  return status;
}

function isTime(date) {
  if (!date) return true;
  let time = [];
  function f(date) {
    time = holidaylist.filter(el => {
      const startday = new Date(el.startday).getTime();
      let today = new Date(date);
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);
      today = today.getTime();
      if (startday === today) {
        msg.msg = el.name;
      }
      return startday === today;
    });
    return {
      isTime: !!(time.length > 0 || getWeekNumber(date)),
      msg: msg.msg || ""
    };
  }
  return f(date);
}

function getDate(date) {
  if (!date || new Date().getFullYear() !== new Date(date).getFullYear()) {
    msg.isTime = true;
    msg.msg = "请传入参数";
  }
  return msg;
}

export default { filterDate };
