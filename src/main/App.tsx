import React from 'react';
import { FiSettings, FiChevronDown} from 'react-icons/fi'
import { Container, ScheduledInspections, AsideGraphic, AsideContent, AsideActions, AsideActionsContent}  from './styles'
import { Link } from 'react-router-dom'
import HistoryEventGraph from '../Components/HistoryEventGraph'
import GraphOfGraphicContent from '../Components/GraphicContentGraph'
import C2Graph from '../Components/C2Graph'
import {C2Dataset} from '../Components/C2Graph/data'
import { historyEventGraphDataset} from '../Components/HistoryEventGraph/data'
import {  datasetOfGraphOfGraphicContent } from '../Components/GraphicContentGraph/data'

import PeopleList from '../Components/PeopleList/index'
const App:React.FC = () => {
  return (
      <Container>
        <nav>Nav</nav>
        <div className="history-event-c1">
          <span>Painel de controle</span>
          <div>
            <HistoryEventGraph data={historyEventGraphDataset}/>
          </div>
        </div>

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

        
        <div className="graph-inspections-c3">GraphC3
         <div>
        <GraphOfGraphicContent data={datasetOfGraphOfGraphicContent}/>
        </div>
        </div>
        

        <div className="graph-action-plans-c4">GraphC4
        <div>
        <GraphOfGraphicContent data={datasetOfGraphOfGraphicContent}/>
        </div>
        </div>

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
                {/* <FiChevronDown /> */}
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
