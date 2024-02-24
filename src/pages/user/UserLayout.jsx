import propTypes from 'prop-types'
import SearchAppBar from '../../components/UI/Navbar'
// import Navbar from '../../Components/Navbar'

const UserLayout = ({children}) => {
    return (
        <div style={{width: "100%", marginTop: "0%"}}>
            {/* <header>
                <SearchAppBar/>
            </header> */}
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </div>
    )
}

UserLayout.propTypes = {
    children : propTypes.node.isRequired
}

export default UserLayout