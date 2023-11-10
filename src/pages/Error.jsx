import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Error() {
   return (
      <>
         <Nav />
            <div className="text-white text-3xl min-h-full text-center">
               <h1>Error!</h1>
            </div>
         <Footer />
      </>
     
   )
}