function cackPoint(num, targetNum, step, otherStep) {
  let minStep = 100;
  let goToUp = targetNum - num;

  let goToDoen = 100;
  let helfTarget = Math.floor(targetNum / 2);
  if (num >= helfTarget) {
    /*add 1 to pow by 2 and add 1 if it un even*/
    goToDoen = num - helfTarget + (targetNum % 2) + 1;
  }
  minStep = Math.min(Math.min(goToDoen, goToUp) + step, otherStep);
  /*add 1 to divide by 2, add 1 to pow by 2 and add 1 if un enen*/
  step += 2 + (targetNum % 2);
  if (step + 1 >= minStep) {
    return minStep;
  }
  return Math.min(
    minStep,
    cackPoint(Math.floor(num / 2), helfTarget, step, minStep)
  );
}
