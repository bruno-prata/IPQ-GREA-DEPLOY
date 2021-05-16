var express = require('express');
var router = express.Router();


const auth = require("../middlewares/usersession");

const viewcontrollers = require("../controllers/controllers");


/* GET home page. */

router.get('/', viewcontrollers.index);

router.get('/logout', viewcontrollers.logout);

router.get('/dashboard', auth.continuaLogado, viewcontrollers.dashboard);

router.get('/dashboardAdmin', auth.continuaLogado, viewcontrollers.dashboardAdmin);

router.post('/login', viewcontrollers.login);

router.get('/cadastroPaciente', auth.continuaLogado, viewcontrollers.cadastroPaciente);

router.post('/cadastrarNovoPaciente', auth.continuaLogado, viewcontrollers.cadastrarNovoPaciente);

router.get('/buscaPaciente', auth.continuaLogado, viewcontrollers.buscaPaciente);

router.get('/verCadastroPaciente', auth.continuaLogado, viewcontrollers.verCadastroPaciente);

router.post('/editarPaciente', auth.continuaLogado, viewcontrollers.editarCadastroPaciente);

router.get('/PacienteOptions', auth.continuaLogado, viewcontrollers.verAvaliacoesPaciente);

//URICA
router.get('/URICA', auth.continuaLogado, viewcontrollers.URICA);

router.post('/GravarNovoURICA', auth.continuaLogado, viewcontrollers.GravarNovoURICA);

router.get('/verURICA', auth.continuaLogado, viewcontrollers.verURICA);

router.post('/editarURICA', auth.continuaLogado, viewcontrollers.editarURICA);

//ASI16
router.get('/ASI16', auth.continuaLogado, viewcontrollers.ASI16);

router.post('/GravarNovoASI16', auth.continuaLogado, viewcontrollers.GravarNovoASI16);

router.get('/verASI16', auth.continuaLogado, viewcontrollers.verASI16);

router.post('/editarASI16', auth.continuaLogado, viewcontrollers.editarASI16);

//EVA
router.get('/EVA', auth.continuaLogado, viewcontrollers.EVA);

router.post('/GravarNovoEVA', auth.continuaLogado, viewcontrollers.GravarNovoEVA);

router.get('/verEVA', auth.continuaLogado, viewcontrollers.verEVA);

router.post('/editarEVA', auth.continuaLogado, viewcontrollers.editarEVA);

//COWS
router.get('/COWS', auth.continuaLogado, viewcontrollers.COWS);

router.post('/GravarNovoCOWS', auth.continuaLogado, viewcontrollers.GravarNovoCOWS);

router.get('/verCOWS', auth.continuaLogado, viewcontrollers.verCOWS);

router.post('/editarCOWS', auth.continuaLogado, viewcontrollers.editarCOWS);

//BDI
router.get('/BDI', auth.continuaLogado, viewcontrollers.BDI);

router.post('/GravarNovoBDI', auth.continuaLogado, viewcontrollers.GravarNovoBDI);

router.get('/verBDI', auth.continuaLogado, viewcontrollers.verBDI);

router.post('/editarbDI', auth.continuaLogado, viewcontrollers.editarBDI);

//ASRS
router.get('/ASRS', auth.continuaLogado, viewcontrollers.ASRS);

router.post('/GravarNovoASRS', auth.continuaLogado, viewcontrollers.GravarNovoASRS);

router.get('/verASRS', auth.continuaLogado, viewcontrollers.verASRS);

router.post('/editarASRS', auth.continuaLogado, viewcontrollers.editarASRS);

//BAI
router.get('/BAI', auth.continuaLogado, viewcontrollers.BAI);

router.post('/GravarNovoBAI', auth.continuaLogado, viewcontrollers.GravarNovoBAI);

router.get('/verBAI', auth.continuaLogado, viewcontrollers.verBAI);

router.post('/editarBAI', auth.continuaLogado, viewcontrollers.editarBAI);

//BSCS
router.get('/BSCS', auth.continuaLogado, viewcontrollers.BSCS);

router.post('/GravarNovoBSCS', auth.continuaLogado, viewcontrollers.GravarNovoBSCS);

router.get('/verBSCS', auth.continuaLogado, viewcontrollers.verBSCS);

router.post('/editarBSCS', auth.continuaLogado, viewcontrollers.editarBSCS);

//CIWAAR
router.get('/CIWAAR', auth.continuaLogado, viewcontrollers.CIWAAR);

router.post('/GravarNovoCIWAAR', auth.continuaLogado, viewcontrollers.GravarNovoCIWAAR);

router.get('/verCIWAAR', auth.continuaLogado, viewcontrollers.verCIWAAR);

router.post('/editarCIWAAR', auth.continuaLogado, viewcontrollers.editarCIWAAR);


module.exports = router;
