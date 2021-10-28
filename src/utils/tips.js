import message from 'ant-design-vue/es/message'
export function tips(res, name) {
  if (res.success) {
    message.success(`${name}成功!`);
  } else {
    message.error(res.errorMsg);
  }
}