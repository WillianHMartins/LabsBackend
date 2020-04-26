const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/uploads');

const UserController = require('./controllers/UserController');
const EmprestimoController = require('./controllers/EmprestimoController');
const DashboardController = require('./controllers/DashboardController');
const SolicitacaoController = require('./controllers/SolicitacaoController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/clients', UserController.store);

routes.get('/emprestimos', EmprestimoController.index);
routes.post('/emprestimos', upload.single('thumbnail'), EmprestimoController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/emprestimos/:emprestimo_id/solicitacoes', SolicitacaoController.store);

module.exports = routes;