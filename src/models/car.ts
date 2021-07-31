export interface Car {
    model: string,
    coloursByPopularity: string[],
    speedStats: SpeedStats
}

interface SpeedStats {
    topSpeed: number,
    zeroToSixty: number
}
