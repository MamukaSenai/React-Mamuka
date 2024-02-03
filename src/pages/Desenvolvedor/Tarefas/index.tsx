import './style.css';
import React, { useEffect, useState } from 'react';
import api from '../../../utils/api';

interface UserData {
  id: number;
  nome_tarefa: string;
  status_tarefa: string;
  data_inicio: string;
  data_conclusao: string;
  dev: any;

}

export default function Tarefas() {
  const [dadosTarefas, setDados] = useState<UserData[]>([]);
  const [filtroStatus, setFiltroStatus] = useState('');
  // const [filtroTermo, setFiltroTermo] = useState('');

  const getStatusClassName = (status: string) => {
    switch (status.toLowerCase()) {
      case 'cancelado':
        return 'status-cancelado';
      case 'andamento':
        return 'status-andamento';
      case 'concluido':
        return 'status-concluido';
      default:
        return '';
    }
  };

  useEffect(() => {
    api.get('/tarefas')
      .then(response => {
        setDados(response.data);
      })
      .catch(error => {
        console.error("A conexão falhou =/", error);
      });
  }, []);
  // Função para aplicar os filtros
  const filtrarDados = () => {
    return dadosTarefas.filter(item =>
      item.status_tarefa.toLowerCase().includes(filtroStatus.toLowerCase()) //&&
      // (item.projeto.toLowerCase().includes(filtroTermo.toLowerCase()) ||
      //   item.responsavel.toLowerCase().includes(filtroTermo.toLowerCase()))
    );
  };

  const dadosFiltrados = filtrarDados();

  return (
    <div>
      <div className='filtro-status-tarefa' id='filtro-da-tarefa'>
         <label>Filtrar por Status:</label>
      <select
        value={filtroStatus}
        onChange={(e) => setFiltroStatus(e.target.value)}
      >
        <option value="">Todos</option>
        <option value="Cancelado">Cancelado</option>
        <option value="Andamento">Andamento</option>
        <option value="Concluido">Concluído</option>
  
        </select>
      </div>
      <table className='tabela-geral-tarefa'>
        <thead className='header-tabela-tarefa'>
          <tr>
            {/* <th>Grupo</th> */}
            <th>Tarefa</th>
            <th>Data inicial</th>
            <th>Data Final</th>
            <th>Status</th>
            <th>Responsável</th>
          </tr>
        </thead>
        <tbody className='corpo-tabela-tarefa'>
          {dadosFiltrados.map(item => (
            <tr key={item.id}>
              {/* <td>{item.grupo}</td> */}
              <td>{item.nome_tarefa}</td>
              <td>{(item.data_conclusao).slice(0,10)}</td>
              <td>{(item.data_inicio).slice(0,10)}</td>
              <td className={getStatusClassName(item.status_tarefa)}>{item.status_tarefa}</td>
              <td>{item.dev && item.dev.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
