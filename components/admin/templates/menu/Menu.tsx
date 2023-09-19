import './menu.scss'

import Link from 'next/link'
import { menu } from './data'

type Props = {}

const Menu = (props: Props) => {
  return (
    <div className='menu'>
      <div className="item">
        {menu.map(({ title, listItems }, index) => (
          <div key={index}>
            <span className='title'>{title}</span>
            {listItems.map((item, i) => (
              <Link key={i} className='listItem' href={item.url}>
                <span><item.icon size={18} /></span>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>

        ))}

      </div>
    </div>
  )
}

export default Menu