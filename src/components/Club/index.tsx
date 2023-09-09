
import { ClubListContainer, ClubList, CardContainer, Card, CardImage } from './styled'
import { data } from '../../lib/club'

export function Clubs() {

  return (
    <ClubListContainer>
      <div>
        <h1>Blocos do Clube</h1>
        <p>Total disponível {data.filter(b => b.available).length}</p>
      </div>
      <ClubList>

        {data.map((cycle, i) => (
          <CardContainer key={i}>
            <CardImage alt='' src='https://markstewart.com/wp-content/uploads/2015/06/M-640-A.jpg' />
            <Card>
              <h4>{cycle.name}</h4>
              <p>
              {cycle.description}
              </p>
              <strong data-available={cycle.available}>
              {cycle.available ? 'Disponível' : 'Ocupado'}
              </strong>
            </Card>
          </CardContainer>
        ))}

      </ClubList>
    </ClubListContainer>
  )
}
