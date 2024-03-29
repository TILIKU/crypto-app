import React, {useState} from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment/moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies'



const {Text, Title} = Typography
const {Option} = Select
const demoImage  = "https://images.livemint.com/img/2023/01/15/1600x900/crypto_1672800010904_1673797012152_1673797012152.jpg"

const News = ({simplified}) => {
  const [newsCategory, setnewsCategory] = useState("Cryptocurrencies")
  const { data:cryptoNews } = useGetCryptoNewsQuery({newsCategory, count: simplified ? 6 : 12})
  const {data} = useGetCryptosQuery(100)

  if(!cryptoNews?.value) return "loading..."

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder="select a crypto"
            optionFilterProp='children'
            onChange={(value) => setnewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) > 0}
          >
            <Option value="Cryptocurrencies">Cryptocurrencies</Option>
            {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews?.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target="_blank" rel='noreferrer'>
              <div className='news-image-container'>
                  <Title className='news-title' level={4}>{news.name}</Title>
                  <img style={{maxWidth:'200px', maxHeight:"100px"}} alt='news' src={news?.image?.thumbnail?.contentUrl || demoImage} />
                </div>
                <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                <div className='provider-container'>
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(news.dataPulbished).startOf("ss").fromNow()}</Text>
                </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News