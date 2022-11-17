import { useState , useEffect} from 'react'
import './networks.css'

import { Header } from '../../components/Header'
import { Input } from '../../components/input'
import { MdAddLink } from 'react-icons/md'

import { db } from "../../services/firebaseConnection";
import { 
    setDoc,
    doc,
    getDoc
} from "firebase/firestore";

import { toast } from "react-toastify";


export default function Networks(){

    const [github, setGithub] = useState("");
    const [instagram, setInstagram] = useState("");
    const [linkedin, setLinkedin] = useState("");

    useEffect(() => {

        function loadLinks(){
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
            .then((snapshot) => {


                if(snapshot.data() !==  undefined){
                    setGithub(snapshot.data().github)
                    setInstagram(snapshot.data().instagram)
                    setLinkedin(snapshot.data().linkedin)
                }


            })
        }

        loadLinks();


    }, [])


    function handleSave(e){
        e.preventDefault();

        setDoc(doc(db, "social", "link"), {
            github: github,
            instagram: instagram,
            linkedin: linkedin,
        })
        .then(() => {
            toast.success("Salvo com sucesso!")
        })
        .catch((error) => {
            toast.error("Erro! Tente novamente")
        })
    }

    return(
        <div className='admin-container'>
            <Header/>

            <h1 className='title-social'>Suas redes sociais</h1>

            <form 
            className='form' onSubmit={handleSave}
            >
                <label className='label'>Link do Github</label>
                <Input
                placeHolder="Digite a url do Github..."
                value={github}
                onChange={(e) => setGithub(e.target.value) }
                />

                <label className='label'>Link do Instagram</label>
                <Input
                placeHolder="Digite a url do Instagram..."
                value={instagram}
                onChange={(e) => setInstagram(e.target.value) }
                />

                <label className='label'>Link do LinkedIn</label>
                <Input
                placeHolder="Digite a url do LinkedIn..."
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value) }
                />

                <button 
                type="submit" className='btg-register'
                >
                    Salvas Links <MdAddLink size={24} color="#fff"/>
                </button>
            </form>
            
            



        </div>
    )
}