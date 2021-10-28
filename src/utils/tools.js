export function filterOpt(input, option) {
  return (
    option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
  );
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}