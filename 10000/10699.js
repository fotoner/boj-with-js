const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
const time = new Date();
time.setTime(time.getTime() + KR_TIME_DIFF);

console.log(time.toISOString().split('T')[0]);
