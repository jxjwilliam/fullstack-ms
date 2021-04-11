import React, { Component, Children } from 'react'

// https://github.com/cassiozen/ReactCasts/blob/master/episode3/src/SlideShow.js
class SlideShow extends Component {
  state = {
    total: 0,
    current: 0,
  }

  componentDidMount() {
    const { children } = this.props
    this.setState({ total: Children.count(children) })
    this.interval = setInterval(this.showNext, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  showNext = () => {
    const { current, total } = this.state
    this.setState({
      current: current < total - 1 ? current + 1 : 0,
    })
  }

  render() {
    const { children } = this.props
    const { total, current } = this.state
    const bullets = Array(total).fill('○')
    bullets[current] = '●'
    return (
      <div>
        <h4>{bullets}</h4>
        {Children.toArray(children)[current]}
      </div>
    )
  }
}

export default function () {
  const list = [
    'https://images.unsplash.com/photo-1595438309107-a51996cb63e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1525672716948-1f0bb9c49883?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1520551149954-41255a5fa237?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  ].map((img, idx) => <img src={img} key={`img_${idx}`} alt={`Bikini ${idx}`} />)
  return <SlideShow>{list}</SlideShow>
}
