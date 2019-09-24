import { Toast } from "vant";
export function loading(message = "提交中") {
  Toast.loading({
    mask: true,
    duration: 0,
    message: message
  });
}
