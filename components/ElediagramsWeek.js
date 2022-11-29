import { Text, View, Dimensions, ScrollView} from 'react-native';
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import { LineChart } from "react-native-chart-kit";
import { ActivityIndicator } from 'react-native-paper';
import styles from '../style/style';
import Weeklist from './WeekList';

const APIKEY = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const documentType = '&documentType=A44&' //mitä tietoaineistoa luetaan
const in_Domain = 'in_Domain=10YFI-1--------U&' // maakoodi
const out_Domain = 'out_Domain=10YFI-1--------U&'
const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate()
const sevenDaysAgoDay= (new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).getDate()
const sevenDaysAgoMonth= (new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).getMonth() + 1
const sevenDaysAgoYear= (new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).getFullYear()
const StartTime = '0000'
const EndTime = '0000'
const start = 'periodStart=' + sevenDaysAgoYear + sevenDaysAgoMonth + sevenDaysAgoDay + StartTime + '&'
const end = 'periodEnd=' + year + month + day + EndTime

const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain + out_Domain
  + start + end
const time = new Date().getHours() // current time, tunti. Toimii myös seuraavan tunnin hinnanhakua varten

export default function ElediagramsWeek() {
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen

  function getPriceOfTheWeek(prices) {
    const tempArr = []
    for (let i = 0; i < (prices.length-24); i++) { //jostain syystä prices-taulussa on yksi vuorukausi enemmän
      tempArr.push(Number(prices[i].value / 10 * 1.24).toFixed(2))
    }
    setNewPrices(tempArr)
  }

  const priceOfTheWeek = () => {
    if (newPrices.length) {
      return (
        <LineChart
          data={{
            labels: [sevenDaysAgoDay+'.'+sevenDaysAgoMonth, (sevenDaysAgoDay+1)+'.'+sevenDaysAgoMonth,  
            (sevenDaysAgoDay+2)+'.'+sevenDaysAgoMonth, (sevenDaysAgoDay+3)+'.'+sevenDaysAgoMonth, 
            (sevenDaysAgoDay+4)+'.'+sevenDaysAgoMonth, (sevenDaysAgoDay+5)+'.'+sevenDaysAgoMonth, 
            (sevenDaysAgoDay+6)+'.'+sevenDaysAgoMonth, day+'.'+month], 
            datasets: [
              {
                data: newPrices.map(item => {
                  return parseInt(item)
                })
              }
            ]
          }}
          width={Dimensions.get("window").width - 10} // from react-native
          height={220}
          yAxisInterval={1} // optional, defaults to 1
          fromZero='true' //näyttää y-akselin nollasta asti
          chartConfig={chartConfig}
          bezier
          style={{
            paddingRight:35,
            borderRadius: 16
          }}
        />
      )
    }
  }

  const chartConfig = {
    backgroundColor: "purple",
    backgroundGradientFrom: "#2B2B2B",
    backgroundGradientTo: "#808080",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 195, 0, ${opacity})`, //viivojen väri
    labelColor: (opacity = 1) => `rgba(255, 195, 0, ${opacity})`, //labeleiden väri
    propsForDots: {
      strokeWidth: "1",
      stroke: "black" //palleroiden väri,
    }
  }

  useEffect(() => {
    fetch(URL, {
      headers: {
        'method': 'GET',
        'Content-Type': 'application/xml',
      },
    })
      .then(res => res.text())
      .then(data => {
        let json = new XMLParser().parseFromString(data);
        const temp = json.getElementsByTagName('price')
        const temp2 = json.getElementsByTagName('start')
        setNewPrices([])
        getPriceOfTheWeek(temp)
        //seuraava hakee taulukon jokaiselle pistelle tarkan ajan,
        // ja hinnan
        //tää pitää siirtää omaan funktioon joka sit näyttää nuo,
        //kun pistettä klikkaa
        //console.log(temp2[0].value) //tällä saa ulos ekan pisteen pointsDaym ja kellonaika
        let pointsYear = (temp2[0].value).substring(0,4)
        let pointsMonth = (temp2[0].value).substring(5,7)
        let pointsDay = (temp2[0].value).substring(8,10)
        let pointsHour = (temp2[0].value).substring(11,16)
        let pointPrice = temp[0].value
        let pointTime = pointsDay + '.' + pointsMonth + '.' + pointsYear + ' ' + pointsHour
       /*  console.log('pointTime: ' + pointTime)
        console.log('pointPrice: ' + pointPrice) */
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <View style={styles.square}>
      <ScrollView>
        <Text style={styles.title}>Sähkön hintakehitys (snt/kWh,sis. Alv 24%) </Text>
        <Text style={styles.text}>Viimeisen vuorokauden aikana</Text>
        {priceOfTheWeek()?priceOfTheWeek() : <ActivityIndicator size="large" color="#ffffff"/>}
        <Weeklist />
      </ScrollView>
    </View>
  )
}