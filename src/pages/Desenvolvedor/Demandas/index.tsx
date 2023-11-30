// src/components/DesenvolvedorDemandas.tsx
import './style.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


interface UserData {
  id: number;
  grupo: string;
  nome: string;
  cronograma: string;
  status: string;
  responsavel: string;
}

export default function DesenvolvedorDemandas() {
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    // Substitua a URL da API pela sua
    axios.get('https://api.example.com/demandas')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter dados da API:', error);
      });
  }, []);

  return (
    <div>
      {/* <h2>Tabela de Demandas</h2> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Grupo</th>
            <th>Nome</th>
            <th>Cronograma</th>
            <th>Status</th>
            <th>Responsável</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    1230320413
                </td>
                <td>
                    testestestestestestestes
                </td>
                <td>
                    Jose
                </td>
                <td>
                    02/06/2025
                </td>
                <td className='status-cancelado'>
                    Cancelado
                </td>
                <td>
                    Roberto
                </td>
            </tr>
            <tr>
                <td>
                    1230320413
                </td>
                <td>
                    testestestestestestestes
                </td>
                <td>
                    Jose
                </td>
                <td>
                    02/06/2025
                </td>
                <td>
                    Andamento
                </td>
                <td>
                    Roberto
                </td>
            </tr>
            <tr>
                <td>
                    1230320413
                </td>
                <td>
                    testestestestestestestestestes
                </td>
                <td>
                    Jose
                </td>
                <td>
                    02/06/2025
                </td>
                <td>
                    Andamento
                </td>
                <td>
                    Roberto
                </td>
            </tr>
            <tr>
                <td>
                    1230320413
                </td>
                <td>
                    testes
                </td>
                <td>
                    Jose
                </td>
                <td>
                    02/06/2025
                </td>
                <td>
                    Andamento
                </td>
                <td>
                    Roberto
                </td>
            </tr>
            <tr>
                <td>
                    1230320413
                </td>
                <td>
                    testes
                </td>
                <td>
                    Jose
                </td>
                <td>
                    02/06/2025
                </td>
                <td className='status-concluido'>
                    Concluido
                </td>
                <td>
                    Roberto
                </td>
            </tr>
            <tr>
                <td>
                    1230320413
                </td>
                <td>
                    testes
                </td>
                <td>
                    Jose
                </td>
                <td>
                    02/06/2025
                </td>
                <td>
                    Andamento
                </td>
                <td>
                    Roberto
                </td>
            </tr>
            <tr>
                <td>
                    1230320413
                </td>
                <td>
                    testes
                </td>
                <td>
                    Jose
                </td>
                <td>
                    02/06/2025
                </td>
                <td className='status-andamento'>
                    Andamento
                </td>
                <td>
                    Roberto
                </td>
            </tr>
          {/* {userData.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.grupo}</td>
              <td>{user.nome}</td>
              <td>{user.cronograma}</td>
              <td>{user.status}</td>
              <td>{user.responsavel}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}
