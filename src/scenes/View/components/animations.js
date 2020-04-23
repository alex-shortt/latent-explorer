import { keyframes } from "styled-components/macro"

const shadow = hue =>
  `text-shadow: 0px 0px 4px hsla(${hue}, 100%, 50%, 0.65), 0px 0px 14px hsla(${hue}, 100%, 50%, 0.47), 0px 0px 28px hsla(${hue}, 100%, 50%, 0.55);`

const animation = numStops => {
  let animString = ""
  for (let i = 0; i <= numStops; i += 1) {
    animString += `${((i / numStops) * 100).toFixed(3)}% {${shadow(
      (i / numStops) * 360
    )}} `
  }
  return animString
}

export const shadowRotate = keyframes`
  ${animation(50)}
`
