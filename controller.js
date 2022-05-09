require('dotenv').config()
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    getAllClients: (req, res) => {
        sequelize.query(`select a.first_name, a.last_name, a.user_id
        from cc_users a
        join cc_users a
        on cc_clients b
        on a.user_id =  = b.user_id;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
        }
    },


module.exports = {
        getPendingAppointments: (req, res) => {
            sequelize.query(`select a.appt_id, a.date, a.service_type, a.approved, a.completed, u.first_name, u.last_name 
            from cc_appointments a
            where a.approved = true and a.completed = false;`)
                .then(dbRes => res.status(200).send(dbRes[0]))
                .catch(err => console.log(err))
        }
     },

 module.exports = {
        getPastAppointments: (req, res) => {
            sequelize.query(`select a.appt_id, a.date, a.service_type, a.approved, a.completed, u.first_name, u.last_name 
            from cc_appointments a
            where a.approved = true and a.completed = false;`)
                .then(dbRes => res.status(200).send(dbRes[0]))
                .catch(err => console.log(err))
        }
     }



let nextEmp = 5

module.exports = {
    getUpcomingAppointments: (req, res) => {
        sequelize.query(`select a.appt_id, a.date, a.service_type, a.approved, a.completed, u.first_name, u.last_name 
        from cc_appointments a
        join cc_emp_appts ea on a.appt_id = ea.appt_id
        join cc_employees e on e.emp_id = ea.emp_id
        join cc_users u on e.user_id = u.user_id
        where a.approved = true and a.completed = false
        order by a.date desc;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))

    },

    approveAppointment: (req, res) => {
        let {apptId} = req.body
    
        sequelize.query(`update cc_emp_appts 
        set approved = true
        where appt_id = ${apptID}
        
        insert into cc_emp_appts (emp_id, appt_id)
        values (${nextEmp}, ${apptId}),
        (${nextEmp + 1}, ${apptId});
        `)
            .then(dbRes => {
                res.status(200).send(dbRes[0])
                nextEmp += 2
            })
            .catch(err => console.log(err))

},

    completeAppointment: (req, res) => {
      let {apptId} = req.body

      sequelize.query(`update cc_emp_appts 
        set completed = true
        where appt_id = ${apptID}
        `)
        .then(dbRes => {
            res.status(200).send(dbRes[0])
        })
        .catch(err => console.log(err))
    }
}