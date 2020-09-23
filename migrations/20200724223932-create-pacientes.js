'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pacientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UnidadeAtendimento: {
        type: Sequelize.STRING(20)
      },
      VinculoHospital: {
        type: Sequelize.STRING(10)
      },
      QualConvenio: {
        type: Sequelize.STRING(100)
      },
      OrigemSS: {
        type: Sequelize.STRING(50)
      },
      EncaminhadoPor: {
        type: Sequelize.STRING(100)
      },
      NomeSocial: {
        type: Sequelize.STRING(255)
      },
      Idade: {
        type: Sequelize.STRING(2)
      },
      CID: {
        type: Sequelize.STRING
      },
      Naturalidade: {
        type: Sequelize.STRING(100)
      },
      Nacionalidade: {
        type: Sequelize.STRING(100)
      },
      Sexo: {
        type: Sequelize.STRING(1)
      },
      RefSexo: {
        type: Sequelize.STRING(1)
      },
      Endereco: {
        type: Sequelize.STRING(255)
      },
      Numero: {
        type: Sequelize.STRING(255)
      },
      Complemento: {
        type: Sequelize.STRING(100)
      },
      Bairro: {
        type: Sequelize.STRING(100)
      },
      Cidade: {
        type: Sequelize.STRING(100)
      },
      Estado: {
        type: Sequelize.STRING(50)
      },
      CEP: {
        type: Sequelize.STRING(10)
      },
      Telefone: {
        type: Sequelize.STRING
      },
      End: {
        type: Sequelize.STRING(20)
      },
      EspecificaSituacao: {
        type: Sequelize.STRING(100)
      },
      TFD: {
        type: Sequelize.STRING(1)
      },
      EstadoOrigem: {
        type: Sequelize.STRING(100)
      },
      LocalAcolhimento: {
        type: Sequelize.STRING(20)
      },
      EspecificarLocalAcolhimento: {
        type: Sequelize.STRING(100)
      },
      EnderecoAcolhimento: {
        type: Sequelize.STRING
      },
      TelefoneAcolhimento: {
        type: Sequelize.STRING
      },
      ContatoAcolhimento: {
        type: Sequelize.STRING(100)
      },
      Religiao: {
        type: Sequelize.STRING
      },
      QualReligiao: {
        type: Sequelize.STRING(100)
      },
      Praticante: {
        type: Sequelize.STRING
      },
      Escolaridade: {
        type: Sequelize.STRING
      },
      EnsinoFundamental: {
        type: Sequelize.STRING
      },
      UltimoAnoEnsinoFundamental: {
        type: Sequelize.STRING(100)
      },
      EnsinoMedio: {
        type: Sequelize.STRING
      },
      UltimoEnsinoMedio: {
        type: Sequelize.STRING(100)
      },
      EnsinoSuperior: {
        type: Sequelize.STRING
      },
      UltimoEnsinoSuperior: {
        type: Sequelize.STRING(100)
      },
      CursoTecnico: {
        type: Sequelize.STRING(1)
      },
      QualCursoTecnico: {
        type: Sequelize.STRING(100)
      },
      UnidadeEscolar: {
        type: Sequelize.STRING
      },
      Moradia: {
        type: Sequelize.STRING
      },
      Construcao: {
        type: Sequelize.STRING
      },
      ConstrucaoEspecificar: {
        type: Sequelize.STRING
      },
      RelacaoPropriedade: {
        type: Sequelize.STRING
      },
      NComodos: {
        type: Sequelize.STRING
      },
      Banheiros: {
        type: Sequelize.STRING
      },
      NPessoas: {
        type: Sequelize.STRING
      },
      InfraestruturaUrbana: {
        type: Sequelize.STRING
      },
      NomeFam1: {
        type: Sequelize.TEXT
      },
      VinculoFam1: {
        type: Sequelize.TEXT
      },
      IdadeFam1: {
        type: Sequelize.TEXT
      },
      EscolaridadeFam1: {
        type: Sequelize.TEXT
      },
      OcupacaoFam1: {
        type: Sequelize.TEXT
      },
      RendaFam1: {
        type: Sequelize.TEXT
      },
      NomeFam2: {
        type: Sequelize.TEXT
      },
      VinculoFam2: {
        type: Sequelize.TEXT
      },
      IdadeFam2: {
        type: Sequelize.TEXT
      },
      EscolaridadeFam2: {
        type: Sequelize.TEXT
      },
      OcupacaoFam2: {
        type: Sequelize.TEXT
      },
      RendaFam2: {
        type: Sequelize.TEXT
      },
      NomeFam3: {
        type: Sequelize.TEXT
      },
      VinculoFam3: {
        type: Sequelize.TEXT
      },
      IdadeFam3: {
        type: Sequelize.TEXT
      },
      EscolaridadeFam3: {
        type: Sequelize.TEXT
      },
      OcupacaoFam3: {
        type: Sequelize.TEXT
      },
      RendaFam3: {
        type: Sequelize.TEXT
      },
      NomeFam4: {
        type: Sequelize.TEXT
      },
      VinculoFam4: {
        type: Sequelize.TEXT
      },
      IdadeFam4: {
        type: Sequelize.TEXT
      },
      EscolaridadeFam4: {
        type: Sequelize.TEXT
      },
      OcupacaoFam4: {
        type: Sequelize.TEXT
      },
      RendaFam4: {
        type: Sequelize.TEXT
      },
      NomeFam5: {
        type: Sequelize.TEXT
      },
      VinculoFam5: {
        type: Sequelize.TEXT
      },
      IdadeFam5: {
        type: Sequelize.TEXT
      },
      EscolaridadeFam5: {
        type: Sequelize.TEXT
      },
      OcupacaoFam5: {
        type: Sequelize.TEXT
      },
      RendaFam5: {
        type: Sequelize.TEXT
      },
      NomeFam6: {
        type: Sequelize.TEXT
      },
      VinculoFam6: {
        type: Sequelize.TEXT
      },
      IdadeFam6: {
        type: Sequelize.TEXT
      },
      EscolaridadeFam6: {
        type: Sequelize.TEXT
      },
      OcupacaoFam6: {
        type: Sequelize.TEXT
      },
      RendaFam6: {
        type: Sequelize.TEXT
      },
      NomeFam7: {
        type: Sequelize.TEXT
      },
      VinculoFam7: {
        type: Sequelize.TEXT
      },
      IdadeFam7: {
        type: Sequelize.TEXT
      },
      EscolaridadeFam7: {
        type: Sequelize.TEXT
      },
      OcupacaoFam7: {
        type: Sequelize.TEXT
      },
      RendaFam7: {
        type: Sequelize.TEXT
      },
      ProfissaoPaciente: {
        type: Sequelize.STRING
      },
      OcupacaoPaciente: {
        type: Sequelize.STRING
      },
      DesempregadoPaciente: {
        type: Sequelize.STRING
      },
      LocalTrabalho: {
        type: Sequelize.STRING
      },
      TrabalhoFormal: {
        type: Sequelize.STRING
      },
      BeneficioPrevidenciario: {
        type: Sequelize.STRING
      },
      TipoBeneficioPrevidenciario: {
        type: Sequelize.STRING
      },
      QualBeneficioPrevidenciario: {
        type: Sequelize.STRING
      },
      BeneficioAssistencial: {
        type: Sequelize.STRING
      },
      QualBeneficioAssistencial: {
        type: Sequelize.STRING
      },
      Renda: {
        type: Sequelize.STRING(20)
      },
      RendaEspecifica: {
        type: Sequelize.STRING(255)
      },
      PlanoTerapeutico: {
        type: Sequelize.TEXT
      },
      LocalDeAtendimentoUBS: {
        type: Sequelize.STRING(1)
      },
      LocalDeAtendimentoCAPS: {
        type: Sequelize.STRING(1)
      },
      TextoLocalDeAtendimentoUBSCAPS: {
        type: Sequelize.TEXT
      },
      TextoLocalDeAtendimentoCRAS: {
        type: Sequelize.TEXT
      },
      TextoLocalDeAtendimentoCREAS: {
        type: Sequelize.TEXT
      },
      LocalDeAtendimentoConselhoTutelar: {
        type: Sequelize.STRING(1)
      },
      LocalDeAtendimentoConselhoIdoso: {
        type: Sequelize.STRING(1)
      },
      LocalDeAtendimentoNAI: {
        type: Sequelize.STRING(1)
      },
      TextoLocalDeAtendimentoConselhosNAI: {
        type: Sequelize.TEXT
      },
      LocalDeAtendimentoVara: {
        type: Sequelize.STRING(1)
      },
      LocalDeAtendimentoForum: {
        type: Sequelize.STRING(1)
      },
      TextoLocalDeAtendimentoVaraForum: {
        type: Sequelize.TEXT
      },
      AtendimentoI: {
        type: Sequelize.STRING(1)
      },
      AtendimentoII1: {
        type: Sequelize.STRING(1)
      },
      AtendimentoII2: {
        type: Sequelize.STRING(1)
      },
      AtendimentoII3: {
        type: Sequelize.STRING(1)
      },
      AtendimentoII4: {
        type: Sequelize.STRING(1)
      },
      AtendimentoII5: {
        type: Sequelize.STRING(1)
      },
      AtendimentoII6: {
        type: Sequelize.STRING(1)
      },
      AtendimentoII7: {
        type: Sequelize.STRING(1)
      },
      AtendimentoII8: {
        type: Sequelize.STRING(1)
      },
      AtendimentoII9: {
        type: Sequelize.STRING(1)
      },
      AtendimentoII10: {
        type: Sequelize.STRING(1)
      },
      AtendimentoII11: {
        type: Sequelize.STRING(1)
      },
      AtendimentoIII12: {
        type: Sequelize.STRING(1)
      },
      AtendimentoIII13: {
        type: Sequelize.STRING(1)
      },
      AtendimentoIII14: {
        type: Sequelize.STRING(1)
      },
      AtendimentoIII15: {
        type: Sequelize.STRING(1)
      },
      AtendimentoIV16: {
        type: Sequelize.STRING(1)
      },
      AtendimentoIV17: {
        type: Sequelize.STRING(1)
      },
      AtendimentoIV18: {
        type: Sequelize.STRING(1)
      },
      AtendimentoIV19: {
        type: Sequelize.STRING(1)
      },
      AtendimentoV20: {
        type: Sequelize.STRING(1)
      },
      AtendimentoV21: {
        type: Sequelize.STRING(1)
      },
      AtendimentoV22: {
        type: Sequelize.STRING(1)
      },
      AtendimentoV23: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVI24: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVI25: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVI26: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVI27: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVI28: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVI29: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVII30: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVII31: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVII32: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVII33: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVII34: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVII35: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVII36: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVII37: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVII38: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVII39: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVII40: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVII41: {
        type: Sequelize.STRING(1)
      },
      AtendimentoVII42: {
        type: Sequelize.STRING(1)
      },
      Programas: {
        type: Sequelize.TEXT
      },
      Outros: {
        type: Sequelize.TEXT
      },
      Intervencao1: {
        type: Sequelize.STRING(1)
      },
      Intervencao2: {
        type: Sequelize.STRING(1)
      },
      Intervencao3: {
        type: Sequelize.STRING(1)
      },
      Intervencao4: {
        type: Sequelize.STRING(1)
      },
      Intervencao5: {
        type: Sequelize.STRING(1)
      },
      Intervencao6: {
        type: Sequelize.STRING(1)
      },
      Intervencao7: {
        type: Sequelize.STRING(1)
      },
      Intervencao8: {
        type: Sequelize.STRING(1)
      },
      Intervencao9: {
        type: Sequelize.STRING(1)
      },
      Intervencao10: {
        type: Sequelize.STRING(1)
      },
      Intervencao11: {
        type: Sequelize.STRING(1)
      },
      Intervencao12: {
        type: Sequelize.STRING(1)
      },
      Intervencao13: {
        type: Sequelize.STRING(1)
      },
      Intervencao14: {
        type: Sequelize.STRING(1)
      },
      Intervencao15: {
        type: Sequelize.STRING(1)
      },
      Intervencao16: {
        type: Sequelize.STRING(1)
      },
      Intervencao17: {
        type: Sequelize.STRING(1)
      },
      Intervencao18: {
        type: Sequelize.STRING(1)
      },
      Intervencao19: {
        type: Sequelize.STRING(1)
      },
      Intervencao20: {
        type: Sequelize.STRING(1)
      },
      Intervencao21: {
        type: Sequelize.STRING(1)
      },
      Intervencao22: {
        type: Sequelize.STRING(1)
      },
      Intervencao23: {
        type: Sequelize.STRING(1)
      },
      Intervencao24: {
        type: Sequelize.STRING(1)
      },
      Intervencao25: {
        type: Sequelize.STRING(1)
      },
      Intervencao26: {
        type: Sequelize.STRING(1)
      },
      Intervencao27: {
        type: Sequelize.STRING(1)
      },
      Intervencao28: {
        type: Sequelize.STRING(1)
      },
      Intervencao29: {
        type: Sequelize.STRING(1)
      },
      Intervencao30: {
        type: Sequelize.STRING(1)
      },
      Intervencao31: {
        type: Sequelize.STRING(1)
      },
      Intervencao32: {
        type: Sequelize.STRING(1)
      },
      Intervencao33: {
        type: Sequelize.STRING(1)
      },
      Intervencao34: {
        type: Sequelize.STRING(1)
      },
      Intervencao35: {
        type: Sequelize.STRING(1)
      },
      Intervencao36: {
        type: Sequelize.STRING(1)
      },
      Intervencao37: {
        type: Sequelize.STRING(1)
      },
      Intervencao38: {
        type: Sequelize.STRING(1)
      },
      Intervencao39: {
        type: Sequelize.STRING(1)
      },
      Intervencao40: {
        type: Sequelize.STRING(1)
      },
      Intervencao41: {
        type: Sequelize.STRING(1)
      },
      OutrasIntervencoes: {
        type: Sequelize.TEXT
      },
      DadosAlta: {
        type: Sequelize.STRING
      },
      RelatorioAtendimento: {
        type: Sequelize.TEXT
      },
      NomeProfissionalAvaliacao: {
        type: Sequelize.STRING
      },
      NumeroConselho: {
        type: Sequelize.STRING
      },
      Profissao: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
  });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pacientes');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
