/**
 * Estrutura de dados simulada para renderização da jornada de projetos.
 * Todo o conteúdo é genérico e utilizado exclusivamente para fins de portfólio.
 */

const fases = {
  standard: [
    {
      id: "p1",
      numero: "01",
      titulo: "Fase 1: Inicialização",
      subtitulo: "Alinhamento inicial e organização do projeto.",
      tag: "Fluxo Base — Fase 1",
      itens: [
        { texto: "Definição do escopo inicial" },
        { texto: "Preparação de materiais iniciais" },
        {
          texto: "Reunião inicial de alinhamento",
          modalTitulo: "Reunião inicial de alinhamento",
          subItens: [
            "Apresentação dos objetivos",
            "Definição de responsáveis"
          ]
        }
      ]
    },

    {
      id: "p2-std",
      numero: "02",
      titulo: "Fase 2: Análise Inicial",
      subtitulo: "Levantamento e organização das necessidades do projeto.",
      itens: [
        { texto: "Análise do contexto atual" },
        {
          texto: "Registro de requisitos",
          modalTitulo: "Registro de requisitos",
          subItens: [
            "Documentar requisitos principais",
            "Revisão e validação interna"
          ]
        }
      ]
    },

    {
      id: "p3-std",
      numero: "03",
      titulo: "Fase 3: Configuração",
      subtitulo: "Preparação e estruturação do ambiente do projeto.",
      tag: "Fluxo Base — Fase 3",
      itens: [
        { texto: "Configuração do ambiente base" },
        {
          texto: "Definição de acessos",
          modalTitulo: "Definição de acessos",
          subItens: [
            "Configurar permissões básicas"
          ]
        }
      ]
    },

    {
      id: "p4-std",
      numero: "04",
      titulo: "Fase 4: Capacitação",
      subtitulo: "Orientação para uso e funcionamento do projeto.",
      tag: "Fluxo Base — Fase 4",
      itens: [
        { texto: "Sessões de orientação ao uso" }
      ]
    },

    {
      id: "p5-std",
      numero: "05",
      titulo: "Fase 5: Finalização",
      subtitulo: "Conclusão e revisão final do projeto.",
      tag: "Fluxo Base — Fase 5",
      itens: [
        { texto: "Validação final" },
        { texto: "Encerramento do fluxo" }
      ]
    }
  ],

  advisory: [
    {
      id: "p2-adv",
      numero: "02",
      titulo: "Fase 2: Planejamento Avançado",
      subtitulo: "Definição de diretrizes e estrutura ampliada.",
      tag: "Fluxo Avançado — Fase 2",
      itens: [
        {
          texto: "Definição de diretrizes",
          modalTitulo: "Definição de diretrizes",
          subItens: [
            "Mapeamento de objetivos",
            "Organização de prioridades"
          ]
        },
        {
          texto: "Estruturação de funcionalidades",
          modalTitulo: "Estruturação de funcionalidades",
          subItens: [
            "Levantamento inicial",
            "Refino de escopo"
          ]
        }
      ]
    },

    {
      id: "p3-adv",
      numero: "03",
      titulo: "Fase 3: Desenvolvimento",
      subtitulo: "Construção incremental e validações periódicas.",
      tag: "Fluxo Avançado — Fase 3",
      itens: [
        {
          texto: "Ciclos de desenvolvimento",
          modalTitulo: "Ciclos de desenvolvimento",
          subItens: [
            "Organização de backlog",
            "Revisões periódicas"
          ]
        }
      ]
    },

    {
      id: "p4-adv",
      numero: "04",
      titulo: "Fase 4: Ativação",
      subtitulo: "Disponibilização gradual e comunicação.",
      tag: "Fluxo Avançado — Fase 4",
      itens: [
        {
          texto: "Ativação do fluxo",
          modalTitulo: "Ativação do fluxo",
          subItens: [
            "Planejamento da ativação",
            "Comunicação geral"
          ]
        }
      ]
    },

    {
      id: "p5-adv",
      numero: "05",
      titulo: "Fase 5: Acompanhamento",
      subtitulo: "Monitoramento inicial e ajustes finais.",
      tag: "Fluxo Avançado — Fase 5",
      itens: [
        {
          texto: "Acompanhamento inicial",
          modalTitulo: "Acompanhamento inicial",
          subItens: [
            "Coleta de feedback",
            "Ajustes pontuais"
          ]
        }
      ]
    }
  ]
};
