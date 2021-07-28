import { useEffect, useState } from "react";
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Game = (props) => {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100));
    const [chance, setChance] = useState(10);
    const [inputValue, setInputValue] = useState('');
    const [help, setHelp] = useState("");
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);

    const type = (event) => {
        setInputValue(event.target.value);
    }

    console.log(number);

    const answer = () => {
        setInputValue("");
        if (number == inputValue) {
            setModal2(!modal2);
            setHelp("");
        }
        else {
            if (chance == 1) {
                setModal1(!modal1)
                setChance(chance - 1);
                setHelp("");
            } else {
                setChance(chance - 1);
                if (number > inputValue) {
                    setHelp("Siz o'ylagan son kichik");
                } else {
                    setHelp("Siz o'ylagan son katta");
                }
            }
        }
    }

    const newGame = (a) => {
        setNumber(Math.floor(Math.random() * 100));
        setChance(10);
        if (a == false) { setModal1(!modal1) } else { setModal2(!modal2) }
    }

    const {
        className
    } = props;

    return <div className="container text-center">

        <div>
            <Modal isOpen={modal1} className={`${className} loose`} backdrop={"static"}>
                <ModalBody>
                    <img src="./sad.png" alt="?" />
                    Biz sizni g’olib bo’lishingizni xohlagandik. Lekin yutqazdingiz!
                    <button className="btn btn-primary" onClick={() => newGame(false)}>Yangi o`yin</button>
                </ModalBody>
            </Modal>
        </div>

        <div>
            <Modal isOpen={modal2} className={`${className} win`} backdrop={"static"}>
                <ModalBody>
                    <img src="./happy.png" alt="?" />
                    Tabriklaymiz. O’yin g’olibi bo’ldingiz!
                    <button className="btn btn-primary" onClick={() => newGame(true)}>Yangi o`yin</button>
                </ModalBody>
            </Modal>
        </div>

        <header className="text-end">
            <img src="./algorismic-logo.png" alt="?" />
        </header>
        <h1 className="display-3 text-white fw-bold my-5">{chance} ta imkoniyatingiz bor</h1>

        <div className="row justify-content-center pt-5">
            <div className="col-12 col-md-4 pt-5 text-center">
                <Input type="text" placeholder="Kompyuter o’ylagan sonni toping" className="p-3 mt-3" onChange={type} value={inputValue} />
                <Button color="primary" className="fw-bold mt-5 px-5 py-2" onClick={answer}>Topdim</Button>
                <p className="fs-3 text-white fw-bold">
                    {help}
                </p>
            </div>
        </div>
    </div>
}

export default Game;