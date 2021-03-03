import React from 'react';
import { Container, ScheduledInspections }  from './styles'
import HistoryEventGraph from '../Components/HistoryEventGraph'
import { historyEventGraphDataset} from '../Components/HistoryEventGraph/data'
import GraphOfGraphicContent from '../Components/GraphicContentGraph'
import {  datasetOfGraphOfGraphicContent } from '../Components/GraphicContentGraph/data'
import PeopleList from '../Components/PeopleList/index'
const App:React.FC = () => {
  return (

    <Container>
      <nav className="navbar"></nav>
      <main >
        <header>
          <p>Painel de controle</p>
        </header>
        <div className="main-graphic">
        <HistoryEventGraph data={historyEventGraphDataset}/>
        </div>
        <div className="graphic-content">
            <GraphOfGraphicContent  data ={datasetOfGraphOfGraphicContent}/>
            <GraphOfGraphicContent data ={datasetOfGraphOfGraphicContent}/>
        </div>
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
            <input placeholder='Pesquise'/>
            <PeopleList />
          </ScheduledInspections>
      </main>
      <aside className="aside">
        <div className="graphic-aside">'</div>
        <div className="action-plans"></div>
      </aside>


    </Container>
  )
}

export default App;
