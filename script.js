const disciplinas = [
  { codigo: "CSD20", nome: "Introdução À Lógica Para A Computação", carga: 45, periodo: 1 },
  { codigo: "CSF13", nome: "Fundamentos De Programação 1", carga: 90, periodo: 1 },
  { codigo: "FI71S", nome: "Física Teórica A", carga: 60, periodo: 1 },
  { codigo: "MA71A", nome: "Cálculo Diferencial E Integral 1", carga: 90, periodo: 1 },
  { codigo: "MA71B", nome: "Geometria Analítica E Álgebra Linear", carga: 90, periodo: 1 },
  { codigo: "CSE20", nome: "Técnicas De Programação", carga: 60, periodo: 2 },
  { codigo: "CSF20", nome: "Estrutura De Dados 1", carga: 45, periodo: 2 },
  { codigo: "CSX53", nome: "Atividades Complementares", carga: 180, periodo: 2 },
  { codigo: "EEX11", nome: "Introdução À Práticas De Laboratório Em Eletricidade E Eletrônica", carga: 45, periodo: 2 },
  { codigo: "FI72N", nome: "Física Experimental 1", carga: 30, periodo: 2 },
  { codigo: "FI72S", nome: "Física Teórica B", carga: 60, periodo: 2 },
  { codigo: "MA72A", nome: "Cálculo Diferencial E Integral 2", carga: 60, periodo: 2 },
  { codigo: "QB70C", nome: "Química", carga: 75, periodo: 2 },
  { codigo: "CSF30", nome: "Estrutura De Dados 2", carga: 45, periodo: 3 },
  { codigo: "EEB21", nome: "Eletricidade", carga: 45, periodo: 3 },
  { codigo: "EEX21", nome: "Oficina De Integração 1", carga: 45, periodo: 3 },
  { codigo: "FI73S", nome: "Física Teórica C", carga: 60, periodo: 3 },
  { codigo: "MA70G", nome: "Equações Diferenciais Ordinárias", carga: 60, periodo: 3 },
  { codigo: "MA70H", nome: "Probabilidade E Estatística", carga: 60, periodo: 3 },
  { codigo: "MA73A", nome: "Cálculo Diferencial E Integral 3", carga: 60, periodo: 3 },
  { codigo: "CSD21", nome: "Matemática Discreta", carga: 45, periodo: 4 },
  { codigo: "EEB31", nome: "Circuitos Digitais", carga: 90, periodo: 4 },
  { codigo: "EEF11", nome: "Desenho Técnico", carga: 30, periodo: 4 },
  { codigo: "EEQ31", nome: "Análise De Sistemas Lineares", carga: 75, periodo: 4 },
  { codigo: "FI74N", nome: "Física Experimental 2", carga: 30, periodo: 4 },
  { codigo: "CSB30", nome: "Introdução A Banco De Dados", carga: 60, periodo: 5 },
  { codigo: "CSG20", nome: "Análise E Projeto De Sistemas", carga: 45, periodo: 5 },
  { codigo: "CSR31", nome: "Comunicação De Dados", carga: 30, periodo: 5 },
  { codigo: "CSW30", nome: "Arquitetura E Organização De Computadores", carga: 60, periodo: 5 },
  { codigo: "EEF21", nome: "Desenho Técnico Aplicado", carga: 30, periodo: 5 },
  { codigo: "ES70G", nome: "Sociologia", carga: 45, periodo: 5 },
  { codigo: "CSE30", nome: "Engenharia De Software", carga: 60, periodo: 6 }
];


const tbody = document.querySelector("#tabela-disciplinas tbody");

function atualizarTabela() {
  tbody.innerHTML = "";
  let lastPeriodo = null;
  const ordenadas = [...disciplinas].sort((a, b) => a.periodo - b.periodo);

  ordenadas.forEach((disciplina) => {
    const tr = document.createElement("tr");

    const tdCodigo = document.createElement("td");
    tdCodigo.textContent = disciplina.codigo;
    tr.appendChild(tdCodigo);

    const tdNome = document.createElement("td");
    tdNome.textContent = disciplina.nome;
    tr.appendChild(tdNome);

    const tdCarga = document.createElement("td");
    tdCarga.textContent = disciplina.carga;
    tdCarga.classList.add("right");
    tr.appendChild(tdCarga);

    const tdPeriodo = document.createElement("td");
    tdPeriodo.textContent = disciplina.periodo !== lastPeriodo ? disciplina.periodo : "";
    tdPeriodo.classList.add("right");
    tr.appendChild(tdPeriodo);

    lastPeriodo = disciplina.periodo;
    tbody.appendChild(tr);
  });
}

document.getElementById("form-disciplina").addEventListener("submit", function (e) {
  e.preventDefault();

  const codigo = document.getElementById("codigo").value.trim();
  const nome = document.getElementById("nome").value.trim();
  const carga = parseInt(document.getElementById("carga").value);
  const periodo = parseInt(document.getElementById("periodo").value);

  if (!codigo || !nome || isNaN(carga) || isNaN(periodo)) return;

  disciplinas.push({ codigo, nome, carga, periodo });
  atualizarTabela();
  e.target.reset();
});

atualizarTabela();
