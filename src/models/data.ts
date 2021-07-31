import {Animal} from "./animal";

const animals: Animal[] = [
    {name: "cat", sound: "meow", feedingRequirements: {food: 2, water: 3}},
    {name: "dog", sound: "woof"}
];

function useAnimals(animal: Animal) {
    return [
        animal.name,
        () => {
            console.log(animal.sound);
        }
    ]
}

export default animals;
export {useAnimals};