
import './Contact.css'

const Contact = () => {
    return (
        <form className='formContainer'>
            <h3>
                Entre em contanto.
            </h3>
            <p>
                Estamos aqui para transformar suas ideias em realidade. Se você tem um projeto em mente, deseja discutir uma colaboração, ou simplesmente quer saber mais sobre nossos serviços, preencha o formulário abaixo. Ficaremos felizes em ajudar e responderemos o mais rápido possível.
            </p>
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