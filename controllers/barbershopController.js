const moment = require('moment')
const Barbershop = require('../api/models/Barbershop')
const { QueryTypes } = require('sequelize')
const sequelize = require('../api/config')
const Schedule = require('../api/models/Schedule')
const BarbershopEmployee = require('../api/models/BarbershopEmployee')
const BarbershopService = require('../api/models/BarbershopService')
const BarbershopOpeningHours = require('../api/models/BarbershopOpeningHour')
const EmployeeService = require('../api/models/EmployeeService')

//creates a new barbershop register

async function barbershopCreate (req, res) {  
    
    try {
        const { name, email, phone_number, address, city, zip_code, district, number, state } = req.body

        console.log(req.body)

        const result = await Barbershop.create({
            name,
            cnpj: 'http://localhost:3000/src/images/'+req.file.filename,
            email,
            phone_number,
            address: address+' '+number,
            city,
            state,
            zip_code,
            district,
            active: true
        })
        return res.redirect('http://localhost:3000/barbershop/register/opening-hours/'+result.id)
    } catch (error) {
        return res.json({message: error.message})
    }
}

async function barbershopEmployeeCreate (req, res) {

    try {
        const { barbershop_id, full_name, email, active } = req.body

        const result = await BarbershopEmployee.create({
            barbershop_id,
            full_name,
            email,
            active: true
        })

        const employeeId = result.id

        const employeeService = await EmployeeService.create({
            employee_id: employeeId,
            barbershop_service_id: 1,
            active: true
        })

        return res.json({result, message: 'Barbeiro cadastrado'})
    } catch (error) {
        return res.json({message: error.message})
    }
}

async function employeeServiceCreate ( req, res) {

    try {
        const { employee_id } = req.body

        const result = await EmployeeService.create({
            employee_id: employee_id,
            barbershop_service_id: 1,
            active: true
        })

        return res.json({result, message: 'Barbeiro cadastrado'})
    } catch (error) {
        return res.json({message: error.message})
    }
}

async function barbershopServiceCreate (req, res) {

    try {
        const { barbershop_id, service, price } = req.body

        const result = await BarbershopService.create({
            barbershop_id,
            service,
            description: "descrição",
            price,
            duration: 30,
            active: true
        })
        return res.json({result, message: 'Serviço cadastrado'})
    } catch (error) {
        return res.json({message: error.message})
    }
}

async function barbershopOpeningHoursCreate (req, res) {

    console.log(req.body)

    try {
        const { domingo, segunda, terca, quarta, quinta, sexta, sabado} = req.body

        console.log(domingo)

        const result = await BarbershopOpeningHours.bulkCreate([
            domingo,
            segunda,
            terca,
            quarta,
            quinta,
            sexta,
            sabado
        ])

        const barbershopId = result[0].barbershop_id
        return res.json({result, message:'horarios cadastrados'})
    } catch (error) {
        return res.json({message: error.message})
    }
}




async function getBarbershopDistricts (req, res) {

    var city = req.params.cities
     
    console.log(city)

    try {
        var arrDistrictResult = []
        const district = await sequelize.query("SELECT DISTINCT district FROM barbershops WHERE city ='" + city + "'", { type: QueryTypes.SELECT})
        const arrDistrict = district.map( (district, index) => {
            let map = {
                id: index,
                name: district.district
            }
            arrDistrictResult.push(map)
        })
        return res.json(arrDistrictResult)
    } catch (error) {
        return res.json({message: error.message})
    }
}

async function getBarbershopCities (req, res) {
    try {
        var arrFinal = []
        const cities = await sequelize.query("SELECT DISTINCT city FROM barbershops", { type: QueryTypes.SELECT})
        const resultCities = cities.map( (city, index) => {
            let teste ={
                id: index,
                name: city.city
            }
            arrFinal.push(teste)
        } )
        return res.json(arrFinal)
    } catch (error) {
        return res.json({message: error.message})
    }
}

async function getAllBarbershops (req, res) {
    try {
        const barbershops = await sequelize.query("SELECT * FROM barbershops WHERE active = true", { type: QueryTypes.SELECT})
        return res.json(barbershops)
    } catch (error) {
        return res.json({message: error.message})
    }
}

async function getAllBarbershopsByCity (req, res) {

    var city = req.params.cities

    try {
        const barbershops = await sequelize.query("SELECT * FROM barbershops WHERE active = true and city = '" + city + "'", {type: QueryTypes.SELECT})
        return res.json(barbershops)
    } catch (error) {
        return res.json({message: error.message})
    }
}

async function getAllBarbershopsByCityDistrict (req, res) {
    var city = req.params.cities
    var district = req.params.districts 

    try {
        const barbershops = await sequelize.query("SELECT * FROM barbershops WHERE active = true and city = '" + city + "' AND district = '" + district +"'", {type: QueryTypes.SELECT})
        return res.json(barbershops)
    } catch (error) {
        return res.json({message: error.message})
    }
}

async function getBarbershopById (req, res) {

    var idBarbershop = req.params.id

    try {
        const barbershops = await sequelize.query("SELECT * FROM barbershops WHERE id =" + idBarbershop, {type: QueryTypes.SELECT})

        const barbershopEmployees = await sequelize.query("SELECT * FROM barbershop_employees WHERE barbershop_id =" + idBarbershop + " AND active = true", {type: QueryTypes.SELECT})

        const barbershopServices= await sequelize.query("SELECT * FROM barbershop_services WHERE barbershop_id =" + idBarbershop + " AND active = true", {type: QueryTypes.SELECT})

        const result = {
            barbershops,
            barbershopEmployees,
            barbershopServices
        }
        return res.json(result)
    } catch (error) {
        return res.json({message: error.message})
    }
}

