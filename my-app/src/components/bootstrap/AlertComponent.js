import { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

function AlertComponent({searchStatus}) {
    const [show, setShow] = useState(false)

    let variant, message

    // Detecta se a mensagem de erro precisa ser mostrada ou não
    useEffect(() => {
        if (searchStatus === 1 || searchStatus === 2) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [searchStatus])

    // Muda a mensagem de erro de acordo com o tipo desse erro
    switch (searchStatus) {
        case 1:
            variant = 'warning'
            message = 'Search must not be empty.'
            break
        case 2:
            variant = 'danger'
            message = 'No results found.'
            break
        default:
            variant = 'success'
            message = ''
            break
    }

    return (
        <>
            <Alert show={show} variant={variant}>
                <Alert.Heading>Search error</Alert.Heading>
                <p>
                    {message}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close
                    </Button>
                </div>
            </Alert>
        </>
  )
}

export default AlertComponent