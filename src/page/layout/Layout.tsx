import { Props } from '../props/Props';
import NavigationBar from '../component/NavigationBar'
import Footer from '../component/Footer'

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <div>
                <NavigationBar/>
            </div>
            <div className='min-h-[80vh] pb-10'>
                {children}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;
