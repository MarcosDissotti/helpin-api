'use strict'
const Student = use('App/Models/Student')

class StudentController {

  async store ({ request }) {
    const data = request
      .only([
        "name", 
        "email", 
        "skypeid",
        "hangoutsid",
        "whatsappid", 
        "password", 
        "birthdate", 
        "picture" 
      ])

    return await Student.create(data);
  }

  async show ({ params }) {
    return await Student
      .query()
      .where('id', params['id'])
      .setVisible([
        'name',
        'email',
        'skypeid',
        'whatsappid',
        'hangoutsid',
        'picture'
      ])
      .fetch()
  }

  async update ({ params, request }) {

    const { id } = params

    const data = request
      .only([
        "name", 
        "email", 
        "skypeid",
        "hangoutsid",
        "whatsappid", 
        "password", 
        "birthdate", 
        "picture" 
      ])
    
    return await Student
      .query()
      .where('id', id)
      .update(data)
  }

  async destroy ({ params, request, response }) {
    const { id } = params

    const student = await Student
        .query()
        .where('id', id)
        .delete()

  }
}

module.exports = StudentController
