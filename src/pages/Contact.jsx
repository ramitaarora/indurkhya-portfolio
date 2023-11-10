import Header from '../components/Header';

export default function Contact() {
    const onSubmit = (event) => {
        event.preventDefault();
        let regex = new RegExp("^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$");
        let valid = regex.test(event.target[1].value);
        if (valid) {
            window.alert("Your message has been sent!")
            location.reload();
        } else {
            window.alert("Please enter a valid email.")
        }
    }

    return (
        <div id="body-style" className="min-w-screen md:m-5 flex flex-column justify-center align-center">
            <Header header='Contact' />

            <div id="contact-form" className="md:my-3 p-3 md:m-auto overflow-hidden border rounded-lg">
                <form onSubmit={() => onSubmit(event)}>
                    <div id="form-input" className="flex flex-column justify-between md:m-3">
                        <label htmlFor="name" className="text-white">Name: </label>
                        <input type="text" name="name" className="p-2 min-w-max" size="40" required></input>          
                    </div>

                    <div id="form-input" className="flex flex-column justify-between md:m-3">
                        <label htmlFor="email" className="text-white">Email: </label>
                        <input type="text" name="email" className="p-2 min-w-max" size="40" required></input>          
                    </div>
                   
                    <div id="form-input" className="flex flex-column justify-between md:m-3">
                        <label htmlFor="name" className="text-white">Message: </label>
                        <textarea placeholder="Enter your message here..." cols="39" rows="5" className="p-2 min-w-max" required></textarea>       
                    </div>

                    <div id="form-input" className="flex flex-column m-auto">
                        <input type="submit" value="Submit" className="text-white border rounded-lg m-auto p-2 hover:bg-slate-900 "></input>
                    </div>
                    

                </form>
            </div>
        </div>
    )
}