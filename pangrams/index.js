
const s = "thisismeor";

function pangrams(s) {
  const splitSen = s.split('');
  const alpha = 'tsmep'.split("");
  const len = alpha.length

  let counter = 0;

  for (i = 0; i < splitSen.length; i++) {
      for ( j = 0; j < len; j++) {
          i === j ? counter ++ : counter
      }
    }
    console.log(counter)
}
    pangrams(s)