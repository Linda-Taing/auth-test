import { carsService } from "../services/CarsService.js";
import BaseController from "../utils/BaseController.js";

export class CarsController extends BaseController {
    constructor() {
        super('api/cars')
        this.router
            .get('', this.getCars)
            .get('', this.getCarsById)
            .post('', this.createCar)
            .put('/:carId', this.updateCarById)
            .delete('/:carId', this.destroyCarById)

    }
    async updateCarById(req, res, next) {
        try {
            const carId = req.params.carId
            const carData = req.body
            const updatedCar = await carsService.updateCarById(carId, carData)
            return res.send(updatedCar)
        } catch (error) {
            next(error)
        }

    }
    async destroyCarById(req, res, next) {
        try {
            const carId = req.params.carId
            const car = await carsService.destroyCarById(carId)
        } catch (error) {
            next(error)
        }
    }
    async getCarsById(req, res, next) {
        try {
            const carId = req.params.carId
            const car = await carsService.getCarById()

        } catch (error) {
            next(error)
        }
    }
    async createCar(req, res, next) {
        try {
            const carData = req.body
            const car = await carsService.createCar(carData)
            res.send(car)

        } catch (error) {
            next(error)
        }
    }

    async getCars(req, res, next) {
        try {
            const cars = await carsService.getCars()
            res.send(cars)
        } catch (error) {
            next(error)

        }

    }

}