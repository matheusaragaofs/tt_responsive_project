import React from 'react';
import { FiSettings} from 'react-icons/fi'
import { Container, ScheduledInspections, AsideGraphic }  from './styles'
import { Link } from 'react-router-dom'
import HistoryEventGraph from '../Components/HistoryEventGraph'
import GraphOfGraphicContent from '../Components/GraphicContentGraph'
import GraphicAside from '../Components/AsideGraphic'
import { asideGraphicDataset } from '../Components/AsideGraphic/data'
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

        <div className="graph-action-plans-c2">GraphC2</div>

        
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

        <div className="action-plans-c5">Action Plans</div>



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
