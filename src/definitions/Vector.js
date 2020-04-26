import * as tf from "@tensorflow/tfjs"
import { v1 as uuidv1 } from "uuid"

export default class Vector {
  constructor(dimensions, props = {}) {
    const { name = "Untitled Vector", vector, zeroVector, randomVector } = props

    let tfVector
    if (vector) {
      tfVector = tf.tensor(vector)
    } else if (!vector && zeroVector) {
      tfVector = tf.zeros([dimensions, 1])
    } else if (!vector && randomVector) {
      tfVector = tf.truncatedNormal([dimensions, 1], 0, 1)
    } else {
      console.log("Failed creating vector, aborting")
      throw new Error("Invalid vector creation")
    }

    // exports
    this.vector = tfVector
    this.dimensions = dimensions
    this.name = name
    this.id = uuidv1()
  }

  getName() {
    return this.name
  }

  getId() {
    return this.id
  }

  getVector() {
    return this.vector
  }
}
