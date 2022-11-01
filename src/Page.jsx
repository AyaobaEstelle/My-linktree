import { Fragment } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Link } from './components/Link'
import { Tech } from './components/Tech'
import './Page.css'

const Page = () => {
  return (
    <Fragment>
      <Header />
      <section className="Links">
        <Link href="https://training.zuri.team/" title="zuri team" id="btn__zuri">
          Zuri Team
        </Link>
        <Link href="http://books.zuri.team" title="Books for design and coding" id="books">
          Zuri Books
        </Link>
        <Link href="https://books.zuri.team" title="Python books for beginners" id="book__python">
          Python Books
        </Link>
        <Link href="https://background.zuri.team" title="Backgroun checks on coders" id="pitch">
          Background Checks
        </Link>
        <Link href="https://books.zuri.team/design-rules " title="Free design books by Zuri" id="book__design">
          Design Books
        </Link>
      </section>
      <Tech />
      <Footer />
    </Fragment>
  )
}

export default Page


