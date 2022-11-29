import { List } from 'react-native-paper';
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import style from '../style/style';

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

const DayList = () => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen

  function getPriceOfTheDay(prices) {
    const tempArr = []
    for (let i = 0; i < 24; i++) {
      tempArr.push(Number(prices[i].value / 10 * 1.24).toFixed(2))
    }
    setNewPrices(tempArr)
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
        getPriceOfTheDay(temp)
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <List.Section title="">
      <List.Accordion
        title="Näytä tuntihinnat" descriptionStyle={{backgroundColor: "white"}} titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}>
        <List.Item title="00:00-01:00" description={newPrices[0]} 
        descriptionStyle={{color: 'white'}} titleStyle={{color:'white'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="01:00-02:00" description={newPrices[1]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="02:00-03:00" description={newPrices[2]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="03:00-04:00" description={newPrices[3]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="04:00-05:00" description={newPrices[4]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="05:00-06:00" description={newPrices[5]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="06:00-07:00" description={newPrices[6]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="07:00-08:00" description={newPrices[7]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="08:00-09:00" description={newPrices[8]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="09:00-10:00" description={newPrices[9]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="10:00-11:00" description={newPrices[10]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="11:00-12:00" description={newPrices[11]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="12:00-13:00" description={newPrices[12]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="13:00-14:00" description={newPrices[13]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="14:00-15:00" description={newPrices[14]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="15:00-16:00" description={newPrices[15]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="16:00-17:00" description={newPrices[16]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="17:00-18:00" description={newPrices[17]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="18:00-19:00" description={newPrices[18]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="19:00-20:00" description={newPrices[19]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="20:00-21:00" description={newPrices[20]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="21:00-22:00" description={newPrices[21]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="22:00-23:00" description={newPrices[22]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
        <List.Item title="23:00-00:00" description={newPrices[23]} descriptionStyle={{color: 'white'}}
        titleStyle={{color:'white', backgroundColor:'#808080'}} 
        style={{backgroundColor:'#808080'}}/>
      </List.Accordion>
    </List.Section>
  );
};

export default DayList;