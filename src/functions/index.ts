export const  timeConverter = (timestamp:number) => {
  const a = new Date(timestamp * 1000);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${a.getDate()}  ${months[a.getMonth()]}   ${a.getFullYear()}`;
}