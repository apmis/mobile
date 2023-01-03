export function useAppHooks() {
  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return {
    numberWithCommas,
  };
}
