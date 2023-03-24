import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment/moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import Cryptocurrencies from './Cryptocurrencies'

const {Text, Title} = Typography
const {Option} = Select

const News = ({simplified}) => {
  const { data } = useGetCryptoNewsQuery({newsCategory:"Cryptocurrency", count: simplified ? 10 : 100})

  // console.log(cryptoNews)
  console.log(data)

  return (
    <div>News</div>
  )
}

export default News