async function getBarbershopSlotsAvailable (req, res) {

    const barbershopId = req.params.id

    const dateSlots = req.query.date

    const employeeId = req.query.employee

    const weekDay = moment(dateSlots).format('d')

    const {opened, opening_time, closing_time} = await getBarbershopOpeningHours(barbershopId, weekDay)

    const openingTime = moment(dateSlots+' '+opening_time).format('YYYY-MM-DD HH:mm')
    
    const closingTime = moment(dateSlots+' '+closing_time).format('YYYY-MM-DD HH:mm')

    const slots = barbershopSlotsCalculation( opened, openingTime, closingTime)

    const slotsTaken = await checkSlotsAvailability(openingTime, closingTime, employeeId)

    const finalSlots = finalAvailableSlots(slots, slotsTaken)

    return res.json(finalSlots)

}

async function getBarbershopOpeningHours (barbershopId, weekDay) {

    try {
        const result = await sequelize.query("SELECT opened, opening_time, closing_time FROM barbershop_opening_hours WHERE barbershop_id = "+barbershopId+" and weekday = "+weekDay, {type: QueryTypes.SELECT})
        return result[0]
    } catch (error) {
        return console.log(error.message)
    }
}

function barbershopSlotsCalculation ( opened, openingTime, closingTime ) {

    const slotsArr = []

    const start = moment(openingTime)
    const end = moment(closingTime)

    if ( opened ) {
        while(!start.isSame(end)) {
            slotsArr.push(start.format('HH:mm'))
            start.add(30, 'minutes')
        }
    } 
    return slotsArr
}

async function checkSlotsAvailability (openingTime, closingTime, employeeId) {

    const openingAjusted = moment(openingTime).add(3, 'hours').format("YYYY-MM-DD HH:mm:ss")
    const closingAjusted = moment(closingTime).add(3, 'hours').format("YYYY-MM-DD HH:mm:ss")
    
    try {
        const result = await sequelize.query("SELECT schedule_datetime FROM schedules WHERE employee_service_id = "+employeeId+" and (schedule_datetime between '"+openingAjusted+"' and '"+closingAjusted+"')", {type: QueryTypes.SELECT})

        const resultArr = []

        result.map( slotsTaken =>  {
            const time = moment(slotsTaken.schedule_datetime).format('HH:mm')
            resultArr.push(time)
        })

        return resultArr
    } catch (error) {
        console.log( error.message )
    }
}

function finalAvailableSlots( allSlots, occupiedSlots ) {

    for ( i = 0 ; i < allSlots.length ; i++) {

        const slotTaken = occupiedSlots.filter( slot => slot == allSlots[i])

        if (slotTaken.length != 0) {
            allSlots.splice(i, 1)
        }
    }
    return allSlots

}

async function createNewSchedule (req, res) {

    console.log(req.body)
    
    try {
    
    const { customer_id, barbershop_id, employee_service_id, schedule_datetime, estimated_endtime, barbershop_service_id } = req.body
    
    const schedule = await Schedule.create({
        customer_id,
        barbershop_id,
        employee_service_id,
        schedule_datetime,
        estimated_endtime,
        schedule_status: 'Agendado',
        barbershop_service_id
    })

    return res.json(schedule)

    } catch (error) {
        return res.json({message: error.message})
    }
}

async function getEmployeesByBarbershopId (req, res) {
    
    const barbershopId = req.params.id
    
    try {
        const result = await sequelize.query("SELECT * FROM barbershop_employees WHERE barbershop_id = "+barbershopId+" AND active = true", {type: QueryTypes.SELECT})
        return res.json(result)
    } catch (error) {
        return res.json({message: error.message})
    }
}

async function updateEmployee (req, res) {
    
    const {employeeId} = req.body

    try {
        const result = await BarbershopEmployee.update({
            active: false
        },
        {
            where: {
                id: employeeId
            }
        })
        return res.json(result)
    } catch (error) {
        return res.json({message: error.message})
    }
}

async function getOpeningHoursByBarbershopId (req, res) {

    const barbershopId = req.params.id

    try {
        const result = await BarbershopOpeningHours.findAll({
            where: {
                barbershop_id: barbershopId
            }
        })
        return res.json(result)
    } catch (error) {
        return res.json({message: error.message})
    }

}

async function getServicesByBarbershopId (req, res) {
    
    const barbershopId = req.params.id
    
    try {
        const result = await sequelize.query("SELECT * FROM barbershop_services WHERE barbershop_id = "+barbershopId+" AND active = true", {type: QueryTypes.SELECT})
        return res.json(result)
    } catch (error) {
        return res.json({message: error.message})
    }
}

async function updateService (req, res) {
    
    const {serviceId} = req.body

    console.log(req.body)

    try {
        const result = await BarbershopService.update({
            active: false
        },
        {
            where: {
                id: serviceId
            }
        })
        return res.json(result)
    } catch (error) {
        return res.json({message: error.message})
    }
}

module.exports = {
    barbershopCreate,
    getBarbershopCities,
    getBarbershopDistricts,
    getAllBarbershops,
    getAllBarbershopsByCity,
    getAllBarbershopsByCityDistrict,
    getBarbershopById,
    createNewSchedule,
    barbershopEmployeeCreate,
    barbershopServiceCreate,
    barbershopOpeningHoursCreate,
    getBarbershopSlotsAvailable,
    getEmployeesByBarbershopId,
    updateEmployee,
    getOpeningHoursByBarbershopId,
    getServicesByBarbershopId,
    updateService,
    employeeServiceCreate
}