export interface Animal {
    name?:string,
    sound:string,
    feedingRequirements?: {
        food: number,
        water: number
    }
}