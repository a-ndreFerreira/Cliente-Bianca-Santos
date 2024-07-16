
import './Contact.css'

const Contact = () => {
    return (
        <form className='formContainer'>
            <label>
                <span>Nome</span>
                <input type="text" />
            </label>
            <label>
                <span>Email</span>
                <input type="email" />
            </label>
            <label>
                <span>Assunto</span>
                <input type="text" />
            </label>
            <label>
                <span>Mensagem</span>
                <textarea name="" id=""></textarea>
            </label>
            <input type='submit' />
        </form>
    )
}

export default Contact