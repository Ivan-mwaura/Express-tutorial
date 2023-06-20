const express = require('express')
const router = express.Router();

const {
  getPeople,
  createPerson,
  createpersonPostman,
  updatePerson,
  deletePerson
} = require('../controllers/people')

//METHODS FOR SETTING THE ROUTES

//METHOD1
/*
router.get('/',getPeople)
//post route
router.post('/', createPerson)
//postman route
router.post('/postman',createpersonPostman)
//put
router.put('/:id',updatePerson)
//delete
router.delete('/:id', deletePerson)
*/

//METHOD 2(preferred!!)

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createpersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router;