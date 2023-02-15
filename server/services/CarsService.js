import { BadRequest } from "../utils/Errors.js"
import { dbContext } from "../db/DbContext.js"
class CarsService {

    async updateCarById(carId, carData) {
        const foundCar = await this.getCarById(carId)
        foundCar.description = carData.description || foundCar.description
        foundCar.price = carData.price || foundCar.price
        foundCar.imgUrl = carData.imgUrl || foundCar.imgUrl
        foundCar.leaksOil = carData.leaksOil != null ? carData.leaksOil : foundCar.leaksOil

        await foundCar.save()
        return foundCar

    }
    async destroyCarById(carId) {
        const car = await this.getCarById(carId)
        await car.remove()
        return car
    }


    async getCarById(carId) {
        const car = await dbContext.Cars.findById(carId)
        if (!car) {
            throw new BadRequest('Invalid Car ID')
        }
        return car
    }


    async createCar(carData) {
        const car = await dbContext.Cars.create(carData)
        return car
    }

    async getCars() {
        const cars = await dbContext.Cars.find()
        return cars

    }

}
export const carsService = new CarsService()