/**
    Container With Most Water

    Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

    You may not slant the container.

    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
    Example 2:

    Input: height = [1,1]
    Output: 1
    Example 3:

    Input: height = [4,3,2,1,4]
    Output: 16
    Example 4:

    Input: height = [1,2,1]
    Output: 2
    
    Constraints:

    n == height.length
    2 <= n <= 105
    0 <= height[i] <= 104
 * 
 * @param {number[]} height
 * @return {number}
 */

function maxArea(height) {
  return Math.max(processForward(height), processReverse(height))
}

function processForward(height) {
  let area = 0
  let tmpArea = 0

  console.log(height)

  for (let i=0; i < height.length-1; i++) {
     if (height[0] > height[i+1]) {
       continue
     }
     tmpArea = height[0] * i+1
     console.log("processForward tmpArea:",tmpArea)
     if (tmpArea > area) {
      area = tmpArea
      console.log("processForward area:",area)
     }
  }
  return area
}

function processReverse(height) {
  let area = 0
  let tmpArea = 0

  height.unshift(0)
  console.log(height)

  lastX = height.length -1
  for (let i=lastX; i > 0; i--) {
     if (height[lastX] > height[i-1]) {
       continue
     }
     console.log("height[i-1]:",height[i-1])
     tmpArea = height[lastX] * (lastX - (i-1))
     console.log("tmpArea:",tmpArea)
     if (tmpArea > area) {
      area = tmpArea
      console.log("area:",area)
     }
  }
  return area
}

module.exports = maxArea