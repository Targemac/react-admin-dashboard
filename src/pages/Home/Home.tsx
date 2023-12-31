import ChartBox from '../../components/chartBox/ChartBox'
import TopBox from '../../components/topBox/TopBox'
import './home.scss';
import { chartBoxUser, chartBoxConversion, chartBoxRevenue, chartBoxProduct, barChartBoxVisit, barChartBoxRevenue } from '../../data';
import BarChartBox from '../../components/BarChartBox/BarChartBox';

const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2"><ChartBox  { ...chartBoxUser } /></div>
            <div className="box box5"><ChartBox { ...chartBoxProduct } /></div>
            <div className="box box4">Box4</div>
            <div className="box box3"><ChartBox { ...chartBoxRevenue } /></div>
            <div className="box box6"><ChartBox { ...chartBoxConversion } /></div>
            <div className="box box7">Box7</div>
            <div className="box box8"> <BarChartBox { ...barChartBoxVisit } /> </div>
            <div className="box box9"> <BarChartBox { ...barChartBoxRevenue } /> </div>
        </div>
    )
}

export default Home
