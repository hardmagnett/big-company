export const checkScrollBarPresenceHorizontal = (el: HTMLElement)=>{
  return ((el.scrollHeight - el.clientHeight) > 0)
};
