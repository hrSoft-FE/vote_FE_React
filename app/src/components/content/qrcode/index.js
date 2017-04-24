import React, { Component } from 'react'
import './index.less'
import { Link } from 'react-router'

class QRCode extends Component {
  componentDidMount () {
    let id = window.localStorage.getItem('voteId')
    this.props.getQRCode(id)
  }

  render () {
    const {qrcode} = this.props
    console.log(qrcode.path)
    const path = 'http://' + qrcode.path
    return (
      <div className='login-wrapper qrc-wrapper'>
        <div className='mask' />
        <div className='qrc-window'>
          <div className='qrc'>
            <img src={path} alt='二维码' />
          </div>
          <div className='link-box'>
            <Link to='raise'>链接</Link>
            <sapn>复制链接</sapn>
          </div>
          <Link to='raise'>
            <div className='continue-vote'>
              继续发起投票
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
export default QRCode