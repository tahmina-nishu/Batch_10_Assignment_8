
import { useEffect } from "react";

const Contact = () => {

    useEffect(() => {
        document.title = "Contact | Gadget-Haven";
      }, []);
    return (
        <div>
            <h2>this is contact page</h2>
        </div>
    );
};

export default Contact;