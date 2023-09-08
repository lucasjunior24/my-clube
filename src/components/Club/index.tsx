
import { ClubListContainer, ClubList } from './styled'
import { data } from '../../lib/club'

export function Clubs() {

  return (
    <ClubListContainer>
      <h1>Meu histórico</h1>

      <ClubList>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Descrição</th>
              <th>Tempo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cycle, i) => (
              <tr key={i}>
                <td>{cycle.name}</td>
                <td>{cycle.description}</td>
                <td>{cycle.available}</td>
                <td>{cycle.available ? 'Disponivel' : 'Ocupado'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ClubList>
    </ClubListContainer>
  )
}
