const bcrypt = require("bcrypt");
var bodyParser = require('body-parser');
const { Administradores, Usuarios, Pacientes, URICAtestes, EVAtestes, COWStestes, BDItestes, ASRStestes, BAItestes, BSCStestes, CIWAARtestes, ASI16testes} = require("../models");
const { capitalizeName } = require("../lib/utils");
const { Op } = require("sequelize");


module.exports = {
    index: (req, res, next) => {
        res.render('index', { error : "" });
    },
    login: async (req, res, next) => {
        let { email, senha } = req.body;

        try {
            let admins = await Administradores.findAll(); //puxa todos os cadastros de Admins do DB
            let users = await Usuarios.findAll(); //puxa todos os cadastros de Usuários do DB
            
            let admin = admins.find((admin) => 
            admin.email == email && bcrypt.compareSync(senha, admin.senha)
            ); //verifica se existe algum admin com o email e senha cadastrados

            let user = users.find((user) => 
            user.email == email && bcrypt.compareSync(senha, user.senha)
            ); //verifica se existe algum usuario com o email e senha cadastrados

            if (!user && !admin) {
              return res.render("index", { error: "Usuário/Senha inválido" });
            }

            if (admin) {
                admin.senha = undefined;

                req.session.usuario = admin;
    
                res.redirect("dashboardAdmin");
            }

            if (user) {           
                user.senha = undefined;
            
                req.session.usuario = user;
    
                res.redirect("dashboard");
            }

        } catch (err) {

            return res.status(400).send(err);
            
        }
    },
    logout: async (req, res, next) => {
        if (req.session != null) {
            req.session.destroy();
            res.clearCookie("connect.sid");
            res.redirect("/");
            //return res.json({ msg: 'logging you out' })
          } else {
            return console.log({ msg: 'no user to log out!' })
          }
    },
    dashboard: (req, res, next) => {
        const nomeUsuario = req.session.usuario.nomeCompleto;
        const numeroConselhoUsuario  = req.session.usuario.numeroConselho;
        const profissaoUsuario = req.session.usuario.profissao;
        res.render("dashboard", { nomeUsuario, numeroConselhoUsuario, profissaoUsuario});
    },
    dashboardAdmin: async (req, res, next) => {
        const nomeUsuario = req.session.usuario.nomeCompleto;
        const numeroConselhoUsuario  = req.session.usuario.numeroConselho;
        const profissaoUsuario = req.session.usuario.profissao;

        if (nomeUsuario != 'ADMINISTRADOR') {
            res.render('error');
        }

        res.render("dashboardAdmin", { nomeUsuario, numeroConselhoUsuario, profissaoUsuario});
    },
    cadastroPaciente: (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        //console.log(NomeProfissionalAvaliacao,NumeroConselho,Profissao)
        res.render("cadastroPaciente", { NomeProfissionalAvaliacao, NumeroConselho, Profissao, error : "" });
    },
    cadastrarNovoPaciente: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;

        let { UnidadeAtendimento,
            VinculoHospital,
            QualConvenio,
            OrigemSS,
            EncaminhadoPor,
            NomeSocial,
            Idade,
            CID,
            Naturalidade,
            Nacionalidade,
            Sexo,
            RefSexo,
            Endereco,
            Numero,
            Complemento,
            Bairro,
            Cidade,
            Estado,
            CEP,
            Telefone,
            End,
            EspecificaSituacao,
            TFD,
            EstadoOrigem,
            LocalAcolhimento,
            EspecificarLocalAcolhimento,
            EnderecoAcolhimento,
            TelefoneAcolhimento,
            ContatoAcolhimento,
            Religiao,
            QualReligiao,
            Praticante,
            Escolaridade,
            EnsinoFundamental,
            UltimoAnoEnsinoFundamental,
            EnsinoMedio,
            UltimoEnsinoMedio,
            EnsinoSuperior,
            UltimoEnsinoSuperior,
            CursoTecnico,
            QualCursoTecnico,
            UnidadeEscolar,
            Moradia,
            Construcao,
            ConstrucaoEspecificar,
            RelacaoPropriedade,
            NComodos,
            Banheiros,
            NPessoas,
            InfraestruturaUrbana,
            NomeFam1,
            VinculoFam1,
            IdadeFam1,
            EscolaridadeFam1,
            OcupacaoFam1,
            RendaFam1,
            NomeFam2,
            VinculoFam2,
            IdadeFam2,
            EscolaridadeFam2,
            OcupacaoFam2,
            RendaFam2,
            NomeFam3,
            VinculoFam3,
            IdadeFam3,
            EscolaridadeFam3,
            OcupacaoFam3,
            RendaFam3,
            NomeFam4,
            VinculoFam4,
            IdadeFam4,
            EscolaridadeFam4,
            OcupacaoFam4,
            RendaFam4,
            NomeFam5,
            VinculoFam5,
            IdadeFam5,
            EscolaridadeFam5,
            OcupacaoFam5,
            RendaFam5,
            NomeFam6,
            VinculoFam6,
            IdadeFam6,
            EscolaridadeFam6,
            OcupacaoFam6,
            RendaFam6,
            NomeFam7,
            VinculoFam7,
            IdadeFam7,
            EscolaridadeFam7,
            OcupacaoFam7,
            RendaFam7,
            ProfissaoPaciente,
            OcupacaoPaciente,
            DesempregadoPaciente,
            LocalTrabalho,
            TrabalhoFormal,
            BeneficioPrevidenciario,
            TipoBeneficioPrevidenciario,
            QualBeneficioPrevidenciario,
            BeneficioAssistencial,
            QualBeneficioAssistencial,
            Renda,
            RendaEspecifica,
            PlanoTerapeutico,
            LocalDeAtendimentoUBS,
            LocalDeAtendimentoCAPS,
            TextoLocalDeAtendimentoUBSCAPS,
            TextoLocalDeAtendimentoCRAS,
            TextoLocalDeAtendimentoCREAS,
            LocalDeAtendimentoConselhoTutelar,
            LocalDeAtendimentoConselhoIdoso,
            LocalDeAtendimentoNAI,
            TextoLocalDeAtendimentoConselhosNAI,
            LocalDeAtendimentoVara,
            LocalDeAtendimentoForum,
            TextoLocalDeAtendimentoVaraForum,
            AtendimentoI,
            AtendimentoII1,
            AtendimentoII2,
            AtendimentoII3,
            AtendimentoII4,
            AtendimentoII5,
            AtendimentoII6,
            AtendimentoII7,
            AtendimentoII8,
            AtendimentoII9,
            AtendimentoII10,
            AtendimentoII11,
            AtendimentoIII12,
            AtendimentoIII13,
            AtendimentoIII14,
            AtendimentoIII15,
            AtendimentoIV16,
            AtendimentoIV17,
            AtendimentoIV18,
            AtendimentoIV19,
            AtendimentoV20,
            AtendimentoV21,
            AtendimentoV22,
            AtendimentoV23,
            AtendimentoVI24,
            AtendimentoVI25,
            AtendimentoVI26,
            AtendimentoVI27,
            AtendimentoVI28,
            AtendimentoVI29,
            AtendimentoVII30,
            AtendimentoVII31,
            AtendimentoVII32,
            AtendimentoVII33,
            AtendimentoVII34,
            AtendimentoVII35,
            AtendimentoVII36,
            AtendimentoVII37,
            AtendimentoVII38,
            AtendimentoVII39,
            AtendimentoVII40,
            AtendimentoVII41,
            AtendimentoVII42,
            Programas,
            Outros,
            Intervencao1,
            Intervencao2,
            Intervencao3,
            Intervencao4,
            Intervencao5,
            Intervencao6,
            Intervencao7,
            Intervencao8,
            Intervencao9,
            Intervencao10,
            Intervencao11,
            Intervencao12,
            Intervencao13,
            Intervencao14,
            Intervencao15,
            Intervencao16,
            Intervencao17,
            Intervencao18,
            Intervencao19,
            Intervencao20,
            Intervencao21,
            Intervencao22,
            Intervencao23,
            Intervencao24,
            Intervencao25,
            Intervencao26,
            Intervencao27,
            Intervencao28,
            Intervencao29,
            Intervencao30,
            Intervencao31,
            Intervencao32,
            Intervencao33,
            Intervencao34,
            Intervencao35,
            Intervencao36,
            Intervencao37,
            Intervencao38,
            Intervencao39,
            Intervencao40,
            Intervencao41,
            OutrasIntervencoes,
            DadosAlta,
            RelatorioAtendimento,
        } = req.body;
        
        let Paciente = await Pacientes.findOne({ where: { NomeSocial } });

        console.log(NomeSocial);

        if (Paciente) {
            return res.render("cadastroPaciente", { NomeProfissionalAvaliacao, NumeroConselho, Profissao, error: "Paciente já cadastrado" });
        }

        try {
            // create a new user with the password hash from bcrypt
            await Pacientes.create({
                UnidadeAtendimento,
                VinculoHospital,
                QualConvenio,
                OrigemSS,
                EncaminhadoPor,
                NomeSocial: capitalizeName(NomeSocial.trim()),
                Idade,
                CID,
                Naturalidade,
                Nacionalidade,
                Sexo,
                RefSexo,
                Endereco,
                Numero,
                Complemento,
                Bairro,
                Cidade,
                Estado,
                CEP,
                Telefone,
                End,
                EspecificaSituacao,
                TFD,
                EstadoOrigem,
                LocalAcolhimento,
                EspecificarLocalAcolhimento,
                EnderecoAcolhimento,
                TelefoneAcolhimento,
                ContatoAcolhimento,
                Religiao,
                QualReligiao,
                Praticante,
                Escolaridade,
                EnsinoFundamental,
                UltimoAnoEnsinoFundamental,
                EnsinoMedio,
                UltimoEnsinoMedio,
                EnsinoSuperior,
                UltimoEnsinoSuperior,
                CursoTecnico,
                QualCursoTecnico,
                UnidadeEscolar,
                Moradia,
                Construcao,
                ConstrucaoEspecificar,
                RelacaoPropriedade,
                NComodos,
                Banheiros,
                NPessoas,
                InfraestruturaUrbana,
                NomeFam1: capitalizeName(NomeFam1.trim()),
                VinculoFam1,
                IdadeFam1,
                EscolaridadeFam1,
                OcupacaoFam1,
                RendaFam1,
                NomeFam2: capitalizeName(NomeFam2.trim()),
                VinculoFam2,
                IdadeFam2,
                EscolaridadeFam2,
                OcupacaoFam2,
                RendaFam2,
                NomeFam3: capitalizeName(NomeFam3.trim()),
                VinculoFam3,
                IdadeFam3,
                EscolaridadeFam3,
                OcupacaoFam3,
                RendaFam3,
                NomeFam4: capitalizeName(NomeFam4.trim()),
                VinculoFam4,
                IdadeFam4,
                EscolaridadeFam4,
                OcupacaoFam4,
                RendaFam4,
                NomeFam5: capitalizeName(NomeFam5.trim()),
                VinculoFam5,
                IdadeFam5,
                EscolaridadeFam5,
                OcupacaoFam5,
                RendaFam5,
                NomeFam6: capitalizeName(NomeFam6.trim()),
                VinculoFam6,
                IdadeFam6,
                EscolaridadeFam6,
                OcupacaoFam6,
                RendaFam6,
                NomeFam7: capitalizeName(NomeFam7.trim()),
                VinculoFam7,
                IdadeFam7,
                EscolaridadeFam7,
                OcupacaoFam7,
                RendaFam7,
                ProfissaoPaciente,
                OcupacaoPaciente,
                DesempregadoPaciente,
                LocalTrabalho,
                TrabalhoFormal,
                BeneficioPrevidenciario,
                TipoBeneficioPrevidenciario,
                QualBeneficioPrevidenciario,
                BeneficioAssistencial,
                QualBeneficioAssistencial,
                Renda,
                RendaEspecifica,
                PlanoTerapeutico,
                LocalDeAtendimentoUBS,
                LocalDeAtendimentoCAPS,
                TextoLocalDeAtendimentoUBSCAPS,
                TextoLocalDeAtendimentoCRAS,
                TextoLocalDeAtendimentoCREAS,
                LocalDeAtendimentoConselhoTutelar,
                LocalDeAtendimentoConselhoIdoso,
                LocalDeAtendimentoNAI,
                TextoLocalDeAtendimentoConselhosNAI,
                LocalDeAtendimentoVara,
                LocalDeAtendimentoForum,
                TextoLocalDeAtendimentoVaraForum,
                AtendimentoI,
                AtendimentoII1,
                AtendimentoII2,
                AtendimentoII3,
                AtendimentoII4,
                AtendimentoII5,
                AtendimentoII6,
                AtendimentoII7,
                AtendimentoII8,
                AtendimentoII9,
                AtendimentoII10,
                AtendimentoII11,
                AtendimentoIII12,
                AtendimentoIII13,
                AtendimentoIII14,
                AtendimentoIII15,
                AtendimentoIV16,
                AtendimentoIV17,
                AtendimentoIV18,
                AtendimentoIV19,
                AtendimentoV20,
                AtendimentoV21,
                AtendimentoV22,
                AtendimentoV23,
                AtendimentoVI24,
                AtendimentoVI25,
                AtendimentoVI26,
                AtendimentoVI27,
                AtendimentoVI28,
                AtendimentoVI29,
                AtendimentoVII30,
                AtendimentoVII31,
                AtendimentoVII32,
                AtendimentoVII33,
                AtendimentoVII34,
                AtendimentoVII35,
                AtendimentoVII36,
                AtendimentoVII37,
                AtendimentoVII38,
                AtendimentoVII39,
                AtendimentoVII40,
                AtendimentoVII41,
                AtendimentoVII42,
                Programas,
                Outros,
                Intervencao1,
                Intervencao2,
                Intervencao3,
                Intervencao4,
                Intervencao5,
                Intervencao6,
                Intervencao7,
                Intervencao8,
                Intervencao9,
                Intervencao10,
                Intervencao11,
                Intervencao12,
                Intervencao13,
                Intervencao14,
                Intervencao15,
                Intervencao16,
                Intervencao17,
                Intervencao18,
                Intervencao19,
                Intervencao20,
                Intervencao21,
                Intervencao22,
                Intervencao23,
                Intervencao24,
                Intervencao25,
                Intervencao26,
                Intervencao27,
                Intervencao28,
                Intervencao29,
                Intervencao30,
                Intervencao31,
                Intervencao32,
                Intervencao33,
                Intervencao34,
                Intervencao35,
                Intervencao36,
                Intervencao37,
                Intervencao38,
                Intervencao39,
                Intervencao40,
                Intervencao41,
                OutrasIntervencoes,
                DadosAlta,
                RelatorioAtendimento,
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
      
            let Paciente = await Pacientes.findOne({ where: { NomeSocial } });

            return res.redirect("/PacienteOptions?id="+Paciente.id);
          } catch (err) {
            return res.status(400).send(err);
          }
        
    },
    buscaPaciente: async (req, res, next) => {
        const NomeSocial = capitalizeName(req.query.buscaNomePaciente.trim());

        let listaPacientes = await Pacientes.findAll({
            where: {
                NomeSocial: {
                    [Op.like]: NomeSocial+'%'
                  }
              },
              order: [['NomeSocial', 'ASC'],]
        });

        if (listaPacientes.length <= 0 || NomeSocial == '') {
            let listaPacientes = await Pacientes.findAll({order: [['NomeSocial', 'ASC'],]});
            return res.render('buscaPaciente', { error: "Não foi encontrado paciente com este nome, Selecione um dos pacientes abaixo:" , listaPacientes});
        }

        res.render('buscaPaciente', { error : "" , listaPacientes});
    },
    verCadastroPaciente: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.id;
        let Paciente = await Pacientes.findOne({
            where: { 
                id : id 
            } 
        });
        res.render('editCadastroPaciente', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, msg : "" });
    },
    editarCadastroPaciente: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.id;
        let Paciente = await Pacientes.findByPk(id);

          let { UnidadeAtendimento,
            VinculoHospital,
            QualConvenio,
            OrigemSS,
            EncaminhadoPor,
            NomeSocial,
            Idade,
            CID,
            Naturalidade,
            Nacionalidade,
            Sexo,
            RefSexo,
            Endereco,
            Numero,
            Complemento,
            Bairro,
            Cidade,
            Estado,
            CEP,
            Telefone,
            End,
            EspecificaSituacao,
            TFD,
            EstadoOrigem,
            LocalAcolhimento,
            EspecificarLocalAcolhimento,
            EnderecoAcolhimento,
            TelefoneAcolhimento,
            ContatoAcolhimento,
            Religiao,
            QualReligiao,
            Praticante,
            Escolaridade,
            EnsinoFundamental,
            UltimoAnoEnsinoFundamental,
            EnsinoMedio,
            UltimoEnsinoMedio,
            EnsinoSuperior,
            UltimoEnsinoSuperior,
            CursoTecnico = "N",
            QualCursoTecnico,
            UnidadeEscolar,
            Moradia,
            Construcao,
            ConstrucaoEspecificar,
            RelacaoPropriedade,
            NComodos,
            Banheiros,
            NPessoas,
            InfraestruturaUrbana,
            NomeFam1,
            VinculoFam1,
            IdadeFam1,
            EscolaridadeFam1,
            OcupacaoFam1,
            RendaFam1,
            NomeFam2,
            VinculoFam2,
            IdadeFam2,
            EscolaridadeFam2,
            OcupacaoFam2,
            RendaFam2,
            NomeFam3,
            VinculoFam3,
            IdadeFam3,
            EscolaridadeFam3,
            OcupacaoFam3,
            RendaFam3,
            NomeFam4,
            VinculoFam4,
            IdadeFam4,
            EscolaridadeFam4,
            OcupacaoFam4,
            RendaFam4,
            NomeFam5,
            VinculoFam5,
            IdadeFam5,
            EscolaridadeFam5,
            OcupacaoFam5,
            RendaFam5,
            NomeFam6,
            VinculoFam6,
            IdadeFam6,
            EscolaridadeFam6,
            OcupacaoFam6,
            RendaFam6,
            NomeFam7,
            VinculoFam7,
            IdadeFam7,
            EscolaridadeFam7,
            OcupacaoFam7,
            RendaFam7,
            ProfissaoPaciente,
            OcupacaoPaciente,
            DesempregadoPaciente,
            LocalTrabalho,
            TrabalhoFormal,
            BeneficioPrevidenciario,
            TipoBeneficioPrevidenciario,
            QualBeneficioPrevidenciario,
            BeneficioAssistencial,
            QualBeneficioAssistencial,
            Renda,
            RendaEspecifica,
            PlanoTerapeutico,
            LocalDeAtendimentoUBS = "N",
            LocalDeAtendimentoCAPS = "N",
            TextoLocalDeAtendimentoUBSCAPS,
            TextoLocalDeAtendimentoCRAS,
            TextoLocalDeAtendimentoCREAS,
            LocalDeAtendimentoConselhoTutelar = "N",
            LocalDeAtendimentoConselhoIdoso = "N",
            LocalDeAtendimentoNAI = "N",
            TextoLocalDeAtendimentoConselhosNAI,
            LocalDeAtendimentoVara = "N",
            LocalDeAtendimentoForum = "N",
            TextoLocalDeAtendimentoVaraForum,
            AtendimentoI = "N",
            AtendimentoII1 = "N",
            AtendimentoII2 = "N",
            AtendimentoII3 = "N",
            AtendimentoII4 = "N",
            AtendimentoII5 = "N",
            AtendimentoII6 = "N",
            AtendimentoII7 = "N",
            AtendimentoII8 = "N",
            AtendimentoII9 = "N",
            AtendimentoII10 = "N",
            AtendimentoII11 = "N",
            AtendimentoIII12 = "N",
            AtendimentoIII13 = "N",
            AtendimentoIII14 = "N",
            AtendimentoIII15 = "N",
            AtendimentoIV16 = "N",
            AtendimentoIV17 = "N",
            AtendimentoIV18 = "N",
            AtendimentoIV19 = "N",
            AtendimentoV20 = "N",
            AtendimentoV21 = "N",
            AtendimentoV22 = "N",
            AtendimentoV23 = "N",
            AtendimentoVI24 = "N",
            AtendimentoVI25 = "N",
            AtendimentoVI26 = "N",
            AtendimentoVI27 = "N",
            AtendimentoVI28 = "N",
            AtendimentoVI29 = "N",
            AtendimentoVII30 = "N",
            AtendimentoVII31 = "N",
            AtendimentoVII32 = "N",
            AtendimentoVII33 = "N",
            AtendimentoVII34 = "N",
            AtendimentoVII35 = "N",
            AtendimentoVII36 = "N",
            AtendimentoVII37 = "N",
            AtendimentoVII38 = "N",
            AtendimentoVII39 = "N",
            AtendimentoVII40 = "N",
            AtendimentoVII41 = "N",
            AtendimentoVII42 = "N",
            Programas,
            Outros,
            Intervencao1 = "N",
            Intervencao2 = "N",
            Intervencao3 = "N",
            Intervencao4 = "N",
            Intervencao5 = "N",
            Intervencao6 = "N",
            Intervencao7 = "N",
            Intervencao8 = "N",
            Intervencao9 = "N",
            Intervencao10 = "N",
            Intervencao11 = "N",
            Intervencao12 = "N",
            Intervencao13 = "N",
            Intervencao14 = "N",
            Intervencao15 = "N",
            Intervencao16 = "N",
            Intervencao17 = "N",
            Intervencao18 = "N",
            Intervencao19 = "N",
            Intervencao20 = "N",
            Intervencao21 = "N",
            Intervencao22 = "N",
            Intervencao23 = "N",
            Intervencao24 = "N",
            Intervencao25 = "N",
            Intervencao26 = "N",
            Intervencao27 = "N",
            Intervencao28 = "N",
            Intervencao29 = "N",
            Intervencao30 = "N",
            Intervencao31 = "N",
            Intervencao32 = "N",
            Intervencao33 = "N",
            Intervencao34 = "N",
            Intervencao35 = "N",
            Intervencao36 = "N",
            Intervencao37 = "N",
            Intervencao38 = "N",
            Intervencao39 = "N",
            Intervencao40 = "N",
            Intervencao41 = "N",
            OutrasIntervencoes,
            DadosAlta,
            RelatorioAtendimento
        } = req.body;

        try { 
            await Paciente.update({
                UnidadeAtendimento,
                VinculoHospital,
                QualConvenio,
                OrigemSS,
                EncaminhadoPor,
                NomeSocial: capitalizeName(NomeSocial.trim()),
                Idade,
                CID,
                Naturalidade,
                Nacionalidade,
                Sexo,
                RefSexo,
                Endereco,
                Numero,
                Complemento,
                Bairro,
                Cidade,
                Estado,
                CEP,
                Telefone,
                End,
                EspecificaSituacao,
                TFD,
                EstadoOrigem,
                LocalAcolhimento,
                EspecificarLocalAcolhimento,
                EnderecoAcolhimento,
                TelefoneAcolhimento,
                ContatoAcolhimento,
                Religiao,
                QualReligiao,
                Praticante,
                Escolaridade,
                EnsinoFundamental,
                UltimoAnoEnsinoFundamental,
                EnsinoMedio,
                UltimoEnsinoMedio,
                EnsinoSuperior,
                UltimoEnsinoSuperior,
                CursoTecnico,
                QualCursoTecnico,
                UnidadeEscolar,
                Moradia,
                Construcao,
                ConstrucaoEspecificar,
                RelacaoPropriedade,
                NComodos,
                Banheiros,
                NPessoas,
                InfraestruturaUrbana,
                NomeFam1: capitalizeName(NomeFam1.trim()),
                VinculoFam1,
                IdadeFam1,
                EscolaridadeFam1,
                OcupacaoFam1,
                RendaFam1,
                NomeFam2: capitalizeName(NomeFam2.trim()),
                VinculoFam2,
                IdadeFam2,
                EscolaridadeFam2,
                OcupacaoFam2,
                RendaFam2,
                NomeFam3: capitalizeName(NomeFam3.trim()),
                VinculoFam3,
                IdadeFam3,
                EscolaridadeFam3,
                OcupacaoFam3,
                RendaFam3,
                NomeFam4: capitalizeName(NomeFam4.trim()),
                VinculoFam4,
                IdadeFam4,
                EscolaridadeFam4,
                OcupacaoFam4,
                RendaFam4,
                NomeFam5: capitalizeName(NomeFam5.trim()),
                VinculoFam5,
                IdadeFam5,
                EscolaridadeFam5,
                OcupacaoFam5,
                RendaFam5,
                NomeFam6: capitalizeName(NomeFam6.trim()),
                VinculoFam6,
                IdadeFam6,
                EscolaridadeFam6,
                OcupacaoFam6,
                RendaFam6,
                NomeFam7: capitalizeName(NomeFam7.trim()),
                VinculoFam7,
                IdadeFam7,
                EscolaridadeFam7,
                OcupacaoFam7,
                RendaFam7,
                ProfissaoPaciente,
                OcupacaoPaciente,
                DesempregadoPaciente,
                LocalTrabalho,
                TrabalhoFormal,
                BeneficioPrevidenciario,
                TipoBeneficioPrevidenciario,
                QualBeneficioPrevidenciario,
                BeneficioAssistencial,
                QualBeneficioAssistencial,
                Renda,
                RendaEspecifica,
                PlanoTerapeutico,
                LocalDeAtendimentoUBS,
                LocalDeAtendimentoCAPS,
                TextoLocalDeAtendimentoUBSCAPS,
                TextoLocalDeAtendimentoCRAS,
                TextoLocalDeAtendimentoCREAS,
                LocalDeAtendimentoConselhoTutelar,
                LocalDeAtendimentoConselhoIdoso,
                LocalDeAtendimentoNAI,
                TextoLocalDeAtendimentoConselhosNAI,
                LocalDeAtendimentoVara,
                LocalDeAtendimentoForum,
                TextoLocalDeAtendimentoVaraForum,
                AtendimentoI,
                AtendimentoII1,
                AtendimentoII2,
                AtendimentoII3,
                AtendimentoII4,
                AtendimentoII5,
                AtendimentoII6,
                AtendimentoII7,
                AtendimentoII8,
                AtendimentoII9,
                AtendimentoII10,
                AtendimentoII11,
                AtendimentoIII12,
                AtendimentoIII13,
                AtendimentoIII14,
                AtendimentoIII15,
                AtendimentoIV16,
                AtendimentoIV17,
                AtendimentoIV18,
                AtendimentoIV19,
                AtendimentoV20,
                AtendimentoV21,
                AtendimentoV22,
                AtendimentoV23,
                AtendimentoVI24,
                AtendimentoVI25,
                AtendimentoVI26,
                AtendimentoVI27,
                AtendimentoVI28,
                AtendimentoVI29,
                AtendimentoVII30,
                AtendimentoVII31,
                AtendimentoVII32,
                AtendimentoVII33,
                AtendimentoVII34,
                AtendimentoVII35,
                AtendimentoVII36,
                AtendimentoVII37,
                AtendimentoVII38,
                AtendimentoVII39,
                AtendimentoVII40,
                AtendimentoVII41,
                AtendimentoVII42,
                Programas,
                Outros,
                Intervencao1,
                Intervencao2,
                Intervencao3,
                Intervencao4,
                Intervencao5,
                Intervencao6,
                Intervencao7,
                Intervencao8,
                Intervencao9,
                Intervencao10,
                Intervencao11,
                Intervencao12,
                Intervencao13,
                Intervencao14,
                Intervencao15,
                Intervencao16,
                Intervencao17,
                Intervencao18,
                Intervencao19,
                Intervencao20,
                Intervencao21,
                Intervencao22,
                Intervencao23,
                Intervencao24,
                Intervencao25,
                Intervencao26,
                Intervencao27,
                Intervencao28,
                Intervencao29,
                Intervencao30,
                Intervencao31,
                Intervencao32,
                Intervencao33,
                Intervencao34,
                Intervencao35,
                Intervencao36,
                Intervencao37,
                Intervencao38,
                Intervencao39,
                Intervencao40,
                Intervencao41,
                OutrasIntervencoes,
                DadosAlta,
                RelatorioAtendimento,
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
      
            res.render('editCadastroPaciente', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente , msg :"ALTERAÇÕES GRAVADAS COM SUCESSO"});
          } catch (err) {
            return res.status(400).send(err);
          }
        
    },
    verAvaliacoesPaciente: async (req, res, next) => {
        let id = req.query.id;
        let Paciente = await Pacientes.findOne({
            where: { 
                id : id 
            } 
        });
        let URICA = await URICAtestes.findAll({
            where: { 
                idPaciente : id 
            }     
        });
        let ASI16 = await ASI16testes.findAll({
            where: { 
                idPaciente : id 
            }     
        });
        let EVA = await EVAtestes.findAll({
            where: { 
                idPaciente : id 
            }     
        });
        let COWS = await COWStestes.findAll({
            where: { 
                idPaciente : id 
            }     
        });
        let BDI = await BDItestes.findAll({
            where: { 
                idPaciente : id 
            }     
        });
        let ASRS = await ASRStestes.findAll({
            where: { 
                idPaciente : id 
            }     
        });
        let BAI = await BAItestes.findAll({
            where: { 
                idPaciente : id 
            }     
        });
        let BSCS = await BSCStestes.findAll({
            where: { 
                idPaciente : id 
            }     
        });
        let CIWAAR = await CIWAARtestes.findAll({
            where: { 
                idPaciente : id 
            }     
        });
        res.render('PacienteOptions', { Paciente, URICA, ASI16, EVA, COWS, BDI, ASRS, BAI, BSCS, CIWAAR, msg : "" });
    },
    //TESTES
    //URICA
    URICA: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.id;
        let idPaciente = req.query.id;
        let Paciente = await Pacientes.findByPk(id);
        console.log(idPaciente)
        //console.log(NomeProfissionalAvaliacao,NumeroConselho,Profissao)
        res.render("testeURICA", { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, msg : "" });
    },
    GravarNovoURICA: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.id;
        let idPaciente = req.query.id;

        let { 
            Q1,
            Q2,
            Q3,
            Q4,
            Q5,
            Q6,
            Q7,
            Q8,
            Q9,
            Q10,
            Q11,
            Q12,
            Q13,
            Q14,
            Q15,
            Q16,
            Q17,
            Q18,
            Q19,
            Q20,
            Q21,
            Q22,
            Q23,
            Q24,
            Q25,
            Q26,
            Q27,
            Q28,
            Q29,
            Q30,
            Q31,
            Q32
        } = req.body;

        try {

            await URICAtestes.create({
                idPaciente,
                Q1,
                Q2,
                Q3,
                Q4,
                Q5,
                Q6,
                Q7,
                Q8,
                Q9,
                Q10,
                Q11,
                Q12,
                Q13,
                Q14,
                Q15,
                Q16,
                Q17,
                Q18,
                Q19,
                Q20,
                Q21,
                Q22,
                Q23,
                Q24,
                Q25,
                Q26,
                Q27,
                Q28,
                Q29,
                Q30,
                Q31,
                Q32,
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
        return res.redirect("/PacienteOptions?id="+idPaciente);
        } catch (err) {
            return res.status(400).send(err);
          }
    },
    verURICA: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let URICAid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let URICA = await URICAtestes.findByPk(URICAid);
        res.render('edittesteURICA', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, URICA, msg : "" });
    },
    editarURICA: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let URICAid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let URICA = await URICAtestes.findByPk(URICAid);

          let { 
            Q1,
            Q2,
            Q3,
            Q4,
            Q5,
            Q6,
            Q7,
            Q8,
            Q9,
            Q10,
            Q11,
            Q12,
            Q13,
            Q14,
            Q15,
            Q16,
            Q17,
            Q18,
            Q19,
            Q20,
            Q21,
            Q22,
            Q23,
            Q24,
            Q25,
            Q26,
            Q27,
            Q28,
            Q29,
            Q30,
            Q31,
            Q32
        } = req.body;

        try { 
            await URICA.update({
                Q1,
                Q2,
                Q3,
                Q4,
                Q5,
                Q6,
                Q7,
                Q8,
                Q9,
                Q10,
                Q11,
                Q12,
                Q13,
                Q14,
                Q15,
                Q16,
                Q17,
                Q18,
                Q19,
                Q20,
                Q21,
                Q22,
                Q23,
                Q24,
                Q25,
                Q26,
                Q27,
                Q28,
                Q29,
                Q30,
                Q31,
                Q32,
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });

            URICA = await URICAtestes.findByPk(URICAid);
      
            res.render('edittesteURICA', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, URICA, msg :"ALTERAÇÕES GRAVADAS COM SUCESSO"});
          } catch (err) {
            return res.status(400).send(err);
          }
    },
    //ASI16
    ASI16: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.id;
        let idPaciente = req.query.id;
        let Paciente = await Pacientes.findByPk(id);
        console.log(idPaciente)
        //console.log(NomeProfissionalAvaliacao,NumeroConselho,Profissao)
        res.render("testeASI16", { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, msg : "" });
    },
    GravarNovoASI16: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.id;
        let idPaciente = req.query.id;

        let { 
            D1,
            D2,
            D3,
            D4a,
            D4b,
            D5a,
            D5b,
            D6a,
            D6b,
            D7a,
            D7b,
            D8,
            D9,
            D10,
            D11,
            D12,
            D13,
            D14,
            D15,
            D16,
            D17,
            D18,
            D19,
            D20,
            D21,
            D22,
            D23,
            D24,
            comentarios1,
            D25a,
            D25b,
            D25c,
            D25d,
            D26a,
            D26b,
            D26c,
            D26d,
            D26e,
            D27a,
            D27b,
            D27c,
            D27d,
            D28a,
            D28b,
            D28c,
            D28d,
            D28e,
            D29a,
            D29b,
            D29c,
            D29d,
            D30a,
            D30b,
            D30c,
            D30d,
            D31a,
            D31b,
            D31c,
            D31d,
            D31e,
            D32a,
            D32b,
            D32c,
            D32d,
            D32e,
            D33a,
            D33b,
            D33c,
            D33d,
            D33e,
            comentarios2,
            D34,
            D34a,
            D34b1,
            D34b2,
            D34b3,
            D34b4,
            D34b5,
            D34c1,
            D34c2,
            D34c3,
            D34c4,
            D34c5,
            D34c6,
            D35,
            D35a,
            D35b1,
            D35b2,
            D35b3,
            D35b4,
            D35b5,
            D35c1,
            D35c2,
            D35c3,
            D35c4,
            D35c5,
            D35c6,
            D36,
            D36a,
            D36b1,
            D36b2,
            D36b3,
            D36b4,
            D36b5,
            D36c1,
            D36c2,
            D36c3,
            D36c4,
            D36c5,
            D36c6,
            comentarios3,
            D37,
            D38,
            D39,
            D40,
            D41,
            D42,
            D43,
            D44,
            D45,
            D46,
            D47,
            D48,
            D49,
            D50,
            D51a,
            D51b,
            D52,
            D53a,
            D53b,
            D54,
            D55a,
            D55b,
            D56,
            D57,
            D58,
            D59,
            D60,
            comentarios4
        } = req.body;

        try {

            await ASI16testes.create({
                idPaciente,
                D1,
                D2,
                D3,
                D4a,
                D4b,
                D5a,
                D5b,
                D6a,
                D6b,
                D7a,
                D7b,
                D8,
                D9,
                D10,
                D11,
                D12,
                D13,
                D14,
                D15,
                D16,
                D17,
                D18,
                D19,
                D20,
                D21,
                D22,
                D23,
                D24,
                comentarios1,
                D25a,
                D25b,
                D25c,
                D25d,
                D26a,
                D26b,
                D26c,
                D26d,
                D26e,
                D27a,
                D27b,
                D27c,
                D27d,
                D28a,
                D28b,
                D28c,
                D28d,
                D28e,
                D29a,
                D29b,
                D29c,
                D29d,
                D30a,
                D30b,
                D30c,
                D30d,
                D31a,
                D31b,
                D31c,
                D31d,
                D31e,
                D32a,
                D32b,
                D32c,
                D32d,
                D32e,
                D33a,
                D33b,
                D33c,
                D33d,
                D33e,
                comentarios2,
                D34,
                D34a,
                D34b1,
                D34b2,
                D34b3,
                D34b4,
                D34b5,
                D34c1,
                D34c2,
                D34c3,
                D34c4,
                D34c5,
                D34c6,
                D35,
                D35a,
                D35b1,
                D35b2,
                D35b3,
                D35b4,
                D35b5,
                D35c1,
                D35c2,
                D35c3,
                D35c4,
                D35c5,
                D35c6,
                D36,
                D36a,
                D36b1,
                D36b2,
                D36b3,
                D36b4,
                D36b5,
                D36c1,
                D36c2,
                D36c3,
                D36c4,
                D36c5,
                D36c6,
                comentarios3,
                D37,
                D38,
                D39,
                D40,
                D41,
                D42,
                D43,
                D44,
                D45,
                D46,
                D47,
                D48,
                D49,
                D50,
                D51a,
                D51b,
                D52,
                D53a,
                D53b,
                D54,
                D55a,
                D55b,
                D56,
                D57,
                D58,
                D59,
                D60,
                comentarios4,
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
        return res.redirect("/PacienteOptions?id="+idPaciente);
        } catch (err) {
            return res.status(400).send(err);
          }
    },
    verASI16: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let ASI16id = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let ASI16 = await ASI16testes.findByPk(ASI16id);
        res.render('edittesteASI16', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, ASI16, msg : "" });
    },
    editarASI16: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let ASI16id = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let ASI16 = await ASI16testes.findByPk(ASI16id);

          let { 
            D1,
            D2,
            D3,
            D4a,
            D4b,
            D5a,
            D5b,
            D6a,
            D6b,
            D7a,
            D7b,
            D8,
            D9,
            D10,
            D11,
            D12,
            D13,
            D14,
            D15,
            D16,
            D17,
            D18,
            D19,
            D20,
            D21,
            D22,
            D23,
            D24,
            comentarios1,
            D25a,
            D25b,
            D25c,
            D25d,
            D26a,
            D26b,
            D26c,
            D26d,
            D26e,
            D27a,
            D27b,
            D27c,
            D27d,
            D28a,
            D28b,
            D28c,
            D28d,
            D28e,
            D29a,
            D29b,
            D29c,
            D29d,
            D30a,
            D30b,
            D30c,
            D30d,
            D31a,
            D31b,
            D31c,
            D31d,
            D31e,
            D32a,
            D32b,
            D32c,
            D32d,
            D32e,
            D33a,
            D33b,
            D33c,
            D33d,
            D33e,
            comentarios2,
            D34,
            D34a,
            D34b1 = "N",
            D34b2 = "N",
            D34b3 = "N",
            D34b4 = "N",
            D34b5 = "N",
            D34c1 = "N",
            D34c2 = "N",
            D34c3 = "N",
            D34c4 = "N",
            D34c5 = "N",
            D34c6 = "N",
            D35,
            D35a,
            D35b1 = "N",
            D35b2 = "N",
            D35b3 = "N",
            D35b4 = "N",
            D35b5 = "N",
            D35c1 = "N",
            D35c2 = "N",
            D35c3 = "N",
            D35c4 = "N",
            D35c5 = "N",
            D35c6 = "N",
            D36,
            D36a,
            D36b1 = "N",
            D36b2 = "N",
            D36b3 = "N",
            D36b4 = "N",
            D36b5 = "N",
            D36c1 = "N",
            D36c2 = "N",
            D36c3 = "N",
            D36c4 = "N",
            D36c5 = "N",
            D36c6 = "N",
            comentarios3,
            D37,
            D38,
            D39,
            D40,
            D41,
            D42,
            D43,
            D44,
            D45,
            D46,
            D47,
            D48,
            D49,
            D50,
            D51a,
            D51b,
            D52,
            D53a,
            D53b,
            D54,
            D55a,
            D55b,
            D56,
            D57,
            D58,
            D59,
            D60,
            comentarios4
        } = req.body;

        try { 
            await ASI16.update({
                D1,
                D2,
                D3,
                D4a,
                D4b,
                D5a,
                D5b,
                D6a,
                D6b,
                D7a,
                D7b,
                D8,
                D9,
                D10,
                D11,
                D12,
                D13,
                D14,
                D15,
                D16,
                D17,
                D18,
                D19,
                D20,
                D21,
                D22,
                D23,
                D24,
                comentarios1,
                D25a,
                D25b,
                D25c,
                D25d,
                D26a,
                D26b,
                D26c,
                D26d,
                D26e,
                D27a,
                D27b,
                D27c,
                D27d,
                D28a,
                D28b,
                D28c,
                D28d,
                D28e,
                D29a,
                D29b,
                D29c,
                D29d,
                D30a,
                D30b,
                D30c,
                D30d,
                D31a,
                D31b,
                D31c,
                D31d,
                D31e,
                D32a,
                D32b,
                D32c,
                D32d,
                D32e,
                D33a,
                D33b,
                D33c,
                D33d,
                D33e,
                comentarios2,
                D34,
                D34a,
                D34b1,
                D34b2,
                D34b3,
                D34b4,
                D34b5,
                D34c1,
                D34c2,
                D34c3,
                D34c4,
                D34c5,
                D34c6,
                D35,
                D35a,
                D35b1,
                D35b2,
                D35b3,
                D35b4,
                D35b5,
                D35c1,
                D35c2,
                D35c3,
                D35c4,
                D35c5,
                D35c6,
                D36,
                D36a,
                D36b1,
                D36b2,
                D36b3,
                D36b4,
                D36b5,
                D36c1,
                D36c2,
                D36c3,
                D36c4,
                D36c5,
                D36c6,
                comentarios3,
                D37,
                D38,
                D39,
                D40,
                D41,
                D42,
                D43,
                D44,
                D45,
                D46,
                D47,
                D48,
                D49,
                D50,
                D51a,
                D51b,
                D52,
                D53a,
                D53b,
                D54,
                D55a,
                D55b,
                D56,
                D57,
                D58,
                D59,
                D60,
                comentarios4,
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });

            ASI16 = await ASI16testes.findByPk(ASI16id);
      
            res.render('edittesteASI16', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, ASI16, msg :"ALTERAÇÕES GRAVADAS COM SUCESSO"});
          } catch (err) {
            return res.status(400).send(err);
          }
    },
    //EVA
    EVA: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.id;
        let idPaciente = req.query.id;
        let Paciente = await Pacientes.findByPk(id);
        console.log(idPaciente)
        //console.log(NomeProfissionalAvaliacao,NumeroConselho,Profissao)
        res.render("testeEVA", { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, msg : "" });
    },
    GravarNovoEVA: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let idPaciente = req.query.id;

        let { 
            AQ1,
            AQ2,
            BQ1,
            BQ2,
        } = req.body;

        try {

            await EVAtestes.create({
                idPaciente,
                AQ1,
                AQ2,
                BQ1,
                BQ2,
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
            return res.redirect("/PacienteOptions?id="+idPaciente);
        } catch (err) {
            return res.status(400).send(err);
          }
    },
    verEVA: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let EVAid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let EVA = await EVAtestes.findByPk(EVAid);
        res.render('edittesteEVA', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, EVA, msg : "" });
    },
    editarEVA: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let EVAid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let EVA = await EVAtestes.findByPk(EVAid);

          let { 
            AQ1,
            AQ2,
            BQ1,
            BQ2,
        } = req.body;

        try { 
            await EVA.update({
                AQ1,
                AQ2,
                BQ1,
                BQ2,
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
      
            res.render('edittesteEVA', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, EVA, msg :"ALTERAÇÕES GRAVADAS COM SUCESSO"});
          } catch (err) {
            return res.status(400).send(err);
          }
    },
    //COWS
    COWS: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.id;
        let Paciente = await Pacientes.findByPk(id);
        //console.log(NomeProfissionalAvaliacao,NumeroConselho,Profissao)
        res.render("testeCOWS", { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, msg : "" });
    },
    GravarNovoCOWS: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let idPaciente = req.query.id;

        let { 
            AQ1,
            AQ2,
            AQ3,
            AQ4,
            AQ5,
            AQ6,
            AQ7,
            AQ8,
            AQ9,
            AQ10,
            AQ11,
            BloodPressure,
            DoseGiven
        } = req.body;

        try {

            await COWStestes.create({
                idPaciente,
                AQ1,
                AQ2,
                AQ3,
                AQ4,
                AQ5,
                AQ6,
                AQ7,
                AQ8,
                AQ9,
                AQ10,
                AQ11,
                BloodPressure,
                DoseGiven,
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
            return res.redirect("/PacienteOptions?id="+idPaciente);
        } catch (err) {
            return res.status(400).send(err);
          }
    },
    verCOWS: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let COWSid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let COWS = await COWStestes.findByPk(COWSid);
        res.render('edittesteCOWS', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, COWS, msg : "" });
    },
    editarCOWS: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let COWSid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let COWS = await COWStestes.findByPk(COWSid);

          let { 
            AQ1,
            AQ2,
            AQ3,
            AQ4,
            AQ5,
            AQ6,
            AQ7,
            AQ8,
            AQ9,
            AQ10,
            AQ11,
            BloodPressure,
            DoseGiven
        } = req.body;

        try { 
            await COWS.update({
                AQ1,
                AQ2,
                AQ3,
                AQ4,
                AQ5,
                AQ6,
                AQ7,
                AQ8,
                AQ9,
                AQ10,
                AQ11,
                BloodPressure,
                DoseGiven,
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });

            COWS = await COWStestes.findByPk(COWSid);
      
            res.render('edittesteCOWS', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, COWS, msg :"ALTERAÇÕES GRAVADAS COM SUCESSO"});
          } catch (err) {
            return res.status(400).send(err);
          }
    },
    //BDI
    BDI: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.id;
        let Paciente = await Pacientes.findByPk(id);
        //console.log(NomeProfissionalAvaliacao,NumeroConselho,Profissao)
        res.render("testeBDI", { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, msg : "" });
    },
    GravarNovoBDI: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let idPaciente = req.query.id;

        let { 
            Q1a,
            Q1b,
            Q1c,
            Q1d,
            Q2a,
            Q2b,
            Q2c,
            Q2d,
            Q3a,
            Q3b,
            Q3c,
            Q3d,
            Q4a,
            Q4b,
            Q4c,
            Q4d,
            Q5a,
            Q5b,
            Q5c,
            Q5d,
            Q6a,
            Q6b,
            Q6c,
            Q6d,
            Q7a,
            Q7b,
            Q7c,
            Q7d,
            Q8a,
            Q8b,
            Q8c,
            Q8d,
            Q9a,
            Q9b,
            Q9c,
            Q9d,
            Q10a,
            Q10b,
            Q10c,
            Q10d,
            Q11a,
            Q11b,
            Q11c,
            Q11d,
            Q12a,
            Q12b,
            Q12c,
            Q12d,
            Q13a,
            Q13b,
            Q13c,
            Q13d,
            Q14a,
            Q14b,
            Q14c,
            Q14d,
            Q15a,
            Q15b,
            Q15c,
            Q15d,
            Q16a,
            Q16b,
            Q16c,
            Q16d,
            Q17a,
            Q17b,
            Q17c,
            Q17d,
            Q18a,
            Q18b,
            Q18c,
            Q18d,
            Q19a,
            Q19b,
            Q19c,
            Q19d,
            Q19,
            Q20a,
            Q20b,
            Q20c,
            Q20d,
            Q21a,
            Q21b,
            Q21c,
            Q21d,
        } = req.body;

        try {

            await BDItestes.create({
                idPaciente,
                Q1a,
                Q1b,
                Q1c,
                Q1d,
                Q2a,
                Q2b,
                Q2c,
                Q2d,
                Q3a,
                Q3b,
                Q3c,
                Q3d,
                Q4a,
                Q4b,
                Q4c,
                Q4d,
                Q5a,
                Q5b,
                Q5c,
                Q5d,
                Q6a,
                Q6b,
                Q6c,
                Q6d,
                Q7a,
                Q7b,
                Q7c,
                Q7d,
                Q8a,
                Q8b,
                Q8c,
                Q8d,
                Q9a,
                Q9b,
                Q9c,
                Q9d,
                Q10a,
                Q10b,
                Q10c,
                Q10d,
                Q11a,
                Q11b,
                Q11c,
                Q11d,
                Q12a,
                Q12b,
                Q12c,
                Q12d,
                Q13a,
                Q13b,
                Q13c,
                Q13d,
                Q14a,
                Q14b,
                Q14c,
                Q14d,
                Q15a,
                Q15b,
                Q15c,
                Q15d,
                Q16a,
                Q16b,
                Q16c,
                Q16d,
                Q17a,
                Q17b,
                Q17c,
                Q17d,
                Q18a,
                Q18b,
                Q18c,
                Q18d,
                Q19a,
                Q19b,
                Q19c,
                Q19d,
                Q19,
                Q20a,
                Q20b,
                Q20c,
                Q20d,
                Q21a,
                Q21b,
                Q21c,
                Q21d,
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
            return res.redirect("/PacienteOptions?id="+idPaciente);
        } catch (err) {
            return res.status(400).send(err);
          }
    },
    verBDI: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let BDIid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let BDI = await BDItestes.findByPk(BDIid);
        res.render('edittesteBDI', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, BDI, msg : "" });
    },
    editarBDI: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let BDIid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let BDI = await BDItestes.findByPk(BDIid);

          let { 
            Q1a = "N",
            Q1b = "N",
            Q1c = "N",
            Q1d = "N",
            Q2a = "N",
            Q2b = "N",
            Q2c = "N",
            Q2d = "N",
            Q3a = "N",
            Q3b = "N",
            Q3c = "N",
            Q3d = "N",
            Q4a = "N",
            Q4b = "N",
            Q4c = "N",
            Q4d = "N",
            Q5a = "N",
            Q5b = "N",
            Q5c = "N",
            Q5d = "N",
            Q6a = "N",
            Q6b = "N",
            Q6c = "N",
            Q6d = "N",
            Q7a = "N",
            Q7b = "N",
            Q7c = "N",
            Q7d = "N",
            Q8a = "N",
            Q8b = "N",
            Q8c = "N",
            Q8d = "N",
            Q9a = "N",
            Q9b = "N",
            Q9c = "N",
            Q9d = "N",
            Q10a = "N",
            Q10b = "N",
            Q10c = "N",
            Q10d = "N",
            Q11a = "N",
            Q11b = "N",
            Q11c = "N",
            Q11d = "N",
            Q12a = "N",
            Q12b = "N",
            Q12c = "N",
            Q12d = "N",
            Q13a = "N",
            Q13b = "N",
            Q13c = "N",
            Q13d = "N",
            Q14a = "N",
            Q14b = "N",
            Q14c = "N",
            Q14d = "N",
            Q15a = "N",
            Q15b = "N",
            Q15c = "N",
            Q15d = "N",
            Q16a = "N",
            Q16b = "N",
            Q16c = "N",
            Q16d = "N",
            Q17a = "N",
            Q17b = "N",
            Q17c = "N",
            Q17d = "N",
            Q18a = "N",
            Q18b = "N",
            Q18c = "N",
            Q18d = "N",
            Q19a = "N",
            Q19b = "N",
            Q19c = "N",
            Q19d = "N",
            Q19,
            Q20a = "N",
            Q20b = "N",
            Q20c = "N",
            Q20d = "N",
            Q21a = "N",
            Q21b = "N",
            Q21c = "N",
            Q21d = "N",
        } = req.body;

        

        try { 
            await BDI.update({
                Q1a,
                Q1b,
                Q1c,
                Q1d,
                Q2a,
                Q2b,
                Q2c,
                Q2d,
                Q3a,
                Q3b,
                Q3c,
                Q3d,
                Q4a,
                Q4b,
                Q4c,
                Q4d,
                Q5a,
                Q5b,
                Q5c,
                Q5d,
                Q6a,
                Q6b,
                Q6c,
                Q6d,
                Q7a,
                Q7b,
                Q7c,
                Q7d,
                Q8a,
                Q8b,
                Q8c,
                Q8d,
                Q9a,
                Q9b,
                Q9c,
                Q9d,
                Q10a,
                Q10b,
                Q10c,
                Q10d,
                Q11a,
                Q11b,
                Q11c,
                Q11d,
                Q12a,
                Q12b,
                Q12c,
                Q12d,
                Q13a,
                Q13b,
                Q13c,
                Q13d,
                Q14a,
                Q14b,
                Q14c,
                Q14d,
                Q15a,
                Q15b,
                Q15c,
                Q15d,
                Q16a,
                Q16b,
                Q16c,
                Q16d,
                Q17a,
                Q17b,
                Q17c,
                Q17d,
                Q18a,
                Q18b,
                Q18c,
                Q18d,
                Q19a,
                Q19b,
                Q19c,
                Q19d,
                Q19,
                Q20a,
                Q20b,
                Q20c,
                Q20d,
                Q21a,
                Q21b,
                Q21c,
                Q21d,    
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
      
            console.log(BDI)
            res.render('edittesteBDI', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, BDI, msg :"ALTERAÇÕES GRAVADAS COM SUCESSO"});
          } catch (err) {
            return res.status(400).send(err);
          }
    },
    //ASRS
    ASRS: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.id;
        let Paciente = await Pacientes.findByPk(id);
        //console.log(NomeProfissionalAvaliacao,NumeroConselho,Profissao)
        res.render("testeASRS", { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, msg : "" });
    },
    GravarNovoASRS: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let idPaciente = req.query.id;

        let { 
            AQ1,
            AQ2,
            AQ3,
            AQ4,
            AQ5,
            AQ6,
            AQ7,
            AQ8,
            AQ9,
            BQ1,
            BQ2,
            BQ3,
            BQ4,
            BQ5,
            BQ6,
            BQ7,
            BQ8,
            BQ9,
        } = req.body;

        try {

            await ASRStestes.create({
                idPaciente,
                AQ1,
                AQ2,
                AQ3,
                AQ4,
                AQ5,
                AQ6,
                AQ7,
                AQ8,
                AQ9,
                BQ1,
                BQ2,
                BQ3,
                BQ4,
                BQ5,
                BQ6,
                BQ7,
                BQ8,
                BQ9,    
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
            return res.redirect("/PacienteOptions?id="+idPaciente);
        } catch (err) {
            return res.status(400).send(err);
          }
    },
    verASRS: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let ASRSid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let ASRS = await ASRStestes.findByPk(ASRSid);
        res.render('edittesteASRS', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, ASRS, msg : "" });
    },
    editarASRS: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let ASRSid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let ASRS = await ASRStestes.findByPk(ASRSid);

          let { 
            AQ1,
            AQ2,
            AQ3,
            AQ4,
            AQ5,
            AQ6,
            AQ7,
            AQ8,
            AQ9,
            BQ1,
            BQ2,
            BQ3,
            BQ4,
            BQ5,
            BQ6,
            BQ7,
            BQ8,
            BQ9,
        } = req.body;

        try { 
            await ASRS.update({
                AQ1,
                AQ2,
                AQ3,
                AQ4,
                AQ5,
                AQ6,
                AQ7,
                AQ8,
                AQ9,
                BQ1,
                BQ2,
                BQ3,
                BQ4,
                BQ5,
                BQ6,
                BQ7,
                BQ8,
                BQ9,    
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
      
            ASRS = await ASRStestes.findByPk(ASRSid);

            res.render('edittesteASRS', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, ASRS, msg :"ALTERAÇÕES GRAVADAS COM SUCESSO"});
          } catch (err) {
            return res.status(400).send(err);
          }
    },
    //BAI
    BAI: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.id;
        let Paciente = await Pacientes.findByPk(id);
        //console.log(NomeProfissionalAvaliacao,NumeroConselho,Profissao)
        res.render("testeBAI", { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, msg : "" });
    },
    GravarNovoBAI: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let idPaciente = req.query.id;

        let { 
            Q1,
            Q2,
            Q3,
            Q4,
            Q5,
            Q6,
            Q7,
            Q8,
            Q9,
            Q10,
            Q11,
            Q12,
            Q13,
            Q14,
            Q15,
            Q16,
            Q17,
            Q18,
            Q19,
            Q20,
            Q21,
        } = req.body;

        try {

            await BAItestes.create({
                idPaciente,
                Q1,
                Q2,
                Q3,
                Q4,
                Q5,
                Q6,
                Q7,
                Q8,
                Q9,
                Q10,
                Q11,
                Q12,
                Q13,
                Q14,
                Q15,
                Q16,
                Q17,
                Q18,
                Q19,
                Q20,
                Q21,
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
            return res.redirect("/PacienteOptions?id="+idPaciente);
        } catch (err) {
            return res.status(400).send(err);
          }
    },
    verBAI: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let BAIid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let BAI = await BAItestes.findByPk(BAIid);
        res.render('edittesteBAI', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, BAI, msg : "" });
    },
    editarBAI: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let BAIid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let BAI = await BAItestes.findByPk(BAIid);

          let { 
            Q1,
            Q2,
            Q3,
            Q4,
            Q5,
            Q6,
            Q7,
            Q8,
            Q9,
            Q10,
            Q11,
            Q12,
            Q13,
            Q14,
            Q15,
            Q16,
            Q17,
            Q18,
            Q19,
            Q20,
            Q21,
        } = req.body;

        try { 
            await BAI.update({
                Q1,
                Q2,
                Q3,
                Q4,
                Q5,
                Q6,
                Q7,
                Q8,
                Q9,
                Q10,
                Q11,
                Q12,
                Q13,
                Q14,
                Q15,
                Q16,
                Q17,
                Q18,
                Q19,
                Q20,
                Q21,
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
      
            BAI = await BAItestes.findByPk(BAIid);

            res.render('edittesteBAI', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, BAI, msg :"ALTERAÇÕES GRAVADAS COM SUCESSO"});
          } catch (err) {
            return res.status(400).send(err);
          }
    },
    //BSCS
    BSCS: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.id;
        let Paciente = await Pacientes.findByPk(id);
        res.render("testeBSCS", { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, msg : "" });
    },
    GravarNovoBSCS: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let idPaciente = req.query.id;

        let { 
            A1,
            Atext,
            Q1,
            Q2,
            Q3,
            Q4,
            B1,
            Btext,
            Q5,
            Q6,
            Q7,
            Q8text,
        } = req.body;

        try {
            await BSCStestes.create({
                idPaciente,
                A1,
                Atext,
                Q1,
                Q2,
                Q3,
                Q4,
                B1,
                Btext,
                Q5,
                Q6,
                Q7,
                Q8text,    
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
            return res.redirect("/PacienteOptions?id="+idPaciente);
        } catch (err) {
            return res.status(400).send(err);
          }
    },
    verBSCS: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let BSCSid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let BSCS = await BSCStestes.findByPk(BSCSid);
        res.render('edittesteBSCS', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, BSCS, msg : "" });
    },
    editarBSCS: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let BSCSid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let BSCS = await BSCStestes.findByPk(BSCSid);

          let { 
            A1,
            Atext,
            Q1,
            Q2,
            Q3,
            Q4,
            B1,
            Btext,
            Q5,
            Q6,
            Q7,
            Q8text,
        } = req.body;

        try { 
            await BSCS.update({
                A1,
                Atext,
                Q1,
                Q2,
                Q3,
                Q4,
                B1,
                Btext,
                Q5,
                Q6,
                Q7,
                Q8text,    
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
      
            BSCS = await BSCStestes.findByPk(BSCSid);

            res.render('edittesteBSCS', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, BSCS, msg :"ALTERAÇÕES GRAVADAS COM SUCESSO"});
          } catch (err) {
            return res.status(400).send(err);
          }
    },
    //CIWAAR
    CIWAAR: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.id;
        let Paciente = await Pacientes.findByPk(id);
        res.render("testeCIWAAR", { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, msg : "" });
    },
    GravarNovoCIWAAR: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let idPaciente = req.query.id;

        let {
            Q1,
            Q2,
            Q3,
            Q4,
            Q5,
            Q6,
            Q7,
            Q8,
            Q9,
            Q10,
        } = req.body;

        try {
            await CIWAARtestes.create({
                idPaciente,
                Q1,
                Q2,
                Q3,
                Q4,
                Q5,
                Q6,
                Q7,
                Q8,
                Q9,
                Q10,    
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
            return res.redirect("/PacienteOptions?id="+idPaciente);
        } catch (err) {
            return res.status(400).send(err);
          }
    },
    verCIWAAR: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let CIWAARid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let CIWAAR = await CIWAARtestes.findByPk(CIWAARid);
        res.render('edittesteCIWAAR', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, CIWAAR, msg : "" });
    },
    editarCIWAAR: async (req, res, next) => {
        const NomeProfissionalAvaliacao = req.session.usuario.nomeCompleto;
        const NumeroConselho  = req.session.usuario.numeroConselho;
        const Profissao = req.session.usuario.profissao;
        let id = req.query.idPaciente;
        let CIWAARid = req.query.idTeste;
        let Paciente = await Pacientes.findByPk(id);
        let CIWAAR = await CIWAARtestes.findByPk(CIWAARid);

          let { 
            Q1,
            Q2,
            Q3,
            Q4,
            Q5,
            Q6,
            Q7,
            Q8,
            Q9,
            Q10,
        } = req.body;

        try { 
            await CIWAAR.update({
                Q1,
                Q2,
                Q3,
                Q4,
                Q5,
                Q6,
                Q7,
                Q8,
                Q9,
                Q10,
                NomeProfissionalAvaliacao,
                NumeroConselho,
                Profissao
            });
      
            CIWAAR = await CIWAARtestes.findByPk(CIWAARid);

            res.render('edittesteCIWAAR', { NomeProfissionalAvaliacao, NumeroConselho, Profissao, Paciente, CIWAAR, msg :"ALTERAÇÕES GRAVADAS COM SUCESSO"});
          } catch (err) {
            return res.status(400).send(err);
          }
    },
    //ANAMNESE

    //ASSIST OMS

    //M.I.N.I.

    //MoCA
}