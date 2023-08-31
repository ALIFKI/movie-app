interface MovieList {
  page? : number,
  total_pages? : number,
  total_results? : number,
  results? : Array<any>,
  nextPage? : number
}