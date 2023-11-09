import Header from '../components/Header';

export default function Contact() {
    return (
        <div id="body-style" className="min-w-screen m-5 flex flex-column justify-center align-center">
            <Header header='Contact' />

            <div id="contact-form" className="my-3 p-3 w-1/2 m-auto overflow-auto border rounded-lg">
                <form>
                    <div id="form-input" className="flex flex-row justify-between m-3">
                        <label for="name" className="text-white">Name: </label>
                        <input type="text" name="name" className="p-2 min-w-max" size="40"></input>          
                    </div>

                    <div id="form-input" className="flex flex-row justify-between m-3">
                        <label for="email" className="text-white">Email: </label>
                        <input type="text" name="email" className="p-2 min-w-max" size="40"></input>          
                    </div>
                   
                    <div id="form-input" className="flex flex-row justify-between m-3">
                        <label for="name" className="text-white">Message: </label>
                        <textarea placeholder="Enter your message here..." cols="39" rows="5" className="p-2 min-w-max"></textarea>       
                    </div>

                    <div id="form-input" className="flex flex-row m-auto">
                        <input type="submit" value="Submit" className="text-white border rounded-lg m-auto p-2 hover:bg-slate-900 "></input>
                    </div>
                    

                </form>
            </div>
        </div>
    )
}