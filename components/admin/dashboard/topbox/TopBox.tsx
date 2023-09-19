import './topBox.scss'

import Image from 'next/image'
import { topDealUsers } from './data'

type Props = {}

const TopBox = (props: Props) => {
  return (
    <div className='topBox'>
      <h1>Top Deals</h1>
      <div className="list">
        {
          topDealUsers.map((user, index) => (
            <div key={user.id} className="listItem">
              <div className="user">
                <Image
                  className='avatar'
                  width={40}
                  height={40}
                  src={user.img}
                  alt={user.username} />
                <div className="userTexts">
                  <div className="username">{user.username}</div>
                  <div className="email">{user.email}</div>
                </div>

              </div>
              <span className='amount'>$ {user.amount}</span>
            </div>
          ))}
      </div>
    </div>
  )
}

export default TopBox