const express = require('express');
const router = express.Router();
const multer = require('multer')
const multerConfig = require('../api/config/multer')
const { employeeServiceCreate, updateService, getServicesByBarbershopId, getOpeningHoursByBarbershopId, barbershopCreate, getBarbershopSlotsAvailable,barbershopEmployeeCreate, barbershopServiceCreate, barbershopOpeningHoursCreate,getBarbershopCities, getBarbershopDistricts, getAllBarbershops, getAllBarbershopsByCity, getAllBarbershopsByCityDistrict, getBarbershopById, createNewSchedule, getEmployeesByBarbershopId, updateEmployee } = require('../controllers/barbershopController')

/* GET BARBERSHOP PAGE */

router.post('/register', multer(multerConfig).single('file'),barbershopCreate)

router.post('/employee/register', barbershopEmployeeCreate)

router.post('/service/register', barbershopServiceCreate)

router.post('/opening-hours/register', barbershopOpeningHoursCreate)

router.get('/get-cities', getBarbershopCities)

router.get('/get-districts/:cities', getBarbershopDistricts)

router.get('/search', getAllBarbershops)

router.get('/search/:cities', getAllBarbershopsByCity)

router.get('/search/:cities/:districts', getAllBarbershopsByCityDistrict)

router.get('/:id', getBarbershopById)

router.post('/schedule', createNewSchedule)

router.get('/:id/slots', getBarbershopSlotsAvailable)

router.get('/employees/:id', getEmployeesByBarbershopId)

router.post('/employees/delete', updateEmployee)

router.get('/opening-hours/:id', getOpeningHoursByBarbershopId)

router.get('/services/:id', getServicesByBarbershopId)

router.post('/services/delete', updateService)

router.post('/employees/service', employeeServiceCreate)

module.exports = router;