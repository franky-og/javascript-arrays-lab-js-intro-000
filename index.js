var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten (kittens, element) {
 kittens = kittens.push(element);
  return kittens;
}