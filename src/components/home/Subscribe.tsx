import {FC, FormEvent, useRef} from "react";

const Subscribe: FC = () => {

    const email_ref = useRef<HTMLInputElement | null>(null)

    function form_submit(e: FormEvent) {
        e.preventDefault();

        if (email_ref.current && email_ref.current.value) console.log(email_ref.current.value)
    }


    return <section className="subscribe" id="subscribe">

        <h1>Join the fun Subscribe now!</h1>

        <h2>Subscribe to our newsletter for a weekly serving of recipes, cooking tips, and exclusive insights straight
            to your inbox.</h2>


        <form onSubmit={form_submit}>

            <div className="input_box">
                <input ref={email_ref} type="email" placeholder="Email address"/>
                <button>Subscribe</button>
            </div>
        </form>


    </section>
}


export default Subscribe;