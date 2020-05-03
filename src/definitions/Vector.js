import * as tf from "@tensorflow/tfjs"
import { v1 as uuidv1 } from "uuid"

export default class Vector {
  constructor(dimensions, props = {}) {
    const { name = "Untitled Vector", vector, zeroVector, randomVector } = props

    let tfVector
    if (vector) {
      try {
        tfVector = tf.tensor(JSON.parse(vector))
      } catch (err) {
        throw new Error("Invalid vector input")
      }
    } else if (zeroVector) {
      tfVector = tf.zeros([dimensions])
    } else if (randomVector) {
      tfVector = tf.truncatedNormal([dimensions], 0, 1)
    } else {
      console.log("Failed creating vector, aborting")
      throw new Error("Invalid vector creation")
    }

    // exports
    this.tensor = tfVector
    this.dimensions = dimensions
    this.name = name
    this.id = uuidv1()
    this.response = null
    this.vectorString = null
  }

  getName() {
    return this.name
  }

  getId() {
    return this.id
  }

  getTensor() {
    return this.tensor
  }

  getVectorString() {
    return this.vectorString
  }

  getResponse() {
    return this.response
  }

  async loadResponse(url) {
    const array = await this.tensor.array()
    this.vectorString = JSON.stringify(array)

    const body = {
      z: array,
      truncation: 0.8
    }

    let response
    try {
      response = await fetch(`${url}/query`, {
        method: "POST",
        body: JSON.stringify(body)
      })
    } catch (err) {
      console.log("Error fetching response")
      console.log(err)
      return
    }

    const result = await response.json()
    if (!response.ok) {
      console.log("Error getting response")
    } else {
      const { image } = result
      this.response = image
    }
  }

  setName(newn) {
    this.name = newn
  }
}
