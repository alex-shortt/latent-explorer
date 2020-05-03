import * as tf from "@tensorflow/tfjs"
import { v1 as uuidv1 } from "uuid"

import Vector from "./Vector"

export default class Path {
  constructor(dimensions, startVector, endVector, props = {}) {
    const {
      name = "Untitled Path",
      interpolation = "linear",
      steps = 5
    } = props

    const startTensor = startVector.getTensor()
    const endTensor = endVector.getTensor()

    const vectors = []

    vectors.push(
      new Vector(dimensions, {
        name: `0% | ${name}`,
        tensor: startTensor
      })
    )

    // loop from 1 to steps - 2
    for (let i = 1; i <= steps - 2; i += 1) {
      const percent = i / (steps - 1)
      const newTensor = startTensor.add(endTensor.sub(startTensor).mul(percent))
      console.log(newTensor)
      const newVector = new Vector(dimensions, {
        name: `${percent.toFixed(2) * 100}% | ${name}`,
        tensor: newTensor
      })
      vectors.push(newVector)
      console.log(newVector)
    }

    vectors.push(
      new Vector(dimensions, {
        name: `100% | ${name}`,
        tensor: endTensor
      })
    )

    // exports
    this.vectors = vectors
    this.interpolation = interpolation
    this.steps = steps
    this.name = name
    this.id = uuidv1()
  }

  getName() {
    return this.name
  }

  getVectors() {
    return this.vectors
  }

  getId() {
    return this.id
  }

  async loadResponses(url) {
    for (const vector of this.vectors) {
      // eslint-disable-next-line no-await-in-loop
      await vector.loadResponse(url)
    }
  }

  setName(newn) {
    this.name = newn
  }
}
