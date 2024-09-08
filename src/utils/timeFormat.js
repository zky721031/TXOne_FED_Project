export default () => {
  let DT = new Date();
  let Hour = `${DT.getHours() > 10 ? DT.getHours() : `0${DT.getHours()}`}`;
  let Minutes = `${
    DT.getMinutes() > 10 ? DT.getMinutes() : `0${DT.getMinutes()}`
  }`;
  return `${Hour}:${Minutes}`;
};
