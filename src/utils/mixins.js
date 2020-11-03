export const toRem = size => `${size / 10}rem`

export const toRgba = (rgb, alpha) =>
  `rgba(${rgb.substring(4, rgb.length - 1)},${alpha})`

export const breakpoints = {
  // 1920px
  largeDesktop: "(min-width: 120em)",

  // 1440px
  bigDesktop: "(min-width: 90em)",

  // 1120px
  desktop: "(min-width: 70em)",

  // 1024px
  laptop: "(min-width: 64em)",

  // 850px
  tabletSpec: "(min-width: 53.125em)",

  // 768px
  tablet: "(min-width: 48em)",

  // 600px
  phablet: "(min-width: 37.5em)",

  // 300px
  fromMobile: "(min-width: 18.75em)",

  // 400px
  smallmobileonly: "(max-width: 25em)",

  // 768px
  belowTablet: "(max-width: 48em)",

  // 600px
  mobileonly: "(max-width: 37.5em)",
}

export const Stringify = str => {
  str = str.replace(/^\s+|\s+$/g, "") // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;"
  var to = "aaaaaeeeeiiiioooouuuunc------"

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-") // collapse dashes

  return str
}

export const isOdd = num => {
  return num % 2
}
