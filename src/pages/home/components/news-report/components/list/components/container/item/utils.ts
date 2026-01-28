export function getStarForScore(score: number) {
  switch (true) {
    case score >= 90:
      return 5
    case score >= 80:
      return 4
    case score >= 70:
      return 3
    case score >= 60:
      return 2
    case score >= 50:
      return 1
    default:
      return 0
  }
}