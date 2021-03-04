import React from 'react';
import { Container, HistoryEvent ,ScheduledInspections, AsideGraphic, AsideContent, AsideActions, AsideActionsContent, C3Graphic, C4Graphic, C3Section}  from './styles'
import { FiSettings, FiChevronDown, FiCircle} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import HistoryEventGraphic from '../Components/HistoryEventGraph'
import GraphOfGraphicContent from '../Components/GraphicContentGraph'
import C2Graph from '../Components/C2Graph'
import { historyEventGraphDataset} from '../Components/HistoryEventGraph/data'
import {C2Dataset} from '../Components/C2Graph/data'
import {  datasetOfGraphOfGraphicContent } from '../Components/GraphicContentGraph/data'

import PeopleList from '../Components/PeopleList/index'
const App:React.FC = () => {
  return (
      <Container>
          <NavBar/>
        <HistoryEvent>
            <div>
              <h1>Histórico de Eventos</h1>
              <span>
                <form action="">
                  <FiChevronDown />
                  <select name="time">
                    <option value="diario">diário</option>
                    <option value="mensal">mensal</option>
                    <option value="anual">anual</option>
                  </select>
                </form>
                <Link to="#">
                  <FiSettings />
                </Link>
              </span>
            </div>
            <section>
              <HistoryEventGraphic data={historyEventGraphDataset} />
            </section>

            <span>
              <span>
                <FiCircle color="#7FC008" /> <p>Inspeções realizadas</p>{' '}
              </span>
              <span>
                <FiCircle color="#DB8C28" /> <p>Planos de ação criados</p>{' '}
              </span>
            </span>
          </HistoryEvent>

     

      {/* #C2  */}
        <AsideGraphic>
              <div>
                <span>
                  <strong>Planos de ação</strong>
                  <p>visão geral</p>
                </span>
                <Link to="#">
                  <FiSettings />
                </Link>
              </div>
              <section>
                <C2Graph data={C2Dataset} />
              </section>
            </AsideGraphic>

       
      <C3Section>
        <section>
        <C3Graphic>
          <header>
                <span>
                  <strong>Inspeções</strong>
                  <p>status do dia</p>
                </span>
                <Link to="#">
                  <FiSettings />
                </Link>
              </header>
              <section>
                <GraphOfGraphicContent data={datasetOfGraphOfGraphicContent} />
              </section>
              <div>
                <span>
                  <span>
                    <FiCircle color="#7FC008" />
                    <p>Realizadas - 58.6%</p>
                  </span>
                  <span>
                    <FiCircle color="#DB8C28" />
                    <p>Em aberto - 34.9%</p>
                  </span>
                  <span>
                    <FiCircle color="#EB5757" /> <p>Não Realizadas - 6.5%</p>
                  </span>
                </span>

                <span className="averageTimeOne">
                  <strong>Média de tempo</strong>
                  <span>
                    <p>Hoje</p> <p>10 min</p>
                  </span>
                  <span>
                    <p>Últimos 7 dias</p> <p>10 min</p>
                  </span>
                  <span>
                    <p>Últimos 30 dias</p> <p>10 min</p>
                  </span>
                </span>
              </div>


            
            </C3Graphic>

         <C4Graphic>
            <header>
                <span>
                  <strong>Planos de ação</strong>
                  <p>status do dia</p>
                </span>
                <Link to="#">
                  <FiSettings />
                </Link>
              </header>
              <section>
                <GraphOfGraphicContent data={datasetOfGraphOfGraphicContent} />
              </section>
              <div>
                <span>
                  <span>
                    <FiCircle color="#7FC008" />
                    <p>Criados - 58.6%</p>
                  </span>
                  <span>
                    <FiCircle color="#DB8C28" />
                    <p>Finalizados - 34.9%</p>
                  </span>
                  <span>
                    <FiCircle color="#EB5757" /> <p>Em aberto - 6.5%</p>
                  </span>
                </span>

                <span className="averageTimeTwo">
                  <strong>Média de tempo</strong>
                  <span>
                    <p>Hoje</p> <p>10 min</p>
                  </span>
                  <span>
                    <p>Últimos 7 dias</p> <p>10 min</p>
                  </span>
                  <span>
                    <p>Últimos 30 dias</p> <p>10 min</p>
                  </span>
                </span>
              </div>
              <Link to="#">
                <p>visualizar detalhes</p>
              </Link>


        </C4Graphic> 
        </section>

        </C3Section>
       
        
      

        <AsideContent>
              <section>
                <span>
                  <strong>Planos de ação</strong>
                  <p>atualizações</p>
                </span>
                <Link to="#">
                  <FiSettings />
                </Link>
              </section>
              <input type="text" />

              <form action="">
                <FiChevronDown />
                <select name="finished">
                  <option value="diario">pendente</option>
                  <option value="mensal">realizada</option>
                </select>
              </form>
              <AsideActions>
                  <AsideActionsContent >
                    <div>
                      <strong>Microsoft Actions</strong>
                      <span>
                        <p>Realizado</p>
                      </span>
                    </div>

                    <div>
                      <p>responsável:Matheus Aragão</p>
                      <span>08:32 04/03/2021</span>
                    </div>
                  </AsideActionsContent>
                  <AsideActionsContent >
                    <div>
                      <strong>Microsoft Actions</strong>
                      <span>
                        <p>Realizado</p>
                      </span>
                    </div>

                    <div>
                      <p>responsável:Matheus Aragão</p>
                      <span>08:32 04/03/2021</span>
                    </div>
                  </AsideActionsContent>
              </AsideActions>

            </AsideContent>




        <ScheduledInspections>
            <section>
              <h1>Inspeções Agendadas</h1>
              <form action="">
                <FiChevronDown />
                <select name="time">
                  <option value="diario">diário</option>
                  <option value="mensal">mensal</option>
                  <option value="anual">anual</option>
                </select>
              </form>
            </section>
            <input placeholder="Pesquise" />
            <PeopleList />
          </ScheduledInspections>

      </Container> 

  )
}

export default App;
