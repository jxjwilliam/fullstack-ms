import React, { useState, useEffect } from 'react'
import { DataPrint } from '../../helpers/utils'

export default function () {
  const [news, setNews] = useState([])
  const key = 'a49a93efcd5f29a38e823c386cbf3257'

  useEffect(() => {
    const url = `https://gnews.io/api/v3/top-news?token=${key}`
    fetch(url)
      .then(data => data.json())
      .then(news => setNews(news))
      .catch(e => console.error(e))
  }, [])

  return <DataPrint data={news} />
}
